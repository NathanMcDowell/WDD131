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
        return 4.0
    }
    if (letter == 'B') {
        return 3.0
    }
}

const gradesHtml = grades.map(listGrades)
document.querySelector("#myListTwo").innerHTML = gradesHtml.join(", ")

//Activity 3
const gpaPoints = grades.map(listGrades)
const pointsTotal = gpaPoints.reduce(function (total, item){
    return total + item
});
    const gpa = pointsTotal / gpaPoints.length;
console.log(gpa);

// Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const short_fruits = fruits.filter(fruit => fruit.length < 6);
console.log(short_fruits);

// Activity 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber)
console.log(luckyIndex)