import React from 'react';
import Image from 'react-bootstrap/Image'

interface ViewerProps {
	imageLink: string
}

function Viewer(props: ViewerProps): JSX.Element {
	return (
		<React.Fragment>
			<Image className='image' src={props.imageLink} fluid />
			<Image className='back' src={props.imageLink} fluid />
		</React.Fragment>
	)
}

export default Viewer;