import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";

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
					console.log(result);
					alert("test");
					e.target.reset();
				});
		}
	};

	const logoStyle = {
		height: "130px",
		width: "150px",
	};

	return (
		<Container>
			<Link to="/" style={logoStyle} className="d-flex justify-content-center m-auto">
				<img src={logo} alt="" className="img-fluid" />
			</Link>
			<Form onSubmit={handleSubmit(handleOrder)} className="w-50 m-auto">
				<Form.Group controlId="name">
					<Form.Control
						placeholder="Name / company's name"
						ref={register({ required: true })}
						name="name"
						defaultValue={name}
					/>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Control
						type="email"
						placeholder="Email address"
						ref={register({ required: true })}
						name="email"
						defaultValue={email}
					/>
				</Form.Group>

				<Form.Group controlId="title">
					<Form.Control
						placeholder="Service Name"
						ref={register({ required: true })}
						name="title"
						defaultValue={title.split("-").join(" ")}
					/>
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Control
						as="textarea"
						rows={4}
						placeholder="Project Details.."
						ref={register({ required: true })}
						name="description"
					/>
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
