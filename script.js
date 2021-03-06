'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements){
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
       const type = mov > 0 ? 'deposit' : 'withdrawal'


       const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
      `;
    
      containerMovements.insertAdjacentHTML
      ('afterbegin', html); 



  });
}

displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// First Challenge
const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

const checkAges = function(){
	// 1.
	const newJuliaDogs = [...juliaDogs];
  const correctedJuliaDogs = newJuliaDogs.slice(1, 3);

  // 2.
  const combineDogs = correctedJuliaDogs.concat(kateDogs);
  

  // 3.
  for(const dog of combineDogs){
    for (const [i] of combineDogs.entries()){
      if(dog >= 3){
        console.log(`Dog number ${i+1} is adult`)
      } else {
        console.log(`Dog number ${i+1} is a puppy`)
      }
    }
    return dog
  }

}

console.log(checkAges());


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SIMPLE ARRAY METHOD

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// the end parameter '4' will not included in the result
// '-' will take the last of the array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

// SPLICE
// SPLICE is split and slice
// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

// REVERSE
// will mute the original array 
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters)


// // JOIN
// console.log(letters.join(' - '));

// NEW AT METHOD

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// Getting the last element in array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1))

// LOOP FOR EACH IN ARRAY

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const move of movements){
// for (const [i, move] of movements.entries()){
//   if(move > 0 ){
//     console.log(`Move ${i + 1}: you deposited ${move}`)
//   } else {
//     console.log(`Move ${i + 1}: you withdraw ${Math.abs(move)}`)
//   }
// }

// console.log('-----FOREACH-----')
// // The same thing like above but with for each
// movements.forEach(function(move, i, arr){
//   if(move > 0 ){
//     console.log(`Move ${i + 1}: you deposited ${move}`)
//   } else {
//     console.log(`Move ${i + 1}: you withdraw ${Math.abs(move)}`)
//   }
// })