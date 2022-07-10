
let userInput: any; // it is unknown because we don't know what it will be
// adding the userName into the mix is what sets unknown apart from any
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // Type 'unknown' is not assignable to type 'string'.ts(2322) - WITH UNKOWN - errors goes away with ANY

// Unkown is more anal, we have to check the type of the variable (userInput) before we assign it to another variable (userName) that wants a string
// So we do the following:
// comment out `userName = userInput;` above
if (typeof userInput === 'string') {
  userName = userInput;
}

// UNKNOWN IS THE BEST CHOICE WHEN WE DON'T KNOW WHAT THE TYPE IS, JUST DO AN EXTRA CHECK AND THROW AN ERROR IF IT IS NOT THE RIGHT TYPE
