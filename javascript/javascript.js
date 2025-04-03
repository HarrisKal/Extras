const lodash = require('lodash');

const toExport = {
  print() {
    let output = '';
    for (let i of arguments) {output += i + ' ';}
    console.log(output);
  },

  errorIf(condition, message) {
    if (condition === true) {
      throw new Error(message)
    }
  },
  
  calculator(firstNumber, secondNumber, calculation) {
    let output;
    switch(calculation) {
      case 'add': output = firstNumber+secondNumber; break;
      case 'subtr': output = firstNumber-secondNumber; break;
      case 'mult': output = firstNumber*secondNumber; break;
      case 'div': output = firstNumber/secondNumber; break;
      case 'raise': output = firstNumber**secondNumber; break;
      case 'getRemainder': output = firstNumber%secondNumber; break;
      case 'concat': output = lodash.toNumber(`${firstNumber}${secondNumber}`); break;
      default: output = 'Type an actual calculation.\n Options: \n  add\n  subtr\n  mult\n  div\n  raise\n  getRemainder\n  concat';
    }
    this.print(output);
  }
}

// export 
const {print, calculator, errorIf} = toExport;

'--------------------------------------------------------------------------------------------------'
// Group equal numbers
function groupEqualNumbers(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      // Check if the current number already exists in the result array
      for (let j = 0; j < result.length; j++) {
        if (result[j][0] === arr[i]) {
          result[j].push(arr[i]);
          found = true;
          break;
        }
      }
      // If the number wasn't found, add a new nested array to the result
      if (!found) {
        result.push([arr[i]]);
      }
    }
    return result;
  }
let apo = [3,4,6,3,1,2,2,5,8,9,5,4,3,3,4,1,2,8];

'--------------------------------------------------------------------------------------------------'

// Empty array of empty objects
const arrayOfObjects = [
  {
    [[]]:[[{[[]]:{[[]]:[]}}]],
    [{[{[[]]:[]}]:[]}]:{},
    [{[[]]:{[[]]:[]}}]:[[{[[]]:[]},[{},[{[[]]:[]}]]]]
  },
  {[[{[{}]:{[{[[]]:{}}]:[{}]}}]]:[{[[]]:[{[[]]:[[{}]]}]}],
    [{[[]]:{[{[[]]:{}}]:[{[{}]:[]}]}}]:{
      [{[[]]:{[[]]:[]}}]:[{[[]]:{[{[[]]:[]}]:[{[{}]:[]}]}}]
    }
  },
];

'--------------------------------------------------------------------------------------------------'


// Count occurences in an array
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {throw new Error();}
    return array.reduce((acc, c) => {
        const occ = (c === searchElement)? 1 : 0;
        return acc + occ;
    }, 0)
};

'--------------------------------------------------------------------------------------------------';



// Export
module.exports = {
  p: print,
  calc: calculator,
  errIf: errorIf,
};
