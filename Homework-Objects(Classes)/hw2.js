class Bookreader {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    }

    readingProgress() {
        if (this.readingStatus === 'Yes') {
            return `You have already read ${this.title} by ${this.author}`;
        }
        else {
            return `You still need to read ${this.title} by ${this.author}`;
        }
    }
}

let titleInput = prompt("Enter book title!");
let authorInput = prompt("Enter the author of the book!");
let readingStatus = prompt("Type Yes if you read the book or No if you haven't");

let bookReader1 = new Bookreader(titleInput, authorInput, readingStatus);
alert(bookReader1.readingProgress());
