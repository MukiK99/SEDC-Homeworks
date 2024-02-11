class Academy {
    constructor(name, students, subjects, start, end) {
        this.name = name;
        this.students = students;
        this.subjects = subjects;
        this.start = start;
        this.end = end;
        this.numberOfClasses = subjects.length * 10;
    }
    PrintStudents() {
        console.log("Students:");
        this.students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.firstName} ${student.lastName}`);
        })
    }
    PrintSubjects() {
        console.log("Subjects:");
        this.subjects.forEach((subject, index) => {
            console.log(`${index + 1}. ${subject.title}`);
        })
    }


}


//Class Subject

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = students;
    }
    OverrideClasses(number) {
        if (number >= 3) {
            return this.numberOfClasses = number;
        }
        return console.log("The number should be larger or equal to 3");
    }
}


class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;


    }
    StartAcademy(academy) {
        if (academy instanceof Academy) {
            this.academy = academy;
            return console.log(`The academy is: ${this.academy.name}`);
        }
        else {
            console.log("Invalid academy name provided");
            return null;
        }


    }
    StartSubject(subject) {
        if (this.academy !== null) {
            let subjectExists = false;

            this.academy.subjects.forEach(academySubject => {
                if (academySubject.title === (subject.title)) {
                    this.currentSubject = subject.title;
                    console.log(`The current subject is: ${subject.title}`);
                    subjectExists = true;
                }

            });
            if (!subjectExists) {
                console.log(`${subject.title} does not exist!`);
            }

        }
        else {
            console.log(`${this.firstName} ${this.lastName} is not enrolled in any academy.`);
        }
    }
}

//Academy instance

let Qinshift = new Academy(
    'QinShift',
    [
        new Student('Murat', 'Koca', 24),
        new Student('John', 'Doe', 30),
        new Student('Jane', 'Doe', 28)
    ],
    [
        new Subject('HTML', false, null, [
            new Student('Jack', 'Ma', 48),
            new Student('Jeanne', 'Decart', 37)
        ]),
        new Subject('CSS', true, null, [
            new Student('Jared', 'Meyer', 32),
            new Student('Russell', 'Muller', 27)
        ]),
        new Subject('Javascript', false, null, [
            new Student('Calvin', 'Rock', 23),
            new Student('Susan', 'Johnson', 33)
        ])
    ],
    '2023-10-18',
    '2024-10-18'
);

//   console.log(Qinshift);
//   Qinshift.PrintStudents();
//   Qinshift.PrintSubjects();

// Subject instance

let Javascript = new Subject(
    'Javascript',
    false,
    new Academy('Qinshift', [
        new Student('Murat', 'Koca', 24),
        new Student('John', 'Doe', 30),
        new Student('Jane', 'Doe', 28)
    ],
        [],
        '2023-10-18',
        '2024-10-18'
    ),
    [
        new Student('Calvin', 'Rock', 23),
        new Student('Susan', 'Johnson', 33)
    ]
);


let CSS = new Subject(
    'CSS',
    false,
    new Academy('Qinshift', [
        new Student('Murat', 'Koca', 24),
        new Student('John', 'Doe', 30),
        new Student('Jane', 'Doe', 28)
    ],
        [],
        '2023-10-18',
        '2024-10-18'
    ),
    [
        new Student('Jared', 'Meyer', 32),
        new Student('Russell', 'Muller', 27)
    ]
);
// console.log(Javascript);
// Javascript.OverrideClasses(5);

// Student instance

let Murat = new Student(
    'Murat',
    'Koca',
    24
);
console.log(Murat);
Murat.StartAcademy(Qinshift);
Murat.StartSubject(Javascript);
Murat.StartSubject(CSS);


