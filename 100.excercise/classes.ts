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
abstract class ParentClass {
  counter: I<number>
  interval: I<number>
  waitingTime: I<number>

  constructor(counter: I<number>, interval: I<number>, waitingTime: I<number>){
    this.counter = counter;
    this.interval = interval;
    this.waitingTime = waitingTime;
  }

  
}//End of ParentClass

class CompetitiveStuff extends ParentClass {
  constructor(counter: I<number>, interval: I<number>, waitingTime: I<number>) {
    super(counter, interval, waitingTime);
  }

  static multy(counter: I<number>, interval:I<number>): Promise<number[]> {
    let count = 1;
    let mult = 1;
    let res: number[] = [];
    return new Promise((resolve, reject) => {
      let myInterval = setInterval(() => {
        mult = counter * count;
        res.push(mult);
        console.log(mult);
        count++;
        if(count === 10){
          clearInterval(myInterval)
        }

      }, interval);
      resolve(res);
      
    })

  }//End of multy


  static waiting(waitingTime: I<number>): Promise<string> {
    return new Promise(() => {
      setTimeout(() => {
        console.log("Now we are done waiting");
      }, waitingTime);
    })
  }//End of waiting



  async promiseMethod(): Promise<string>{
    try{
      const result = await Promise.race([CompetitiveStuff.waiting(this.waitingTime), CompetitiveStuff.multy(this.counter, this.interval)])
      return `First operation finished: ${result}`;
    } catch(error){
      return `Error`;
    }
  }//End of promiseMethod


}//End of CompetitiveStuff


let competitveInstance = new CompetitiveStuff(7, 50, 2000);
let myResponse = competitveInstance.promiseMethod().then(res => console.log(res))
