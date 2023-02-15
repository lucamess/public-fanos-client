import styled from "styled-components"
import { Button, Space, H5, Subtitle } from "comp"
import GoogleIcon from "src/icons/google.js"
import useCurrUser from "src/hooks/useCurrUser"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 500px;
	margin: 2rem auto;

	@media screen and (max-width: 64em) {
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
	}
`

const LoginPage = () => {
	const { signIn } = useCurrUser()
	return (
		<Container>
			<H5>Log in or sign up in seconds</H5>
			<Space h="0.5rem" />
			<Subtitle>Ullamcorper odio viverra cursus hendrerit nunc. Nunc sollicitudin dignissim auctor in.
			</Subtitle>
			<Space h="3rem" />
			<Button onClick={signIn} type="outline" style={{ alignSelf: "center" }}>
				<GoogleIcon />
				Continue with Google
			</Button>
		</Container>
	)
}

export default LoginPage
