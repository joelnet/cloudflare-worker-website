import { htmlResponse } from '../lib/responses'

export const route = '/files/?'
export const method = 'post'

const filePost = async request => {
	const { filename, contents } = await request.json()
	await FILES.put(filename, contents)
	return htmlResponse('SUCCESS')
}

export default filePost
