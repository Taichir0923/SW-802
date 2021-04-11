'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Narada Muni',
  email: 'narada@mail.com',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, -500],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  email: 'jessica@mail.com',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30, 500],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  email: 'steven@mail.com',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  email: 'sarah@mail.com',
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

let loggedUserIndex = 0;



btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  
  let existingUserData = accounts.find(el => el.email === inputLoginUsername.value);
  let userIndex = accounts.findIndex(el => el.email === inputLoginUsername.value);
  loggedUserIndex = userIndex;
  if(!existingUserData) {
    alert('Хэрэглэгч олдсонгүй...');
    return false;
  }

  if(existingUserData.email === inputLoginUsername.value && existingUserData.pin === +inputLoginPin.value){
    let ownerAcc = existingUserData.owner.split(' ')[0];
    labelWelcome.innerHTML = `Welcome, ${ownerAcc}`;
    inputLoginUsername.value = '';
    inputLoginPin.value = null;
    displayUI(userIndex);
  } else {
    alert('Имэйл эсвэл нууц үг буруу байна...');
  }
});


const displayUI = userIndex => {
  containerApp.style.opacity = '1';

  labelBalance.textContent = accounts[userIndex].movements.reduce((a , b) => a+b) + '€';

  containerMovements.innerHTML = '';

  let now = new Date();
  let year = now.getFullYear();
  let day = now.getDate();
  let month = now.getMonth();

  accounts[userIndex].movements.forEach((el, index)=> {
    let type = el > 0 ? 'deposit' : 'withdrawal';

    containerMovements.insertAdjacentHTML('afterbegin', `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__date">${year}/${month+1}/${day}</div>
        <div class="movements__value">${el}€</div>
      </div>
    `)
  })
}

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let transferTo = accounts.find(el => el.email === inputTransferTo.value);
  if(!transferTo){
    alert('Дансны мэдээлэл буруу байна...');
    return false;
  }

  transferTo.movements.push(+inputTransferAmount.value);
  accounts[loggedUserIndex].movements.push(-parseInt(inputTransferAmount.value))
  inputTransferTo.value = '';
  inputTransferAmount.value = null;
  displayUI(loggedUserIndex);
})