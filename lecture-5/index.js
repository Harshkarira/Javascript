// const start = document.querySelector(".start");

// function startrequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("loadend", () => {
//     console.log("ended with cat request");
//     const xhr2 = new XMLHttpRequest();
//     xhr2.addEventListener("loadend", () => {
//       console.log("ended with final request");
//     });
//     xhr2.open("GET", "https://ipinfo.io/161.185.160.93/geo");
//     xhr2.send();
//     console.log("started with final request");
//   });

//   xhr.open("GET", "https://catfact.ninja/fact");
//   xhr.send();
//   console.log("started with cat request");
// }

// start.addEventListener("click", startrequest);

// let ans;
// function getvalue() {
//   setTimeout(() => {
//     ans = 55;
//   }, 5000);
//   console.log(ans);
// }
// getvalue();

// // promise is just gives assurance that it will give the output after doing a task.

const promiseResponse = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

console.log(promiseResponse);

// promiseResponse.then((response) => {
//     console.log(response);
//     console.log(promiseResponse); 
//     response.json().then((res) => console.log(res))
// });

//  promiseResponse     
//  .then((response) => {
//         if(!response.ok){
//            throw new Error(`HTTP error: ${response.status}`)
//         }
//         console.log("inside then")
//         return response.json()})
//     .then((result) => console.log(result))
//     .catch((error)=> console.log("error",error))

// function returnPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => resolve(5),4000)
//     })
// }

// const obj = returnPromise();
// console.log(obj);
// obj.then((result)=> console.log(result));

const harsh = fetch('https://jsonplaceholder.typicode.com/posts');

console.log(harsh);
                                
harsh
  .then((response) => console.log(response))
  harsh     
 .then((response) =>{
        return response.json()})
 .then((result) => {console.log(result)
     result.forEach((elem => {
   let har=elem.id
   let sid=elem.title
   let sik=elem.userId
   console.log(har)

   const para = document.createElement('p')
   para.textContent+=""+har
   para.textContent+=""+sid
   para.textContent+=""+sik

   document.body.append(para)}

))})
 
    
 

