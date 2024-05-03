# project one

## click here

# solution code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

# project 2

## click here

```javascript
const form = document.querySelector('form');
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `'plz give valid height '${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `'plz give valid height '${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```


# project 
## time changing clock

```javascript



document.getElementById('clock');
//both will display the same we will use one and comment one
//document.querySelector('#clock')

//here we can use the method setinterval

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

# project 
## guess the num
```javascript

//for now incomplete code 
const randomnum = console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;
//check you are available or not
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
  });
}
//const validate =
function validateguess(guess) {
  //
}
function checkguess(guess) {
  //
}
function displayguess(guess) {
  //
}
function displaymsg(msg) {
  //
}
function endgame() {
  //
}
function newgame() {
  //
}


```
