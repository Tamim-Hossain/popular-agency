import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../shared/Menu";
import AddFeedback from "./AddFeedback";
import OrderList from "./OrderList";

const Dashboard = () => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<Container>
			<Menu />
			<Row>
				<Col md={3}>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/all">
						All Orders
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/feedback">
						Add Feedback
					</NavLink>
				</Col>
				<Col md={9}>
					{pathname === "/dashboard/all" && <OrderList />}
					{pathname === "/dashboard/feedback" && <AddFeedback />}
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
