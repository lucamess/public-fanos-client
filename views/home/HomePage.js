import styled from "styled-components"
import { FooterSection, Space } from "comp"
import LandingSection from "./LandingSection"
import MentorSection from "./MentorSection"
import EssaySection from "./EssaySection"
import QuestionsSection from "./QuestionsSection"
import BlogsSection from "./BlogsSection"
import SocialsSection from "./SocialsSection"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`

const HomePage = () => {
	return (
		<Container>
			<LandingSection />
			<Space h="3rem" />

			<MentorSection />

			<EssaySection />
			<Space h="3rem" />

			<QuestionsSection />
			<Space h="5rem" />

			<BlogsSection />
			<Space h="4rem" />

			<SocialsSection />
			<FooterSection />
		</Container>
	)
}

export default HomePage


