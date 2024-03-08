/* 
  You will be provided with an array that contains numbers as well as alphabets. 
  You have to restructure the array in a way that numbers come first and alphabets second.

  The output should be:
  [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];
*/

type mixArray = string | number

// Your code goes here...
const sortingFunc = (elements: mixArray[]): mixArray[] => {
  let aux = [];
  for(let i=0; i<elements.length; i++){
    if(typeof elements[i] == "string" ){
      aux.push(elements[i]);
    }else{
      aux.unshift(elements[i]);
    }
  }
  
  return aux;
}

console.log(sortingFunc([2, "b", 4, "d", 3, "a", "c", "e", 5, 1]))