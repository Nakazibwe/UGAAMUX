/* eslint-disable eqeqeq */

// Assigning variables to the different inputs.
const Customername = document.RegisterMessage.customername;
const Customeremail = document.RegisterMessage.customeremail;
const Customermessage = document.RegisterMessage.message;

// Assigning variables to the different error messages for inputs.
const CustomernameError = document.getElementById('name-error');
const CustomeremailError = document.getElementById('email-error');
const CustomermessageError = document.getElementById('message-error');

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const capitalize = /^[A-Z][a-z]/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // Validating the name input.
  const customerName = Customername.value.trim();
  if (customerName == '') {
    CustomernameError.innerHTML = 'Name Field Required ';
    CustomernameError.style = 'color:red';
    Customername.style.border = '1px solid red';
  } else if (!(customerName.length > 1)) {
    Customername.style.border = '1px solid red';
    CustomernameError.innerHTML = ' Name  Incomplete';
    CustomernameError.style = 'color:red ';
    Customername.focus();
  } else if (!customerName.match(alphaNumeric)) {
    CustomernameError.innerHTML = 'Enter name without numbers';
    CustomernameError.style = 'color:red ';
    Customername.style.border = '1px solid red';
    Customername.focus();
  } else if (!customerName.match(capitalize)) {
    CustomernameError.innerHTML = 'Start name with a capital letter';
    CustomernameError.style = 'color:red ';
    Customername.style.border = '1px solid red';
    Customername.focus();
  } else {
    CustomernameError.innerHTML = ' Field correctly filled, Thank you ';
    CustomernameError.style = 'color:#fff ';
    Customername.style.border = '1px solid green';
  }
  // Validating the email input.
  const customerEmail = Customeremail.value.trim();
  if (customerEmail == '') {
    CustomeremailError.innerHTML = 'Email Field Required';
    CustomeremailError.style = 'color:red';
    Customeremail.style.border = '1px solid red ';
    Customeremail.focus();
  } else if (!customerEmail.match(emailFormat)) {
    CustomeremailError.innerHTML = 'Email Format entered is Wrong';
    CustomeremailError.style = 'color:red';
    Customeremail.style.border = '1px solid red';
    Customeremail.focus();
  } else {
    CustomeremailError.innerHTML = 'Field correctly filled, Thank you ';
    CustomeremailError.style = 'color: #fff ';
  }

  // Validating the message input.
  const customerMessage = Customermessage.value.trim();
  if (customerMessage == '') {
    CustomermessageError.innerHTML = ' Message Field Required ';
    CustomermessageError.style = 'color:red';
    Customermessage.style.border = '1px solid red';
    Customermessage.focus();
  } else {
    CustomermessageError.innerHTML = 'Field correctly filled, Thank you ';
    CustomermessageError.style = 'color: #fff ';
  }
};

// Assigning  a variable to the form.
const RegisterMessageForm = document.getElementById('form-id');

// Adding an event listener to the form.
RegisterMessageForm.addEventListener('submit', validate);
