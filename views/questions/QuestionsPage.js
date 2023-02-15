import styled from "styled-components"
import { EmptyStateQuestion, FooterSection, QuestionCard, Space, SearchBar, TagList, H1, FlexGrow, Button, QuestionListSkeleton } from "comp"
import { useEffect } from "react"
import useMediaQuery from "src/hooks/useMediaQuery"
import useItemListApi from "src/hooks/useItemListApi"
import { getQuestionByText } from "src/api"
import { tagList } from "src/config"
import { useNavigate } from "react-router-dom"
import { handleServerError } from "src/utils"
import useLang from "src/hooks/useLang"

const QuestionsPage = () => {
	const {
		loadNewResults,
		loadMoreResults,
		loadingState,
		itemList: questionList,
	} = useItemListApi(getQuestionByText, handleServerError)
	const navigate = useNavigate()
	const { transContent, t } = useLang()
	const noResultsFound = loadingState == false && questionList.items?.length == 0
	const showMoreResults = noResultsFound ==  false && loadingState == false

	const handleTagChange = tag => {
		loadNewResults({ searchText: tag })
	}
	const handleSearchSubmit = (searchText) => {
		loadNewResults({ searchText })
	}

	const handleAskButtonClick = () => {
		navigate("/askquestion")
	}
	const handleQuestionClick = question => () => {
		navigate("/singleqa/" + question._id)
	}

	useEffect(() => {
		loadNewResults({ searchText: "" })
	}, [])

	console.log("questionlist", questionList)

	return (
		<>
		<Container>
			<Row>
				<H1>{t("questions")}</H1>
				<FlexGrow />
				<AskButton onClick={handleAskButtonClick}>Ask</AskButton>
			</Row>
			<Space h="1rem" />
			<SearchBar onSubmit={handleSearchSubmit} />
			<Space h="1rem" />
			<TagList onChange={handleTagChange} tagList={tagList} />

			<Space h="2rem" />
			{ noResultsFound && <EmptyStateQuestion onAction={handleAskButtonClick} />}
			{
				questionList.items.map(item => (
					<>
						<QuestionCard
							title={transContent(item.title)}
							date={item.date}
							username={item.user.name}
							content={transContent(item.content)}
							nOfComments={item.nOfComments}
							key={item._id}
							onClick={handleQuestionClick(item)}
						/>
						<Space h="1rem" />
						</>
				))
			}

			{ loadingState && <QuestionListSkeleton /> }
			
			<Space h="1rem" />
			{ showMoreResults &&
				<Button type="text" onClick={loadMoreResults}>
					{t("more-results")}
				</Button>
			}
		</Container>
		<FooterSection />
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 2rem;
	margin: 0 auto;
	max-width: 800px;
	margin: 0 auto;

	@media screen and (max-width: 64em) {
		padding: 1rem;
		max-width: 32em;
	}
`
const Row = styled.div`
	display: flex;
	align-items: center;
`

const AskButton = ({ className, onClick }) => {
	const isMobile = useMediaQuery("(max-width: 64em)")
	const { t } = useLang()
	return (
		<Button className={className} onClick={onClick}>
			{isMobile ? t("ask") : t("ask-new-question")}
		</Button>
	)
}

export default QuestionsPage


