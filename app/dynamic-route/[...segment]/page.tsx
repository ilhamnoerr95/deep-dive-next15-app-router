import React from "react";

/**
 *
 * @catchall
 * @segmenturlpattern =>
 * ex: /dynamic-route/catch-all/anything ,/dynamic-route/catch-all/anything/more
 */
const Page = async ({ param }: { param: Promise<{ segment: string[] }> }) => {
	// const { segment } = await param;
	// console.log("queryParams:", segment);

	return <div>Dynamic route for catch all params</div>;
};

export default Page;
