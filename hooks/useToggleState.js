import { useState } from "react"

const useToggleState = (defaultValue = false) => {
	const [value, setValue] = useState(defaultValue)
	const toggle = () => {
		setValue(prev => !prev)
	}

	return [value, toggle, setValue]
}

export default useToggleState

