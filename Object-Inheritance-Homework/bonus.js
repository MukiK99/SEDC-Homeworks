function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`Person Full Name: ${firstName} ${lastName}`);
    }
}
Person.prototype.getStudentAcademy = function (student) {

    console.log(`The ${this.firstName} academy is: ${student.academyName}`);
    return student.academyName;

}
let person = new Person('Murat', 'Koca', 24);


function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${academyName} academy`);
    }
}




let Murat = new Student('Murat', 'Koca', 24, 'Qinshift', 10);
// console.log(Murat);
// Murat.study();
let Jack = new Student('Jack', 'Daniels', 38, 'Beer', 25);
// console.log(Jack);
// Jack.study();
// person.getStudentAcademy(Jack);
// person.getStudentAcademy(Murat);

// Design Student

function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

let designStudent = new DesignStudent('John', 'Doe', 30, 'Design Academy', 20, true);
// console.log(designStudent);
// designStudent.attendAdobeExam();

// Code Student

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function (type) {
        if (type === 'group') {
            console.log(`The student is working on group project`);
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        }
        else if (type === 'individual') {
            console.log(`The student is working on a individual project!`);
            this.hasIndividualProject = true;
            this.hasGroupProject = false;
        }
        else {
            console.log(`Please enter valid parameter!`);
            return;
        }
    }
}

const codeStudent = new CodeStudent('Amy', 'Musk', 24, 'Code Academy', 10, false, false);
// console.log(codeStudent);
// codeStudent.doProject('group');
// console.log(codeStudent);
// codeStudent.doProject('individual');
// console.log(codeStudent);

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a cisco exam!`);
    }
}

const networkStudent = new NetworkStudent('Jane', 'Doe', 20, 'Network Academy', 20, 3);
// console.log(networkStudent);
// networkStudent.attendCiscoExam();

// designStudent.study();
// codeStudent.study();
// networkStudent.study();
// designStudent.getStudentAcademy(designStudent);
// codeStudent.getStudentAcademy(codeStudent);
// networkStudent.getStudentAcademy(networkStudent);