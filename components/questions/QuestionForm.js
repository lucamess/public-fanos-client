import { useTheme } from "styled-components"
import BarLoader from "react-spinners/BarLoader"
import { useState } from "react"
import useTextInputState from "src/hooks/useTextInputState"
import { Space, Button, Subtitle, TagList, ContentInput, ContentInputMultiple, ValidationMessage } from "comp"
import { tagList } from "src/config"
import { tests, validate } from "comp/general/ValidationMessage"

const QuestionForm = ({ submitLabel = "Post", onSubmit, loading, initialValues = defaultInitialValues }) => {
	const [amTitle, onAmTitle, setAmTitle] = useTextInputState(initialValues.title.am)
	const [enTitle, onEnTitle, setEnTitle] = useTextInputState(initialValues.title.en)
	const [amContent, handleAmContent, setAmContent] = useTextInputState(initialValues.content.am)
	const [enContent, handleEnContent, setEnContent] = useTextInputState(initialValues.content.en)
	const [tag, setTag] = useState(initialValues.tag)
	const [valiResult, setValiResult] = useState({})
	const { primary } = useTheme()

	const valiTests = [
		{
			name: "title",
			value: [amTitle, enTitle],
			tests: [tests.someRequired],
		},
	]


	const handleSubmit = () => {
		const [everythingOkay, valiResult] = validate(valiTests)
		setValiResult(valiResult)

		if(everythingOkay) {
			setAmTitle(""); setEnTitle(""); setAmContent(""), setEnContent("")
			onSubmit({
				tag,
				title: { am: amTitle, en: enTitle },
				content: { am: amContent, en: enContent }
			})
		}
	}

	return (
		<>
			<Space h="2rem" />
			<Subtitle>Question title</Subtitle>
			<ValidationMessage name="title" validationResult={valiResult} />
			<Space h="0.5rem" />
			<ContentInput label="Amharic title" placeholder="Type Amharic title here"
				onChange={onAmTitle} value={amTitle} />
			<Space h="0.5rem" />
			<ContentInput label="English title" placeholder="Type English title here"
				onChange={onEnTitle} value={enTitle} />

			<Space h="1rem" />
			<Subtitle>Question in more detail (optional)</Subtitle>
			<ValidationMessage name="content" validationResult={valiResult} />
			<Space h="0.5rem" />
			<ContentInputMultiple label="Amharic" prompt="Question description in Amharic"
				value={amContent} onChange={handleAmContent} /> 

			<ContentInputMultiple label="English" prompt="Question description in English"
				value={enContent} onChange={handleEnContent} />

			<Space h="1rem" />
			<Subtitle>Tags</Subtitle>
			<Space h="0.5rem" />
			<TagList onChange={setTag} tagList={tagList} />

			<Space h="1rem" />
			<Button style={{ alignSelf: "flex-end" }}
				onClick={handleSubmit} active={loading == false}>
				{submitLabel}
			</Button>

			<Space h="1rem" />
			{loading && <BarLoader width="100%" color={primary} />}
		</>
	)
}

const defaultInitialValues = {
	tag: tagList[0],
	content: { am: "", en: "" },
	title: { am: "", en: "" },
}

export default QuestionForm
