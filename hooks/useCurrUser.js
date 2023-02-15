import { useRecoilState } from "recoil"
import { currUserState } from "src/states"
import { useGoogleLogin } from "react-google-login"
import { googleClientId } from "src/hooks/useGoogleLoginInit"
import { registerUser } from "src/api"


const useCurrUser = () => {
	const [ currUser, setCurrUser ] = useRecoilState(currUserState)

	const handleFailure = err => console.log("failure", err)
	const handleSuccess = ({ profileObj }) => {
		const { email, givenName, familyName, googleId } = profileObj
		const newCurrUser = {
			email, googleId,
			name: givenName + " " + familyName,
			loaded: true,
		}
		setCurrUser(newCurrUser)
		registerUser(newCurrUser)
	}

	const { signIn } = useGoogleLogin({
		clientId: googleClientId,
		onSuccess: handleSuccess,
		onFailure: handleFailure,
		isSignedIn: true,
	})

	return {
		signIn, currUser
	}
}

export default useCurrUser
