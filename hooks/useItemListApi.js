import { useState } from "react"

const stateIntial = {
	page: 1, items: [],
}

// **********************
// The load more function is temporarily disabled !!
// **********************

const useItemListApi = (getFn, handleError) => {
	const [itemList, setItemList] = useState(stateIntial)
	const [loadingState, setLoading] = useState(false)
	const [currQuery, setCurrQuery] = useState({})
	const [requestStarted, setRequestStarted] = useState(false)

	const loadNewResults = (query) => {
		const newPage = 1

		setRequestStarted(true)
		setLoading(true)
		setCurrQuery(query)
		setItemList({ page: newPage, items: [] })
		getFn(query, newPage)
			.then(items => {
				setItemList({
					page: newPage,
					items
				})
				setLoading(false)
			})
			.catch(handleError)
	}

	const loadMoreResults = () => {
		// setLoading(true)
		// const newPage = itemList.page + 1
		

		// getFn(currQuery, newPage)
		// 	.then(items => {
		// 		setItemList({
		// 			page: newPage,
		// 			items: [
		// 				...itemList.items,
		// 				...items,
		// 			]
		// 		})
		// 		setLoading(false)
		// 	})
		// 	.catch(handleError)
	}

	return { loadNewResults, loadMoreResults, loadingState, itemList, requestStarted }
}

export default useItemListApi
