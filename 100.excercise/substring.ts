/* 
  You have a string where every character is an alphabet like the following.

  "abbbcabcdefef"

  You have to find the length of the longest substring from the string without repeating any character. 
  In other words, find the length of the longest substring with unique characters. 

  In the above string, the longest substring without repeating characters is “abcdef”. So the output will be 6.

  a
  b 
  b X -3
  
  b
  c
  aX -2




  */

const getLength = (str: string) => {
  let start = 0;
  let ending = 0;
  let auxString = "";
  let res = 0;

  let chars = new Set();

  while(ending < str.length){
    if(!chars.has(str.charAt(ending))){
      chars.add(str.charAt(ending));
      ending++;
      res = Math.max(chars.size, res);
    } else {
      chars.delete(str.charAt(start));
      start++;
    }

  }

  return res;

}

console.log(getLength("abbbcabcdefef"))