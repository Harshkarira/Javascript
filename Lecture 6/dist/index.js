"use strict";
let arr = [1, 2];
const [elem1, elem2] = arr;
console.log(elem1, elem2);
let arr1 = [23, 45, 33, 44];
let arr2 = [...arr1];
arr2[3] = 0;
console.log(arr1, arr2);
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    inobj: {
        name: "harsh"
    }
};
let { width, height, area, } = rectangle;
const rectangle2 = Object.assign({}, rectangle);
rectangle2.inobj.name = "changed";
rectangle2.width = 100,
    console.log(rectangle, rectangle2);
let numarray = [1, 2, 3, 4];
let [num1, ...r] = numarray;
console.log(num1, r);
function hello(...args) {
    console.log(args);
}
hello(1, 2, 3, 4, 5);
const dbvalue = {
    name: "Harsh",
    rollno: "25"
};
const screenvalue = {
    name: "Muskan",
    std: "TY"
};
const tosendvalue = Object.assign(Object.assign(Object.assign({}, screenvalue), dbvalue), { address: "UNR" });
console.log(tosendvalue);
