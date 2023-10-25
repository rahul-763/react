// function sayMyName()
// {
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
// }


// sayMyName()
//  function addTwoNumbers(number1, number2)
//  {
//     console.log(number1 + number2);
//  }

// function addTwoNumbers(number1, number2)
// {
//         return number1 + number2;
// }

// const result = addTwoNumbers(3,4)

// console.log("Result: "+ result);

function loginUserMessage(username)
{
    if(!username)
    {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul"));