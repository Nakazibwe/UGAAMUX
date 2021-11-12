/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */

// Assigning variables to the different inputs.
const FirstName = document.contactUsform.firstname;
const SecondName = document.contactUsform.lastname;
const Email = document.contactUsform.email;
const Message = document.contactUsform.message;

// Assigning variables to the different error messages of input.
const FirstNameError = document.getElementById('firstname-error');
const SecondNameError = document.getElementById('lastname-error');
const EmailError = document.getElementById('email-error');
const MessageError = document.getElementById('message-error');

// Regular Expressions.
const nonumber = /^[A-Za-z ]+$/;
const capitalize = /^[A-Z][a-z]/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

// Validation function for all inputs.
const validate = (event) => {
  let isValid = true;
  // Validating first name input.
  const firstName = FirstName.value.trim();
  if (firstName == '') {
    FirstNameError.innerHTML = 'First Name Required ';
    FirstNameError.style = 'color:red';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
    isValid = false;
  } else if (!(firstName.length > 1)) {
    FirstName.style.border = '1px solid red';
    FirstNameError.innerHTML = 'First Name Incomplete';
    FirstNameError.style = 'color:red ';
    FirstName.focus();
    isValid = false;
  } else if (!firstName.match(nonumber)) {
    FirstNameError.innerHTML = 'Enter without numbers';
    FirstNameError.style = 'color:red ';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
    isValid = false;
  } else if (!firstName.match(capitalize)) {
    FirstNameError.innerHTML = 'Start with a capital letter';
    FirstNameError.style = 'color:red ';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
    isValid = false;
  } else {
    FirstNameError.innerHTML = ' Field correctly filled ';
    FirstNameError.style = 'color:green ';
    FirstName.style.border = '1px solid green';
  }

  // Validation for the last name input.
  const secondName = SecondName.value.trim();
  if (secondName == '') {
    SecondNameError.innerHTML = 'Last Name Required ';
    SecondNameError.style = 'color:red';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
    isValid = false;
  } else if (!(secondName.length > 1)) {
    SecondName.style.border = '1px solid red';
    SecondNameError.innerHTML = 'Last Name Incomplete';
    SecondNameError.style = 'color:red ';
    SecondName.focus();
    isValid = false;
  } else if (!secondName.match(nonumber)) {
    SecondNameError.innerHTML = 'Enter without numbers';
    SecondNameError.style = 'color:red ';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
    isValid = false;
  } else if (!secondName.match(capitalize)) {
    SecondNameError.innerHTML = 'Start with a capital letter';
    SecondNameError.style = 'color:red ';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
    isValid = false;
  } else {
    SecondNameError.innerHTML = ' Field correctly filled ';
    SecondNameError.style = 'color:green ';
    SecondName.style.border = '1px solid green';
  }

  // Validating the email input.
  const email = Email.value.trim();
  if (email == '') {
    EmailError.innerHTML = 'Email Field Required';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red ';
    Email.focus();
    isValid = false;
  } else if (!email.match(emailFormat)) {
    EmailError.innerHTML = 'Email Format entered is Wrong';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
    isValid = false;
  } else {
    EmailError.innerHTML = 'Field correctly filled ';
    EmailError.style = 'color:green ';
    Email.style.border = '1px solid green';
  }

  // Validating the  message text area.
  const message = Message.value.trim();
  if (message == '') {
    MessageError.innerHTML = 'Message Field Required ';
    MessageError.style = 'color:red';
    Message.style.border = '1px solid red';
    Message.focus();
    isValid = false;
  } else {
    MessageError.innerHTML = 'Field correctly filled ';
    MessageError.style = 'color:green ';
    Message.style.border = '1px solid green';
  }
  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

// Assigning variables to the form.
const contactForm = document.getElementById('form-id');

// Added event listener on the form.
// contactForm.addEventListener('submit', validate);

contactForm.addEventListener('submit', (event) => {
  validate(event);
});
