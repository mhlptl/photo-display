import React from "react";

interface MessageProps {
	message: string;
}

/**
 * 
 * message container
 * 
 * @param props message
 */
function Message(props: MessageProps): JSX.Element {
	return <div>{props.message}</div>;
}

export default Message;
