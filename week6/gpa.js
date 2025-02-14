function getGrades(inputSelector) {
    let grades = document.querySelector(inputSelector).value; // get grades from the input box
    let array = grades.split(','); // split them into an array (String.split(','))
    let cleanArray = array.map(grade => grade.trim().toUpperCase()); // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    return cleanArray; // return grades
}
console.log(getGrades); 

function lookupGrade(grade) { // converts the letter grade to it's GPA point value and returns it
    let point =0
    if (grade === 'A'){
        point = 4;
    } 
    else if (grade === 'B'){
        point = 3;
    }
    else if (grade === 'C'){
        point = 2;
    }
    else if (grade === 'D'){
        point = 1;
    }
    else 
    point = 0;

    return point;
}

function calculateGpa(grades) {
    let gpaPoints = grades.map(lookupGrade);// gets a list of grades passed in
    let totalPoints = gpaPoints.reduce((sum, point) => sum + point, 0);// convert the letter grades to gpa points
    let gpa = totalPoints/gpaPoints.length;// calculates the GPA
    return gpa.toFixed(2);// return the GPA
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const output = document.querySelector(selector);
    output.innerText = gpa;
}

function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades('#grades');
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);