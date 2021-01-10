import React from 'react';
import Image from 'react-bootstrap/Image'

interface ViewerProps {
	imageLink: string
}

function Viewer(props: ViewerProps): JSX.Element {
	return (
		<Image className='center image' src={props.imageLink} fluid/>
	)
}

export default Viewer;