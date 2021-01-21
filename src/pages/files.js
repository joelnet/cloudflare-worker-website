import marked from 'marked'
import * as response from '../lib/responses'

export const route = '/files/(?<id>.+)'

const filePost = async ({ params }) => {
	const file = await FILES.get(params.id)
	const html = marked(file)
	return response.html(html)
}

export default filePost
