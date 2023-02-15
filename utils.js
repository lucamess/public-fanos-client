import { toast } from "react-toastify"
import { errorTranslations } from "src/config"

export const sleep = (ms) => (value) => {
	return new Promise((res) => {
		setTimeout(() => res(value), ms)
	})
}

export const dateToHumanText = () => {
	// const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	// const dateObj = new Date(dateText)
	// return `${monthList[dateObj.getMonth()]} ${dateObj.getDate()}`
	return ""
}

export const nullFn = () => null

export const handleServerError = err => {
	const message = errorTranslations[err.message]
		|| "Unknown error occured. Please try again later."
	toast.error(message)
}
