import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddService = () => {
	const { register, handleSubmit, errors } = useForm();
	const [file, setFile] = useState(null);

	const handleService = (data) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("title", data.title);
		formData.append("description", data.description);

		const URL = "https://popular-agency.herokuapp.com/addService";
		fetch(URL, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				alert("Service added successfully. Check home page now.");
				console.log(result);
			});
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	return (
		<Form onSubmit={handleSubmit(handleService)} className="w-75">
			<Form.Group controlId="title">
				<Form.Label>Service Title</Form.Label>
				<Form.Control type="text" placeholder="Enter Title" name="title" ref={register({ required: true })} />
			</Form.Group>

			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter Description.."
					name="description"
					ref={register({ required: true })}
				/>
			</Form.Group>

			<Form.Group controlId="image">
				<Form.Label>Thumbnail</Form.Label>
				<Form.File
					onChange={handleFileChange}
					type="file"
					placeholder="Upload Image"
					name="image"
					ref={register({ required: true })}
				/>
			</Form.Group>
			<Button type="submit" variant="warning">
				Submit
			</Button>
		</Form>
	);
};

export default AddService;
