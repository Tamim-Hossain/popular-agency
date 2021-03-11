import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import { UserContext } from "../../App";

const OrderList = () => {
	const [userInfo] = useContext(UserContext);
	const { email } = userInfo;
	const [orderList, setOrderList] = useState([]);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/specificOrder?email=" + email;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setOrderList(data));
	}, [email, orderList]);

	const handleDelete = (_id) => {
		const URL = `https://popular-agency.herokuapp.com/delete/${_id}`;
		fetch(URL, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				swal({
					title: "Successfully Deleted.",
					icon: "success",
				});
			});
	};

	return (
		<>
			<h2 className="font-weight-bold text-info">Order list</h2>
			<Row>
				{orderList.map((order) => (
					<Col md={6} className="p-2">
						<div className="shadow rounded p-4" style={{ height: "200px" }}>
							<h4>{order.title}</h4>
							<p>{order.description}</p>
							<Button variant="danger" className="float-right mt-4" onClick={() => handleDelete(order._id)}>
								Delete
							</Button>
						</div>
					</Col>
				))}
			</Row>
		</>
	);
};

export default OrderList;
