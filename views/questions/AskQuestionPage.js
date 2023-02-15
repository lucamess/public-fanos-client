import styled from "styled-components"
import { useState } from "react"
import { toast } from "react-toastify"
import { H4, Button, QuestionForm } from "comp"
import { useNavigate } from "react-router-dom"
import ArrowLeftIcon from "src/icons/arrow-left"
import { addQuestion } from "src/api"
import { handleServerError } from "src/utils"
import useCurrUser from "src/hooks/useCurrUser"

const AskQuestionPage = () => {
	const navigate = useNavigate()
	const goBack = () => { navigate(-1) }
	const { currUser } = useCurrUser()
	const [loading, setLoading] = useState(false)
	

	const handleSubmit = (question) => {
		const questionWithUser = {
			user: currUser,
			...question,
		}

		setLoading(true)
		addQuestion(questionWithUser)
			.then(() => {
				toast.success("Question posted successfully")
			})
			.catch(handleServerError)
			.then(() => {
				setLoading(false)
			})
	}

	return (
		<Container>
			{ /*
				 *
				 *
			<Button type="text" onClick={goBack}>
				<ArrowLeftIcon />
				Back
			</Button>
					* */
			}
			<H4>Ask your question</H4>
			<QuestionForm onSubmit={handleSubmit} loading={loading} submitLabel="Post"  />

		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 700px;
	margin: 2rem auto;

	@media screen and (max-width: 64em) {
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
		max-width: 32em;
		margin: 0 auto;
	}
`



export default AskQuestionPage

