



// function greet() {
//  console.log('Hello there!')
// }

//const greet2 = function() {
//  console.log('Hello there from number 2')
// }


// greet()
// greet2()

// let name = 'Nisse'

// const test = function() {

// return 'Hej'

// console.log('test')
// name = 'Joakim';
 
// }


// const t = test()
// console.log(t)



// const greet = function(name) {
//  console.log(`Hej ${name}! Hur är läget?`)
// }

// greet('nisse') 
// greet('Joakim') 
// greet('Hans')

const getFullName = function(firstName = 'John', lastName = 'Doe') { 
if(typeof firstName !== 'string' || typeof lastName !== 'string') {
console.log('you need to enter the names as string values')
return 'John Doe'
}

  const fullName = `${firstName} ${lastName}`
  return fullName;
}


// const user1 = getFullName('Joakim', 'Lindh')
// const user2 = getFullName(1, false)
// const user3 = getFullName()

// console.log(user1)
// console.log(user2)
// console.log(user3)


// const calculate = function(num1 = 0, num2 = 0) {
// if(isNaN(+num1) || isNaN(+num2)) {
//    console.error('the calc funtion requires a number')
//    return 0 
// }

//  let sum = +num1 + +num2 
//  return sum
// }

// const calc = (num1 = 0, num2 = 0) => {
//  if(isNaN(+num1) || isNaN(+num2)) {
//     console.error('the calc funtion requires a number')
//     return 0 
//  }

//  let sum = +num1 + +num2 
//  return sum
// }


// const easyCalc = (num1, num2) => +num1 + +num2; 

// const greet = name => `Hej ${name}`

// console.log(greet('Hans'))



// const user = {
//  firstName: 'Joakim',
//  lastName: 'Lindh',
//  arrow: () => {
//    console.log(this)
//  },
//  regular: function() {
//    console.log(this)
//  },
//  fullName() {
//    console.log(this.firstName + ' ' + this.lastName)
//  }
// }

// console.log(this)
// user.arrow()
// user.regular()
// user.fullName()


// const minFunction = (num1, num2) => {
//  let sum = num1 + num2

//  cb(sum)
// }


// minFunction(4, 8, (sum) => {
//    cconsole.log(sum)
// })
// minFunction(4, 8, (sum) => {
//    let newsum = sum * 2 
//    cconsole.log(sum)
// })