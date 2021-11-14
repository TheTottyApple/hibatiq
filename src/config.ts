// google analytics measurement id
const GA_TRACKING_ID = "";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "HibatIQ",
	lang: "en-us",
	description: "HibatIQ L.T.D.",
	url: "https://hibatiq.com",
	image: "/logo.png",
	tags: [
		"nextjs",
		"typescript",
		"chakraui",
		"google analytics",
		"eslint",
		"jest",
		"styled components",
		"icons",
	],
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
