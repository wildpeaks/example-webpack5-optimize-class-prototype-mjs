const {join} = require("path");

module.exports = {
	mode: "production",
	entry: {
		example: "./src/entry.mjs"
	},
	output: {
		path: join(__dirname, "dist")
	}
};
