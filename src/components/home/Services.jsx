import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/services";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [services]);

	return (
		<Container className="py-5 mb-5">
			<h2 className="font-weight-bold text-center text-success mb-5">Provide Awesome Services</h2>
			<Row>
				{services.map((service) => (
					<Col
						md={4}
						key={service._id}
						className="text-center text-decoration-none service-section p-5"
						as={Link}
						to={`/order/${service.title.split(" ").join("-")}`}
					>
						<img className="img-fluid w-25 mb-3" src={`data:image/png;base64 ,${service.image.img}`} alt="" />
						<h5>{service.title}</h5>
						<p className="text-dark">{service.description}</p>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Services;
