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

export const textResponse = text =>
	new Response(text, {
		headers: { 'content-type': 'text/plain' },
	})
