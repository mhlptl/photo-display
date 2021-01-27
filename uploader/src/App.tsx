import React, {useState, FormEvent} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PhotoUpload from "./components/PhotoUpload";
import {isImage} from "./utils";
import Message from "./components/Message";
import axios, { AxiosResponse } from "axios";

function App(): JSX.Element {
	const [file, setFile]: [File | null, (file: File | null) => void] = useState<File | null>(null);
	const [message, setMessage]: [string, (message: string) => void] = useState<string>("");
	const [uploaded, setUploaded]: [boolean, (uploaded: boolean) => void] = useState<boolean>(false);
	const [error, setError]: [boolean, (error: boolean) => void] = useState<boolean>(false);

	/**
	 * 
	 * uploads image to server
	 * if upload is not successful, returns error
	 * 
	 * @param e FormEvent
	 */
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (isImage(file)) {
			uploadFile();
		} else {
			setError(true);
			setMessage("Error: Please try to upload again");
		}
	};


	/**
	 * 
	 * sets state to new file when selected
	 * 
	 * @param e FormEvent
	 */
	const handleChange = (e: FormEvent) => {
		const target: HTMLInputElement = e.target as HTMLInputElement;
		setFile(target.files && target.files[0]);
		setError(false);
	};


	/**
	 * clears all errors and sets all states to default values
	 */
	const clear = (): void => {
		setFile(null);
		setUploaded(false);
		setMessage("");
		setError(false);
	};

	/**
	 * uploads image to server
	 * uses FormData to send image as type form/data
	 */
	const uploadFile = async(): Promise<void> => {
		const data = new FormData();
		data.append('image', file!);
		try {
			const res: AxiosResponse = await axios.post('http://localhost:5000/api/v1/photos/upload', data);
			if(res.status === 201) {
				setError(false);
				setUploaded(true);
				setMessage('Photo Uploaded!');
			}
		}
		catch {
			setError(true);
			setMessage('Upload Failed. Please try again.');
		}
	}

	const showForm = (): JSX.Element => {
		if (uploaded) {
			return (
				<React.Fragment>
					<Message message={message} />
					<Button onClick={clear}>Upload More</Button>
				</React.Fragment>
			);
		}
		return <PhotoUpload handleSubmit={handleSubmit} handleChange={handleChange} />;
	};

	return (
		<Container>
			<Row>
				<Col className='form-container'>
					{showForm()}
					{error && <Message message={message} />}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
