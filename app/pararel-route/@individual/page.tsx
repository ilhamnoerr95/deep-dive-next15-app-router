// "use client";

import React from "react";

const Page = async () => {
	// const [state, setState] = React.useState(0);
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});
	console.log("render @individual/page.tsx");
	return (
		<div style={{ backgroundColor: "yellow", color: "red" }}>
			ini individu pararel route
			<br />
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
