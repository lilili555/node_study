console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});
console.log('script end');
//执行栈在执行完同步任务后，查看执行栈是否为空，
//如果执行栈为空，就会去执行Task（宏任务），每次宏任务执行完毕后，检查微任务(microTask)队列是否为空
//如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，
//设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。
//https://zhuanlan.zhihu.com/p/55511602



//https://segmentfault.com/a/1190000019494012