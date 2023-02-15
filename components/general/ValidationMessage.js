import { Subtitle } from "comp"

const fieldRequiredFn = a => a.replace(" ", "") != ""
const someRequiredFn = value => value.some(fieldRequiredFn)

export const tests = {
	fieldRequired: {
		validator: fieldRequiredFn,
		message: "This field is required",
	},
	someRequired: {
		validator: someRequiredFn,
		message: "At least one field is required",
	}
}

export const isEverythingOkay = (validationResult) => {
	let everythingOkay = true

	Object.keys(validationResult).forEach(name => {
		if(validationResult[name].length > 0)
			everythingOkay = false
	})

	return everythingOkay
}

export const validate = (validationTests) => {
	const validationResult = {}
	let everythingOkay = true

	validationTests.forEach(field => {
		validationResult[field.name] = []

		field.tests.forEach(test => {
			if(test.validator(field.value) == false) { // test failed
				everythingOkay = false
				validationResult[field.name].push(test.message)
			}
		})
	})

	return [everythingOkay, validationResult]
}

const ValidationMessage = ({ name, validationResult }) => {
	if(!validationResult[name])
		return null

	return (
		<Subtitle color="red">
			{validationResult[name].join(" ")}
		</Subtitle>
	)
	
}

export default ValidationMessage

