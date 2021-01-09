import React, {FormEvent} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface PhotoUploadProps {
	handleSubmit<T = FormEvent>(T: FormEvent): void;
	handleChange<T = FormEvent>(T: FormEvent): void;
}

function PhotoUpload(props: PhotoUploadProps): JSX.Element {
	return (
		<Row>
			<Col className='form-container'>
				<Form onSubmit={props.handleSubmit}>
					<Form.Group className='form-label'>
						<Form.File
							accept='image/png, image/jpg, image/jpeg, image/gif'
							label='Select Photo to Upload'
							id='form-file'
							onChange={props.handleChange}
							data-testid='form-file'
						/>
					</Form.Group>
					<Button type='submit' block>
						Upload
					</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default PhotoUpload;
