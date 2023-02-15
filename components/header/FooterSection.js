import styled from "styled-components"
import { Subtitle } from "comp"

const Container = styled.div`
	background: #1d1d1d;
	display: flex;
	justify-content: center;
	padding: 2rem;
	box-sizing: border-box;
	width: 100%;
`

const FooterSection = () => {
	return (
		<Container>
			<Subtitle color="white">
				Copyrights © 2022 Fanos College Prep Assistance. All rights reserved
			</Subtitle>
		</Container>
	)
}

export default FooterSection

