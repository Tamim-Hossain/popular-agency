import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
	return (
		<div className="bg-success pb-2 pt-5">
			<Container className="mt-5">
				<Row>
					<Col md={6} className="m-auto">
						<h2 className="text-white">Let us handle your project, professionally.</h2>
						<p className="mt-3 text-white">
							With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
						</p>
					</Col>
					<Col md={6}>
						<Form>
							<Form.Group>
								<Form.Control type="email" placeholder="Email address.." />
							</Form.Group>
							<Form.Group>
								<Form.Control type="text" placeholder="Name / company's name.." />
							</Form.Group>
							<Form.Group>
								<Form.Control as="textarea" rows={5} placeholder="Message.." />
							</Form.Group>
							<Button variant="warning" className="px-5 font-weight-bold">
								Send
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
			<p className="text-center text-white mt-5 pt-5">&#169;{new Date().getFullYear()}, All Rights Reserved.</p>
		</div>
	);
};

export default Contact;
