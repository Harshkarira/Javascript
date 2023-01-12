let arr = [1,2] /* destructuring is to unpack your arrays */
const [elem1,elem2] = arr
console.log(elem1,elem2)

let arr1 = [23,45,33,44]
let arr2 = [...arr1]  //...  will copy the contents of that local variable. it is shallow copy .. if there is something andr ke b andr it will change that too bcuz reference remains same shallow mtlb upr upr se copy.
arr2[3] = 0
console.log(arr1,arr2)

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  inobj:{
    name: "harsh"
  }
}
let { width, height, area, } = rectangle
const rectangle2 = {
  ...rectangle
}
rectangle2.inobj.name = "changed"
rectangle2.width = 100,
console.log(rectangle,rectangle2)

let numarray = [1,2,3,4]
let [num1,...r] = numarray
console.log(num1,r) //...r means baaki saare isme aajao num1 liya baaki sab alag array me aaye(concept name is rest)

function hello (...args:any[]){
  console.log(args)
}
hello(1,2,3,4,5)

const dbvalue = {
  name:"Harsh",
  rollno:"25"
}
const screenvalue = {
  name:"Muskan",
  std:"TY"
}
const tosendvalue = {
  ...screenvalue,
  ...dbvalue,
  address:"UNR"
}
console.log(tosendvalue)