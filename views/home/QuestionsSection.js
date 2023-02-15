import styled, { useTheme, css } from "styled-components"
import { Space, H1, H3, Button, QuestionCard, QuestionListSkeleton } from "comp"
import useItemListApi from "src/hooks/useItemListApi"
import { getQuestionByText } from "src/api"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { handleServerError } from "src/utils"
import FunArrow from "src/icons/curvy-arrow"
import useLang from "src/hooks/useLang"


const QuestionsSection = () => {
	const {
		loadNewResults,
		itemList,
		loadingState
	} = useItemListApi(getQuestionByText, handleServerError)
	const navigate = useNavigate()
	const { primary: secondary } = useTheme()
	const { t, transContent } = useLang()

	useEffect(() => {
		loadNewResults({ searchText: "", })
	}, [])

	const handleQuestionClick = question => () => {
		navigate("/singleqa/", { state: { question }})
	}
	const handleReadMoreClick = () => { navigate("/questions") }

	return (
		<Container>
			<InnerContainer>
			<Section first>
				<Space h="2rem" />
				<FunArrow color={secondary} height="5rem" width="14rem" />
				<H1>{t("questions-section-text")}</H1>
				<Space h="2rem" />
				<Button width="50px">{t("ask")}</Button>
			</Section>
			<Border />
			<Section second>
				<Space h="2rem" />
				<H3 bold>{t("questions-section-title")}</H3>
				<Space h="1rem" />
				{
					loadingState == true ? (
						<QuestionListSkeleton count={2} />
					) : (
						itemList.items.slice(0,2).map(item => (
							<>
							<QuestionCard
								key={item._id}
								title={transContent(item.title)}
								date={item.date}
								username={item.user.name}
								content={transContent(item.content)}
								onClick={handleQuestionClick(item)}
							/>
							<Space h="1rem" />
							</>
						))
					)
				}
				{
					loadingState == false &&
						<Button type="text" onClick={handleReadMoreClick}>{t("read-more")}</Button>
				}
			</Section>
			</InnerContainer>
		</Container>
	)
}

const Container = styled.div`
	@media screen and (max-width: 64em) {
	}
`

const InnerContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem 2rem;
	max-width: 1100px;
	margin: 0 auto;

	@media screen and (max-width: 64em) {
		flex-direction: column;
		padding: 1rem;
		max-width: 600px;
	}
`

const Section = styled.div`
	flex-direction: column;
	width: 50%;

	@media screen and (max-width: 64em) {
		width: 100%;

		${props => props.first && css`
			display: none;
		`}
	}
`

const Border = styled.div`
	border: 1px solid #ddd;
	margin: 0 2rem;
`


export default QuestionsSection
