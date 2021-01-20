import notFoundHtml from '../../html/404.html'

export const html = html =>
	new Response(html, {
		headers: { 'content-type': 'text/html' },
	})

export const notFound = () =>
	new Response(notFoundHtml, {
		headers: { 'content-type': 'text/html' },
		status: 404,
	})

export const text = text =>
	new Response(text, {
		headers: { 'content-type': 'text/plain' },
	})
