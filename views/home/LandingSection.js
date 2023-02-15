import styled, { css } from "styled-components"
import { H0, H05, Subtitle, Space, H7 } from "comp"
import useLang from "src/hooks/useLang"

const LandingSection = () => {
	const landingImgSrc = new URL("/assets/habesha-graduation.jpeg", import.meta.url)
	const { t } = useLang()
	return (
		<Container>
			<InnerContainer>
			<Section>
				<Space h="4rem" mh="0" />
				<H05 bold>
					{t("landing-text")}
					&nbsp;
					<span style={{color: "var(--secondary)"}}>{t("landing-focus")}</span>
				</H05>
				<Space h="2rem" mh="1rem" />
				<H7>{t("landing-subtext")}</H7>
				<Space h="2rem" />
				<Row>
					<StatUnit count="2.5k" label={t("stats-members")} />
					<StatUnit count="70+" label={t("stats-volunteers")} />
				</Row>

			</Section>
			<Section center>
				<LandingImage>
					<img style={{maxWidth: "100%"}} src={landingImgSrc} />
				</LandingImage>
			</Section>
			</InnerContainer>
		</Container>
	)
}

const StatUnit = ({ count, label }) => (
	<StatUnitC>
		<H0 color="hite">{count}</H0>
		<Subtitle color="hite" center>{label}</Subtitle>
	</StatUnitC>
)

const StatUnitC = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15em;
	flex-shrink: 0;

	
	@media screen and (max-width: 64em) {
		width: 10rem;
	}
`

const Row = styled.div`
	display: flex;
`

const Container = styled.div``

const InnerContainer = styled.div`
	background: #fff;
	display: flex;
	flex-direction: row;
	padding: 2rem;
	box-sizing: border-box;
	margin: 0 auto;
	max-width: 1200px;

	@media screen and (max-width: 64em) {
		padding: 1rem;
		flex-direction: column-reverse;
		gap: 2rem;
		max-width: 700px;
	}
`

const Section = styled.div`
	flex-grow: 1;
	width: 50%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;

	${prop => prop.center && css`
		align-items: center;
	`}

	@media screen and (max-width: 64em) {
		width: 100%;
	}
`

const LandingImage = styled.div`
	width: 500px;
	height: 400px;
	overflow: hidden;
	border-radius: 8px;

	@media screen and (max-width: 64em) {
		max-width: 100%;
		height: 300px;
	}
`

export default LandingSection
