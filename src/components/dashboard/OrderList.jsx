import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const OrderList = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		const URL = "https://popular-agency.herokuapp.com/orders";
		// const URL = 'https://agency-creative.herokuapp.com/target-orders?email=' + loggedInUser.email;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setOrderList(data));
	}, [orderList]);

	console.log(orderList);
	return <div>all order</div>;
};

export default OrderList;
