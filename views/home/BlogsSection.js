import styled from "styled-components"
import { H3, Space, BlogCard, BlogListSkeleton } from "comp"
import { useEffect } from "react"
import useItemListApi from "src/hooks/useItemListApi"
import { getBlogByText } from "src/api"
import { handleServerError } from "src/utils"
import useLang from "src/hooks/useLang"


const BlogsSection = () => {
	const { 
		loadNewResults,
		itemList,
		loadingState
	} = useItemListApi(getBlogByText, handleServerError)
	const { t, transContent } = useLang()

	useEffect(() => {
		loadNewResults({ searchText: "" })
	}, [])

	return (
		<Container>
		<InnerContainer>
			<H3 color="#242424" bold>{t("blogs-section-title")}</H3>
			<Space h="1rem" />
			<Divider />
			<Space h="2rem" />
			<Row>
				{
					loadingState == true ? (
						<BlogListSkeleton rigid />
					) : (
						itemList?.items.slice(0, 6).map(item => (
							<BlogCard
								rigid
								key={item._id}
								username={item.user.name}
								title={transContent(item.title)}
								date={item.date}
								imgSrc={item.imgSrc}
							/>
						))
					)
				}
			</Row>
		</InnerContainer>
		</Container>
	)
}

const Container = styled.div`
`

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 2rem;
	max-width: 1400px;
	margin: 0 auto;

	@media screen and (max-width: 64em) {
		padding: 1rem;
		max-width: 800px;
	}
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	overflow-x: scroll;
	flex-shrink: 0;
`

const Divider = styled.div`
	border: 3px solid var(--primary-lighter);
	border-top-right-radius: 1em;
	border-bottom-right-radius: 1em;
	width: 290px;
`


export default BlogsSection
