import Router from './lib/router'
import notFound from './pages/404'
import index from './pages/index'

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	const router = new Router()

	router.get('/', () => index(request))
	router.all(() => notFound(request))

	const response = await router.route(request)
	return response
}
