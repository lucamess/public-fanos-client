import { sleep } from "src/utils"
import { axiosInstance } from "src/config"

const defaultLimit = 4

const handleResponse = res => {
	if(res.data.success == true) {
		return res.data.results
	} else {
		console.log("[-] error from fanos server:", res.data.message, res.data.errorList)
		throw { message: res.data.message, errorList: res.data.errorList }
	}
}

const getItemByText = (url) => (query, page) => {
	return axiosInstance.post(url, {
		searchText: query?.searchText,
		limit: defaultLimit,
		page, 
	})
		.then(sleep(100))
		.then(handleResponse)
}

const getItemById = (url) => (id) => {
	return axiosInstance.post(url, {
		id
	})
		.then(sleep(100))
		.then(handleResponse)
}


export const getBlogById = getItemById("blog/get-by-id")
export const getQuestionById = getItemById("question/get-by-id")
export const getBlogByText = getItemByText("blog/get-by-text")
export const getQuestionByText = getItemByText("question/get-by-text")
export const getCommentByQuestionId = (query, page) => {
	return axiosInstance.post("comment/get-by-question-id", {
		questionId: query.questionId,
		limit: defaultLimit,
		page, 
	})
		.then(sleep(500))
		.then(handleResponse)
}

export const registerUser = (user) => {
	return axiosInstance.post("user/register", user)
		.then(sleep(500))
		.then(handleResponse)
}

const addItem = (url) => (item) => {
	return axiosInstance.post(url, item)
		.then(sleep(2000))
		.then(handleResponse)
}

export const addBlog = addItem("blog/add")
export const addQuestion = addItem("question/add")
export const addComment = addItem("comment/add")

