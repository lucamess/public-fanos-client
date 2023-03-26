import styled from "styled-components"
import { H1, H6, Space, Button } from "comp"

const MentorSection = () => {
	return (
		<Container>
		<InnerContainer>
			<H1 bold center>An arsenal of ipsum comque ipsum ut et consequatrun qui</H1>
			<Space h="1rem" />
			<H6 center>Pick from a curated collection of mentors ipsum cumque ipsum ut et consequatur porro aspernatur qui cupiditate enim quisquam temporibus aut error praesentium 
			</H6>

			<Space h="3rem" />
			<ButtonContainer>
				<Button type="outline" style={{ background: "transparent", borderColor: "#242424", color: "#242424", }}>Find a mentor</Button>
				<Button type="outline" style={{ background: "transparent", borderColor: "#242424", color: "#242424", }}>Become a mentor</Button>
			</ButtonContainer>
		</InnerContainer>
		</Container>
	)
}

const Container = styled.div`
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(202,212,225,1) 60%, rgba(109,138,174,1) 100%); 
background: rgba(109,138,174);
`

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem auto;
	max-width: 800px;
`

const ButtonContainer = styled.div`
	display: flex;
	gap: 3rem;
	align-self: center;
`

export default MentorSection

