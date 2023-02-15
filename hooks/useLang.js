import { atom, useRecoilState } from "recoil"
import amText from "src/lang/am.text"
import enText from "src/lang/en.text"

const langObj = {
	am: amText,
	en: enText,
}

const langState = atom({
	key: "lang",
	default: "en"
})


const useLang = () => {
	const [ lang, setLang ] = useRecoilState(langState)
	const t = (key) => {
		const content = langObj[lang][key]
		if(Boolean(content) == false)
			console.log(`missing transaltion for ${lang} key: `, key)

		return content
	}

	const transContent = (content) => {
		if(typeof content == "string" || Boolean(content) == false)
			return content

		if(content && content[lang])
			return content[lang]

		if(lang == "en") return content["am"]
		if(lang == "am") return content["en"]
	}

	return {
		lang, setLang, t, transContent,
		text: langObj[lang]
	}
}

export default useLang


