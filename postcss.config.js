module.exports = {
	plugins: [
		require("postcss-easy-import")({ prefix: "_" }),
		require("postcss-custom-properties")(),
		require("autoprefixer")({ grid: "autoplace" }),
		require("cssnano")({
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
};
