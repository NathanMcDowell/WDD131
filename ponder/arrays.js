// Activity 1
const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`; //the html string made from step
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

// Activity 2
const grades = ['A', 'B', 'A'];

function listGrades(letter) {
    
    if (letter == 'A') {
        return '4.0'
    }
    if (letter == 'B') {
        return '3.0'
    }
}

const gradesHtml = grades.map(listGrades)
document.querySelector("#myListTwo").innerHTML = gradesHtml.join(", ")

//Activity 3
