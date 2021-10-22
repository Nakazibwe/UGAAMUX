/* eslint-disable eqeqeq */
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const Email = document.forgotpassword.email;

const EmailError = document.getElementById('email-error');

const validate = () => {
  if (Email.value == '') {
    EmailError.style = 'color: red';
    EmailError.innerHTML = 'Enter Email Address';
    Email.style.border = '1px solid red';
    Email.focus();
  } else if (!Email.value.match(emailFormat)) {
    EmailError.innerHTML = 'Email Format entered is Wrong';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else {
    EmailError.innerHTML = 'Field correctly filled, Thank You ';
    EmailError.style = 'color:#fff ';
  }
};

const ForgotPasswordform = document.getElementById('form-id');
ForgotPasswordform.addEventListener('submit', validate);

// ForgotPasswordform.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
