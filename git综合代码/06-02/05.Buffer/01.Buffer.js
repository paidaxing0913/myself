// Buffer.alloc:创建指定大小的buffer
// buffer.from:将数据转成buffer
// toString():将buffer转成数据

const buf1 = Buffer.alloc(11,'薛之谦');
console.log(buf1);

const buf2 = Buffer.allocUnsafe(20);
console.log(buf2);



const buf3 = Buffer.from('薛之谦');
console.log(buf3);

console.log(buf3.toString());
console.log(buf1.toString());
console.log(buf2.toString());

// const buf4 = "e4 bd a0 e6 98 af e6 b2 99 e9 9b 95";
// console.log(buf4.toString());