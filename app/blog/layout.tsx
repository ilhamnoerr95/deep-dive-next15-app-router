import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "blog layout",
	description: "blog layout",
};

export default function BlogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<h1 style={{ backgroundColor: "red", color: "yellow" }}>
				header blog layout
			</h1>
			{children}
		</div>
	);
}
