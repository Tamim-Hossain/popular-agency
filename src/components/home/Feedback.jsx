import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

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
			<Row>{feedback.map((review) => console.log(review))}</Row>
		</Container>
	);
};

export default Feedback;
