import React, {FormEvent} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface PhotoUploadProps {
	handleSubmit(T: FormEvent): void;
	handleChange(T: FormEvent): void;
}

function PhotoUpload(props: PhotoUploadProps): JSX.Element {
	return (
		<Form onSubmit={props.handleSubmit}>
			<Form.Group className='form-label'>
				<Form.File
					accept='image/png, image/jpeg, image/gif'
					label='Select Photo to Upload'
					id='form-file'
					onChange={props.handleChange}
					data-testid='form-file'
					required
				/>
			</Form.Group>
			<Button type='submit' block>
				Upload
			</Button>
		</Form>
	);
}

export default PhotoUpload;
