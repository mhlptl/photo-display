import React, {useState, FormEvent} from "react";
import Container from "react-bootstrap/Container";
import PhotoUpload from "./components/PhotoUpload";

function App(): JSX.Element {
	const [file, setFile] = useState<File | null>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault;
	};

	const handleChange = (e: FormEvent) => {
		const target: HTMLInputElement = e.target as HTMLInputElement;
		setFile(target.files && target.files[0]);
	};

	return (
		<Container>
			<PhotoUpload handleSubmit={handleSubmit} handleChange={handleChange} />
		</Container>
	);
}

export default App;
