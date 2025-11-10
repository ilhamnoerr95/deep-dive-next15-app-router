"use client";

import { useActionState, startTransition } from "react";
import { createPost } from "@/lib/action";
import { LoadingSpinner } from "../loading";

/**
 *
 * Showing a pending stat While executing a Server Function,
 *  you can show a loading indicator with React's useActionState hook.
 * This hook returns a pending boolean:
 */
export function Button() {
	const [state, action, pending] = useActionState(createPost, false);

	return (
		<button onClick={() => startTransition(action)}>
			{pending ? <LoadingSpinner /> : "Create Post"}
		</button>
	);
}
