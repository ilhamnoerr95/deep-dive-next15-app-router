"use client";

import { useRouter } from "next/navigation";

export default function ClientCreateButton() {
	const router = useRouter();

	return (
		<button
			className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
			onClick={() => router.push("/try-revalidate/create")}
		>
			Create
		</button>
	);
}
