import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import firebaseConfig from "./firebaseConfig";

if (!firebase.app.length) {
	firebase.app();
} else {
	firebase.initializeApp(firebaseConfig);
}

const Google = () => {
	const [, setUserInfo] = useContext(UserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const handleGoogleSignIn = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((result) => {
				const user = result.user;
				const { displayName, photoURL, email } = user;
				setUserInfo({
					isSignedIn: true,
					name: displayName,
					email,
					userPhoto: photoURL,
				});
				history.replace(from);
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};

	const logoStyle = {
		height: "130px",
		width: "150px",
	};

	return (
		<Container>
			<Helmet>
				<title>Sign In | Popular Agency</title>
			</Helmet>
			<Link to="/" style={logoStyle} className="d-flex justify-content-center m-auto">
				<img src={logo} alt="" className="img-fluid" />
			</Link>
			<div className="mx-auto w-50 m-auto border py-5">
				<h2 className="text-center mb-5 font-weight-bold">Sign In</h2>
				<Button
					className="w-50 m-auto rounded-pill"
					block="true"
					variant="outline-success"
					onClick={handleGoogleSignIn}
				>
					<FcGoogle className="mr-5" style={{ fontSize: "1.5rem" }} />
					Continue with Google
				</Button>
			</div>
		</Container>
	);
};

export default Google;
