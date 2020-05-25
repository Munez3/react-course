import ky from 'ky';
const api = ky.extend({prefixUrl: 'http://localhost:3001'});
export default  api