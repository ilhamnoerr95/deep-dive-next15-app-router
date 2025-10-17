import React from "react";
import { getData } from "@/lib/data";

const Team = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const userData = await getData("/users/" + id);
	console.log("render @team/[id]/page.tsx", userData);
	// redirect("/paraler-route?notification=tes");
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 2000);
	});
	return <div>dynamic pararel route in @team {userData.name}</div>;
};

export default Team;
