const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
	...defaultColors,
	...{
		primary: {
			DEFAULT: "#0E100F",
		},
		secondary: {
			DEFAULT: "#212121",
			2: "#DFDCFF",
		},
		purple: {
			DEFAULT: "#A59FFF",
			2: " #D2CFFF",
		},
		accent: {
			DEFAULT: "#CAF763",
			2: "#F4F4F4",
			3: "#FFFCE1",
			4: "#FF5F8F",
		},
	},
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				roobert: ["var(--font-roobert)"],
			},
			colors: colors,
			backgroundImage: {
				"gradient-primary": "radial-gradient(125.65% 165.15% at 0% 0%, #A0FF97 29%, #B0FC50 100%)",
			},
			borderWidth: {
				3: "3px",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};

