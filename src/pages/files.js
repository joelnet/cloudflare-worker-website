import marked from 'marked'
import * as response from '../lib/responses'

export const route = '/files/.+'

const filePost = async request => {
	console.log({ request })
	const url = new URL(request.url)
	const id = url.pathname.substring(7)
	const file = await FILES.get(id)
	const html = marked(file)
	return response.html(html)
}

export default filePost
