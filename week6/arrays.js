//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");
// set the innerHTML
// These activities will be most effective if you try them first before you look at


//Activity 2
const letters =['A', 'B', 'C'];

function gpaConvert(letter) {
    let point = 0
    if (letter === 'A') {
        point = 4;
    } else if (letter === 'B') {
        point = 3;
    } else if (letter === 'C') {
        point = 2;
    }
    return point;

}

const gpa = letters.map(gpaConvert);
console.log("gpa points: " + gpa);

//Acivity 3 Reduce

const gpaPoints = gpa.reduce((total, item) =>  total + item , 0);
const totalgpa = gpaPoints/ gpa.length;
console.log(totalgpa);

//Activity 4 Filters

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruitsShort = fruits.filter((fruit) => fruit.length < 6);
console.log(fruitsShort);

//Activity 5 IndexOf

const numbers = [12, 24, 21, 54];
let luckyNumber = 21;
let luckyNumbers = numbers.indexOf(luckyNumber);
console.log(luckyNumbers);