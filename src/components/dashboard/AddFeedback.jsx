import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { UserContext } from "../../App";

const AddFeedback = () => {
	const [userInfo] = useContext(UserContext);
	const { name, userPhoto } = userInfo;
	const { register, handleSubmit, errors } = useForm();
	let history = useHistory();

	const handleFeedback = (data, e) => {
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
					e.target.reset();
					swal({
						title: "Review posted. Check home page now!",
						icon: "success",
					});
					history.push("/");
				});
		}
	};

	return (
		<>
			<h2 className="text-info font-weight-bold">Add Review</h2>
			<Form onSubmit={handleSubmit(handleFeedback)} className="w-75">
				<Form.Group>
					<Form.Control
						placeholder="Your name"
						name="name"
						defaultValue={name}
						ref={register({ required: true })}
						className={errors.name && "border-danger"}
					/>{" "}
					{errors.name && <span className="text-danger">Name is Required.</span>}
				</Form.Group>

				<Form.Group>
					<Form.Control
						placeholder="Company’s name, Designation"
						name="position"
						ref={register({ required: true })}
						className={errors.position && "border-danger"}
					/>{" "}
					{errors.position && <span className="text-danger">Position is Required.</span>}
				</Form.Group>

				<Form.Group>
					<Form.Control
						as="textarea"
						rows="5"
						placeholder="Your valuable feedback.."
						name="description"
						ref={register({ required: true })}
						className={errors.description && "border-danger"}
					/>{" "}
					{errors.description && <span className="text-danger">Description is Required.</span>}
				</Form.Group>

				<Button type="submit" variant="warning">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AddFeedback;
