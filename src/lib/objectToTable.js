export const objectToTable = obj => {
	const rows = Object.entries(obj)
		.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`)
		.join('')
	return `<table>${rows}</table>`
}
