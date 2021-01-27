import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Viewer from './components/Viewer';
import axios from 'axios';

function App(): JSX.Element {
	const [link, setLink]: [string, (link: string) => void] = useState<string>('');

	/**
	 * get new image every 5 seconds
	 */
	useEffect(() => {
		getLink();
		const intervalId = setInterval(getLink, 1500);
		return () => {
			clearInterval(intervalId);
		}
	}, [])


	/**
	 * gets base64 encoding of the image from the server
	 */
	const getLink = async(): Promise<void> => {
		try {
			const res = await axios.post('http://localhost:5000/api/v1/photos/random');
			setLink(res.data.image);
		}
		catch(e) {
			// eslint-disable-next-line no-extra-parens
			console.error((e as Error).message)
		}
	}

	return (
		<Container fluid>
			<Viewer imageLink={link} />
		</Container>
	)
}

export default App;
