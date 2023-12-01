const button1 = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const reset = document.querySelector('#reset');
const score1 = document.querySelector('#player1');
const score2 = document.querySelector('#player2');
let counter1 = 0;
let counter2 = 0;
let maximum = 3;

button1.style.color = 'white';
button1.style.backgroundColor = 'green';
button2.style.color = 'white';
button2.style.backgroundColor = 'blue';
reset.style.color = 'white';
reset.style.backgroundColor = 'red';

const max = document.querySelector('#max');
max.addEventListener('change', function () {
    maximum = max.value;
})

button1.addEventListener('click', function () {
    counter1 += 1;
    score1.innerText = counter1;
    if (counter1 == maximum) {
        score1.style.color = 'green';
        score2.style.color = 'red';
        button1.disabled = true;
        button2.disabled = true;
    }
})
button2.addEventListener('click', function () {
    counter2 += 1;
    score2.innerText = counter2;
    if (counter2 == maximum) {
        score2.style.color = 'green';
        score1.style.color = 'red';
        button1.disabled = true;
        button2.disabled = true;

    }
})

reset.addEventListener('click', function () {
    button1.disabled = false;
    button2.disabled = false;
    score2.style.color = 'black';
    score1.style.color = 'black';
    score1.innerText = '0';
    score2.innerText = '0';
    counter1 = 0;
    counter2 = 0;

})


