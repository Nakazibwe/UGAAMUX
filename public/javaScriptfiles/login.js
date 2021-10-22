/* eslint-disable eqeqeq */
const UserName = document.Login.username;
const PassWord = document.Login.password;

const UserNameERROR = document.getElementById('username-error');
const UserPassWordERROR = document.getElementById('password-error');

// Regular expressions.
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const validate = () => {
  // Validating  the Username input.
  if (UserName.value == '') {
    UserNameERROR.innerHTML = 'UserName  Field  Required ';
    UserNameERROR.style = ' color : red';
    UserName.style.border = '1px solid red';
    UserName.focus();
  } else if (!(UserName.value.length > 1)) {
    UserName.style.border = '1px solid red';
    UserNameERROR.innerHTML = 'Username Incomplete';
    UserNameERROR.style = 'color:red ';
    UserName.focus();
  } else if (!UserName.value.match(alphaNumeric)) {
    UserName.style.border = '1px solid red';
    UserNameERROR.innerHTML = 'Incorrect Username Format ';
    UserNameERROR.style = 'color:red';
    UserName.focus();
  } else {
    UserNameERROR.innerHTML = ' Field Correctly Filled, Thank you ';
    UserNameERROR.style = 'color: #fff';
  }

  // Validating  the user  password input
  if (PassWord.value == '') {
    UserPassWordERROR.innerHTML = 'UserName  Field  Required ';
    UserPassWordERROR.style = ' color : red';
    PassWord.style.border = '1px solid red';
    PassWord.focus();
  } else if (!(PassWord.value.length > 4)) {
    PassWord.style.border = '1px solid red';
    UserPassWordERROR.innerHTML = 'Password  Incomplete';
    UserPassWordERROR.style = 'color:red ';
    PassWord.focus();
  } else if (!PassWord.value.match(alphaNumeric)) {
    PassWord.style.border = '1px solid red';
    UserPassWordERROR.innerHTML = 'Incorrect Password Format ';
    UserPassWordERROR.style = 'color:red';
    PassWord.focus();
  } else {
    UserPassWordERROR.innerHTML = ' Field Correctly Filled, Thank you ';
    UserPassWordERROR.style = 'color: #fff';
  }
};

const LoginForm = document.getElementById('form-id');
LoginForm.addEventListener('submit', validate);

// LoginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
