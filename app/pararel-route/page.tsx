"use client";
import React from "react";
import ChildrenText from "./_components/childrenText";

const Page = () => {
	const [state, setState] = React.useState(0);
	console.log("render pararel route", state);
	return (
		<div style={{ backgroundColor: "blue", color: "yellow" }}>
			ini Slot main
			<br />
			<button
				style={{
					marginTop: 10,
					marginBottom: 10,
					padding: 10,
					backgroundColor: "red",
				}}
				onClick={() => setState(state + 1)}
			>
				update state {state}
			</button>
			<ChildrenText />
		</div>
	);
};

export default Page;
