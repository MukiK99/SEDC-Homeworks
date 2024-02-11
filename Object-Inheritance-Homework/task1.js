function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`Person Full Name: ${firstName} ${lastName}`);
    }
}
// let person = new Person('Murat','Koca',24);
// person.getFullName();

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${academyName} academy`);
    }
}

// let Murat = new Student('Murat', 'Koca', 24, 'Qinshift', 10);
// console.log(Murat);
// Murat.study();
// let Jack = new Student('Jack', 'Daniels', 38, 'Beer', 25);
// console.log(Jack);
// Jack.study();