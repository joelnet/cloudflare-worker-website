import * as response from '../lib/responses'

export const route = '/status/?'

const status = () => response.text('OK')

export default status
