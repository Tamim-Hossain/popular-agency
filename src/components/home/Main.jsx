import { Button, Col, Container, Row } from "react-bootstrap";
import mainImg from "../../images/mainImg.svg";
import Menu from "../shared/Menu";

const Main = () => {
	return (
		<div style={{ height: "100vh" }} className="bg-success">
			<Container>
				<Menu />
				<Row className="pt-5 pb-5">
					<Col md={5}>
						<h1 className="font-weight-bold text-white mb-4">
							Let’s Grow Your
							<br />
							Brand To The
							<br />
							Next Level
						</h1>
						<p className="text-white">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis animi labore deserunt illum quibusdam
							minus reprehenderit! Eius esse dolorum fugiat dolores provident. Voluptatibus perferendis quis sint facere
							quidem quia obcaecati delectus, ducimus fugiat.
						</p>
						<Button variant="warning" className="px-5 font-weight-bold mt-3">
							Hire Us
						</Button>
					</Col>
					<Col md={7}>
						<img src={mainImg} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;
