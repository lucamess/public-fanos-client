import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "src/main.css"
import "react-toastify/dist/ReactToastify.css"
import "react-loading-skeleton/dist/skeleton.css"
import { ToastContainer } from "react-toastify"
import HomePage from "src/views/home/HomePage"
import LoginPage from "src/views/login/LoginPage"
import TeamPage from "src/views/team/TeamPage"
import BlogPage from "src/views/blogs/BlogPage"
import AddBlogPage from "src/views/blogs/AddBlogPage"
import SingleBlogPage from "src/views/blogs/SingleBlogPage"
import QuestionsPage from "src/views/questions/QuestionsPage"
import SingleQAPage from "src/views/questions/SingleQAPage"
import AskQuestionPage from "src/views/questions/AskQuestionPage"
import AccountListPage from "src/views/admin/AccountListPage"
import { Header } from "comp"
import { colors } from "./config"
import { RecoilRoot } from "recoil"
import useGoogleLoginInit from "src/hooks/useGoogleLoginInit"

const GlobalStyle = createGlobalStyle`
	:root {
		--primary: ${props => props.theme.primary};
		--primary-lighter: ${props => props.theme.primaryLighter};
		--primary-darker: ${props => props.theme.primaryDarker};
		--secondary: ${props => props.theme.secondary};
		--text0: ${props => props.theme.text0};
		--text1: ${props => props.theme.text1};
		--text2: ${props => props.theme.text2};
		--text3: ${props => props.theme.text3};
		--dark: ${props => props.theme.dark};
		--light: ${props => props.theme.light};
		--light-darker: ${props => props.theme.lightDarker};
	}

	body {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
	}
`


const App = () => {
	useGoogleLoginInit()

	return (
		<RecoilRoot>
		<ThemeProvider theme={colors}>
		<BrowserRouter>
			<ToastContainer />
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/team" element={<TeamPage />} />
				<Route path="/blogs" element={<BlogPage />} />
				<Route path="/addblog" element={<AddBlogPage />} />
				<Route path="/questions" element={<QuestionsPage />} />
				<Route path="/singleqa/:id" element={<SingleQAPage />} />
				<Route path="/askquestion" element={<AskQuestionPage />} />
				<Route path="/admin" element={<AccountListPage />} />
				<Route path="/singleblog/:id" element={<SingleBlogPage />} />
			</Routes>
		</BrowserRouter>
		</ThemeProvider>
		</RecoilRoot>
	)
 }

export default App


