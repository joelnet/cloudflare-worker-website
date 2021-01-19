import { textResponse } from '../lib/responses'

export const route = '/status/?'

const status = () => textResponse('OK')

export default status
