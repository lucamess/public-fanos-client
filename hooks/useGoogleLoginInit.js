import { useEffect } from "react"
import { gapi } from "gapi-script"
import { googleClientId } from "src/config"

const useGoogleLoginInit = () => {
	useEffect(() => {
		const initClient = () => {
			gapi.client.init({ clientId: googleClientId, scope: "" })
		}
		gapi.load("client:auth2", initClient)
	})
}

export default useGoogleLoginInit
