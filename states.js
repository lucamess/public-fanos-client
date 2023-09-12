import { atom } from "recoil"


export const currUserState = atom({
	key: "currUser",
	default: {
		loaded: false,
	},
})

/**
 * NO USE FOR THE BELOW STATES
 * FEEL FREE TO REMOVE THEM
 *  **/

export const blogListState = atom({
	key: "blogList",
	default: {
		page: 0,
		items: [],
	},
})

export const questionListState = atom({
	key: "questionList",
	default: {
		page: 0,
		items: [],
	}
})

export const commentListState = atom({
	key: "commentList",
	default: {
		page: 0,
		items: [],
	}
})



