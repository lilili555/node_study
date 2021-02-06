let { add, sub, Person } = require('./myFunc')

const person = new Person('lisi', 15)
console.log(Person)
person.sayHello()
console.log(add(1, 4));
console.log(sub(7, 3));
console.log(add);