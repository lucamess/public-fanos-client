import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BlogCard, BlogListSkeleton, FooterSection, Button, SearchBar, Space, H1, EmptyStateBlog } from "comp"
import useItemListApi from "src/hooks/useItemListApi"
import { getBlogByText } from "src/api"
import { handleServerError } from "src/utils"
import useLang from "src/hooks/useLang"


const BlogPage = () => {
	const {
		loadNewResults,
		loadMoreResults,
		loadingState,
		requestStarted,
		itemList: blogList,
	} = useItemListApi(getBlogByText, handleServerError)
	const navigate = useNavigate()
	const noResultsFound = loadingState == false && blogList.items?.length == 0 && requestStarted
	const showMoreResults = noResultsFound == false && loadingState == false
	const { t, transContent } = useLang()

	const handleSearchSubmit = searchText => {
		loadNewResults({ searchText })
	}

	const handleBlogClick = id => () => {
		navigate("/singleblog/" + id)
	}

	useEffect(() => {
		loadNewResults({ searchText: "" })
	}, [])

	return (
		<>
		<Container>
			<H1>{t("blogs")}</H1>
			<Space h="1rem" />
			<SearchBar onSubmit={handleSearchSubmit} />

			<Space h="2rem" />
			<BlogListContainer>
				{blogList?.items.map(item => (
					<BlogCard
						key={item._id}
						username={item.user.name}
						title={transContent(item.title)}
						date={item.date}
						imgSrc={item.imgSrc}
						onClick={handleBlogClick(item._id)}
					/>
				))}
				{loadingState && <BlogListSkeleton />}
			</BlogListContainer>

			{noResultsFound && <EmptyStateBlog />}

			<Space h="2rem" />
			{showMoreResults &&
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
	padding: 2rem 2rem;
	margin: 0 auto;
	max-width: 800px;

	@media screen and (max-width: 64em) {
		padding: 1rem;
		max-width: 32em;
	}
`

const BlogListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	@media screen and (max-width: 64em) {
		grid-template-columns: 1fr;
		width: 100%;
		justify-items: center;
	}
`


export default BlogPage

