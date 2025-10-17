import "server-only";

export async function getData(params: string) {
	const res = await fetch(`${process.env.MOCKING_API}/${params}`);

	return res.json();
}
