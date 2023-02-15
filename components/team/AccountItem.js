import { useState } from "react"
import styled, { useTheme, css } from "styled-components"
import { Subtitle } from "comp"
import TrashIcon from "src/icons/trash"

const Container = styled.div`
	display: flex;
	background: #fff;
	border: 1px solid #ddd;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 1rem 2rem;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`

const ATContainer = styled.div`
	display: flex;
	padding: 0.5rem 1.5rem;
	background: #F5F5F5;
	gap: 1rem;
	border-radius: 8px;
`

const AccountType = styled.div`
	color: var(--text0);
	cursor: pointer;

	${props => props.selected && css`
		color: var(--secondary);
		font-weight: bold;
	`}
`

const DeleteButton = styled.div`
	cursor: pointer;
`

const defaultAccountTypeList = ["Admin", "Team", "User"]
const AccountTypeList = ({
	typeList = defaultAccountTypeList,
	onChange = () => null,
}) => {
	const [selected, setSelected] = useState(typeList[0])
	const handleClick = type => () => {
		setSelected(type)
		onChange(type)
	}
	return (
		<ATContainer>
			{typeList.map(type =>
				<AccountType
					key={type}
					onClick={handleClick(type)}
					selected={selected == type}>
					{type}
				</AccountType>
			)}
		</ATContainer>
	)
}

const AccountItem = () => {
	const { text1 } = useTheme()
	return (
		<Container>
			<Subtitle style={{ flexGrow: 1 }} bold color={text1}>Melaku Balcha</Subtitle>
			<AccountTypeList />
			<DeleteButton>
				<TrashIcon color={text1} size="1.5rem" />
			</DeleteButton>
		</Container>
	)
}

export default AccountItem
