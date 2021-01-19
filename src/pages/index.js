import index from '../../html/index.html'
import { htmlResponse } from '../lib/responses'

export const route = '/'

const home = () => htmlResponse(index)

export default home
