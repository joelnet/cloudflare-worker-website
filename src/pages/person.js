import { fetchPerson } from '../api'
import { objectToTable } from '../lib/objectToTable'
import * as response from '../lib/responses'

export const route = '/people/(?<id>.+)'

const person = async ({ params }) => {
	const person = await fetchPerson(params.id)
	const table = objectToTable(person)
	const html = `${table}
	  <a href="/people">&lt;&lt; back</a>
	`

	return response.html(html)
}

export default person
