let counter = 0;
let prefixIncrement = ++counter;
counter = 0;
let postfixIncrement = counter++;
counter = 0;
let prefixDecrement = --counter;
counter = 0;
let postfixDecrement = counter--;

document.getElementById('result').innerHTML = counter;
