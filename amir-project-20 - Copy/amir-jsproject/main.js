import './style.css'

const input = document.querySelector('input[type=text]');
const enter = document.getElementById('enter');
const Print = document.getElementById('Print');
const clear = document.getElementById('clear');
const message = document.getElementById('show');

let arr = [];
enter.addEventListener('click', putToArr);

function putToArr() {
  let inputValue = input.value;
  let inputArray = inputValue.split(' ');
  arr = arr.concat(inputArray);
  input.value = '';
  console.log(arr);
}

Print.addEventListener('click',show);
function show() {
  message.innerText=arr;
}

clear.addEventListener('click',remove);
function remove() {
  message.innerText='';
}