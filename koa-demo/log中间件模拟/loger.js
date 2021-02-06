const fs = require('fs')

let log = (ctx) => {
    // console.log(ctx);
    let data = `${ctx.method} ${ctx.url}'/n'`
    fs.appendFile('./a.txt', data, () => {})
};
module.exports = () => {
    return async(ctx) => {
        log(ctx)
    }
}