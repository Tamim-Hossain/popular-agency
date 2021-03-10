import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../App";

const AddFeedback = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const { name, userPhoto } = userInfo;
	const { register, handleSubmit, errors } = useForm();
	let history = useHistory();

	const handleFeedback = (data) => {
		const fullData = { ...data, userPhoto };
		if (fullData) {
			fetch("https://popular-agency.herokuapp.com/addFeedback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(fullData),
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(fullData);
				});
		}
	};
	return (
		<Form onSubmit={handleSubmit(handleFeedback)} className='w-75'>
			<Form.Group>
				<Form.Control placeholder="Your name" name="name" defaultValue={name} ref={register({ required: true })} />
			</Form.Group>

			<Form.Group>
				<Form.Control placeholder="Company’s name, Designation" name="position" ref={register({ required: true })} />
			</Form.Group>

			<Form.Group>
				<Form.Control as='textarea' rows='5'  placeholder="Your valuable feedback.." name="description" ref={register({ required: true })} />
			</Form.Group>

			<Button type="submit" variant="warning">
				Submit
			</Button>
		</Form>
	);
};

export default AddFeedback;
