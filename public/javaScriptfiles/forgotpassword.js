/* eslint-disable eqeqeq */

// Email regular expression 
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

// Assigning a variable to the email input.
const Email = document.forgotpassword.email;

// Assigning a variable for the email error message.
const EmailError = document.getElementById('email-error');

// Validation function for the inputs.
const validate = () => {
  const email = Email.value.trim();
  if (email == '') {
    EmailError.style = 'color: red';
    EmailError.innerHTML = 'Enter Email Address';
    Email.style.border = '1px solid red';
    Email.focus();
  } else if (!email.match(emailFormat)) {
    EmailError.innerHTML = 'Email Format entered is Wrong';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else {
    EmailError.innerHTML = 'Field correctly filled, Thank You ';
    EmailError.style = 'color:#fff ';
  }
};

// Assigning a variable to the form.
const ForgotPasswordform = document.getElementById('form-id');

// Adding an event listener to the form.
ForgotPasswordform.addEventListener('submit', validate);
