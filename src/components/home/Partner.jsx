import { Container } from "react-bootstrap";
import airbnb from "../../images/airbnb.png";
import google from "../../images/google.png";
import netflix from "../../images/netflix.png";
import slack from "../../images/slack.png";
import uber from "../../images/uber.png";

const Partner = () => {
	const supporters = [
		{
			logo: slack,
		},
		{
			logo: google,
		},
		{
			logo: uber,
		},
		{
			logo: airbnb,
		},
		{
			logo: netflix,
		},
	];

	return (
		<Container className="my-5 p-5 text-center">
			<h2 className="font-weight-bold text-success">Our Supporters</h2>
			{supporters.map((partner, idx) => (
				<img className="m-4 img-fluid" style={{ height: "50px" }} src={partner.logo} key={idx} alt="" />
			))}
		</Container>
	);
};

export default Partner;
