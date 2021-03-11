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
		<Navbar expand="md" className="p-0">
			<Navbar.Brand as={Link} to="/">
				<img style={logoStyle} src={logo} alt="" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Button as={Link} to="/dashboard/orders" variant="warning" className="mr-1 font-weight-bold">
						Dashboard
					</Button>

					{isSignedIn ? (
						<Button variant="warning" as={Link} to="/" onClick={handleSignOut} className="mr-1 font-weight-bold">
							Sign Out
						</Button>
					) : (
						<Button variant="warning" as={Link} to="/sign-in" className="mr-1 font-weight-bold">
							Sign In
						</Button>
					)}

					<Button as={Link} to="/admin/orders" variant="warning" className="font-weight-bold">
						Admin
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
