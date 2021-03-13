import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
	const { register, handleSubmit, errors } = useForm();
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const handleService = (data, e) => {
		if (data) {
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
					e.target.reset();
					swal({
						title: "Service Added Successfully.",
						icon: "success",
					});
				});
		}
	};

	return (
		<div className="ml-4">
			<Helmet>
				<title>Add Service | Popular Agency</title>
			</Helmet>
			<h2 className="mb-4 font-weight-bold text-info">Add Service</h2>
			<Form onSubmit={handleSubmit(handleService)} className="w-75">
				<Form.Group controlId="title">
					<Form.Label>Service Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Title"
						name="title"
						ref={register({ required: true })}
						className={errors.title && "border-danger"}
					/>{" "}
					{errors.title && <span className="text-danger">Title is required.</span>}
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Description.."
						name="description"
						ref={register({ required: true })}
						className={errors.description && "border-danger"}
					/>{" "}
					{errors.description && <span className="text-danger">Description is required.</span>}
				</Form.Group>

				<Form.Group controlId="image">
					<Form.Label>Thumbnail</Form.Label>
					<Form.File
						onChange={handleFileChange}
						type="file"
						placeholder="Upload Image"
						name="image"
						ref={register({ required: true })}
						className={errors.image && "border-danger"}
					/>{" "}
					{errors.image && <span className="text-danger">Image is required.</span>}
				</Form.Group>
				<Button type="submit" variant="warning">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default AddService;
