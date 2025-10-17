"use client";

import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
	const { pending } = useLinkStatus();
	return pending ? (
		<>
			<div
				role="status"
				aria-label="Loading"
				className="spinner"
			/>
			<style>{`
            .spinner {
                /* ... */
                opacity: 0;
                animation:
                    fadeIn 500ms 100ms forwards,
                    rotate 1s linear infinite;
                }
                
                @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
                }
                
                @keyframes rotate {
                to {
                    transform: rotate(360deg);
                }
                }
            `}</style>
		</>
	) : null;
}
