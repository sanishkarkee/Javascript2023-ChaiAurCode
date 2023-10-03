/*------ VIDEO3: ---------NOTES---------------- */
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
// -------VIDEO3:--------------------------------------------------------

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
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*------------------VIDEO 4: Operations---------------------------- */

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = 'hello';
let str2 = ' hitesh';

let str3 = str1 + str2;
// console.log(str3);    Op=>hello hitesh

// console.log('1' + 2); Op=> 12(string)
// console.log(1 + '2'); Op=> 12(string)
// console.log('1' + 2 + 3);   Op => 123(string)
// console.log(1 + 2 + ' 3');   left bata herdai aaucha ani number haru add garera string sanga concatenate garcha / Op => 33(string)

// console.log(+true);
// console.log(+'');

let num1, num2, num3;
num1 = num2 = num3 = 2 + 3;

let gameCounter = 100;
gameCounter++; //gameCounter = gameCounter +1;
console.log(gameCounter);
