let cashTotal = document.getElementById('cashTotal');
var count = 0;
var counter = parseInt(count);

let button1 = document.getElementById('1');
button1.addEventListener('click', function(){
var num1 = Math.random();
var num2 = num1*10+20;
var count = num2.toFixed();
var par = parseInt(count)
counter = counter + par;
cashTotal.innerHTML = counter;
})
let button2 = document.getElementById('2');
button2.addEventListener('click', function(){
var num1 = Math.random();
var num2 = num1*30+50;
var count = num2.toFixed();
var par = parseInt(count)
counter = counter + par;
cashTotal.innerHTML = counter;
})
let button3 = document.getElementById('3');
button3.addEventListener('click', function(){
var num1 = Math.random();
var num2 = num1*70+100;
var count = num2.toFixed();
var par = parseInt(count)
counter = counter + par;
cashTotal.innerHTML = counter;
})
