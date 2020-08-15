// var iseven=(e)=>{
//     return e%2===0;
// };
// console.log(iseven(18));
// var res=[2,4,32,8].every((e)=>(e%2===0));
// console.log(res);
var counter=document.querySelector(".counter");
var follower=document.querySelector(".followers");
let count=1;
setInterval(() => {
    if(count<1000){
    count++;
    counter.innerText=count;
    }
}, 1);
setTimeout(() => {
    follower.innerText="followers in instagram!";
}, 9000);