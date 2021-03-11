import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../App";
import Menu from "../shared/Menu";

const Order = () => {
	const [userInfo] = useContext(UserContext);
	const { register, handleSubmit, errors } = useForm();
	const { name, email } = userInfo;
	let history = useHistory();
	let { title } = useParams();

	const handleOrder = (data, e) => {
		if (data) {
			fetch("https://popular-agency.herokuapp.com/addOrder", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((result) => {
					swal({
						title: "Order Confirmed!",
						icon: "success",
					});
					e.target.reset();
					history.push("/dashboard/orders");
				});
		}
	};

	return (
		<Container>
			<Menu />
			<h2 className="text-center font-weight-bold text-info">Preview Order</h2>
			<Form onSubmit={handleSubmit(handleOrder)} className="w-50 m-auto pt-5">
				<Form.Group controlId="name">
					<Form.Control
						placeholder="Name / company's name"
						ref={register({ required: true })}
						name="name"
						defaultValue={name}
						className={errors.name && "border-danger"}
					/>{" "}
					{errors.name && <span className="text-danger">Name is required.</span>}
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Control
						type="email"
						placeholder="Email address"
						ref={register({ required: true })}
						name="email"
						defaultValue={email}
						className={errors.email && "border-danger"}
					/>{" "}
					{errors.email && <span className="text-danger">Email is required.</span>}
				</Form.Group>

				<Form.Group controlId="title">
					<Form.Control
						placeholder="Service Name"
						ref={register({ required: true })}
						name="title"
						defaultValue={title.split("-").join(" ")}
						className={errors.title && "border-danger"}
					/>{" "}
					{errors.title && <span className="text-danger">Title is required.</span>}
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Control
						as="textarea"
						rows={4}
						placeholder="Project Details.."
						ref={register({ required: true })}
						className={errors.description && "border-danger"}
						name="description"
					/>{" "}
					{errors.description && <span className="text-danger">Description is required.</span>}
				</Form.Group>
				<Button type="submit" variant="success">
					Confirm Order
				</Button>
				<Button as={Link} to="/" className="float-right" variant="danger">
					Cancel Order
				</Button>
			</Form>
		</Container>
	);
};

export default Order;
