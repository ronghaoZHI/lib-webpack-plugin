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
				this.options.forEach((item) => {
					const inject = (item.inject && item.inject === 'head') ? 'head' : 'body'
					data[inject].push({
						tagName: 'script',
						closeTag: true,
						attributes: { type: 'text/javascript', src: (item.publicPath + '/' +  item.version + '/' + item.name) }
					})
				})
				cb(null, data)
			})
		})
	}
}

module.exports = LibWebpackPlugin