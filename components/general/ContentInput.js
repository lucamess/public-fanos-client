import { useState } from "react"
import styled from "styled-components"
import { Space, Input, InputMultiple, Subtitle } from "comp"

const InputMultipleWide = styled(InputMultiple)`width: 100%`
const InputWide = styled(Input)`width: 100%`

const createContentInput = (InputComp) =>
	function ContentInput({ label, prompt, value, onChange, placeholder = "" }) {
	const [checked, setChecked] = useState(false)
	const checkboxId = label + "checkbox"

	const handleCheckbox = (e) => {
		setChecked(e.target.checked)
	}

	return (
		<>
			<label htmlFor={checkboxId}>
				<Subtitle>
					<input
						type="checkbox" id={checkboxId}
						onChange={handleCheckbox} checked={checked} />
					{" "}
					{label}
					</Subtitle>
				</label>
			<Space h="1rem" />

			{checked == true && 
			<>
				<Subtitle>{prompt}</Subtitle>
				<Space h="0.5rem" />
				<InputComp placeholder={placeholder} onChange={onChange} value={value} />
				<Space h="2rem" />
			</>
			}

		</>
	)
}

export const ContentInput = createContentInput(InputWide)
export const ContentInputMultiple = createContentInput(InputMultipleWide)

