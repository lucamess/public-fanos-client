import { useEffect } from "react"
import { gapi } from "gapi-script"

export const googleClientId = "877555200368-jkbkpjhrpptp0i3qihgnipaifc5ikse4.apps.googleusercontent.com"

const useGoogleLoginInit = () => {
	useEffect(() => {
		const initClient = () => {
			gapi.client.init({ clientId: googleClientId, scope: "" })
		}
		gapi.load("client:auth2", initClient)
	})
}

export default useGoogleLoginInit
