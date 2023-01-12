// const fact = document.querySelector('.factorial')


// function factorial(){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else{
//       for(var i = n; i >= 1; i){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }

// document.querySelector('#xhr').addEventListener("click",()=>
// {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("loadend",()=>
//   console.log("ended req with status", xhr.status));

//   xhr.open('GET', "https://api.publicapis.org/categories");
//   xhr.send();

//   console.log("started with the req");
// });

function fetchUser(result,callback1){
  result += 1;
  callback1(result)
}

function fetchSupervisior(result,callback2){
  result += 2;
  callback2(result)
}

function fetchProfile(result,callback){
  result += 3;
  callback(result)
}

function callOperation(){
  fetchUser(1,(result)=>{
    fetchSupervisior(result,(result)=>{
      fetchProfile(result,(result)=>{
        console.log(result)
      })
    })
  })
}

callOperation();




