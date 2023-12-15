function tellStory(array) {
    let arg1, arg2, arg3;

    arg1 = array[0];
    arg2 = array[1];
    arg3 = array[2];

    return alert(`This is ${arg1}.${arg1} is a nice person.Today he is ${arg2} all day.The end`)


}

let arr = ['Murat', 'happy', 'exercising'];
let story = tellStory(arr);
console.log(story);
