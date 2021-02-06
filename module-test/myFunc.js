const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
// exports.add = add
// exports.sub = sub
class Person {
    constructor(name, age) {
        this.name1 = name;
        this.age = age;
    };
    sayHello() {
        console.log(`你好${name1}，你${age}岁了`)
    }
}

module.exports = { add, sub, Person }