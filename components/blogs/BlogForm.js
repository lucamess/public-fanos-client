import styled, { useTheme } from "styled-components"
import { useState } from "react"
import BarLoader from "react-spinners/BarLoader"
import { Subtitle, Button, Space, Input, ContentInput, ContentInputMultiple, ValidationMessage } from "comp"
import useTextInputState from "src/hooks/useTextInputState"
import { tests, validate } from "comp/general/ValidationMessage"

const AddBlogPageForm = ({ submitLabel = "Post", onSubmit, loading, initialValues = defaultInitialValues }) => {
	const [amTitle, onAmTitle, setAmTitle] = useTextInputState(initialValues.title.am)
	const [enTitle, onEnTitle, setEnTitle] = useTextInputState(initialValues.title.en)
	const [imgSrc, onImgSrcChange, setImgSrc] = useTextInputState(initialValues.imgSrc)
	const [amContent, onAmContent, setAmContent] = useTextInputState(initialValues.content.am)
	const [enContent, onEnContent, setEnContent] = useTextInputState(initialValues.content.en)
	const [valiResult, setValiResult] = useState({})
	const { primary } = useTheme()

	const valiTests = [
		{
			name: "title",
			value: [amTitle, enTitle],
			tests: [tests.someRequired],
		},
		{
			name: "imgSrc",
			value: imgSrc,
			tests: [tests.fieldRequired],
		},
		{
			name: "content",
			value: [amContent, enContent],
			tests: [tests.someRequired],
		}
	]


	const handleSubmit = () => {
		const [everythingOkay, valiResult] = validate(valiTests)
		setValiResult(valiResult)

		if(everythingOkay) {
			setAmTitle(""); setEnTitle(""); setImgSrc(""); setAmContent(""); setEnContent("");
			onSubmit({
				imgSrc,
				title: { am: amTitle, en: enTitle },
				content: { am: amContent, en: enContent, }
			})
		}

	}

	return (
		<>
			<Space h="2rem" />
			<Subtitle bold>Blog title</Subtitle>
			<ValidationMessage name="title" validationResult={valiResult} />
			<Space h="0.5rem" />
			<ContentInput label="Amharic title" placeholder="Type Amharic title here"
				onChange={onAmTitle} value={amTitle} />

			<Space h="0.5rem" />
			<ContentInput label="English title" placeholder="Type English title here"
				onChange={onEnTitle} value={enTitle} />

			<Space h="1rem" />
			<Subtitle bold>Blog image link</Subtitle>
			<ValidationMessage name="imgSrc" validationResult={valiResult} />
			<Space h="0.5rem" />
			<InputWide onChange={onImgSrcChange} value={imgSrc} />


			<Space h="2rem" />
			<Subtitle bold>Select the languages of the blog</Subtitle>
			<ValidationMessage name="content" validationResult={valiResult} />
			<Space h="0.5rem" />
			<ContentInputMultiple label="Amharic content" placeholder="Amharic blog content (paste your markdown here)"
				onChange={onAmContent} value={amContent} />

			<Space h="0.5rem" />
			<ContentInputMultiple label="English content" placeholder="English blog content (paste your markdown here)"
			onChange={onEnContent} value={enContent} />

			<Space h="1rem" />
			<Button style={{ alignSelf: "flex-end" }}
				onClick={handleSubmit} active={loading == false}>
				{submitLabel}
			</Button>
			<Space h="1rem" />
			{ loading && <BarLoader width="100%" color={primary} />}
		</>
	)
}

const InputWide = styled(Input)`width: 100%`

const defaultInitialValues = {
	imgSrc: "",
	content: { am: "", en: "" },
	title: { am: "", en: "" },
}

export default AddBlogPageForm
