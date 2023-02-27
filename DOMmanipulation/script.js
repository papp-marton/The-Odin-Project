const container = document.querySelector('#container');
console.log(container);

const red = document.createElement('p');
const blue = document.createElement('h3');

red.textContent = "such red text";
red.style.cssText = "color: red;" // ok in a string

blue.textContent = "such blue text";
blue.style.cssText = "color: blue;" // ok in a string


const one = document.createElement('div');
const two = document.createElement('h1');
const three = document.createElement('p');
one.textContent = "i am DIV!";
two.textContent = "i am also div!";
three.textContent = "me 2";
one.append(two);
one.append(three);
one.style.border = 'thick solid black';
one.style.backgroundColor = 'pink';

container.append(red);
container.append(blue);
container.append(one);

//button logic

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });