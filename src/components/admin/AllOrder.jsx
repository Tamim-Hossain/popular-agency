import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";
import swal from "sweetalert";
import { UserContext } from "../../App";

const AllOrder = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const { email } = userInfo;
	const [orderList, setOrderList] = useState([]);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/orders";
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
		<Row className="pb-5 pt-5 bg-light rounded">
			<Col md={3}>
				{" "}
				<h5 className="text-center text-secondary font-weight-bold">NAME</h5>
				<hr />
			</Col>
			<Col md={4}>
				{" "}
				<h5 className="text-center text-secondary font-weight-bold">EMAIL</h5>
				<hr />
			</Col>
			<Col md={3}>
				{" "}
				<h5 className="text-center text-secondary font-weight-bold">PROJECT</h5>
				<hr />
			</Col>
			<Col md={2}>
				{" "}
				<h5 className="text-center text-secondary font-weight-bold">ACTION</h5>
				<hr />
			</Col>
			{orderList.length === 0 && (
				<p className="font-weight-bold display-4" style={{ margin: "auto" }}>
					No data found.
				</p>
			)}
			{orderList.map((order, idx) => (
				<>
					<Col className="text-center font-weight-bold" md={3}>
						<p>{order.name}</p> <hr style={{ width: "800px" }} />
					</Col>
					<Col className="text-center font-weight-bold" md={4}>
						<p>{order.email}</p>
					</Col>
					<Col className="text-center font-weight-bold" md={3}>
						<p>{order.title}</p>
					</Col>
					<Col className="text-center font-weight-bold" md={2}>
						<p
							title="Delete Item"
							onClick={() => handleDelete(order._id)}
							className="text-danger"
							style={{ cursor: "pointer" }}
						>
							<RiDeleteBin5Fill />
						</p>
					</Col>
				</>
			))}
		</Row>
	);
};

export default AllOrder;
