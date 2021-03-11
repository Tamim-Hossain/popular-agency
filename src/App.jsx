import { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminDashboard from "./components/admin/AdminDashboard";
import Google from "./components/auth/Google";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Order from "./components/dashboard/Order";
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
					<PrivateRoute path="/order/:title">
						<Order />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/admin">
						<AdminDashboard />
					</PrivateRoute>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
