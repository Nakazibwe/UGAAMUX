/* eslint-disable eqeqeq */
const FirstName = document.contactUsform.firstname;
const SecondName = document.contactUsform.lastname;
const Email = document.contactUsform.email;
const Message = document.contactUsform.message;

const FirstNameError = document.getElementById('firstname-error');
const SecondNameError = document.getElementById('lastname-error');
const EmailError = document.getElementById('email-error');
const MessageError = document.getElementById('message-error');

// Regular Expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // Validating first name input
  if (FirstName.value == '') {
    FirstNameError.innerHTML = 'First Name Required ';
    FirstNameError.style = 'color:red';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
  } else if (!(FirstName.value.length > 1)) {
    FirstName.style.border = '1px solid red';
    FirstNameError.innerHTML = 'First Name Incomplete';
    FirstNameError.style = 'color:red ';
    FirstName.focus();
  } else if (!FirstName.value.match(nonumber)) {
    FirstNameError.innerHTML = 'Enter without numbers';
    FirstNameError.style = 'color:red ';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
  } else if (!FirstName.value.match(capitalize)) {
    FirstNameError.innerHTML = 'Start with a capital letter';
    FirstNameError.style = 'color:red ';
    FirstName.style.border = '1px solid red';
    FirstName.focus();
  } else {
    FirstNameError.innerHTML = ' Field correctly filled ';
    FirstNameError.style = 'color:green ';
    FirstName.style.border = '1px solid green';
  }

  // Validation for the last name input.
  if (SecondName.value == '') {
    SecondNameError.innerHTML = 'Last Name Required ';
    SecondNameError.style = 'color:red';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
  } else if (!(SecondName.value.length > 1)) {
    SecondName.style.border = '1px solid red';
    SecondNameError.innerHTML = 'Last Name Incomplete';
    SecondNameError.style = 'color:red ';
    SecondName.focus();
  } else if (!SecondName.value.match(nonumber)) {
    SecondNameError.innerHTML = 'Enter without numbers';
    SecondNameError.style = 'color:red ';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
  } else if (!SecondName.value.match(capitalize)) {
    SecondNameError.innerHTML = 'Start with a capital letter';
    SecondNameError.style = 'color:red ';
    SecondName.style.border = '1px solid red';
    SecondName.focus();
  } else {
    SecondNameError.innerHTML = ' Field correctly filled ';
    SecondNameError.style = 'color:green ';
    SecondName.style.border = '1px solid green';
  }

  // Validating the email input.
  if (Email.value == '') {
    EmailError.innerHTML = 'Email Field Required';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red ';
    Email.focus();
  } else if (!Email.value.match(emailFormat)) {
    EmailError.innerHTML = 'Email Format entered is Wrong';
    EmailError.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else {
    EmailError.innerHTML = 'Field correctly filled ';
    EmailError.style = 'color:green ';
    Email.style.border = '1px solid green';
  }

  // Validating the  message text area.
  if (Message.value == '') {
    MessageError.innerHTML = 'Message Field Required ';
    MessageError.style = 'color:red';
    Message.style.border = '1px solid red';
    Message.focus();
  } else {
    MessageError.innerHTML = 'Field correctly filled ';
    MessageError.style = 'color:green ';
    Message.style.border = '1px solid green';
  }
};

const contactForm = document.getElementById('form-id');
contactForm.addEventListener('submit', validate);

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
