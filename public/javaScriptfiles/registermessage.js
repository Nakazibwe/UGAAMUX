/* eslint-disable eqeqeq */
const Customername = document.RegisterMessage.customername;
const Customeremail = document.RegisterMessage.customeremail;
const Customermessage = document.RegisterMessage.message;

const CustomernameError = document.getElementById('name-error');
const CustomeremailError = document.getElementById('email-error');
const CustomermessageError = document.getElementById('message-error');

const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // Validating the name input
  if (Customername.value == '') {
    CustomernameError.innerHTML = 'Name Field Required ';
    CustomernameError.style = 'color:red';
    Customername.style.border = '1px solid red';
  } else if (!(Customername.value.length > 1)) {
    Customername.style.border = '1px solid red';
    CustomernameError.innerHTML = ' Name  Incomplete';
    CustomernameError.style = 'color:red ';
    Customername.focus();
  } else if (!Customername.value.match(nonumber)) {
    CustomernameError.innerHTML = 'Enter name without numbers';
    CustomernameError.style = 'color:red ';
    Customername.style.border = '1px solid red';
    Customername.focus();
  } else if (!Customername.value.match(capitalize)) {
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
  if (Customeremail.value == '') {
    CustomeremailError.innerHTML = 'Email Field Required';
    CustomeremailError.style = 'color:red';
    Customeremail.style.border = '1px solid red ';
    Customeremail.focus();
  } else if (!Customeremail.value.match(emailFormat)) {
    CustomeremailError.innerHTML = 'Email Format entered is Wrong';
    CustomeremailError.style = 'color:red';
    Customeremail.style.border = '1px solid red';
    Customeremail.focus();
  } else {
    CustomeremailError.innerHTML = 'Field correctly filled, Thank you ';
    CustomeremailError.style = 'color: #fff ';
  }

  // Validating the message input.
  if (Customermessage.value == '') {
    CustomermessageError.innerHTML = ' Message Field Required ';
    CustomermessageError.style = 'color:red';
    Customermessage.style.border = '1px solid red';
    Customermessage.focus();
  } else {
    CustomermessageError.innerHTML = 'Field correctly filled, Thank you ';
    CustomermessageError.style = 'color: #fff ';
  }
};

const RegisterMessageForm = document.getElementById('form-id');
RegisterMessageForm.addEventListener('submit', validate);

// RegisterMessageForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
