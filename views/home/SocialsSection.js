import styled, { css } from "styled-components"
import { Space, H2, H6, Button, FlexGrow } from "comp"
import TelegramIcon from "src/icons/telegram"
import YoutubeIcon from "src/icons/youtube"
import TwitterIcon from "src/icons/twitter"
import LinkedinIcon from "src/icons/linkedin"
import InstagramIcon from "src/icons/instagram"
import useLang from "src/hooks/useLang"


const SocialsSection = () => {
	const socialImgSrc = new URL("/assets/fanos-tg-discussion2.jpg", import.meta.url)
	const { t } = useLang()

	return (
		<Container>
			<InnerContainer>
			<Section first>
				<H2 color="white" bold>{t("socials-section-title")}</H2>
				<Space h="0.5rem" />
				<Divider />
				<Space h="3rem" mh="0" />
				<SocialImage>
					<img style={{ maxWidth: "100%", borderRadius: "4px" }} src={socialImgSrc} />
				</SocialImage>
				<Space h="1rem" />
				<Row>
					<H6 color="white">{t("socials-main-prompt")}</H6>
					<FlexGrow />
					<Button size="small">
						<TelegramIcon size="1.5rem" />
						Join
					</Button>
				</Row>
			</Section>
			<Section second>
				<Space h="1rem" mh="0" />
				<SocialButton>
					<TelegramIcon size="1.5rem" />
					{t("join-telegram")}
				</SocialButton>
				<SocialButton>
					<YoutubeIcon size="1.5rem" />
					{t("join-youtube")}
				</SocialButton>
				<SocialButton>
					<TwitterIcon size="1.5rem" />
					{t("join-twitter")}
				</SocialButton>
				<SocialButton>
					<LinkedinIcon size="1.5rem" />
					{t("join-linkedin")}
				</SocialButton>
				<SocialButton>
					<InstagramIcon size="1.5rem" />
					{t("join-instagram")}
				</SocialButton>
			</Section>
			</InnerContainer>
		</Container>
	)
}

const Container = styled.div`
	background: #1d1d1d;
`

const InnerContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 3rem 10rem;
	max-width: 1600px;
	margin: 0 auto;

	@media screen and (max-width: 64em) {
		padding: 1rem;
		flex-direction: column;
		max-width: 600px;
	}
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	box-sizing: border-box;

	${props => props.second && css`
		padding: 4rem;
	`}

	@media screen and (max-width: 64em) {
		padding: 1rem 0;
		width: 100%;
	}
`

const Divider = styled.div`
	border: 3px solid var(--light);
	border-top-right-radius: 1em;
	border-bottom-right-radius: 1em;
	width: 140px;
`

const Row = styled.div`
	display: flex;
	align-items: center;
`
const SocialImage = styled.div`
	width: 100%;

	@media screen and (max-width: 64em) {
		display: none;
	}
`
const SocialButton = styled(Button).attrs({ type: "text" })`
	justify-content: flex-start;
	align-items: center;
	color: var(--light);
	font-size: 1.2rem;
	font-weight: 400;

	:hover {
		color: var(--light-darker);
	}
`

export default SocialsSection

