import styled  from "styled-components"
import { TeamMember, Space, H4 } from "comp"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const List = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 2rem;
	overflow-x: scroll;
`

const webTeamMembers = [
	{
		name: "Euel Lemma", 
		title: "Lead Developer",
		description: "Euel designed this website in Figma and led the web development team. He mainly worked on the front-end.",
		imgSrc: "/gray-image.jpeg",
	},
	{
		name: "Noah Eyob", 
		title: "Backend Developer",
		description: "Naoh worked on the back-end part of the system. He was responsible for managing database schemas.",
		imgSrc: "/gray-image.jpeg",
	},
]


const MemberListSection = () => {
	return (
		<Container>
			<H4 bold>Web Development Team</H4>
			<Space h="3rem" />
			<List>
				{webTeamMembers.map(member =>
					<TeamMember
						key={member.name}
						name={member.name}
						title={member.title}
						imgSrc={member.imgSrc}
						description={member.description} />
				)}
			</List>
		</Container>
	)
}

export default MemberListSection
