const accountId = 144553;
let accountEmail = 'hitesh@gmail.com';
var accountPassword = '12345';
accountCity = 'Jaipur '; //another way of declaring variable
let accountState; //undefined

// accountId = 2;      //not allowed
accountEmail = 'hc@hc.com';
accountPassword = '21212121';
accountCity = 'Bengaluru';

console.log(accountId);

/*
  Prefer not to use var because of issue in block scope and functional scope
*/

console.table([
  accountPassword,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
