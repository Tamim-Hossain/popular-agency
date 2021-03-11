import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";

const Feedback = () => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/feedback";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setFeedback(data);
				setLoading(false);
			});
	}, [feedback]);

	return (
		<Container className="py-5 mt-5">
			<h2 className="text-center font-weight-bold text-success mb-5">Clients Feedback</h2>
			{loading ? (
				<div className="m-5 d-flex justify-content-center">
					<Loader type="Oval" color="#1cc7c1" height={120} width={120} />
				</div>
			) : (
				<Row>
					{feedback.map((review) => (
						<Col key={review._id} md={4}>
							<Card className="p-4 m-2">
								<div className="d-flex justify-content-start">
									<img className="w-25 img-fluid rounded-circle" src={review.userPhoto} alt="" />
									<div className="ml-4">
										<h4>{review.name}</h4>
										<h5>{review.position}</h5>
									</div>
								</div>
								<p className="text-secondary mt-3">{review.description}</p>
							</Card>
						</Col>
					))}
				</Row>
			)}{" "}
		</Container>
	);
};

export default Feedback;
