import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import swal from "sweetalert";
import { UserContext } from "../../App";

const OrderList = () => {
	const [userInfo] = useContext(UserContext);
	const { email } = userInfo;
	const [orderList, setOrderList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/specificOrder?email=" + email;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setOrderList(data);
			});
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
			{loading ? (
				<div className="m-5 d-flex justify-content-center">
					<Loader type="Oval" color="#1cc7c1" height={120} width={120} />
				</div>
			) : (
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
			)}
		</>
	);
};

export default OrderList;
