import { fetchPerson } from '../api'
import { objectToTable } from '../lib/objectToTable'
import { htmlResponse } from '../lib/responses'

const person = async request => {
	const url = new URL(request.url)
	const id = url.pathname.substring(8)

	const response = await fetchPerson(id)
	const table = objectToTable(response)
	const html = `${table}
	  <a href="/people">&lt;&lt; back</a>
	`

	return htmlResponse(html)
}

export default person
