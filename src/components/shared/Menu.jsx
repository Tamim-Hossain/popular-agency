import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Menu = () => {
	const logoStyle = {
		height: "100px",
		width: "120px",
	};

	return (
		<Navbar expand="lg" className="p-0">
			<Navbar.Brand as={Link} to="/">
				<img style={logoStyle} src={logo} alt="" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
