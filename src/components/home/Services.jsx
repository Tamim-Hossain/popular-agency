import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/services";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			});
	}, [services]);

	return (
		<Container className="py-5 mb-5" id="services">
			<h2 className="font-weight-bold text-center text-success mb-5">Provide Awesome Services</h2>
			{loading ? (
				<div className="m-5 d-flex justify-content-center">
					<Loader type="Oval" color="#1cc7c1" height={120} width={120} />
				</div>
			) : (
				<Row className="d-flex justify-content-around">
					{services.map((service) => (
						<Col
							md={4}
							key={service._id}
							className="text-center text-decoration-none service-section p-5"
							as={Link}
							to={`/order/${service.title.split(" ").join("-")}`}
						>
							<img
								className="img-fluid rounded-circle w-25 mb-3"
								style={{ height: "70px", width: "80px" }}
								src={`data:image/png;base64 ,${service.image.img}`}
								alt=""
							/>
							<h5>{service.title}</h5>
							<p className="text-dark">{service.description}</p>
						</Col>
					))}
				</Row>
			)}
		</Container>
	);
};

export default Services;
