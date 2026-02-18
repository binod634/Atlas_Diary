/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"off-white": "#fef9f5",
				cream: "#FBF7F2",
				"light-green": "#affa01",
				"light-green-hover": "#9ee100",
				"dark-green": "#0c342c",
				"dark-green-hover": "#0a2d26",
				"accent-green": "#2f6b4f",
				"accent-green-2": "#2b6f4f",
				orange: "#ff3d11",
				"orange-hover": "#e6350e",
				muted: "#4b4b44",
				"text-dark": "#333333",
				"text-gray": "#666666",
			},
			fontFamily: {
				sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
			},
			borderRadius: {
				xl2: "15px",
				xl3: "20px",
			},
			boxShadow: {
				card: "0 4px 12px rgba(12, 52, 44, 0.15)",
				"card-hover": "0 8px 25px rgba(12, 52, 44, 0.25)",
				form: "0 8px 25px rgba(12, 52, 44, 0.15)",
				nav: "0 6px 18px rgba(34,34,34,0.06)",
			},
		},
	},
	plugins: [],
};
