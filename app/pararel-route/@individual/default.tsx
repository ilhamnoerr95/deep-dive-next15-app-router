"use client";
import { useSearchParams } from "next/navigation";

export default function IndividualDefault() {
	const searchParams = useSearchParams();
	const search = searchParams.get("id");
	return (
		<div>
			<p>Belum memilih individual. Pilih feed dari menu atau buka team.</p>
		</div>
	);
}
