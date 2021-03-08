import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgOne from "../../images/carousel-1.png";
import imgTwo from "../../images/carousel-2.png";
import imgThree from "../../images/carousel-3.png";
import imgFour from "../../images/carousel-4.png";
import imgFive from "../../images/carousel-5.png";
import "./Works.css";

const Works = () => {
	const worksDemo = [
		{
			img: imgOne,
		},
		{
			img: imgTwo,
		},
		{
			img: imgThree,
		},
		{
			img: imgFour,
		},
		{
			img: imgFive,
		},
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="bg-dark">
			<Container className="py-5">
				<h2 className="font-weight-bold text-success text-center mb-5">Our Works</h2>
				<Carousel responsive={responsive} autoPlay autoPlaySpeed={2000} infinite arrows showDots draggable={false}>
					{worksDemo.map((work, idx) => (
						<img src={work.img} key={idx} alt="" className="img-fluid" style={{ height: "334px" }} />
					))}
				</Carousel>
			</Container>
		</div>
	);
};

export default Works;
