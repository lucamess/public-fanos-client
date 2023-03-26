import styled from "styled-components"
import { H1 } from "comp"

const UnderDevPage = () => {
	return (
		<Container>
			<H1 center>Page under maintainance</H1>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8rem 2rem;
`

export default UnderDevPage

