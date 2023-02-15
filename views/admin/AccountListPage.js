import styled from "styled-components"
import { Button, AccountItem, H3, SearchBar, Space } from "comp"

const Container = styled.div`
	margin: 2rem auto;
	width: 800px;

	@media screen and (max-width: 64em) {
		width: 100%;
		padding: 1rem;
		margin: 1rem auto;
		box-sizing: border-box;
	}
`

const AccountListPage = () => {
	return (
		<Container>
			<H3>Account List</H3>
			<Space h="1rem" />
			<SearchBar />
			<Space h="2rem" />

			<AccountItem />
			<Space h="0.5rem" />
			<AccountItem />
			<Space h="0.5rem" />
			<AccountItem />

			<Space h="1rem" />
			<Button type="text">Load More</Button>
		</Container>
	)
}

export default AccountListPage

