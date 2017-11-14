/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');
let ip = '166.111.5.207'
let options = {
    host: 'ip.taobao.com',
    path: '/service/getIpInfo.php?ip=' + ip
};

let request = http.request(options, (res) => {
    res.on('data', (buffer) => {
        console.log(JSON.parse(buffer.toString()));
    })
});

request.end();