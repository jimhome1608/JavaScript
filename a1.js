
const myModule = require('./myModule');
let ArrayCheck = myModule.ArrayCheck; 
let NumberCheck = myModule.NumberCheck; 
let statusResults = myModule.statusResults;

// let cats = require('./cat');
// let Cat = cats.Cat;

// https://edabit.com/challenges

// Return the Next Number from the Integer Passed
function nextNumber(v) 
{
  numberCheck = new NumberCheck(v);
  if (numberCheck.status != statusResults.OK )
  {
    return numberCheck.status;
  }
  return v + 1;
}

// Return the First Element in an Array
function getFirstValueFromArray(v) 
{
  arrayCheck = new ArrayCheck(v);
  if (arrayCheck.status != statusResults.OK )
  {
    return arrayCheck.status;
  }
  return v[0];    
}
// Return largest number found in an array
function getMaxIntegerFromArray(v) 
{  arrayCheck = new ArrayCheck(v);
  if (arrayCheck.status != statusResults.OK )
  {
    console.log(arrayCheck.status);
    return;
  }
  let max = 0;
  let numberFoundCount = 0;
  v.forEach(function (item, index) {
    if (!isNaN(item)) 
    {
       numberFoundCount++;
       if (index === 0)
          max = item;
       if (item > max) 
          max = item;
    }
  });
  if (numberFoundCount == 0)
     return "no numbers found in paramter pass to getMaxInteger"
  return max;
}

//Reverse an Array
function ReverseThisArray(v)
{
  arrayCheck = new ArrayCheck(v);
  if (arrayCheck.status != statusResults.OK )
  {
    console.log(arrayCheck.status);
    return;
  }
  const clone_array = Array.from(v);
  return clone_array.reverse(); 
}
  
// Add up the Numbers from a Single Number
function AddUpTheNumberTo(v)
{
  numberCheck = new NumberCheck(v);
  if (numberCheck.status != statusResults.OK )
  {
    return numberCheck.status;
  }
  v = Math.trunc(v);
  if ( v <=0 )
    return 0;
  var sum = 0;
  var i;
  for (i = 0; i < v; i++) {
    sum += i;
  }  
  return sum;
}

let text = "https://au.frontiersoftware.com/";
console.log(text.indexOf("http"));


