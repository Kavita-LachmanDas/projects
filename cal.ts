var prompt = require('prompt-sync')()

var x = parseInt(prompt("please enter your first value"))
var y = parseInt(prompt("please enter your second value"))
var op = prompt("please enter tour opeartor")
if (op == "+")
{console.log(x + y)}
if (op == "-")
{console.log(x - y)}

if (op == "/")
{console.log(x / y)}
if (op == "*")
{console.log(x * y)} 
else {
     console.log("please select correct operator")}
export{}