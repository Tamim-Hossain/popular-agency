import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../shared/Menu";
import AddService from "./AddService";
import AllOrder from "./AllOrder";

const AdminDashboard = () => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<Container>
			<Menu />
			<Row>
				<Col md={3} className="mt-2">
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/admin/orders">
						All Orders
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/admin/service">
						Add Service
					</NavLink>
				</Col>
				<Col md={9}>
					{pathname === "/admin/orders" && <AllOrder />}
					{pathname === "/admin/service" && <AddService />}
				</Col>
			</Row>
		</Container>
	);
};

export default AdminDashboard;
