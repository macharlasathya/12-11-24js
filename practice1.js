let a=new Date()
a.getFullYear();
console.log(a)

console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
console.log(a.getTime())


const b=new Date();
console.log(b.setFullYear(2025));
console.log( b.setMonth(8));
console.log( b.setDate(10))
console.log( b.setHours(10))
console.log( b.setMinutes(50))
console.log( b.setSeconds(50))
console.log( b.setMilliseconds(400))

let c=new Date()

console.log(c.toDateString())
console.log(c.toTimeString())
console.log(c.toISOString())
console.log(c.toLocaleDateString())
console.log(c.toLocaleTimeString())

console.log(Math.round(.06));
console.log(Math.round(3.3));
console.log(Math.round(3.8));
console.log(Math.ceil(3.3));
console.log(Math.floor(4.1));

const greet = () => "Hello!";
const add = (a, b) => a + b;
console.log(add(5, 5)); // Output: 10

const a1=[1,2,3,4]
const b1=[34,5.5,6]
const c1=a.concat(b)
console.log(c1);

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // Output: "red"
console.log(second); // Output: "green"




