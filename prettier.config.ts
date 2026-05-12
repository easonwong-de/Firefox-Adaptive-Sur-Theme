import { type Config } from "prettier";

const config: Config = {
	endOfLine: "lf",
	plugins: ["prettier-plugin-css-order"],
	printWidth: 80,
	tabWidth: 4,
	useTabs: true,
};

export default config;
