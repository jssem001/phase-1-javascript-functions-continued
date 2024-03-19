// code your solution here
function saturdayFun(act = 'roller-skate'){
    let acti = `This Saturday, I want to ${act}!`
    return acti
}
//saturdayFun()
function mondayWork(act = 'go to the office'){
    let acti = `This Monday, I will ${act}.`
    return acti
}

function wrapAdjective(emph="*"){
    return function (msg= "Special"){
        return `You are ${emph}${msg}${emph}!`
    }
}


// function outer(greeting, msg = "You are") {
//     // 2
//     const innerFunction = function (name) {
//       // 3
//       let statement = `${msg} ${greeting} ${name} ${greeting}`
//       return statement // 4
//     }
//     return innerFunction("some string") // 5
//   }
  
