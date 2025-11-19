import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// dynamic metadata example
export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const slug = (await params).slug;

	// fetch post information
	const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
		res.json(),
	);

	return {
		title: post.title || "blog post dynamic" + slug,
		description: post.description || "ini deskripsi blog post " + slug,
	};
}

export default async function Page({ params, searchParams }: Props) {
	const slug = (await params).slug;
	return <div>Blog Post: {slug}</div>;
}
