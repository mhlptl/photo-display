import React, {FormEvent} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import '../styles.css'

function PhotoUpload(): JSX.Element {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault;
	};

	return (
		<Row>
			<Col className='form-container'>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='form-label'>
						<Form.File accept='image/png, image/jpg, image/jpeg, image/gif' label='Select Photo to Upload' id='form-file' />
					</Form.Group>
					<Button type='submit' block>
						Submit
					</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default PhotoUpload;
