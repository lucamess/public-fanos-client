import styled from "styled-components"

const Circle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--secondary);
	height: 40px;
	width: 40px;
	border-radius: 100%;
	color: #363636;
	font-size: 1.2rem;
	cursor: pointer;
`

const CurrUserAvatar = ({ currUser }) => {
	if(currUser.loaded == false)
		return null

	return (
		<Circle>
			{currUser.name[0].toUpperCase()}
		</Circle>
	)
}

export default CurrUserAvatar

