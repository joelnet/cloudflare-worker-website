import { fetchPerson } from '../api'
import { objectToTable } from '../lib/objectToTable'
import * as response from '../lib/responses'

export const route = '/people/.+'

const person = async request => {
	const url = new URL(request.url)
	const id = url.pathname.substring(8)

	const person = await fetchPerson(id)
	const table = objectToTable(person)
	const html = `${table}
	  <a href="/people">&lt;&lt; back</a>
	`

	return response.html(html)
}

export default person
