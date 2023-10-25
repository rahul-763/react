const accountId =14453
let accountEmail = "rahul.taneja@ksolves.com"
var accountPassword = "12345"

// if we only declare the var n not give any in it by default its value is undefined
let accountState;

// prefer not to use this senario
accountCity = "Delhi"

// accountId = 2 // const val cannot be changed
accountEmail = "Abc@gmail.com"
accountPassword ="85684"
accountCity = "Haryana"

// we can use this to print only a particular field
console.log(accountId);

// we can use this to print multiple fields at a time
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/