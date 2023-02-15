import { Button, CurrUserAvatar } from "comp"

const LoginButton = ({ signIn, currUser }) => {
	return (
		currUser.loaded 
		? <CurrUserAvatar currUser={currUser} />
		: <Button onClick={signIn} size="small">
			Signup
		</Button>
	)
}

export default LoginButton
