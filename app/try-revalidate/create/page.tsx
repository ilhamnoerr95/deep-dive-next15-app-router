"use client";

import { createExperience } from "@/lib/action";
import { useActionState, useState } from "react";
import { useFormState } from "react-dom";

export default function CreateExperienceForm() {
	const [state, formAction] = useActionState(createExperience, {
		success: false,
		message: "",
	});

	console.log(state);
	return (
		<div className="min-h-screen bg-gray-100 p-6 flex justify-center">
			<form
				action={formAction}
				className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl space-y-4 text-black"
			>
				<h1 className="text-2xl font-bold">Create Experience</h1>

				<div>
					<label className="font-semibold">Title</label>
					<input
						type="text"
						name="title"
						className="w-full mt-1 p-2 border rounded"
						defaultValue="cuma 23 karakter"
						required
					/>
				</div>

				<div>
					<label className="font-semibold">Image URL</label>
					<input
						type="text"
						name="image"
						className="w-full mt-1 p-2 border rounded"
						defaultValue="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bigfootdigital.co.uk%2Fhow-to-optimise-images&psig=AOvVaw0C8fNM9rVl-pU8SQw1vtyq&ust=1741191610030000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiB3K3q8IsDFQAAAAAdAAAAABAE"
						required
					/>
				</div>

				<div>
					<label className="font-semibold">Descriptions</label>
					<textarea
						name="descriptions"
						className="w-full mt-1 p-2 border rounded"
						defaultValue="ini percobaan kedua saja"
						required
					/>
				</div>

				<div>
					<label className="font-semibold">Link</label>
					<input
						type="text"
						name="link"
						className="w-full mt-1 p-2 border rounded"
						defaultValue="www.facebook.com"
						required
					/>
				</div>

				<div>
					<label className="font-semibold">Detail Description</label>
					<textarea
						name="detail_desc"
						className="w-full mt-1 p-2 border rounded"
						rows="6"
						defaultValue="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.Lorem ipsum is .orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.Lorem ipsum is . "
						required
					/>
				</div>

				<div className="flex items-center space-x-2">
					<input
						type="checkbox"
						name="is_private"
						defaultChecked
					/>
					<label>Private</label>
				</div>

				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
				>
					Submit
				</button>

				{state && (
					<p
						className={`mt-3 p-2 rounded text-sm ${
							state.success
								? "bg-green-100 text-green-700"
								: "bg-red-100 text-red-700"
						}`}
					>
						{state.message}
					</p>
				)}
			</form>
		</div>
	);
}
