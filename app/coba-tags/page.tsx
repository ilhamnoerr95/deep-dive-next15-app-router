// app/page.jsx
import React from "react";

const Page = async () => {
	// Fetch langsung di server (SSR)
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		// Gunakan 'no-store' agar selalu fetch baru tiap request (bukan cache)
		// cache: "no-store",
		cache: "force-cache",

		next: { tags: ["coba-tags-cache"] },
	});

	if (!res.ok) {
		throw new Error("Gagal mengambil data");
	}

	const posts = await res.json();

	return (
		<div style={{ padding: 20 }}>
			<h2>Fetching Melihat Logging (SSR)</h2>
			<ul>
				{posts.slice(0, 5).map((post) => (
					<li
						key={post.id}
						style={{ marginBottom: 12 }}
					>
						<strong>{post.title}</strong>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Page;
