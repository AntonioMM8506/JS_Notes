/* 
  Modify the ParentClass to be an abstract class.
  Requirements for class CompetitiveStuff
    - Use ParentClass as the CompetiitiveStuff class template
    - Create 2 statics methods, one called multy and other called wating
    - multy method requirements:
      - Return a solved promise with an array of the results of multiplication tables of the counter property
      - Do not use a loop cycle, you should use setInterval to do the math, the interval should be the interval property
    - waiting method requirements:
      - Return a solved promise with a string: "Now we are done waiting", you use something that allows you to  waite the waitingTime property
    - Create another static method call promiseMethod and run the multy method and waiting method at the same time, return the first promise to finish
  Other requirements:
    - Create an instance of the class and pass the following values:
      - counter: 7
      - interval 50
      - waitingTime: 2000
    - Call the method promiseMethod and store the retuned response in a variable called myResponse
    - Print out the myResponse variable

*/
type I<T> = T extends number ? number : null
class ParentClass {
  counter: I<boolean>
  interval: I<null>
  waitingTime: I<string>
}

class CompetitiveStuff {}