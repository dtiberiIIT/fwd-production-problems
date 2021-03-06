/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value for x (5). You must still use
  `x` as the variable inside the function, however.
*/

x = 5;

/*
function double(num) {
  var x = num * 2;
  return x;
}
*/

function doMath(n){
  if(typeof n == "number") {
    var double = function(n) {
      var x = n * 2;
      return x;
    }
  
    n = double(6);
    console.log('The function outputs', n);
  }
  
  else {
    console.log('The function was not passed a number.');
  }
}

doMath(6);
console.log('The value of x is', x, '-- it should be 5.');
doMath("Zebra");
/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).

  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/


/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/
