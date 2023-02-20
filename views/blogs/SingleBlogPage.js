import { useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"
import Skeleton from "react-loading-skeleton"
import { H1, H2, Subtitle, BlogCard, Space, FooterSection } from "comp"
import ReactMarkdown from "react-markdown"
import { useParams, useNavigate } from "react-router-dom"
import { dateToHumanText, handleServerError } from "src/utils"
import { getBlogById, getBlogByText } from "src/api"
import useLang from "src/hooks/useLang"


const SingleBlogPage = () => {
	const { id } = useParams()
	
	const navigate = useNavigate()
	const { secondary } = useTheme()
	const { transContent, t } = useLang()
	const [blog, setBlog] = useState({})
	const [relatedBlogList, setRelatedBlogList] = useState([])
	const [loading, setLoading] = useState(true)
	
	const handleBlogClick = id => () => {
		navigate("/singleblog/" + id)
	}


	useEffect(() => {
		setLoading(true)
		getBlogById(id)
			.then(item => { setBlog(item) })
			.catch(handleServerError)
			.then(() => getBlogByText({ searchText: ""}, 1))
			.then(items => setRelatedBlogList(items))
			.then(() => setLoading(false))
			.catch(handleServerError)
	}, [id])

	return  (
		<>
		<Container>
			<MainBar>
				{
					loading ? (
						<MainBarSkeleton />
					) : (
						<>
						<H1>{transContent(blog.title)}</H1>
						<Subtitle>
							{dateToHumanText(blog.date)}
							{"  "}
							<Subtitle as="span" bold color={secondary}>
								{blog.user?.name}
							</Subtitle>
						</Subtitle>
						<ReactMarkdown>{transContent(blog.content)}</ReactMarkdown>
						</>
					)
				}
			</MainBar>
			<SideBar>
				<H2>{t("related-articles")}</H2>
				<Space h="1rem" />
				<BlogList>
					{
						loading ? <SideBarSkeleton /> :
							relatedBlogList.slice(0, 4).map(item => (
								<BlogCard
									key={item._id}
									username={item.user?.name}
									title={transContent(item.title)}
									date={item.date}
									imgSrc={item.imgSrc}
									onClick={handleBlogClick(item._id)}
								/>
					))}
				</BlogList>

			</SideBar>
		</Container>
		<FooterSection />
		</>
	)
}

const MainBarSkeleton = () => (
	<>
	<Skeleton height={70} />
	<Skeleton width="40%" />
	<Space h="3rem" />
	<Skeleton count="3" />
	<Skeleton width="70%" />
	<Space h="0.5rem" />
	<Skeleton count="3" />
	<Skeleton width="50%" />
	<Space h="0.5rem" />
	<Skeleton count="3" />
	<Skeleton width="80%" />

	</>
)

const SideBarSkeleton = () => (
	<>
		<Skeleton height={120} />
		<Skeleton width="30%" />
		<Skeleton count={2} />
		<Space h="1rem" />

		<Skeleton height={120} />
		<Skeleton width="30%" />
		<Skeleton count={2} />
		<Space h="1rem" />

		<Skeleton height={120} />
		<Skeleton width="30%" />
		<Skeleton count={2} />
		<Space h="1rem" />
	</>
)

const Container = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 64em;
	padding: 2rem 2rem;
	margin: 2rem auto;
	box-sizing: border-box;

	@media screen and (max-width: 64em) {
		flex-direction: column;
		padding: 1rem;
		max-width: 32em;
	}
`

const MainBar = styled.div`
	display: flex;
	flex-direction: column;
	width: 65%;
	padding: 2rem;

	@media screen and (max-width: 64em) {
		width: 100%;
	}
`

const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	width: 35%;
	padding: 2rem;

	@media screen and (max-width: 64em) {
		width: 100%;
	}
`

const BlogList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (max-width: 64em) {
		flex-direction: row;
		overflow-x: scroll;
	}
`

export default SingleBlogPage


