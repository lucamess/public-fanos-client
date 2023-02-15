import styled, { css } from "styled-components"
import { Space, H1, H7, Button } from "comp"
import ArrowRightIcon from "src/icons/arrow-right"
import useLang from "src/hooks/useLang"
import { essayFormLink } from "src/config"


const EssaySection = () => {
	const { t } = useLang()
	const handleOpenEssayBtn = () => {
		window.location.href = essayFormLink
	}

	return (
		<Container>
			<InnerContainer>
			<Section>
				<H1 color="rgba(255,255,255,1)" bold>{t("essay-section-title")}</H1>
				<H7 color="rgba(255,255,255,0.8)">{t("essay-section-body")}</H7>
				<Space h="2rem" />
			</Section>
			<SecondSection center>
				<Button type="default" width="10em" onClick={handleOpenEssayBtn}>
					{t("open")}
					<ArrowRightIcon size="1.5rem" />
				</Button>
			</SecondSection>
			</InnerContainer>
		</Container>
	)
}


const Container = styled.div`
	background: var(--dark);
	@media screen and (max-width: 64em) {
	}
`

const InnerContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 3rem 2rem;
	margin: 0 auto;
	max-width: 1200px;

	@media screen and (max-width: 64em) {
		flex-direction: column;
		padding: 3rem 1rem;
		max-width: 700px;
	}
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	${prop => prop.center && css`
		align-items: center;
		justify-content: center;
	`}

	@media screen and (max-width: 64em) {
		width: 100%;
	}
`

const SecondSection = styled(Section)`
	align-items: center;

	@media screen and (max-width: 64em) {
		grid-template-columns: 1fr;
		width: 100%;
		justify-items: center;
	}
`

export default EssaySection

