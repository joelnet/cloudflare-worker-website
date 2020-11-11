import notFoundHtml from '../../html/404.html'

export const htmlResponse = html =>
	new Response(html, {
		headers: { 'content-type': 'text/html' },
	})

export const notFoundResponse = () =>
	new Response(notFoundHtml, {
		headers: { 'content-type': 'text/html' },
		status: 404,
	})
