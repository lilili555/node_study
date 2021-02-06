const Koa = require('koa');
const app = new Koa();

// function getdata() {
//     setTimeout(() => {
//         var data = Math.random();
//     }, 2000);
//     return data
// }
function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var data = Math.random();
            resolve(data);
        }, 2000)
    })
}
app.use(async(ctx) => {
    let data = await getdata()
    ctx.body = data;
});

app.listen(3000);