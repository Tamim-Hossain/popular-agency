import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Feedback = () => {
	const [feedback, setFeedback] = useState([]);
	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/feedback";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setFeedback(data));
	}, [feedback]);

	return (
		<Container className="py-5">
			<h2 className="text-center font-weight-bold text-success">Clients Feedback</h2>
			<Row>
				{feedback.map((review) => (
					<Col md={4}>
						<div>
							<div>
								<img className='img-fluid w-25' src={review.userPhoto} alt="" />
							</div>
							<div>
								<h6>{review.name}</h6>
								<p>{review.company}</p>
							</div>
							<div>
								<p>{review.description}</p>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Feedback;
