/* eslint-disable no-empty */
/* eslint-disable eqeqeq */

// Assigning variables to the different inputs.
const firstName = document.ClerkRegistration.firstname;
const lastName = document.ClerkRegistration.lastname;
const Email = document.ClerkRegistration.email;
const Password = document.ClerkRegistration.password;
const userRole = document.ClerkRegistration.role;

// Assigning variables to the error messages of the different inputs.
const firstnameERROR = document.getElementById('first-name-error');
const lastnameERROR = document.getElementById('last-name-error');
const emailERROR = document.getElementById('email-error');
const passwordERROR = document.getElementById('password-error');
const userRoleERROR = document.getElementById('role-error');

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
// const alphaNumeric = /^[a-zA-Z0-9]+$/; // Regex not currently in use.
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
// const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

// Validation function for all inputs.
const validate = () => {
  // Validating the first name input
  const clerkFirstName = firstName.value.trim();
  if (clerkFirstName == '') {
    firstnameERROR.innerHTML = 'First Name Required';
    firstnameERROR.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
  } else if (!(clerkFirstName.length > 1)) {
    firstnameERROR.innerHTML = 'First name should be more than one character';
    firstnameERROR.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
  } else if (!clerkFirstName.match(nonumber)) {
    firstnameERROR.innerHTML = 'First name should not contain numbers';
    firstnameERROR.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
  } else if (!clerkFirstName.match(capitalize)) {
    firstnameERROR.innerHTML = 'First name should start with capital letters';
    firstnameERROR.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
  } else {
    firstnameERROR.innerHTML = 'Filled Correctly Filled';
    firstnameERROR.style = 'color:green';
    firstName.style.border = '1px solid green';
  }
  // Validating the last name input
  const clerkLastName = lastName.value.trim();
  if (clerkLastName == '') {
    lastnameERROR.innerHTML = 'Last  Name Required';
    lastnameERROR.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
  } else if (!(clerkLastName.length > 1)) {
    lastnameERROR.innerHTML = 'Last name should be more than one character';
    lastnameERROR.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
  } else if (!clerkLastName.match(nonumber)) {
    lastnameERROR.innerHTML = 'Last name should not contain numbers';
    lastnameERROR.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
  } else if (!clerkLastName.match(capitalize)) {
    lastnameERROR.innerHTML = 'Last name should start with capital letters';
    lastnameERROR.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
  } else {
    lastnameERROR.innerHTML = 'Field Filled Correctly ';
    lastnameERROR.style = 'color:green';
    lastName.style.border = '1px solid green';
  }
  // Validation for the email validation.
  const clerkEmail = Email.value.trim();
  if (clerkEmail == '') {
    emailERROR.innerHTML = ' Email Field Required ';
    emailERROR.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else if (!(clerkEmail.length > 1)) {
    emailERROR.innerHTML = ' Email Field should be more than one character ';
    emailERROR.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else if (!clerkEmail.match(emailFormat)) {
    emailERROR.innerHTML = 'Email entered doesnt match a valid email';
    emailERROR.style = 'color:red';
    Email.style.border = '1px solid red';
    Email.focus();
  } else {
    emailERROR.innerHTML = 'Field Filled Correctly ';
    emailERROR.style = 'color:green';
    Email.style.border = '1px solid green';
  }
  // Validation for the password.
  const userpassword = Password.value.trim();
  if (userpassword == '') {
    Password.style.border = '1px solid red';
    passwordERROR.innerHTML = 'Password Field Required';
    passwordERROR.style = 'color:red';
    Password.focus();
  } else if (!(userpassword.length > 8)) {
    passwordERROR.innerHTML = 'Enter password with more than 8 characters';
    passwordERROR.style = 'color:red';
    Password.style.border = '1px solid red';
    Password.focus();
  } else {
    Password.style.border = '1px solid green';
    passwordERROR.innerHTML = 'Password Field Filled';
    passwordERROR.style = 'color:green';
  }
  // Validating the role field input.
  const userrole = userRole.value.trim();
  if (userrole == 'default') {
    userRoleERROR.innerHTML = 'Role Field Required';
    userRoleERROR.style = 'color:red';
    userRole.style.border = '1px solid red';
    userRole.focus();
  } else {
    userRoleERROR.innerHTML = 'Field Correctly Field';
    userRoleERROR.style = 'color:green';
    userRole.style.border = '1px solid green';
  }
};

// Assigning variable to the form.
const clerkForm = document.getElementById('form-id');

// Adding an event listener to the form.
clerkForm.addEventListener('submit', validate);
