
const myModule = require('./myModule');
let StringCheck = myModule.StringCheck; 
let statusResults = myModule.statusResults;


// Find how many tabs with one literal whitespace immediately following the tab are in a string.
function findTabs(v)
{
    stringCheck = new StringCheck(v);
    if (stringCheck.status != statusResults.OK )
    {
      return stringCheck.status;
    }
    var tabSearch = /\t\s[^-\s]/g;
    var m = v.match(tabSearch);
    let c = 0;
    while ((match = tabSearch.exec(v)) != null) {
        c++;
        console.log("Match #" + c + " found: \"" + match+"\"  position: " + match.index);        
    }
    var count = (m || []).length;
    return count;
}

var twoTab = "Visit\tW3Schools.\t Learn\t .JavaScript."; 
var result = findTabs(twoTab);
if (result != 2)
    console.log("test twoTab Failed found "+ result + " tabs followed by a space");
else
    console.log("test twoTab Passed found "+ result + " tabs followed by a space"); 