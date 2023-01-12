// // console.warn("hi");

// // tag name
// const headingsTN = document.getElementsByTagName("h1");
// console.log(headingsTN);

// Array.from(headingsTN).forEach((element) => {
//   console.log(element);
// });

// // class name
// const headingsCN = document.getElementsByClassName("title");
// console.log(headingsCN);

// Array.from(headingsCN).forEach((element) => {
//   console.log(element);
// });

// // singular by getelementbyID
// // const elemTN = document.getElementById("first-title");
// // console.log(elemTN);

// const elemID = document.querySelector("#first-title");
// console.log(elemID);

// const elemCN = document.querySelector(".title");
// console.log(elemCN);

// const elemTN = document.querySelector("h1");
// console.log(elemTN);

// const elemClass = document.querySelectorAll(".title");
// console.log(elemClass);

// elemClass.forEach((val) => console.log(val));

// const ft = document.querySelector("#first-title");
// // setTimeout(()=>{
// //     ft.className= 'red'
// //     console.log(ft.classList)
// // },4000)

// const elemstn = document.querySelectorAll("h1");
// elemstn[3].setAttribute("id", "fourth-title");
// elemstn[3].setAttribute("class", "title");
// elemstn[3].classList.add("red");

// // setTimeout(()=>{
// //     elemstn[3].textContent = 'hello'
// // },4000)

// setTimeout(() => {
//   elemstn[3].innerHTML = `<i>helloooo</i>`;
// }, 4000);

// setTimeout(() => {
//     document.body.innerHTML = '';
//   }, 8000);
// const clickbtn = document.querySelector(".clickbtn");
// const elemstn = document.querySelectorAll("h1");
// clickbtn.addEventListener("click", () => {
//   elemstn[3].textContent='hello'
// })

const clickbtn = document.querySelector(".clickbtn");
clickbtn.addEventListener("click", (e) => {
  const ip = document.querySelector("#name");
  console.log(ip.value);
});


// input pe value saath saath print krte jayega
// const ip = document.querySelector("#name");
// ip.addEventListener("input", (e) => {
//   const para = document.querySelector("#para");
//   para.innerHTML = e.target.value;
// });

const ip = document.querySelector("#name");
ip.addEventListener("change", (e) => {
  const para = document.querySelector("#para");
  para.innerHTML = e.target.value;
});


