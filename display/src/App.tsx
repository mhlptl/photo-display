import React from 'react';
import Container from 'react-bootstrap/Container';
import Viewer from './components/Viewer';

function App(): JSX.Element {
	const imageLink = 'https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943';

	return (
		<Container fluid>
			<Viewer imageLink={imageLink} />
		</Container>
	)
}

export default App;
