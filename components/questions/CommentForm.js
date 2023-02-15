import { useTheme } from "styled-components"
import { ContentInputMultiple, Space, Button } from "comp"
import useTextInputState from "src/hooks/useTextInputState"
import BarLoader from "react-spinners/BarLoader"

const CommentForm = ({ loading, submitLabel = "Post", onSubmit }) => {
	const [ amContent, handleAmContent, setAmContent ] = useTextInputState()
	const [ enContent, handleEnContent, setEnContent ] = useTextInputState()
	const { primary } = useTheme()

	const handleSubmit = () => {
		setAmContent(""); setEnContent("");
		onSubmit({
			content: { am: amContent, en: enContent },
		})
	}
	return (
		<>
			<ContentInputMultiple label="Amharic" prompt="Your comment in Amharic"
				value={amContent} onChange={handleAmContent} />
			<ContentInputMultiple label="English" prompt="Your comment in English"
				value={enContent} onChange={handleEnContent} />
			<Space h="0.5rem" />

			<Button active={loading == false}
				onClick={handleSubmit} small style={{ alignSelf: "flex-end" }}>
				{submitLabel}
			</Button>
			
			<Space h="1rem" />
			{ loading && <BarLoader width="100%" color={primary} />}
		</>
	)
}

export default CommentForm
