import { fetchAllPeople } from '../api'
import { htmlResponse } from '../lib/responses'

export const route = '/people/?'

const personToLi = (person, index) =>
	`<li><a href="/people/${index + 1}">${person.name}</a></li>`

const allPeople = async () => {
	const { results } = await fetchAllPeople()
	const persons = results.map(personToLi)
	const html = `<ul>${persons.join('')}</ul>`
	return htmlResponse(html)
}

export default allPeople
