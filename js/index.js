// const hello = 'Hello World';
// alert(hello);

const userName = prompt('Enter your name');
const greetings = 'Hello, ' + userName;
alert(greetings);

const userAge = parseInt(prompt('Enter your age'));
alert('Your age is: ' + userAge);

const nextAge = userAge + 1;
alert('Next year you will be: ' + nextAge);

if (userAge >= 18) {
    alert('You are adult');
} else {
    alert('You are child');
}

function add(a, b) {
    const result = a + b;
    return result;
}

const result = add(2, 2);
alert(result);

