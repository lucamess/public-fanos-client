import styled, { useTheme, css } from "styled-components"
import { H6, H5, Subtitle, Space } from "comp"


const MeetFounderSection = ({ prompt, name, title, description, quote }) => {
	const { text2 } = useTheme()
	return (
		<Container>
			<Section first>
				<Image src="/team-daniel-mekuriaw.jpeg" />
				<Space h="1rem" />
				<H6 bold>{name}</H6>
				<H6 color={text2}>{title}</H6>
			</Section>
			<Space h="0" mh="2rem" />
			<Section>
				<H5>{prompt}</H5>
				<Space h="0.5rem" />
				<Subtitle color={text2}>
					{description}
					<br /><br />
					{`"${quote}"`}
				</Subtitle>
			</Section>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 64em) {
		flex-direction: column;
	}
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	${props => props.first && css`
		align-items: center;
	`}

	@media screen and (max-width: 64em) {
		width: 100%;
	}
`

const Image = styled.img`
	height: 12em;
	width: 12em;
	border-radius: 100%;
`

export default MeetFounderSection
