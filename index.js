
function greet() {
return "hello world!";
}
console.log(greet);

let name = "waffles";
console.log(name);


const intrestRate = 0.3;

console.log(intrestRate);


let age = 30;
let isApproved = false;
let happy = undefined;
let color = null;

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener("click", function(){
  console.log("i am the parent");
});

child.addEventListener("click", function(){
  console.log("i am the child");
});



var ageVer = function(age){
  if(age > 10){
    console.log("you are older")
  }
}
 ageVer(9)


 function createPhoneNumber(numbers){
   return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`;
 }
