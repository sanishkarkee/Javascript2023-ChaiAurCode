/*---------------NOTES---------------- */
/* 
  ====>  Process of converting one datatype to another datatype.
          Example : converting  data to number .
            There are 2 type conversions in JS:
              1)Implicit conversion- automatic type conversion
              2)Explicit conversion - manual type conversion

  ====>  Number() cases: "33" (converts to)=> 33
                            "33abc" (converts to)=> NaN
                            true (converts to)=> 1; false (converts to)=> 0

  ====>  Boolean() cases: 0 => false , 1 =>true , other number => true
                          "" => false ,  "Hitesh" => ture
*/
// ---------------------------------------------------------------------------

let score = 'Hitesh'; // null/undefined/boolean
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = 'Hitesh';
let booleanISLoggedIn = Boolean(isLoggedIn);
// console.log(booleanISLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
