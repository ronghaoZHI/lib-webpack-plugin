const pluginName = 'LibWebpackPlugin'
class LibWebpackPlugin {
	constructor(options) {
		this.options = options.map((item) => {
			return Object.assign({
				name: "",
				version: "",
				publicPath: ""
			}, item)
		})
	}
	apply(compiler) {
		compiler.hooks.compilation.tap(pluginName, (compilation) => {
			compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(pluginName, (data, cb) => {
				const libBodies = this.options.map((item) => {
					return {
						tagName: 'script',
						closeTag: true,
						attributes: { type: 'text/javascript', src: (item.publicPath + '/' +  item.version + '/' + item.name) }
					}
				})
				data.body.push(...libBodies)
				cb(null, data)
			})
		})
	}
}

module.exports = LibWebpackPlugin