// "use client";

import Link from "next/link";
import React from "react";

const Page = async () => {
	// const [state, setState] = React.useState(0);
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 2000);
	});
	console.log("render @team/page.tsx");
	return (
		<div style={{ backgroundColor: "yellow", color: "red" }}>
			ini Team pararel route
			<br />
			<Link href="/pararel-route/tes"> go to team dynamic single route</Link>
			{/* <button
				style={{
					marginTop: 10,
					marginBottom: 10,
					padding: 10,
					backgroundColor: "green",
				}}
				onClick={() => setState(state + 1)}
			>
				update team state {state}
			</button> */}
		</div>
	);
};

export default Page;
