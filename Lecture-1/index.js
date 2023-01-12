console.warn("HI");
// js is intepreted language.
console.log(typeof "Harsh");
console.log(typeof 15);
console.log(typeof 25.59);
console.log(typeof false);
// data types
// number string boolean null undefined, there are two types primitive and non primitive. primitive(number string n all) is not mutuable and non primitive(objects,arrays) is mutable

// == is not much strict and === is strict it checks the value as well as the type
console.log(3 == 4);
console.log(3 == "3");
console.log(3 === "3");
// let x = 5;
// let arr =[1,2,3,4,5,6]
// console.log(arr)
// // it changed the value at index 2 since it is mutuable
// arr[2]=50
// console.log(arr)
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr[2] = 50;
console.log(arr);
// let arr2 = [1, 2, 3, 4, 5];
let arr2 = arr
console.log(arr == arr2);

let obj1 = {
    name:'ABC',
    rollno: 12
}
console.log(obj1)

// let obj2 = {
//     name:'ABC',
//     rollno:12
// }

let obj2=obj1
console.log(obj1==obj2)
obj2.name="Harsh"
console.log(obj1,obj2)
// the value of name is changed at both objs bcuz obj2 points to obj1
let check = "\"hello\" \"world\" "
console.log(check)
// let a=5
// let b=10
// console.log(`the sum of ${a} and ${b} is ${a+b}`)
let a = 'Checking'
console.log(a.length)
console.log(a[1])
let str = "hello world welcome to the..."
console.log(str.includes("world"))
console.log(str.replace("hello,iamharsh"))


 let abc = 'afds'

// // let abcInt = parseInt(abc)
// // console.log(typeof abcInt)

let abcInt = Number(abc)
console.log(typeof abcInt ,abcInt)


// let num ='9'

//  let numInt = +num
// console.log(num)

// let numfloat = parseFloat
//  let numfloat = +num
//  console.log(numfloat)

// truthy and falsy values are those like for eg +ve and -ve values.. it dosent means that its values are true or false.
const arr3=[]
console.log(arr3) 
const arr4 = [1,2,3,4]
arr[0]=2;
console.log(arr4)

const numbers = [1,2,3,4,5]

for(let num of numbers) {
    console.log(num)
}

function print(param1){
    console.log(`hi ${param1}`);
    return 3;
}
print(5)

// to return a value in a function we can use function of returedVariable
let returnedVariable = print(5)
console.log(returnedVariable);

// const square = function(n){
//     return n*n
// }
// console.log(square(4))
// addEventListener(event,callback);{
//     if(event){
//         callback()
//     }
// }
// btn.addEventListener('click',function(){
//     return 3;
// })
// const rect = n => {
// return n*n
// }


// implicit return
// const square = n => n*n
// console.log(square(5))

// btn.addEventListener('click',() => 3)

const fullname = (firstname,lastname) => `${firstname} ${lastname}`
console.log(fullname('Harsh','Karira'))

const power = (n,a) => n**a
console.log(power(2,3))

// const arr5 = [1,2,3,4,5,5]
// let num=0;
// for(let i=0; i<arr5.length; i++){
//      num+=arr5[i];
// }
// console.log(num)

rr=[1,2,3,4,5,5]
let sumss = 0;
rr.forEach(elem => sumss+=elem)
console.log(sumss)

let num1='';
sagstr = ['hi','sagar','harsh','here']
sagstr.forEach(elem => num1+=elem)
console.log(num1)

sagstr = ['hi','sagar','harsh','here']
console.log(sagstr.join(" "))

function callback(n){
    return n*n
}

function square(n){
    return n*n
}
function add(n){
    return n+n
}

function cube(n,callback){
    return n*callback(n)
}

cube(5,square)
console.log(cube(5,square))
console.log(cube(6,add))
// setInterval(()=>console.log('hello'),1000)
// setInterval(function() {console.log('Hello')},1000)
// setTimeout(function() {console.log('Hello')},1000)
// var is not used much now bcuz it is kachra if we want global variable initialize it outside of block....

function checkscope(){
    let i=3
    if(true){
        let i = 8
        console.log(i)
    }
    console.log(i)

}
checkscope()

// const is also a block scope
