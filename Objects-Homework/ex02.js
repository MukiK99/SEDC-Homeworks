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
            console.log(`The academy is: ${this.academy.name}`);
            this.academy.students.push(this);
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
                    if (this.currentSubject === null) {
                        this.currentSubject = subject.title;

                    }
                    else {
                        this.completedSubjects.push(this.currentSubject);
                        this.currentSubject = subject.title;

                    }
                    console.log(`The latest current subject is: ${subject.title}`);
                    subjectExists = true;
                }


            });

            if (subjectExists) {
                subject.students.push(this);
            }
            if (!subjectExists) {
                console.log(`This subject does not exist!`);
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
    true,
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

let HTML = new Subject(
    'HTML',
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
        new Student('Jack', 'Ma', 48),
        new Student('Jeanne', 'Decart', 37)
    ]
);


// Student instance

let Murat = new Student(
    'Murat',
    'Koca',
    24
);
let Jackson = new Student(
    'Jackson',
    'Heisenberg',
    36
);
console.log(Qinshift);
// console.log(CSS);
// CSS.OverrideClasses(7);
Murat.StartAcademy(Qinshift);
// console.log(Murat);
console.log(Jackson);
Jackson.StartAcademy(Qinshift);
// Murat.StartSubject(Javascript);
// Murat.StartSubject(CSS);
// // console.log(CSS);
// Murat.StartSubject(Javascript);
// Murat.StartSubject(HTML);
Jackson.StartSubject(Javascript);
Jackson.StartSubject(HTML);
Jackson.StartSubject(CSS);


