import axios from "axios"

export const colors = {
	primary: "#0C3C78",
	primaryLighter: "#1156AA",
	primaryDarker: "#0A3467",
	secondary: "#F5430F",
	text0: "#121212",
	text1: "#363636",
	text2: "#545454",
	text3: "#818181",
	dark: "#050524",
	light: "#D6EDF4",
	lightDarker: "#89CBE0",
}

export const essayFormLink = "https://forms.gle/tmE616AGAr67E8Wx7"
export const tagList = ["Scholarships", "SAT", "Extracurriculars", "Essay", "Commonapp"]
export const axiosInstance = axios.create({
	baseURL: "https://public-fanos-server.vercel.app/",
	// baseURL: "http://localhost:5000/",
})
export const errorTranslations = {
	"TEAM_ONLY": "This action is allowed for team members only",
	"FIELD_MISSING": "Please complete all the required fields",
	"USER_DOES_NOT_EXIST": "User doesn't exists. Please refresh the page to relogin",
}

export const menuList = [
	{ link: "/", label: "home" },
	{ link: "/blogs", label: "blogs" },
	{ link: "/questions", label: "questions" },
	{ link: "/team", label: "team" },
	// { link: "/admin", label: "Admin" },
]



