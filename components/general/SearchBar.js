import { useState } from "react"
import styled from "styled-components"
import { Input } from "comp"
import SearchIcon from "src/icons/search"

const Container = styled(Input).attrs({ as: "div" })`
	display: flex;
	padding: 0;
`

const RawInput = styled.input`
	border: 0;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	
	padding: 0.7rem 1rem;
	flex-grow: 1;
	font-size: 1.1rem;
	color: var(--text1);
`

const Button = styled.div`
	width: 3rem;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--text1);
	cursor: pointer;

	:hover {
		background: var(--secondary);
		color: #fff;
	}
`

const SearchBar = ({
	onSubmit = () => null,
	onChange = () => null,
}) => {
	const [value, setValue] = useState("")
	const handleInputChange = e => {
		setValue(e.target.value)
		onChange(e.target.value)
	}
	const handleSubmit = () => {
		onSubmit(value)
	}

	const handleKeyDown = e => {
		if(e.key == "Enter") {
			handleSubmit()
		}
	}

	return (
		<Container>
			<RawInput value={value} onChange={handleInputChange}
				placeholder="Search..." onKeyDown={handleKeyDown} />
			<Button onClick={handleSubmit}>
				<SearchIcon size="1.5rem" color="currentColor" />
			</Button>
		</Container>
	)
}

export default SearchBar


