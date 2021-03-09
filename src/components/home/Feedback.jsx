import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Feedback = () => {
	const [feedback, setFeedback] = useState([]);
	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/feedback";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setFeedback(data));
	}, [feedback]);

	return (
		<Container className="py-5 mt-5">
			<h2 className="text-center font-weight-bold text-success mb-5">Clients Feedback</h2>
			<Row>
				{feedback.map((review) => (
					<Col md={4}>
						<Card className="p-4">
							<div className="d-flex justify-content-start">
								<img className="w-25 img-fluid rounded-circle" src={review.userPhoto} alt="" />
								<div className="ml-4">
									<h3>{review.name}</h3>
									<h5>{review.company}</h5>
								</div>
							</div>
							<p className="text-secondary mt-3">{review.description}</p>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Feedback;
