import styled, { useTheme, css } from "styled-components"
import Skeleton from "react-loading-skeleton"
import { Text, H6, Space } from "comp"
import { dateToHumanText } from "src/utils"


const BlogCard = ({ username, title, date, imgSrc, onClick, rigid }) => {
	const imgSrcUrl = new URL(imgSrc, import.meta.url)
	const { secondary, text0, text2 } = useTheme()
	return (
		<Container onClick={onClick} rigid={rigid}>
			<Image src={imgSrcUrl} />
			<TextContainer>
				<Text color={secondary} bold>{username}</Text>
				<H6 color={text0}>{title}</H6>
				<Text color={text2}>{dateToHumanText(date)}</Text>
			</TextContainer>
		</Container>
	)
}


const BlogCardSkeleton = ({ rigid }) => (
	<BlogCardSkeletonContainer rigid={rigid}>
		<Skeleton height={150} />
		<Skeleton width="30%" />
		<Skeleton height={30} />
		<Space h="1rem" />
	</BlogCardSkeletonContainer>
)

export const BlogListSkeleton = ({ count = 4, rigid }) => (
	<>
		{
			Array.from({ length: count }).map((_, index) =>
				<BlogCardSkeleton rigid={rigid} key={index} />)
		}
	</>
)

const BlogCardSkeletonContainer = styled.div`
	width: 100%;

	${props => props.rigid && css`
		width: 320px;
	`}
`

const Container = styled.div`
	flex-shrink: 0;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	background: #fff;
	border: 1px solid #ddd;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	cursor: pointer;

	${props => props.rigid && css`
		width: 320px;
	`}

	@media screen and (max-width: 64em) {
		min-width: 100%;

		${props => props.rigid && css`
			width: 320px;
		`}
	}
`

const TextContainer = styled.div`
	padding: 1rem;
`

const Image = styled.img`
	max-width: 100%;
	max-height: 200px;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`

export default BlogCard


