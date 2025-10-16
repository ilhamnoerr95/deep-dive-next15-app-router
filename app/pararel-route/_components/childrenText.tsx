import React from "react";

const childrenText = () => {
	const [state, setState] = React.useState(0);
	console.log("children text render", state);

	return (
		<div>
			childrenText
			<br />
			<button
				style={{
					marginTop: 10,
					marginBottom: 10,
					padding: 10,
					backgroundColor: "blue",
				}}
				onClick={() => setState(state + 1)}
			>
				update children state {state}
			</button>
		</div>
	);
};

export default childrenText;
