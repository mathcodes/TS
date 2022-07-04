function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  // SECOND WAY TO HANDLE THIS
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // END SECOND WAY

  // FIRST WAY TO HANDLE THIS
  // if (typeof input1 === 'number' && typeof input2 === 'number') {
  //   result = input1 + input2;
  // } else {
  //   result = input1.toString() + input2.toString();
  // }
  // return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  // END FIRST WAY
}
// using the third parameter to force the conversion when needed depending on the input THE CONDITIONAL HANDLING THIS IS ABOVE IN THE IF BLOCK
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
