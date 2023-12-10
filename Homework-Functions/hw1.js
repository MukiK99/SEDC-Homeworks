function parameterTypeReturner(param) {
    parameterType = (typeof param);
    console.log("Tipot na parametarot e", parameterType);
    return parameterType;
}
let Murat = {
    name: 'Murat',
    surname: 'Koca',
    age: 24
}
let something = 3 < 4;
let number = 24;
let word = "School";
let Sedc;

parameterTypeReturner(Murat);
parameterTypeReturner(something);
parameterTypeReturner(number);
parameterTypeReturner(word);
parameterTypeReturner(Sedc);