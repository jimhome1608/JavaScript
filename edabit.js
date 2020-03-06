
// Return the Next Number from the Integer Passed
function nextNumber(v) 
{
    if (v === undefined)
      return "undefined input";
    if(isNaN(v) || v === null)
    return "input paramater is not a number";
    return v + 1;
}

// Return the First Element in an Array
function getFirstValue(v) 
{
  if (v === undefined || v === null)
    return "undefined input"
  if (!Array.isArray(v))
    return "input paramater is not an array";
  if (v.length < 1)
    return "Empty Array Passed to getFirstValue";
  return v[0];    
}

// Return largest number found in an array
function getMaxInteger(v) 
{
  if (v === undefined || v === null)  
    return "undefined input parameter";
  if (!Array.isArray(v))
    return "input paramater is not an array";
  if (v.length < 1)
    return "Empty Array Passed to getMaxInteger";
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


var r = getMaxInteger(["2",33])
console.log(r);
