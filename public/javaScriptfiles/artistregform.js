/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable space-infix-ops */
/* eslint-disable eqeqeq */
const Firstname = document.ArstisteRegistration.firstName;
const Lastname = document.ArstisteRegistration.lastName;
const Stagename = document.ArstisteRegistration.stageName;
const ArtistID = document.ArstisteRegistration.artistID;
const Telephone = document.ArstisteRegistration.telephone;
const Twitterhandle = document.ArstisteRegistration.twitter;
const ArtistEmail = document.ArstisteRegistration.email;
const DateofBirth = document.ArstisteRegistration.ArtistDOB;
const BasedDistrict = document.ArstisteRegistration.basedDistrict;
const NationalIDNIN = document.ArstisteRegistration.nationalIDNIN;
const DateCareerStart = document.ArstisteRegistration.datestartedsing;
const ArtistLocation = document.ArstisteRegistration.Location;
const NumberofAlbums = document.ArstisteRegistration.numberofalbums;
const NumberofSongs = document.ArstisteRegistration.numberofsongs;
const ArtistGenre = document.ArstisteRegistration.genre;
const PictureFile = document.ArstisteRegistration.pictureupload;
const Password = document.ArstisteRegistration.password;
const Role = document.ArstisteRegistration.role;
const Artistbio = document.ArstisteRegistration.bio;
const MaleGender = document.getElementById('smale');
const FemaleGender = document.getElementById('sfemale');

const FirstNameERROR = document.getElementById('firstname-error');
const LastNameERROR = document.getElementById('lastname-error');
const StageNameERROR = document.getElementById('stagename-error');
const ArtistIDERROR = document.getElementById('artistID-error');
const PhonenumberERROR = document.getElementById('phonenumber-error');
const TwitterERROR = document.getElementById('twitter-error');
const EmailERROR = document.getElementById('email-error');
const DateofBirthERROR = document.getElementById('DOB-error');
const BasedDistrictERROR = document.getElementById('baseddistrict-error');
const NationalNINERROR = document.getElementById('nationalNIN-error');
const DateCareerStartERROR = document.getElementById('careerstart-error');
const ArtistLocationERROR = document.getElementById('loacation-error');
const NumberofAlbumsERROR = document.getElementById('number-of-album-error');
const NumberofSongsERROR = document.getElementById('number-of-song-error');
const GenreERROR = document.getElementById('genre-error');
const PictureFileERROR = document.getElementById('pictureupload-error');
const GenderERROR = document.getElementById('gender-error');
const PasswordERROR = document.getElementById('passworderror');
const UserroleERROR = document.getElementById('roles-error');
const ArtistbioERROR = document.getElementById('bio-error');

// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const morethan1 = /[\w\s]+/;
// const alphaNumeric = /^[a-zA-Z0-9]+$/; // Regex not in use yet.
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = (event) => {
  let isValid = true;
  // Validating the first name .
  const artistfirstname = Firstname.value.trim();
  if (artistfirstname == '') {
    Firstname.style.border = '1px solid red';
    FirstNameERROR.innerHTML = 'First Name Field Required';
    FirstNameERROR.style = 'color:red ';
    Firstname.focus();
    isValid = false;
  } else if (!(artistfirstname.length > 1)) {
    Firstname.style.border = '1px solid red';
    FirstNameERROR.innerHTML = 'First name is supposed to be more than one letter';
    FirstNameERROR.style = 'color:red ';
    Firstname.focus();
    isValid = false;
  } else if (!artistfirstname.match(nonumber)) {
    FirstNameERROR.innerHTML = 'First Name should not  contain numbers';
    FirstNameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
    isValid = false;
  } else if (!artistfirstname.match(capitalize)) {
    FirstNameERROR.innerHTML = 'First Name should start with a capital letter';
    FirstNameERROR.style = 'color:red ';
    Firstname.style.border = '1px solid red';
    Firstname.focus();
    isValid = false;
  } else {
    FirstNameERROR.innerHTML = ' Field correctly filled ';
    FirstNameERROR.style = 'color:green ';
    Firstname.style.border = '1px solid green';
  }
  // Last name input  validation
  const artistlastname = Lastname.value.trim();
  if (artistlastname == '') {
    Lastname.style.border = '1px solid red';
    LastNameERROR.innerHTML = 'Last Name Field Required ';
    LastNameERROR.style = 'color:red ';
    Lastname.focus();
    isValid = false;
  } else if (!(artistlastname.length > 1)) {
    Lastname.style.border = '1px solid red';
    LastNameERROR.innerHTML = 'Last name is supposed to be more than one letter';
    LastNameERROR.style = 'color:red ';
    Lastname.focus();
    isValid = false;
  } else if (!artistlastname.match(nonumber)) {
    LastNameERROR.innerHTML = 'Last Name should not  contain numbers';
    LastNameERROR.style = 'color:red ';
    Lastname.style.border = '1px solid red';
    Lastname.focus();
    isValid = false;
  } else if (!artistlastname.match(capitalize)) {
    LastNameERROR.innerHTML = 'Last  Name should start with a capital letter ';
    LastNameERROR.style = 'color:red ';
    Lastname.style.border = '1px solid red';
    Lastname.focus();
    isValid = false;
  } else {
    LastNameERROR.innerHTML = 'Field correctly filled ';
    LastNameERROR.style = 'color:green ';
    Lastname.style.border = '1px solid green';
  }
  // Stagename input validation
  const artiststagename = Stagename.value.trim();
  if (artiststagename == '') {
    Stagename.style.border = '1px solid red';
    StageNameERROR.innerHTML = ' Stagename Field Required ';
    StageNameERROR.style = 'color:red';
    Stagename.focus();
    isValid = false;
  } else if (!(artiststagename.length > 1)) {
    Stagename.style.border = '1px solid red';
    StageNameERROR.innerHTML = 'Stage  name is supposed to be more than one letter';
    StageNameERROR.style = 'color:red ';
    Stagename.focus();
    isValid = false;
  } else if (!artiststagename.match(capitalize)) {
    StageNameERROR.innerHTML = 'Stage Name should start with a capital letter';
    StageNameERROR.style = 'color:red ';
    Stagename.style.border = '1px solid red';
    Stagename.focus();
    isValid = false;
  } else if (!artiststagename.match(alphaNumeric)) {
    Stagename.style.border = '1px solid red';
    StageNameERROR.innerHTML = ' Stagename Format should be Alphanumeric';
    StageNameERROR.style = 'color:red';
    Stagename.focus();
    isValid = false;
  } else {
    StageNameERROR.innerHTML = 'Field correctly filled ';
    StageNameERROR.style = 'color:green ';
    Stagename.style.border = '1px solid green';
  }
  // Validation for Artist ID.
  const artistID = ArtistID.value.trim();
  if (artistID == '') {
    ArtistID.style.border = '1px solid red';
    ArtistIDERROR.innerHTML = ' Artist ID Field Required';
    ArtistIDERROR.style = 'color:red';
    ArtistID.focus();
    isValid = false;
  } else if (!artistID.match(systemIDFormat)) {
    ArtistID.style.border = '1px solid red';
    ArtistIDERROR.innerHTML = ' Artist ID Format entered  is wrong';
    ArtistIDERROR.style = 'color:red';
    ArtistID.focus();
    isValid = false;
  } else {
    ArtistIDERROR.innerHTML = 'Field correctly filled ';
    ArtistIDERROR.style = 'color:green ';
    ArtistID.style.border = '1px solid green';
  }
  // Validation for Telephone  contact.
  const artistTelephone = Telephone.value.trim();
  if (artistTelephone == '') {
    PhonenumberERROR.innerHTML = 'Phone number Field Required';
    PhonenumberERROR.style = 'color:red';
    Telephone.style.border = '1px solid red';
    Telephone.focus();
    isValid = false;
  } else if (!artistTelephone.match(phoneFormat)) {
    PhonenumberERROR.innerHTML = 'Phone number Format Entered is Wrong';
    PhonenumberERROR.style = 'color:red';
    Telephone.style.border = '1px solid red';
    Telephone.focus();
    isValid = false;
  } else {
    PhonenumberERROR.innerHTML = 'Field correctly filled ';
    PhonenumberERROR.style = 'color:green ';
    Telephone.style.border = '1px solid green';
  }
  // Vadating the twitter field.
  const artistTwitter = Twitterhandle.value.trim();
  if (artistTwitter.value == '') {
    TwitterERROR.innerHTML = 'Twitter Handle Field is Required';
    TwitterERROR.style = 'color:red';
    Twitterhandle.style.border = '1px solid red';
    Twitterhandle.focus();
    isValid = false;
  } else if (!artistTwitter.match(twitterFormat)) {
    TwitterERROR.innerHTML = 'Twitter Handle  doesnot match Twitter format ';
    TwitterERROR.style = 'color:red';
    Twitterhandle.style.border = '1px solid red';
    Twitterhandle.focus();
    isValid = false;
  } else {
    TwitterERROR.innerHTML = 'Field correctly filled ';
    TwitterERROR.style = 'color:green ';
    Twitterhandle.style.border = '1px solid green';
  }
  // Validating Artist Email input
  const artistEmail = ArtistEmail.value.trim();
  if (artistEmail == '') {
    EmailERROR.innerHTML = 'Artist Email Field Required ';
    EmailERROR.style = 'color:red';
    ArtistEmail.style.border = '1px solid red';
    ArtistEmail.focus();
    isValid = false;
  } else if (!artistEmail.match(emailFormat)) {
    EmailERROR.innerHTML = 'Email Format entered is Wrong';
    EmailERROR.style = 'color:red';
    ArtistEmail.style.border = '1px solid red';
    ArtistEmail.focus();
    isValid = false;
  } else {
    EmailERROR.innerHTML = 'Field correctly filled ';
    EmailERROR.style = 'color:green ';
    ArtistEmail.style.border = '1px solid green';
  }
  // Validating Artist Date of Birth.
  if (DateofBirth.checked == false && DateofBirth.value == '') {
    DateofBirthERROR.innerHTML = 'Date of Birth Field Required';
    DateofBirthERROR.style = 'color:red';
    DateofBirth.style.border = '1px solid red';
    DateofBirth.focus();
    isValid = false;
  } else {
    DateofBirthERROR.innerHTML = 'Field correctly filled ';
    DateofBirthERROR.style = 'color:green ';
    DateofBirth.style.border = '1px solid green';
  }

  // Validating Artist Based District.
  const district = BasedDistrict.value.trim();
  if (district == '') {
    BasedDistrictERROR.innerHTML = 'Artist Based District Field Required';
    BasedDistrictERROR.style = 'color:red';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
    isValid = false;
  } else if (!(district.length > 1)) {
    BasedDistrict.style.border = '1px solid red';
    BasedDistrictERROR.innerHTML = 'Based District is supposed to be more than one letter';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.focus();
    isValid = false;
  } else if (!district.match(nonumber)) {
    BasedDistrictERROR.innerHTML = 'Based District  should not  contain numbers';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
    isValid = false;
  } else if (!district.match(capitalize)) {
    BasedDistrictERROR.innerHTML = ' Based District should start with a capital letter';
    BasedDistrictERROR.style = 'color:red ';
    BasedDistrict.style.border = '1px solid red';
    BasedDistrict.focus();
    isValid = false;
  } else {
    BasedDistrictERROR.innerHTML = ' Field correctly filled ';
    BasedDistrictERROR.style = 'color:green ';
    BasedDistrict.style.border = '1px solid green';
  }
  // Validating the NationalID NIN
  const nationalNIN = NationalIDNIN.value.trim();
  if (nationalNIN == '') {
    NationalNINERROR.innerHTML = 'National ID NIN  Field  Required';
    NationalNINERROR.style = 'color:red';
    NationalIDNIN.style.border = '1px solid red';
    NationalIDNIN.focus();
    isValid = false;
  } else if (!nationalNIN.match(nationalIDFormat)) {
    NationalNINERROR.innerHTML = 'National ID NIN  Format Wrong';
    NationalNINERROR.style = 'color:red';
    NationalIDNIN.style.border = '1px solid red';
    NationalIDNIN.focus();
    isValid = false;
  } else {
    NationalNINERROR.innerHTML = 'Field correctly filled ';
    NationalNINERROR.style = 'color:green ';
    NationalIDNIN.style.border = '1px solid green';
  }
  // Validating the date artiste started.
  if (DateCareerStart.checked == false && DateCareerStart.value == '') {
    DateCareerStartERROR.innerHTML = 'Date Began Music  Field Required';
    DateCareerStartERROR.style = 'color:red';
    DateCareerStart.style.border = '1px solid red';
    DateCareerStart.focus();
    isValid = false;
  } else {
    DateCareerStartERROR.innerHTML = 'Field correctly filled ';
    DateCareerStartERROR.style = 'color:green ';
    DateCareerStart.style.border = '1px solid green';
  }
  // Validating the Artiste location.
  const artistLocation = ArtistLocation.value.trim();
  if (artistLocation == '') {
    ArtistLocationERROR.innerHTML = 'Artist Location Field Required';
    ArtistLocationERROR.style = 'color:red';
    ArtistLocation.style.border = '1px solid red';
    ArtistLocation.focus();
    isValid = false;
  } else if (!(artistLocation.length > 1)) {
    ArtistLocation.style.border = '1px solid red';
    ArtistLocationERROR.innerHTML = 'Artist Location  is supposed to be more than one letter';
    ArtistLocationERROR.style = 'color:red ';
    ArtistLocation.focus();
    isValid = false;
  } else if (!artistLocation.match(nonumber)) {
    ArtistLocationERROR.innerHTML = 'Artist Location   should not  contain numbers';
    ArtistLocationERROR.style = 'color:red ';
    ArtistLocation.style.border = '1px solid red';
    ArtistLocation.focus();
    isValid = false;
  } else if (!artistLocation.match(capitalize)) {
    ArtistLocationERROR.innerHTML = ' Artist Location  should start with a capital letter';
    ArtistLocationERROR.style = 'color:red ';
    ArtistLocation.style.border = '1px solid red';
    ArtistLocation.focus();
    isValid = false;
  } else {
    ArtistLocationERROR.innerHTML = ' Field correctly filled ';
    ArtistLocationERROR.style = 'color:green ';
    ArtistLocation.style.border = '1px solid green';
  }
  // Validating the Number of Albums.
  if (NumberofAlbums.value == '') {
    NumberofAlbumsERROR.innerHTML = ' Number of Albums Field Required ';
    NumberofAlbumsERROR.style = 'color:red';
    NumberofAlbums.style.border = '1px solid red';
    NumberofAlbums.focus();
    isValid = false;
  } else if (NumberofAlbums.value < 0) {
    NumberofAlbumsERROR.innerHTML = ' Invalid Number Input ';
    NumberofAlbumsERROR.style = 'color:red';
    NumberofAlbums.style.border = '1px solid red';
    NumberofAlbums.focus();
    isValid = false;
  } else {
    NumberofAlbumsERROR.innerHTML = ' Field correctly filled ';
    NumberofAlbumsERROR.style = 'color:green ';
    NumberofAlbums.style.border = '1px solid green';
  }
  // Validating the Number of Songs
  if (NumberofSongs.value == '') {
    NumberofSongsERROR.innerHTML = 'Number of Songs Field Required';
    NumberofSongsERROR.style = 'color:red';
    NumberofSongs.style.border = '1px solid red';
    NumberofSongs.focus();
    isValid = false;
  } else if (NumberofSongs.value < 0) {
    NumberofSongsERROR.innerHTML = ' Invalid Number Input ';
    NumberofSongsERROR.style = 'color:red';
    NumberofSongs.style.border = '1px solid red';
    NumberofSongs.focus();
    isValid = false;
  } else {
    NumberofSongsERROR.innerHTML = ' Field correctly filled ';
    NumberofSongsERROR.style = 'color:green ';
    NumberofSongs.style.border = '1px solid green';
  }
  // Validating Artist Genre .
  const artistGenre = ArtistGenre.value.trim();
  if (artistGenre == '') {
    GenreERROR.innerHTML = 'Artist Genre Field Required';
    GenreERROR.style = 'color:red';
    ArtistGenre.style.border = '1px solid red';
    ArtistGenre.focus();
    isValid = false;
  } else if (!(artistGenre.length > 1)) {
    ArtistGenre.style.border = '1px solid red';
    GenreERROR.innerHTML = 'Artist Genre  is supposed to be more than one letter';
    GenreERROR.style = 'color:red ';
    ArtistGenre.focus();
    isValid = false;
  } else if (!artistGenre.match(capitalize)) {
    GenreERROR.innerHTML = ' Artist Genre  should start with a capital letter';
    GenreERROR.style = 'color:red ';
    ArtistGenre.style.border = '1px solid red';
    ArtistGenre.focus();
    isValid = false;
  } else if (!artistGenre.match(alphaNumeric)) {
    ArtistGenre.style.border = '1px solid red';
    GenreERROR.innerHTML = ' Artist Genre Format should be Alphanumeric';
    GenreERROR.style = 'color:red';
    ArtistGenre.focus();
    isValid = false;
  } else {
    GenreERROR.innerHTML = 'Field correctly filled';
    GenreERROR.style = 'color:green ';
    ArtistGenre.style.border = '1px solid green';
  }
  // Validating  Artist Gender
  if (MaleGender.checked == false && FemaleGender.checked == false) {
    GenderERROR.innerHTML = 'Gender Field Required ';
    GenderERROR.style = 'color:red';
    isValid = false;
  } else {
    GenderERROR.innerHTML = 'Field correctly filled';
    GenderERROR.style = 'color:green ';
  }
  // Validating Artiste photo upload.
  if (PictureFile.value == false) {
    PictureFileERROR.innerHTML = 'Artist Photo Field Required';
    PictureFileERROR.style = 'color:red';
    PictureFile.focus();
    isValid = false;
  } else {
    PictureFileERROR.innerHTML = 'Field correctly filled';
    PictureFileERROR.style = 'color:green ';
  }
  // Validating password field input.
  const userpassword = Password.value.trim();
  if (userpassword == '') {
    Password.style.border = '1px solid red';
    PasswordERROR.innerHTML = 'Password Field Required';
    PasswordERROR.style = 'color:red';
    Password.focus();
    isValid = false;
  } else if (!(userpassword.length > 8)) {
    PasswordERROR.innerHTML = 'Enter password with more than 8 characters';
    PasswordERROR.style = 'color:red';
    Password.style.border = '1px solid red';
    Password.focus();
    isValid = false;
  } else {
    Password.style.border = '1px solid green';
    PasswordERROR.innerHTML = 'Password Field Filled';
    PasswordERROR.style = 'color:green';
  }
  // Validating user role field input.
  const userrole = Role.value.trim();
  if (userrole =='default') {
    UserroleERROR.innerHTML = 'Role Field Required';
    UserroleERROR.style = 'color:red';
    Role.style.border = '1px solid red';
    Role.focus();
    isValid = false;
  } else {
    UserroleERROR.innerHTML = 'Field Correctly Filled';
    UserroleERROR.style = 'color:green';
    Role.style.border = '1px solid green';
  }
  // Validating the artist bio field input.
  const artistBio = Artistbio.value.trim();
  if (artistBio == '') {
    ArtistbioERROR.innerHTML = 'Bio Field Required';
    ArtistbioERROR.style = 'color:red';
    Artistbio.style.border = '1px solid red';
    Artistbio.focus();
    isValid = false;
  } else {
    ArtistbioERROR.innerHTML = 'Field Correctly Filled';
    ArtistbioERROR.style = 'color:green';
    Artistbio.style.border = '1px solid green';
  }
  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

const Artistform = document.getElementById('form-id');
// Artistform.addEventListener('submit', validate);

Artistform.addEventListener('submit', (event) => {
  validate(event);
});
