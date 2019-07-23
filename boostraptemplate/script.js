// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
 
 
//using prompt() and alert(), ask a user for their age.
var age=Number(prompt("type your age"));
if (age<18){
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if(age===18){
    alert("Congratulations on your first year of driving. Enjoy the ride!"
    );
}
else if(age>18){
    alert("Powering On. Enjoy the ride!");
}
else{
    alert("type your age value of your age");
}
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"
 
// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"
 
// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
