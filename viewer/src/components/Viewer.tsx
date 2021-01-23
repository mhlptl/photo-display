import React from 'react';
import Image from 'react-bootstrap/Image'

interface ViewerProps {
	imageLink: string
}

/**
 * 
 * displays image in the center of the screen with a backdrop of the same image
 * 
 * @param props VieweProps
 */
function Viewer(props: ViewerProps): JSX.Element {
	return (
		<React.Fragment>
			<Image className='image' src={props.imageLink} alt='no image available' fluid />
			<Image className='back' src={props.imageLink} fluid />
		</React.Fragment>
	)
}

export default Viewer;
