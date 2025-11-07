const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2,
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    enrollDropStudent: function(sectionNum, button){
        console.log("sectionNum to enroll in:", sectionNum);
        const theSection = this.sections.find(
            (section) => sectionNum == section.sectionNum
        );
        if (theSection) {
            if (button == "enrollStudent")
            {
                theSection.enrolled++;
            } else if (button == "dropStudent")
            {
                theSection.enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

const key = "code";
//  | All three of these call the same output.
//  V
aCourse.name;
aCourse.key;
aCourse[key];

aCourse.sections[0].instructor;


function renderHeader(course){
    let nameEl = document.querySelector("#courseName");
    let codeEl = document.querySelector("#courseCode");
    nameEl.innerHTML = aCourse.name
    codeEl.innerHTML = aCourse.code
}

function sectionTemplate(section){
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
}

function renderSections(sections){
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join("");
}



renderHeader();
renderSections(aCourse.sections);

function clickHandler(event){
    const sectionInput = document.querySelector("#sectionNumber");
    const sectionNum = sectionInput.value;
    console.log("Hello", event.target.id) 
    aCourse.enrollDropStudent(sectionNum, event.target.id);
}

document.querySelector("#enrollStudent").addEventListener("click", clickHandler);
document.querySelector("#dropStudent").addEventListener("click", clickHandler);
