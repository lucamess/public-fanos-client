import { Button } from "comp"
import LanguageIcon from "src/icons/language"
import useMediaQuery from "src/hooks/useMediaQuery"

const langPrompts = {
	am: "አማርኛ",
	en: "English"
}

const LangButton = ({ lang, setLang }) => {
	const otherLang = lang == "en" ? "am" : "en"
	const prompt = langPrompts[otherLang]
	const isMobile = useMediaQuery("(max-width: 64em)")

	const handleClick = () => setLang(otherLang)
	return (
		<Button type={isMobile ? "outline" : "thin-outline"} size="small" onClick={handleClick}>
			<LanguageIcon />
			{prompt}
		</Button>
	)
}


export default LangButton

