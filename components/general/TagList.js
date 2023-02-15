import { useState } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
`

const TagItem = styled.div`
	border: 1px solid #ddd;
	border-radius: 220px;
	padding: 0.5rem 1rem;
	color: var(--text1);
	cursor: pointer;

	:hover {
		background: #eee;
	}

	${props => props.selected && css`
		background: var(--secondary);
		color: #fff;
		border: 0;

		:hover {
			background: var(--secondary);
		}
	`}

`

const exampleTags = ["Scholarships", "SAT", "Extracurriculars", "Essay", "Commonapp"]
const TagList = ({
	tagList = exampleTags,
	onChange = () => null }) => {
	const [selected, setSelected] = useState(tagList[0])
	const handleChange = tag => () => {
		setSelected(tag)
		onChange(tag)
	}
	return (
		<Container>
			{tagList.map(tag => (
				<TagItem
					key={tag}
					onClick={handleChange(tag)}
					selected={tag == selected}>
					{tag}
				</TagItem>
			))}
		</Container>
	)
}

export default TagList


