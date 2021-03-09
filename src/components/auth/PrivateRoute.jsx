import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
	const [userInfo] = useContext(UserContext);
	const { isSignedIn } = userInfo;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isSignedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/sign-in",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
