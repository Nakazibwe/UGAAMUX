const firstName = document.ClerkRegistration.firstname;
const lastName = document.ClerkRegistration.lastname;
const Email = document.ClerkRegistration.email;
const Password = document.ClerkRegistration.password;
const userRole = document.ClerkRegistration.role;

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
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  const clerkFirstName = firstName.value.trim();
  if (clerkFirstName == '') {
    firstnameERROR.innerHTML = 'First Name Required';
    firstnameERROR.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
  }
};

const clerkForm = document.getElementById('form-id');
clerkForm.addEventListener('submit', validate);
clerkForm.addEventListener('submit', (e) => {
  e.defaultPrevented();
});
