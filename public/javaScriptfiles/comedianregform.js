/* eslint-disable eqeqeq */
const Firstname = document.ComedianRegistration.firstName;
const Secondname = document.ComedianRegistration.lastName;
const Stagename = document.ComedianRegistration.stagename;
const ComedianID = document.ComedianRegistration.comedianID;
const ComedianPhonenumber = document.ComedianRegistration.comedianphone;
const NationalIDNIN = document.ComedianRegistration.NationalNIN;
const Twitterhandle = document.ComedianRegistration.twitter;
const ComedianEmail = document.ComedianRegistration.email;
const ComedianDateofBirth = document.ComedianRegistration.ComedianDOB;
const ComedianLocation = document.ComedianRegistration.Location;
const BasedDistrict = document.ComedianRegistration.Based;
const DateCareerStart = document.ComedianRegistration.startedcomedy;
const Profilepicture = document.ComedianRegistration.uploadedpicture;
const Role = document.ComedianRegistration.role;
const Password = document.ComedianRegistration.password;
const Male = document.getElementById('smale');
const Female = document.getElementById('sfemale');

const FirstnameERROR = document.getElementById('firstname-error');
const SecondnameERROR = document.getElementById('lastname-error');
const StagenameERROR = document.getElementById('stagename-error');
const PhonenumberERROR = document.getElementById('telephone-error');
const ComedianIDERROR = document.getElementById('comedianID-error');
const NationalIDERROR = document.getElementById('nationalNIN-error');
const TwitterERROR = document.getElementById('twitter-error');
const ComedianEmailERROR = document.getElementById('email-error');
const ComedianDOBERROR = document.getElementById('comedianDOB-ERROR');
const ComedianLocationERROR = document.getElementById('location-error');
const BasedDistrictERROR = document.getElementById('district-based-error');
const DateCareerStartERROR = document.getElementById('datestartedcomedyerror');
const GenderERROR = document.getElementById('gender-error');
const ProfilepictureERROR = document.getElementById('upload-error');
const PassWordERROR = document.getElementById('passworderror');
const userRoleERROR = document.getElementById('roles-error');

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
// const alphaNumeric = /^[a-zA-Z0-9]+$/;  //Regex not being used currently.
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // Validating the first name input field
  const comedianFirstName = Firstname.value.trim();
  if (comedianFirstName == '') {
    FirstnameERROR.innerHTML = 'First  Name Field Required';
    FirstnameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
  } else if (!(comedianFirstName.length > 1)) {
    Firstname.style.border = '1px solid red';
    FirstnameERROR.innerHTML = 'First name is supposed to be more than one letter';
    FirstnameERROR.style = 'color:red ';
    Firstname.focus();
  } else if (!comedianFirstName.match(nonumber)) {
    FirstnameERROR.innerHTML = 'First Name should not  contain numbers';
    FirstnameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
  } else if (!comedianFirstName.match(capitalize)) {
    FirstnameERROR.innerHTML = 'First Name should start with a capital letter';
    FirstnameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
  } else {
    FirstnameERROR.innerHTML = ' Field correctly filled ';
    FirstnameERROR.style = 'color:green ';
    Firstname.style.border = '1px solid green';
  }

  // Validating the last name input field .
  const comedianSecondName = Secondname.value.trim();
  if (comedianSecondName == '') {
    SecondnameERROR.innerHTML = ' Last Name Field Required ';
    SecondnameERROR.style = 'color:red';
    Secondname.style.border = '1px solid red';
    Secondname.focus();
  } else if (!(comedianSecondName.length > 1)) {
    Secondname.style.border = '1px solid red';
    SecondnameERROR.innerHTML = 'Last name is supposed to be more than one letter';
    SecondnameERROR.style = 'color:red ';
    Secondname.focus();
  } else if (!comedianSecondName.match(nonumber)) {
    SecondnameERROR.innerHTML = 'Last Name should not  contain numbers';
    SecondnameERROR.style = 'color:red ';
    Secondname.style.border = '1px solid red';
    Secondname.focus();
  } else if (!comedianSecondName.match(capitalize)) {
    SecondnameERROR.innerHTML = 'Last  Name should start with a capital letter ';
    SecondnameERROR.style = 'color:red ';
    Secondname.style.border = '1px solid red';
    Secondname.focus();
  } else {
    SecondnameERROR.innerHTML = 'Field correctly filled ';
    SecondnameERROR.style = 'color:green ';
    Secondname.style.border = '1px solid green';
  }
  // Validating the Stage name for comedian.
  const comedianStageName = Stagename.value.trim();
  if (comedianStageName == '') {
    StagenameERROR.innerHTML = 'Stage Name Field Required ';
    StagenameERROR.style = 'color:red';
    Stagename.style.border = '1px solid red';
    Stagename.focus();
  } else if (!(comedianStageName.length > 1)) {
    Stagename.style.border = '1px solid red';
    StagenameERROR.innerHTML = 'Stage  name is supposed to be more than one letter';
    StagenameERROR.style = 'color:red ';
    Stagename.focus();
  } else if (!comedianStageName.match(capitalize)) {
    Stagename.innerHTML = 'Stage Name should start with a capital letter';
    StagenameERROR.style = 'color:red ';
    Stagename.style.border = '1px solid red';
    Stagename.focus();
  } else if (!comedianStageName.match(alphaNumeric)) {
    Stagename.style.border = '1px solid red';
    StagenameERROR.innerHTML = ' Stage Name Format should be Alphanumeric';
    StagenameERROR.style = 'color:red';
    Stagename.focus();
  } else {
    StagenameERROR.innerHTML = 'Field correctly filled ';
    StagenameERROR.style = 'color:green ';
    Stagename.style.border = '1px solid green';
  }
  // Validating Comedian System ID.
  const comedianID = ComedianID.value.trim();
  if (comedianID == '') {
    ComedianIDERROR.innerHTML = 'Comedian ID Field required ';
    ComedianIDERROR.style = 'color:red';
    ComedianID.style.border = '1px solid red ';
    ComedianID.focus();
  } else if (!comedianID.match(systemIDFormat)) {
    ComedianID.style.border = '1px solid red';
    ComedianIDERROR.innerHTML = ' Comedian ID Format entered  is Wrong';
    ComedianIDERROR.style = 'color:red';
    ComedianID.focus();
  } else {
    ComedianIDERROR.innerHTML = 'Field correctly filled ';
    ComedianIDERROR.style = 'color:green ';
    ComedianID.style.border = '1px solid green';
  }
  // Validating Comedian Phonenumbers.
  const comedianPhoneNumber = ComedianPhonenumber.value.trim();
  if (ComedianPhonenumber.value == '') {
    PhonenumberERROR.innerHTML = 'Telephone  number Field Required ';
    PhonenumberERROR.style = 'color:red';
    ComedianPhonenumber.style.border = '1px solid red';
    ComedianPhonenumber.focus();
  } else if (!comedianPhoneNumber.match(phoneFormat)) {
    PhonenumberERROR.innerHTML = 'Phone number Format Entered is Wrong';
    PhonenumberERROR.style = 'color:red';
    ComedianPhonenumber.style.border = '1px solid red';
    ComedianPhonenumber.focus();
  } else {
    PhonenumberERROR.innerHTML = 'Field correctly filled ';
    PhonenumberERROR.style = 'color:green ';
    ComedianPhonenumber.style.border = '1px solid green';
  }
  // Validating the  Comedian National ID.
  const nationalNIN = NationalIDNIN.value.trim();
  if (nationalNIN == '') {
    NationalIDERROR.innerHTML = 'National ID NIN Field Required ';
    NationalIDERROR.style = 'color:red';
    NationalIDNIN.style.border = '1px solid red ';
    NationalIDNIN.focus();
  } else if (!nationalNIN.match(nationalIDFormat)) {
    NationalIDERROR.innerHTML = 'National ID NIN  Format entered is Wrong';
    NationalIDERROR.style = 'color:red';
    NationalIDNIN.style.border = '1px solid red';
    NationalIDNIN.focus();
  } else {
    NationalIDERROR.innerHTML = 'Field correctly filled ';
    NationalIDERROR.style = 'color:green ';
    NationalIDNIN.style.border = '1px solid green';
  }
  // Validating the comedian twitter handle.
  const comedianTwitter = Twitterhandle.value.trim();
  if (comedianTwitter == '') {
    TwitterERROR.innerHTML = 'Twitter Handle Field Required ';
    TwitterERROR.style = 'color:red';
    Twitterhandle.style.border = '1px solid red';
    Twitterhandle.focus();
  } else if (!comedianTwitter.match(twitterFormat)) {
    TwitterERROR.innerHTML = ' Twitter Handle  doesnot match Twitter format ';
    TwitterERROR.style = 'color:red';
    Twitterhandle.style.border = '1px solid red';
    Twitterhandle.focus();
  } else {
    TwitterERROR.innerHTML = 'Field correctly filled ';
    TwitterERROR.style = 'color:green ';
    Twitterhandle.style.border = '1px solid green';
  }

  // Validating  the comedian Email.
  const comedianEmail = ComedianEmail.value.trim();
  if (comedianEmail == '') {
    ComedianEmail.style.border = '1px solid red';
    ComedianEmailERROR.innerHTML = 'Email  Field  Required  ';
    ComedianEmailERROR.style = 'color:red';
    ComedianEmail.focus();
  } else if (!comedianEmail.match(emailFormat)) {
    ComedianEmailERROR.innerHTML = 'Email Format entered is Wrong';
    ComedianEmailERROR.style = 'color:red';
    ComedianEmail.style.border = '1px solid red';
    ComedianEmail.focus();
  } else {
    ComedianEmailERROR.innerHTML = 'Field correctly filled ';
    ComedianEmailERROR.style = 'color:green ';
    ComedianEmail.style.border = '1px solid green';
  }

  // Validating the comedian date of birth.
  if (
    ComedianDateofBirth.checked == false
    && ComedianDateofBirth.value == ''
  ) {
    ComedianDOBERROR.innerHTML = 'Date of Birth Field Required';
    ComedianDOBERROR.style = 'color:red';
    ComedianDateofBirth.style.border = '1px solid red';
    ComedianDateofBirth.focus();
  } else {
    ComedianDOBERROR.innerHTML = 'Field correctly filled ';
    ComedianDOBERROR.style = 'color:green ';
    ComedianDateofBirth.style.border = '1px solid green';
  }
  // Validating the Comedian location.
  const comedianLocation = ComedianLocation.value.trim();
  if (comedianLocation == '') {
    ComedianLocationERROR.innerHTML = 'Location  Field is Required ';
    ComedianLocationERROR.style = 'color : red ';
    ComedianLocation.style.border = '1px solid red';
    ComedianLocation.focus();
  } else if (!(comedianLocation.length > 1)) {
    ComedianLocation.style.border = '1px solid red';
    ComedianLocationERROR.innerHTML = 'Comedian Location  is supposed to be more than one letter';
    ComedianLocationERROR.style = 'color:red ';
    ComedianLocation.focus();
  } else if (!comedianLocation.match(nonumber)) {
    ComedianLocationERROR.innerHTML = 'Comedian   Location   should not  contain numbers';
    ComedianLocationERROR.style = 'color:red ';
    ComedianLocation.style.border = '1px solid red';
    ComedianLocation.focus();
  } else if (!comedianLocation.match(capitalize)) {
    ComedianLocationERROR.innerHTML = ' Comedian Location  should start with a capital letter';
    ComedianLocationERROR.style = 'color:red ';
    ComedianLocation.style.border = '1px solid red';
    ComedianLocation.focus();
  } else {
    ComedianLocationERROR.innerHTML = ' Field correctly filled ';
    ComedianLocationERROR.style = 'color:green ';
    ComedianLocation.style.border = '1px solid green';
  }

  // Validating  comedian based district.
  const district = BasedDistrict.value.trim();
  if (district == '') {
    BasedDistrictERROR.innerHTML = ' Comedian Based District Field Required ';
    BasedDistrictERROR.style = 'color:red';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
  } else if (!(district.length > 1)) {
    BasedDistrict.style.border = '1px solid red';
    BasedDistrictERROR.innerHTML = 'Based District is supposed to be more than one letter';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.focus();
  } else if (!district.match(nonumber)) {
    BasedDistrictERROR.innerHTML = 'Based District  should not  contain numbers';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
  } else if (!district.match(capitalize)) {
    BasedDistrictERROR.innerHTML = ' Based District should start with a capital letter';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
  } else {
    BasedDistrictERROR.innerHTML = ' Field correctly filled ';
    BasedDistrictERROR.style = 'color:green ';
    BasedDistrict.style.border = '1px solid green';
  }
  // Validating the Date a comedian began comedy .
  if (DateCareerStart.checked == false && DateCareerStart.value == '') {
    DateCareerStartERROR.innerHTML = 'Date Began Comedy  Field Required';
    DateCareerStartERROR.style = 'color:red';
    DateCareerStart.style.border = '1px solid red';
    DateCareerStart.focus();
  } else {
    DateCareerStartERROR.innerHTML = 'Field correctly filled ';
    DateCareerStartERROR.style = 'color:green ';
    DateCareerStart.style.border = '1px solid green';
  }
  // Validating  Comedian Gender
  if (Male.checked == false && Female.checked == false) {
    GenderERROR.innerHTML = 'Gender Field Required ';
    GenderERROR.style = 'color:red';
  } else {
    GenderERROR.innerHTML = 'Field correctly filled';
    GenderERROR.style = 'color:green ';
  }
  // Validating Comedian  photo upload.
  if (Profilepicture.value == false) {
    ProfilepictureERROR.innerHTML = 'Comedian  Photo Field Required';
    ProfilepictureERROR.style = 'color:red';

    Profilepicture.focus();
  } else {
    ProfilepictureERROR.innerHTML = 'Field correctly filled';
    ProfilepictureERROR.style = 'color:green ';
  }

  // Validating Password input field.
  const userpassword = Password.value.trim();
  if (userpassword == '') {
    PassWordERROR.innerHTML = 'Password Field Required ';
    PassWordERROR.style = 'color:red';
    Password.style.border = '1px solid red';
    Password.focus();
  } else if (!(userpassword.length > 8)) {
    PassWordERROR.innerHTML = 'Enter password with more than 8 characters';
    PassWordERROR.style = 'color:red';
    Password.style.border = '1px solid red';
    Password.focus();
  } else {
    PassWordERROR.innerHTML = 'Field Correctly Field';
    PassWordERROR.style = 'color:green';
    Password.style.border = '1px solid green';
  }

  // Validating userrole input field.
  const userrole = Role.value.trim();
  if (userrole == 'default') {
    userRoleERROR.innerHTML = 'Role Field Required';
    userRoleERROR.style = 'color:red';
    Role.style.border = '1px solid red';
    Role.focus();
  } else {
    userRoleERROR.innerHTML = 'Field Correctly Field';
    userRoleERROR.style = 'color:green';
    Role.style.border = '1px solid green';
  }
};

const Comedianform = document.getElementById('form-id');
Comedianform.addEventListener('submit', validate);


