import * as response from '../lib/responses'

export const route = '/files/?'

const fileToLi = file => `
<li>
  <a href="/files/${file.name}">${file.name}</a>
</li>
`

const fileList = async () => {
	const files = await FILES.list()
	const lis = files.keys.map(fileToLi).join('')
	const html = `<ul>${lis}</ul>`
	return response.html(html)
}

export default fileList
