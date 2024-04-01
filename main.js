let myName = 'Nika';
let myHobby = 'listen music and watch movies';
let yearOfBirth = 2002;
let currentYear = 2024;

console.log(myName);
console.log(myHobby);
console.log(yearOfBirth);
console.log(currentYear);

let age = currentYear - yearOfBirth;
console.log('age',age);

let text = 'my name is ' + myName + ' myhobby is ' + myHobby + ' i am ' + age + ' years old ';
console.log(text)

let text2 = `my name is ${myName} myhobby is ${myHobby} i am ${age} years old`;
console.log(text2);