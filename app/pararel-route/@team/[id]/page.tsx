import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Notif = async () => {
	// redirect("/paraler-route?notification=tes");
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 2000);
	});
	return <div>dynamic pararel route in @team</div>;
};

export default Notif;
