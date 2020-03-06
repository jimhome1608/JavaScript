
const myModule = require('./myModule');
let ArrayCheck = myModule.ArrayCheck; 
let statusResults = myModule.statusResults;

function getTopNote(s)
{
    if (typeof s != 'object' )
    {
        console.log("not an object");
        return;
    }    
    if (typeof(s.notes) == 'undefined') 
    {
        console.log("not a student object");
        return;
    } 
    arrayCheck = new ArrayCheck(s.notes)
    if (arrayCheck.status != statusResults.OK )
    {
        console.log("student notes");
        console.log(arrayCheck.status);
        return;
    }
    let max = 0;
    let numberFoundCount = 0;
    s.notes.forEach(function (item, index) {
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
        return "no notes found";
    return  max                                                                                                                                                                                                                                                                                                                                                                                           ;
}

function getItemsWithNumbers(v)
{
    arrayCheck = new ArrayCheck(v)
    if (arrayCheck.status != statusResults.OK )
    {
        console.log("getItemsWithNumbers");
        console.log(arrayCheck.status);
        return;
    } 
    var res = [];
    v.forEach((element, index) => {
        var numb = element.match(/\d/g);
        if (numb)
        {
            res.push(element);
        }        
    });
    return res;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    if (this.firstName.length > 0 )
        this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) ;
    if (this.lastName.length > 0 )
        this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1) ;
    this.name = function() 
    {
        return this.firstName + " " + this.lastName;
    }
  }

let p = new Person("jim", "clark", 58, "blue");
p.fullDetails = function () {
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor;
};
console.log(p.fullDetails());
