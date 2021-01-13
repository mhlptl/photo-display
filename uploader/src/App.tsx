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

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (isImage(file)) {
			uploadFile();
		} else {
			setError(true);
			setMessage("Error: Please try to upload again");
		}
	};

	const handleChange = (e: FormEvent) => {
		const target: HTMLInputElement = e.target as HTMLInputElement;
		setFile(target.files && target.files[0]);
		setError(false);
	};

	const clear = (): void => {
		setFile(null);
		setUploaded(false);
		setMessage("");
		setError(false);
	};

	const uploadFile = async(): Promise<void> => {
		try {
			const res: AxiosResponse = await axios.post('/photos/upload');
			if(res.status === 201) {
				setUploaded(true);
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
