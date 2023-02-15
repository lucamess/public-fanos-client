import styled, { useTheme } from "styled-components"
import SpiralIcon from "src/icons/spiral"
import { Text, H5, Space } from "comp"
import useLang from "src/hooks/useLang"

const EmptyStateBlog = () => {
	const { primary, text0, text3 } = useTheme()
	const { t } = useLang()
	return (
		<Container>
			<Space h="2rem" />
			<SpiralIcon size="6rem" color={primary} />
			<Space h="1rem" />
			<H5 color={text0}>{t("no-results-blog-title")}</H5>
			<Text color={text3}>{t("no-results-blog-text")}</Text>

			<Space h="4rem" />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default EmptyStateBlog
