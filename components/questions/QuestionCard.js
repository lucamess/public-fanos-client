import styled, { useTheme } from "styled-components"
import Skeleton from "react-loading-skeleton"
import { Row, H6,Text, FlexGrow, Space } from "comp"
import { dateToHumanText } from "src/utils"


const QuestionCard = ({ onClick, title, date, username, content, /* nOfComments */ }) => {
	const { secondary, text2, text3 } = useTheme()
	return (
		<Container onClick={onClick}>
			<Row style={{ "alignItems": "center" }}>
				<H6>{title}</H6>
				<FlexGrow />
				<Text color={text3}>{dateToHumanText(date)}</Text>
			</Row>
			<Text bold color={secondary}>{username}</Text>
			<Space h="0.8rem" />
			<Text color={text2}>{content}</Text>
			<Space h="0.2rem" />
			{
				/* <NoOfComments value={nOfComments} /> */
			}
			<Space h="0.5rem" />
		</Container>
	)
}

export const QuestionCardSkeleton = () => (
	<div>
		<Skeleton height={40} />
		<Skeleton width="30%" />
		<Skeleton count={2} />
		<Skeleton width="60%" />
		<Space h="3rem" />
	</div>
)

export const QuestionListSkeleton = ({ count = 3 }) => (
	<>
	{
		Array.from({ length: count }).map((_, index) =>
			<QuestionCardSkeleton key={index} />)
	}
	</>
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	border: 1px solid #ddd;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 1rem;
	cursor: pointer;
`

/*
const NocContainer = styled.div`
	display: flex;
	align-items: center;
`
const NoOfComments = ({ value }) => {
	const { text1 } = useTheme()
	return (
		<NocContainer>
			<Text color={text1}>{value}</Text>
			<MessageIcon color={text1} size="1rem" />
		</NocContainer>
	)
}
*/

export default QuestionCard

