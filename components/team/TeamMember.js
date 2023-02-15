import styled, { useTheme } from "styled-components"
import { Subtitle, H6, Space } from "comp"

const Image = styled.img`
	border-radius: 100%;
	height: 84px;
	width: 84px;
`
const Container = styled.div`
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 280px;
`

const TeamMember = ({ name, title, description, imgSrc }) => {
	const avatar = imgSrc // new URL(imgSrc, import.meta.url)
	const { text1, text2, text3 } = useTheme()
	return (
		<Container>
			<Image alt="avatar" src={avatar} />
			<Space h="1rem" />
			<H6 bold color={text1}>{name}</H6>
			<Subtitle color={text3}>{title}</Subtitle>

			<Space h="1rem" />
			<Subtitle color={text2} center>{description}</Subtitle>
		</Container>
	)
}

export default TeamMember
