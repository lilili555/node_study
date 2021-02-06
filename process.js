process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    let input = process.stdin.read();

    if (input !== null) {
        //stdout 将内容输入到log文件中
        process.stdout.write(input);
        //stderr 将内容打印到控制台
        process.stderr.write(input);


    }
})