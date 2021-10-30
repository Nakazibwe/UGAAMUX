/* eslint-disable eqeqeq */
const UserName = document.Login.username;
const PassWord = document.Login.password;

const UserNameERROR = document.getElementById('username-error');
const UserPassWordERROR = document.getElementById('password-error');

// Regular expressions.
// const alphaNumeric = /^[a-zA-Z0-9]+$/; // Regex that is currectly not in use.
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const validate = () => {
  // Validating  the Username input.
  const userName = UserName.value.trim();
  if (userName == '') {
    UserNameERROR.innerHTML = 'UserName  Field  Required ';
    UserNameERROR.style = ' color : red';
    UserName.style.border = '1px solid red';
    UserName.focus();
  } else if (!(userName.length > 2)) {
    UserName.style.border = '1px solid red';
    UserNameERROR.innerHTML = 'Username Incomplete';
    UserNameERROR.style = 'color:red ';
    UserName.focus();
  } else if (!userName.match(emailFormat)) {
    UserName.style.border = '1px solid red';
    UserNameERROR.innerHTML = 'Incorrect Username Format ';
    UserNameERROR.style = 'color:red';
    UserName.focus();
  } else {
    UserNameERROR.innerHTML = ' Field Correctly Filled, Thank you ';
    UserNameERROR.style = 'color: #fff';
  }

  // Validating  the user  password input.
  const password = PassWord.value.trim();
  if (password == '') {
    UserPassWordERROR.innerHTML = 'Password   Field  Required ';
    UserPassWordERROR.style = ' color : red';
    PassWord.style.border = '1px solid red';
    PassWord.focus();
  } else if (!(password.length > 8)) {
    PassWord.style.border = '1px solid red';
    UserPassWordERROR.innerHTML = 'Password  Incomplete';
    UserPassWordERROR.style = 'color:red ';
    PassWord.focus();
  } else {
    UserPassWordERROR.innerHTML = ' Field Correctly Filled, Thank you ';
    UserPassWordERROR.style = 'color: #fff';
  }
};

const LoginForm = document.getElementById('form-id');
LoginForm.addEventListener('submit', validate);


