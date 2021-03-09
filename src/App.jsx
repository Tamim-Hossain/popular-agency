import { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Google from "./components/auth/Google";
import Home from "./components/home/Home";

export const UserContext = createContext();

const App = () => {
	const [userInfo, setUserInfo] = useState({
		isSignedIn: false,
		name: "",
		email: "",
		userPhoto: "",
	});
	return (
		<UserContext.Provider value={[userInfo, setUserInfo]}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/sign-in" component={Google} />
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
