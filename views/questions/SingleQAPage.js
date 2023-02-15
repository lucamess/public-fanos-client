import styled from "styled-components"
import Skeleton from "react-loading-skeleton"
import { useEffect, useState } from "react"
import { useParams, } from "react-router-dom"
import { toast } from "react-toastify"
import { Space, Button, H6, Text, CommentCard, CommentForm, EmptyStateComment } from "comp"
import MessageIcon from "src/icons/message"
import useItemListApi from "src/hooks/useItemListApi"
import { getQuestionById, getCommentByQuestionId, addComment } from "src/api"
import useToggleState from "src/hooks/useToggleState"
import useCurrUser from "src/hooks/useCurrUser"
import { handleServerError } from "src/utils"
import useLang from "src/hooks/useLang"


const SingleQAPage = () => {
	const { id } = useParams()

	const { transContent, t } = useLang()
	const {
		loadNewResults,
		loadMoreResults,
		loadingState: commentLoading,
		itemList: commentList,
	} = useItemListApi(getCommentByQuestionId, handleServerError)
	const { currUser } = useCurrUser()
	const [ postVisible, togglePostVisible ] = useToggleState(false)
	const [ commentFormLoading, setCommentFormLoading ] = useState(false)
	const [ initialLoading, setInitialLoading ] = useState(false)
	const [ question, setQuestion ] = useState({})
	const noCommentsFound = commentLoading == false && commentList.items?.length == 0

	useEffect(() => {
		setInitialLoading(true)
		loadNewResults({ questionId: id })
		getQuestionById(id)
			.then(item => setQuestion(item))
			.catch(handleServerError)
			.then(() => setInitialLoading(false))
			
	}, [])

	const handlePostClick = (comment) => {
		setCommentFormLoading(true)
		addComment({ ...comment, questionId: question._id, user: currUser })
			.then(() => {
				toast.success("Comment posted successfully, refresh the page to see it.")
			})
			.catch(handleServerError)
			.then(() => {
				setCommentFormLoading(false)
			})
	}


	return (
		<Container>
			{initialLoading ? <QuestionSkeleton /> : (
				<>
				<H6>{transContent(question.title)}</H6>
				<Text>{transContent(question.content)}</Text>
				</>

			)}

			<Button onClick={togglePostVisible} type="text" style={{ alignSelf: "flex-end" }}>
				<MessageIcon />
				{t("reply")}
			</Button>
			{postVisible && 
				<CommentForm onSubmit={handlePostClick} loading={commentFormLoading} />}

			<Space h="2rem" />
			<CommentsContainer>
				{commentList.items.map(item => (
					<CommentCard
						key={item._id}
						username={item.user.name}
						text={transContent(item.content)}
						date={item.date}
					/>
				))}
				{commentLoading && <CommentListSkeleton />}
				{noCommentsFound && <EmptyStateComment />}
				{noCommentsFound == false &&
					<Button
						type="text"
						style={{ alignSelf: "center" }}
						onClick={loadMoreResults}
						loading={commentLoading}>
						{t("more-results")}
					</Button>
				}

			</CommentsContainer>
			<Space h="1rem" />
		</Container>
	)
}


const QuestionSkeleton = () => (
	<SkeletonContainer>
		<Skeleton height={40} />
		<Skeleton width="20%" />
		<Space h="1rem" />
		<Skeleton count={4} />
		<Skeleton width="40%" />
	</SkeletonContainer>
)

const CommentSkeleton = () => (
	<SkeletonContainer>
		<Skeleton width="30%" />
		<Skeleton />
		<Skeleton />
		<Space h="2rem" />
	</SkeletonContainer>
)

const CommentListSkeleton = () => (
	<SkeletonContainer>
		<CommentSkeleton />
		<CommentSkeleton />
		<CommentSkeleton />
	</SkeletonContainer>
)


const SkeletonContainer = styled.div`
	width: 100%;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem auto;
	max-width: 720px;
	align-items: flex-start;

	@media screen and (max-width: 64em) {
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
		max-width: 32em;
	}
`

const CommentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-left: 2px solid #bbb;
	padding: 2rem;
	width: 100%;
	box-sizing: border-box;
`

export default SingleQAPage
