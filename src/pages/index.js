import index from '../../html/index.html'
import * as response from '../lib/responses'

export const route = '/'

const home = () => response.html(index)

export default home
