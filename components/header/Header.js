import { useState } from "react"
import styled, { css } from "styled-components"
import { useNavigate, useLocation } from "react-router-dom"
import HamburgerIcon from "src/icons/hamburger"
import CloseIcon from "src/icons/close"
import { LoginButton, LangButton } from "comp"
import { menuList } from "src/config"
import useCurrUser from "src/hooks/useCurrUser"
import useLang from "src/hooks/useLang"


const Header = () => {
	const [ menuOpen, setMenuOpen ] = useState(false)
	const navigate = useNavigate()

	const location = useLocation()
	const { signIn, currUser } = useCurrUser()
	const { lang, setLang, t } = useLang()
	const goto = link => () => {
		navigate(link)
		setMenuOpen(false)
	}
	const isActive = link => {
		// exception for the home page bc otherwise it gets active on every path
		
		const pathname = location.pathname.split("?")[0]
		if(link == "/" && pathname == "/")
			return true
		if(link == "/" && pathname != "/")
			return false

		return pathname.indexOf(link) != -1
	}


	return (
		<HeaderContainer>
			<HeaderTitle onClick={goto("/")}>Fanos</HeaderTitle>
			
			<Hamburger onClick={() => setMenuOpen(true)} />
			<MenuList menuOpen={menuOpen}>
				<Closeburger onClick={() => setMenuOpen(false)} />
				{translateMenuLabel(menuList, t).map(item => (
					<MenuItem
						key={item.link}
						active={isActive(item.link)}
						onClick={goto(item.link)}
					>
						{item.label}
					</MenuItem>
				))}
				<LangButton lang={lang} setLang={setLang} onClick={() => setMenuOpen(false)} />
				<LoginButton signIn={signIn} currUser={currUser} />
			</MenuList>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	padding: 1rem 4rem;
	flex-wrap: wrap;

	@media screen and (max-width: 64em) {
		padding: 1rem 2rem;
	}
`

const HeaderTitle = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
	flex-grow: 1;
	color: var(--primary);
	cursor: pointer;
`

const HamburgerContainer = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	@media screen and (max-width: 64em) {
		display: flex;
	}
`
const Hamburger = ({ onClick }) => {
	return (
		<HamburgerContainer onClick={onClick}>
			<HamburgerIcon size="1.5rem" /> 
		</HamburgerContainer>
	)
}

const CloseContainer = styled.div`
	align-self: flex-end;
	cursor: pointer;
	display: none;

	@media screen and (max-width: 64em) {
		display: block;
	}
`
const Closeburger = ({ onClick }) => {
	return (
		<CloseContainer onClick={onClick}>
			<CloseIcon size="2rem" color="white" />
		</CloseContainer>
	)
}

const MenuList = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	z-index: 2;

	@media screen and (max-width: 64em) {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		flex-direction: column;
		align-items: flex-start;
		background: var(--primary);
		padding: 2rem;
		box-sizing: border-box;
		display: flex;
		transition: visibility 0.25s, opacity 0.25s linear;
		visibility: ${prop => prop.menuOpen ? "visible" : "hidden"};
		opacity: ${prop => prop.menuOpen ? 1 : 0}
	}
`

const MenuItem = styled.div`
	cursor: pointer;

	${props => props.active && css`
		color: var(--secondary);
		font-weight: bold;
	`}

	@media screen and (max-width: 64em) {
		font-size: 1.2rem;
		color: white;

		${props => props.active && css`
			color: var(--secondary);
			font-weight: bold;
		`}
	}

`

const translateMenuLabel = (menuList, t) => {
	const resultMenuList = []

	menuList.forEach(item => {
		resultMenuList.push({
			link: item.link,
			label: t(item.label),
		})
	})

	return resultMenuList
}

export default Header
