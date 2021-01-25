const isModule = module => {
	if (!module || !module.exports) return false
	return Object.prototype.toString.call(module.exports) === '[object Module]'
}

const hasRoute = module => {
	if (!module || !module.exports) return false
	return !!module.exports.route
}

export const getRoutes = () =>
	Object.values(require.cache)
		.filter(module => isModule(module) && hasRoute(module))
		.map(module => ({
			route: module.exports.route,
			method: module.exports.method || 'get',
			module: module.exports.default,
		}))
