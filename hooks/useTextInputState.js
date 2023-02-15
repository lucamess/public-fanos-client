import { useState } from "react"

const useTextInputState = (initialValue = "") => {
	const [value, setValue] = useState(initialValue)
	const onChange = e => {
		setValue(e.target.value)
	}
	return [value, onChange, setValue]
}

export default useTextInputState

