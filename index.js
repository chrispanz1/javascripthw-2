//Q1//
//Problem 1//
function maxOfTwoNumbers(x,y){
  if(x>y){
    console.log(x)
  }
  else if(y>x)
  {
    console.log(y)
  }
  else{
    console.log(x)
  }
}

maxOfTwoNumbers(8,8);


//Q2//
//Problem 2//

var maxOfThreeNumbers = function maxOfThreeNumbers(x,y,z){
if(x>y && x>z)
 {
  console.log(x)
}
else if (z>x && z>y){
  console.log(z)
}
   
else{
  console.log(y);
}
}
maxOfThreeNumbers(25,30,14)


// Q3//
//problem 3, and a case if someone enters "Y"

function isCharAVowel(z){


        if(z == "A" || z == "E" || z == "I" || z == "O" || z == "U" ) {
            console.log('this is a vowel')
        }
          else if(z=="Y") {
            console.log('y is sometimes a vowel')
          }
         
        else{
            console.log('no this is not a vowel')
        }
}
  isCharAVowel("U")


  //Q4//
  //problem 4//
function sumArray(){
let myNums = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
  
}
  console.log(sum)
}
// Q5//
//problem 5//
function multiplyArray(){
  let myMultiplyNums=[2,7,4,2];
  let sum=1;
  for(let i=0; i<myMultiplyNums.length; i++){
    sum= sum * myMultiplyNums[i]; 
    
}
  console.log(sum);
}
multiplyArray();

//Q6//
// problem 6//
let numArgs=function(...args){
 return(args.length)
}
console.log(numArgs(1,4));




//Q7
//problem 7//


// program to reverse a string//

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
  console.log(newString)
}
reverseString('hello')

    
//problem 8//


function longestStringInArray(arra)
  {
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
        const maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longestStringInArray(["ab", "a", "abcd"]));

//problem 9//

function stringsLongerThan(arra,x)
{
    let string_one = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++)
    {
        const maxi = arra[i].length;
        if (maxi > x) {
            ans = arra[i];
            return(ans)
        }
    }
    

   


}

