import React from "react";

interface MessageProps {
	message: string;
}

function Message(props: MessageProps): JSX.Element {
	return <div>{props.message}</div>;
}

export default Message;
