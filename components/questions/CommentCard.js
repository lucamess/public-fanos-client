import styled, { useTheme } from "styled-components"
import { Row, FlexGrow, Text, Space } from "comp"
import { dateToHumanText } from "src/utils"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	border: 1px solid #ddd;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 1rem;
`

const CommentCard = ({ username, text, date }) => {
	const { secondary, text2, text3 } = useTheme()
	return (
		<Container>
			<Row style={{ "alignItems": "center" }}>
				<Text bold color={secondary}>{username}</Text>
				<FlexGrow />
				<Text color={text3}>{dateToHumanText(date)}</Text>
			</Row>
			<Space h="0.5rem" />
			<Text color={text2}>{text}</Text>
		</Container>
	)
}

export default CommentCard


