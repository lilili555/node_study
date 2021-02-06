const Koa = require('koa');
const app = new Koa();

const loger = require('./loger')
app.use(loger());

app.listen(3000);