import ClientCreateButton from "@/components/btn";
import { HEADERS } from "@/const/headers";

export const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTUzNTg0ZWRmNDc5ZDI4YWFiYTkyMyIsInVzZXJuYW1lIjoiYW50aWthOTgiLCJpYXQiOjE3NjI3NTU0NTUsImV4cCI6MTc2Mjc1OTA1NX0.3OdvR8ibfCHxYtgRjKvwdHyK0hcu_XfjJJqzIGyeV6M";

const Page = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_API_LINK_BE + "/exp", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			...HEADERS,
		},
		next: { tags: ["exp"] },
		// cache: "no-store",
	});

	const result = await res.json();
	const items = result?.data ?? [];

	return (
		<div className="min-h-screen p-6 bg-gray-100">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-3xl text-black font-bold">Daftar Experience</h1>

				{/* Client Button */}
				<ClientCreateButton />
			</div>

			{/* Card Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{items.map((item: any, index: number) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer"
					>
						<div className="h-[40vh]">
							<img
								src={"/pixel.jpg"}
								alt={item.title}
								className="w-full h-full object-cover rounded-lg mb-3"
							/>
						</div>

						<h2 className="text-xl font-bold mb-1">{item.title}</h2>

						<span
							className={`px-3 py-1 text-xs rounded-full font-semibold ${
								item.is_private
									? "bg-red-100 text-red-700"
									: "bg-green-100 text-green-700"
							}`}
						>
							{item.is_private ? "Private" : "Public"}
						</span>

						<p className="mt-3 text-gray-700">{item.descriptions}</p>

						<a
							href={item.link}
							className="mt-2 inline-block text-blue-600 hover:underline"
							target="_blank"
						>
							{item.link}
						</a>

						<pre className="mt-3 bg-gray-50 p-3 rounded-lg text-sm text-gray-800 whitespace-pre-wrap border border-gray-200">
							{item.detail_desc}
						</pre>

						<p className="mt-3 text-gray-500 text-sm">
							📅 {new Date(item.date).toLocaleString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
