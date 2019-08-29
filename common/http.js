import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000';

export default axios;

// export default {
//     get(e) {
//         console.log('process', process);
//         if (process && process.server) {
//             let path = require("path");
//             let config = eval('require(path.join(process.cwd(), "server", "config.js"))');
//             console.log('服务端发起请求')
//             return { data: config.name + '这是服务端请求' };
//         } else {
//             console.log('客户端发起请求')
//             return axios.get(e);
//         }
//     },
//     post
// }