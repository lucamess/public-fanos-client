import { useState } from "react"
import styled, { useTheme } from "styled-components"
import { toast } from "react-toastify"
import { Subtitle, Space, BlogForm } from "comp"
import { addBlog } from "src/api"
import { handleServerError } from "src/utils"
import useCurrUser from "src/hooks/useCurrUser"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 700px;
	margin: 2rem auto;

	@media screen and (max-width: 64rem) {
		padding: 1rem;
		width: 100%;
	}
`


const AddBlogPage = () => {
	const { currUser } = useCurrUser()
	const { secondary } = useTheme()
	const [loading, setLoading] = useState(false)

	const handleSubmit = (blog) => {
		const blogWithUser = {
			user: currUser,
			...blog
		}

		setLoading(true)
		addBlog(blogWithUser)
			.then(() => {
				toast.success("Blog posted successfully")
			})
			.catch(handleServerError)
			.then(() => {
				setLoading(false)
			})
	}

	return (
		<Container>
			<Space h="1rem" />
			<Subtitle color={secondary}>
				<strong>Warning</strong>: This form only works for Fanos team members
			</Subtitle>
			<BlogForm onSubmit={handleSubmit} loading={loading} submitLabel="Post" />


		</Container>
	)
}


export default AddBlogPage
