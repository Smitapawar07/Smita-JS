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

//
let randomnum = console.log(parseInt(Math.random() * 100 + 1));

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
    const guess = parseInt(userinput.value);
    validateguess(guess);
  });
}
//const validate =
function validateguess(guess) {
  //for valid email and all
  if (isNaN(guess)) {
    alert('please enter the valid num');
  } else if (guess < 1) {
    alert('please enter the num');
  } else if (guess > 100) {
    alert('please enter the num less than 100');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymsg(`Game over and random num was ${randomnum}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  //
  if (guess === randomnum) {
    displaymsg('you guess it right');
    endgame();
  } else if (guess < randomnum) {
    displaymsg('no is too low');
  } else if (guess > randomnum) {
    displaymsg('no is to high');
  }
}
function displayguess(guess) {
  //
  userinput.value = '';
  guessslot.innerHTML += `${guess} `;
  numguess++;
  remaining.innerHTML = `${11 - numguess} `;
}
function displaymsg(msg) {
  //
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function endgame() {
  //
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  //
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomnum = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}


```
# project
## key board keys pressing
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <iv class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `;
});

```
# project 6

## colorchanges
```javascript

//generate random color
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;
const startchangecolor = function () {
  if (!intervalid) {
    intervalid = setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangecolor = function () {
  clearInterval(intervalid);
  intervalid = null;
};
document.querySelector('#start').addEventListener('click', startchangecolor);

document.querySelector('#stop').addEventListener('click', stopchangecolor);

```
