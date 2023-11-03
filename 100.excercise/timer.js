/*
  The function startTimer takes two arguments:
    - a callback function (callback) and a time interval. It should call the callback ebery interval milliseconds.
      The callback receives the counter parameter and should return true if the timer continues operating or false
      if the timer should stop operating
    - Interval miliseconds after the timer is started, the callback should be called for the first time.
      The first time the callback is called, the counter should be equal 1, the second time it should equal 2,
      and so on
  
  The timer should allow other code to be executed during the wait time, and multiple timers should be allowed to
  coexist.
*/
function startTimer(callback, interval) {
  // Write the code that goes here
}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startTimer(callback, 50);