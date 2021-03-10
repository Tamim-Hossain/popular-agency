import Contact from "./Contact";
import Feedback from "./Feedback";
import Main from "./Main";
import Services from "./Services";
import Supporters from "./Supporters";
import Works from "./Works";

const Home = () => {
	return (
		<>
			<Main />
			<Supporters />
			<Services />
			<Works />
			<Feedback />
			<Contact />
		</>
	);
};

export default Home;
