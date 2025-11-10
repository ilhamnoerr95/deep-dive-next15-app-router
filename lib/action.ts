"use server";

import { token } from "@/app/try-revalidate/page";
import { HEADERS } from "@/const/headers";
/**
 *
 * A Server Function can be defined by using the use server directive.
 * You can place the directive at the top of an asynchronous function
 *  to mark the function as a Server Function, or at the top of a separate
 *  file to mark all exports of that file.
 *
 */

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createPost(formData: FormData) {
	"use server";
	const title = formData.get("title");
	const content = formData.get("content");

	// Update data
	// Revalidate cache'
	// if u need fresh data on the page after action
	revalidatePath("/posts");
}
export async function deletePost(formData: FormData) {
	"use server";
	const id = formData.get("id");

	// Update data
	// Revalidate cache
}

/**
 * You can get, set, and delete cookies inside a Server Action using the cookies API.
 * When you set or delete a cookie in a Server Action, Next.js re-renders the current
 * page and its layouts on the server so the UI reflects the new cookie value.
 */

/**
 * Good to know: The server update applies to the current React tree, re-rendering, mounting,
 * or unmounting components, as needed. Client state is preserved for re-rendered components,
 * and effects re-run if their dependencies changed.
 */

export async function exampleAction() {
	"use server";

	const cookieStore = await cookies();

	// Get cookie
	cookieStore.get("name")?.value;

	// Set cookie
	cookieStore.set("name", "Delba");

	// Delete cookie
	cookieStore.delete("name");
}

// Server Action (move to separate file in real project)
export async function createExperience(prevState, formData) {
	// "use server";

	const title = formData.get("title")?.toString().trim();
	const descriptions = formData.get("descriptions")?.toString().trim();
	const link = formData.get("link")?.toString().trim();
	const detail_desc = formData.get("detail_desc")?.toString().trim();
	const image = formData.get("image");
	const is_private = formData.get("is_private") === "on";

	// OBJECT ERROR GLOBAL
	const errors: Record<string, string> = {};

	// ============ VALIDATION ============
	if (!title || title.length > 20) {
		errors.title = "Judul maksimal 20 karakter.";
	}

	if (!detail_desc || detail_desc.length < 200) {
		errors.detail_desc = "Detail deskripsi minimal 200 karakter.";
	}

	// Jika ada error → Kembalikan semua error ke form
	if (Object.keys(errors).length > 0) {
		return {
			success: false,
			errors,
		};
	}

	// ============ FETCH POST API ============
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_API_LINK_BE + "/exp/create-exp",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
					...HEADERS,
				},
				body: JSON.stringify({
					title,
					image,
					descriptions,
					link,
					detail_desc,
					is_private,
				}),
			},
		);

		const result = await res.json();
		console.log(result);

		if (!res.ok) {
			return {
				success: false,
				errors: {
					server: "Gagal menyimpan data ke server.",
				},
			};
		}
	} catch (err) {
		return {
			success: false,
			errors: {
				server: "Tidak dapat terhubung ke server.",
			},
		};
	}

	// ============ JIKA SUKSES ============
	// Revalidate berdasarkan fetch tag Ini akan membuang semua cache fetch yang memiliki tag tertentu, di mana pun berada.

	// revalidateTag("exp");

	// Revalidate berdasarkan path Ini akan membuang cache untuk path tertentu dan merender ulang halaman tersebut pada permintaan berikutnya.
	// kalo tanpa tags bisa pake ini
	// revalidatePath("/try-revalidate");

	// Redirect harus paling terakhir & tidak boleh di-return
	redirect("/try-revalidate");
}
