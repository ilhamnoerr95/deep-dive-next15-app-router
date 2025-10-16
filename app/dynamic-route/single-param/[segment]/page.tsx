import React from "react";

/**
 *
 * @singleparam
 * @segmenturlpattern => ex: /dynamic-route/single-param/anything/
 */
const Page = async ({ param }: { param: Promise<{ segment: string[] }> }) => {
	// const { segment } = await param;
	// console.log("queryParams:", segment);

	return <div>Dynamic route for single params</div>;
};

export default Page;
