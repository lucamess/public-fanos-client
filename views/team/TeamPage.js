import styled, { useTheme } from "styled-components"
import { FooterSection, H1, Subtitle, Space } from "comp"
import MeetFounderSection from "./MeetFounderSection"
import MemberListSection from "./MemberListSection"
import useLang from "src/hooks/useLang"

const TeamPage = () => {
	const { text2, } = useTheme()
	const { t } = useLang()
	return (
		<>
		<Container>
			<InnerContainer>
			<H1 bold>{t("about-us")}</H1>
			<Space h="1rem" />
			<Subtitle color={text2}>{t("about-fanos")}</Subtitle>
			<Space h="3rem" />
			<MeetFounderSection
				prompt={t("meet-the-founder")}
				name={t("founder-name")}
				title={t("founder-title")}
				description={t("founder-description")}
				quote={t("founder-quote")}
				/>

			</InnerContainer>
			<Space h="5rem" />

			<MemberListSection />
			<Space h="8rem" />

		</Container>
		<FooterSection />
		</>
	)
}

const InnerContainer = styled.div`
	max-width: 48rem;
	margin: 0 auto;
`

const Container = styled.div`
	padding: 2rem;
	max-width: 64em;
	margin: 0 auto;

	@media screen and (max-width: 64em) {
		padding: 2rem 3rem;
		max-width: 32em;
	}
`


export default TeamPage
