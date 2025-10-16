import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "pararel layout",
	description: "pararel layout",
};

export default function BlogLayout({
	children,
	team,
	individual,
}: Readonly<{
	children: React.ReactNode;
	team: React.ReactNode;
	individual: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ display: "flex", gap: "1rem" }}>
				{/* Slot team */}
				<section style={{ flex: 2, border: "1px solid gray", padding: "1rem" }}>
					<h2>team Area</h2>
					{team}
				</section>

				{/* Slot individual */}
				<aside style={{ flex: 1, border: "1px solid gray", padding: "1rem" }}>
					<h2>individual Area</h2>
					{individual}
				</aside>
			</div>

			<main>{children}</main>
		</div>
	);
}
