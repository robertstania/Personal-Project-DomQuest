//returns a reference to the cashTotal element by the cashTotal ID attribute in the html file
var cashTotal = document.getElementById('cashTotal');
//assigns zero vaue to count
var count = 0;
//parses the count string argument and returns an integer of the specified radix
var counter = parseInt(count);

//returns a reference to the button1 element by the 1 ID attribute in the html file
let button1 = document.getElementById('1');
//adds click functionality to the button1 event target
button1.addEventListener('click', function(){
//num returns a random number between the specified values 10 and 20
var num = Math.random()*10+10;
//formats num using fixed-point notation
var count = num.toFixed();
//parses the count string argument and returns an integer of the specified radix
var par = parseInt(count)
//assigns the value of counter + par to counter
counter = counter + par;
//replaces the cashTotal content with counter
cashTotal.innerHTML = counter;
})

//returns a reference to the button2 element by the 2 ID attribute in the html file
let button2 = document.getElementById('2');
//adds click functionality to the button2 event target
button2.addEventListener('click', function(){
//num returns a random number between the specified values 30 and 50
var num = Math.random()*20+30;
//formats num using fixed-point notation
var count = num.toFixed();
//parses the count string argument and returns an integer of the specified radix(the base in mathematical numeral systems).
var par = parseInt(count)
//assigns the value of counter + par to counter
counter = counter + par;
//replaces the cashTotal content with counter
cashTotal.innerHTML = counter;
})

//returns a reference to the button3 element by the 3 ID attribute in the html file
let button3 = document.getElementById('3');
//adds click functionality to the button3 event target
button3.addEventListener('click', function(){
//num returns a random number between the specified values 70 and 100
var num = Math.random()*30+70;
//formats num using fixed-point notation
var count = num.toFixed();
//parses the count string argument and returns an integer of the specified radix(the base in mathematical numeral systems).
var par = parseInt(count)
//assigns the value of counter + par to counter
counter = counter + par;
//replaces the cashTotal content with counter
cashTotal.innerHTML = counter;
})
