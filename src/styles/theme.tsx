/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			transparent: "rgba(255,255,255,0.3)",
			transparent2: "rgba(255,255,255,0.6)",
			purple: {
				light: "#DD2D4A",
				dark: "#DD2D4A",
			},

			gold: "#fcd270",
			gold2: "#dab050",

			yellow: "#ffd470",
			salmon: "#ff9c9c",
			lavender: "#a688ec",
			blue: "#6c7dfe",
			darkerBlue: "#5a60ad",
		},
		text: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			1000: "#161616",
		},
	},
	// fonts: {
	// 	heading: "Montserrat-SemiBold",
	// 	body: "Montserrat-Regular",
	// },
	styles: {
		// @ts-ignore
		global: () => ({
			html: {
				height: "100%",
				scrollBehavior: "smooth",
			},

			body: {
				padding: 0,
				margin: 0,
				fontFamily:
					"Montserrat-Regular, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				textAlign: "center",
				background:
					"#334139DDE0BD linear-gradient(90deg, #334139 0%, #334139 100%)",
				color: "white",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			h1: {
				color: "#ffd470",
			},
			h2: {
				color: "#ffd470",
			},
			h3: {
				color: "#ffd470",
			},

			"::-webkit-scrollbar": {
				width: "0.6em",
			},

			"::-webkit-scrollbar-track": {
				borderRadius: "0px",
			},

			"::-webkit-scrollbar-thumb": {
				backgroundColor: "rgb(69, 74, 138)",
				borderRadius: "80px",
			},
			"@font-face": [
				{
					fontFamily: "Montserrat-SemiBold",
					src: "url('/fonts/Montserrat-SemiBold.ttf')",
				},
				{
					fontFamily: "Montserrat-Regular",
					src: "url('/fonts/Montserrat-Regular.ttf')",
				},
			],
		}),
	},
});

export const rounded = "50px";

export default theme;