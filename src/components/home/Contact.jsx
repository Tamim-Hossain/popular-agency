import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Contact = () => {
	const [sent, setSent] = useState(false);
	const { register, handleSubmit, errors } = useForm(); // initialize the hook
	const handleContactForm = (data, e) => {
		if (data) {
			swal({
				title: "Message sent successfully.",
				icon: "success",
			});
			setSent(true);
			setTimeout(() => {
				setSent(false);
			}, 5000);
		}
		e.target.reset();
	};

	return (
		<div className="bg-success pb-2 pt-5">
			<Container className="mt-5">
				<Row>
					<Col md={6} className="m-auto">
						<h1 className="text-white">Let us handle your project, professionally.</h1>
						<p className="mt-3 text-white">
							With well written codes, we build amazing apps for all platforms, mobile and web applications in general.
						</p>
					</Col>
					<Col md={6}>
						<Form onSubmit={handleSubmit(handleContactForm)}>
							<Form.Group>
								<Form.Control
									className={errors.email && "border-danger"}
									type="email"
									placeholder="Email address"
									name="email"
									ref={register({ required: true })}
								/>{" "}
								{errors.email && <span className="text-dark">This field is required.</span>}
							</Form.Group>
							<Form.Group>
								<Form.Control
									className={errors.name && "border-danger"}
									type="name"
									placeholder="Name / company's name"
									name="name"
									ref={register({ required: true })}
								/>{" "}
								{errors.name && <span className="text-dark">This field is required.</span>}
							</Form.Group>
							<Form.Group>
								<Form.Control
									className={errors.message && "border-danger"}
									as="textarea"
									rows={5}
									placeholder="Message.."
									name="message"
									ref={register({ required: true })}
								/>{" "}
								{errors.message && <span className="text-dark">This field is required.</span>}
							</Form.Group>
							{sent ? (
								<p className="px-5 py-2 rounded font-weight-bold bg-warning d-inline">Thanks..</p>
							) : (
								<Button type="submit" variant="warning" className="px-5 font-weight-bold">
									Send Message
								</Button>
							)}
						</Form>
					</Col>
				</Row>
			</Container>
			<p className="text-center text-white mt-5 pt-5">&#169;{new Date().getFullYear()}, All Rights Reserved.</p>
		</div>
	);
};

export default Contact;
