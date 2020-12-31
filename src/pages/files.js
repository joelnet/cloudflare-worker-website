import marked from 'marked'
import { htmlResponse } from '../lib/responses'

const filePost = async request => {
	const url = new URL(request.url)
	const id = url.pathname.substring(7)
	const file = await FILES.get(id)
	const html = marked(file)
	return htmlResponse(html)
}

export default filePost
