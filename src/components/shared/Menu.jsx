import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";

const Menu = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const { isSignedIn } = userInfo;

	const logoStyle = {
		height: "130px",
		width: "150px",
	};

	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				setUserInfo("");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<Navbar expand="lg" className="p-0">
			<Navbar.Brand as={Link} to="/">
				<img style={logoStyle} src={logo} alt="" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					{isSignedIn ? (
						<Button variant="warning" as={Link} to="/" onClick={handleSignOut}>
							Sign Out
						</Button>
					) : (
						<Button variant="warning" as={Link} to="/sign-in">
							Sign In
						</Button>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
