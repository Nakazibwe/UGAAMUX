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

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // Validating the first name input field
  if (Firstname.value == '') {
    FirstnameERROR.innerHTML = 'First  Name Field Required';
    FirstnameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
  } else if (!(Firstname.value.length > 1)) {
    Firstname.style.border = '1px solid red';
    FirstnameERROR.innerHTML = 'First name is supposed to be more than one letter';
    FirstnameERROR.style = 'color:red ';
    Firstname.focus();
  } else if (!Firstname.value.match(nonumber)) {
    FirstnameERROR.innerHTML = 'First Name should not  contain numbers';
    FirstnameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
  } else if (!Firstname.value.match(capitalize)) {
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
  if (Secondname.value == '') {
    SecondnameERROR.innerHTML = ' Last Name Field Required ';
    SecondnameERROR.style = 'color:red';
    Secondname.style.border = '1px solid red';
    Secondname.focus();
  } else if (!(Secondname.value.length > 1)) {
    Secondname.style.border = '1px solid red';
    SecondnameERROR.innerHTML = 'Last name is supposed to be more than one letter';
    SecondnameERROR.style = 'color:red ';
    Secondname.focus();
  } else if (!Secondname.value.match(nonumber)) {
    SecondnameERROR.innerHTML = 'Last Name should not  contain numbers';
    SecondnameERROR.style = 'color:red ';
    Secondname.style.border = '1px solid red';
    Secondname.focus();
  } else if (!Secondname.value.match(capitalize)) {
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
  if (Stagename.value == '') {
    StagenameERROR.innerHTML = 'Stage Name Field Required ';
    StagenameERROR.style = 'color:red';
    Stagename.style.border = '1px solid red';
    Stagename.focus();
  } else if (!(Stagename.value.length > 1)) {
    Stagename.style.border = '1px solid red';
    StagenameERROR.innerHTML = 'Stage  name is supposed to be more than one letter';
    StagenameERROR.style = 'color:red ';
    Stagename.focus();
  } else if (!Stagename.value.match(capitalize)) {
    Stagename.innerHTML = 'Stage Name should start with a capital letter';
    StagenameERROR.style = 'color:red ';
    Stagename.style.border = '1px solid red';
    Stagename.focus();
  } else if (!Stagename.value.match(alphaNumeric)) {
    Stagename.style.border = '1px solid red';
    StagenameERROR.innerHTML = ' Stage Name Format should be Alphanumeric';
    StagenameERROR.style = 'color:red';
    Stagename.focus();
  } else {
    StagenameERROR.innerHTML = 'Field correctly filled ';
    StagenameERROR.style = 'color:green ';
    Stagename.style.border = '1px solid green';
  }
  // Validating Comedian System ID
  if (ComedianID.value == '') {
    ComedianIDERROR.innerHTML = 'Comedian ID Field required ';
    ComedianIDERROR.style = 'color:red';
    ComedianID.style.border = '1px solid red ';
    ComedianID.focus();
  } else if (!ComedianID.value.match(systemIDFormat)) {
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
  if (ComedianPhonenumber.value == '') {
    PhonenumberERROR.innerHTML = 'Telephone  number Field Required ';
    PhonenumberERROR.style = 'color:red';
    ComedianPhonenumber.style.border = '1px solid red';
    ComedianPhonenumber.focus();
  } else if (!ComedianPhonenumber.value.match(phoneFormat)) {
    PhonenumberERROR.innerHTML = 'Phone number Format Entered is Wrong';
    PhonenumberERROR.style = 'color:red';
    ComedianPhonenumber.style.border = '1px solid red';
    ComedianPhonenumber.focus();
  } else {
    PhonenumberERROR.innerHTML = 'Field correctly filled ';
    PhonenumberERROR.style = 'color:green ';
    ComedianPhonenumber.style.border = '1px solid green';
  }
  // Validating the  Comedian National ID
  if (NationalIDNIN.value == '') {
    NationalIDERROR.innerHTML = 'National ID NIN Field Required ';
    NationalIDERROR.style = 'color:red';
    NationalIDNIN.style.border = '1px solid red ';
    NationalIDNIN.focus();
  } else if (!NationalIDNIN.value.match(nationalIDFormat)) {
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
  if (Twitterhandle.value == '') {
    TwitterERROR.innerHTML = 'Twitter Handle Field Required ';
    TwitterERROR.style = 'color:red';
    Twitterhandle.style.border = '1px solid red';
    Twitterhandle.focus();
  } else if (!Twitterhandle.value.match(twitterFormat)) {
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
  if (ComedianEmail.value == '') {
    ComedianEmail.style.border = '1px solid red';
    ComedianEmailERROR.innerHTML = 'Email  Field  Required  ';
    ComedianEmailERROR.style = 'color:red';
    ComedianEmail.focus();
  } else if (!ComedianEmail.value.match(emailFormat)) {
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
  if (ComedianLocation.value == '') {
    ComedianLocationERROR.innerHTML = 'Location  Field is Required ';
    ComedianLocationERROR.style = 'color : red ';
    ComedianLocation.style.border = '1px solid red';
    ComedianLocation.focus();
  } else if (!(ComedianLocation.value.length > 1)) {
    ComedianLocation.style.border = '1px solid red';
    ComedianLocationERROR.innerHTML = 'Comedian Location  is supposed to be more than one letter';
    ComedianLocationERROR.style = 'color:red ';
    ComedianLocation.focus();
  } else if (!ComedianLocation.value.match(nonumber)) {
    ComedianLocationERROR.innerHTML = 'Comedian   Location   should not  contain numbers';
    ComedianLocationERROR.style = 'color:red ';
    ComedianLocation.style.border = '1px solid red';
    ComedianLocation.focus();
  } else if (!ComedianLocation.value.match(capitalize)) {
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
  if (BasedDistrict.value == '') {
    BasedDistrictERROR.innerHTML = ' Comedian Based District Field Required ';
    BasedDistrictERROR.style = 'color:red';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
  } else if (!(BasedDistrict.value.length > 1)) {
    BasedDistrict.style.border = '1px solid red';
    BasedDistrictERROR.innerHTML = 'Based District is supposed to be more than one letter';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.focus();
  } else if (!BasedDistrict.value.match(nonumber)) {
    BasedDistrictERROR.innerHTML = 'Based District  should not  contain numbers';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
  } else if (!BasedDistrict.value.match(capitalize)) {
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
};

const Comedianform = document.getElementById('form-id');
Comedianform.addEventListener('submit', validate);
Comedianform.addEventListener('submit', (e) => {
  e.preventDefault();
});
