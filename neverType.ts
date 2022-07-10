let userInput = unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

// utiliity function that generates error object and throws an error
//  throwing an object, you'll want a message prop to store valeu of message and errodCode prop to store value of code
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}