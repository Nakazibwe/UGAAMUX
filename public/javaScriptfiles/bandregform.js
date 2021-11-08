/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
const Bandname = document.BandRegistration.BandName;
const Bandowner = document.BandRegistration.BandOwner;
const Bandhome = document.BandRegistration.BandHome;
const BandNumberofMembers = document.BandRegistration.BandNumber;
const Bandslogan = document.BandRegistration.BandSlogan;
const Bandid = document.BandRegistration.bandID;
const Bandsponsors = document.BandRegistration.bandsponsors;
const DateofFormation = document.BandRegistration.DateFormation;
const TelephoneContact = document.BandRegistration.telephone;
const TwitterHandle = document.BandRegistration.twitter;
const BandEmail = document.BandRegistration.email;
const Bandcrowns = document.BandRegistration.bandCrowns;
const BandAlbums = document.BandRegistration.albums;
const Genre = document.BandRegistration.genre;
const BandSongs = document.BandRegistration.numberofsongs;
const BandIcon = document.BandRegistration.icon;
const ProfilePicture = document.BandRegistration.Profilepicture;
const OtherBandOwners = document.BandRegistration.ownership;
const Password = document.BandRegistration.password;
const Role = document.BandRegistration.role;
const Bandbio = document.BandRegistration.bio;

const BandnameERROR = document.getElementById('bandname-error');
const BandownerERROR = document.getElementById('bandowner-error');
const BandhomeERROR = document.getElementById('bandhome-error');
const BandmenbersERROR = document.getElementById('bandmembers-error');
const BandSloganERROR = document.getElementById('bandslogan-error');
const BandIDERROR = document.getElementById('bandID-error');
const BandsponsorsERROR = document.getElementById('sponsors-ERROR');
const DateofFormationERROR = document.getElementById('dateofformationERROR');
const TelephoneERROR = document.getElementById('telephone-error');
const TwitterHandleERROR = document.getElementById('twitterhandle-error');
const BandEmailERROR = document.getElementById('email-error');
const BandcrownsERROR = document.getElementById('bandcrowns-error');
const BandAlbumsERROR = document.getElementById('albums-error');
const GenreERROR = document.getElementById('genre-error');
const BandSongsERROR = document.getElementById('numberofsongs-ERROR');
const BandIconERROR = document.getElementById('band-icon-error');
const ProfilePictureERROR = document.getElementById('profilephoto-error');
const OtherBandOwnersERROR = document.getElementById('other-owners-error');
const passwordERROR = document.getElementById('passworderror');
const userRoleERROR = document.getElementById('roles-error');
const BandbioERROR = document.getElementById('bio-ERROR');

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
  // Validation of the Band Name input.
  const bandName = Bandname.value.trim();
  if (bandName == '') {
    BandnameERROR.innerHTML = 'Band  Name  Field  Required';
    BandnameERROR.style = 'color:red';
    Bandname.style.border = '1px solid red';
    Bandname.focus();
  } else if (!(bandName.length > 1)) {
    Bandname.style.border = '1px solid red';
    BandnameERROR.innerHTML = 'Band Name is supposed to be more than one letter';
    BandnameERROR.style = 'color:red ';
    Bandname.focus();
  } else if (!bandName.match(capitalize)) {
    BandnameERROR.innerHTML = 'Band Name should start with a capital letter';
    BandnameERROR.style = 'color:red ';
    Bandname.style.border = '1px solid red';
    Bandname.focus();
  } else if (!bandName.match(alphaNumeric)) {
    Bandname.style.border = '1px solid red';
    BandnameERROR.innerHTML = 'Band Name  Format should be Alphanumeric';
    BandnameERROR.style = 'color:red';
    Bandname.focus();
  } else {
    BandnameERROR.innerHTML = ' Field correctly filled ';
    BandnameERROR.style = 'color:green ';
    Bandname.style.border = '1px solid green';
  }

  // Validating  the band owner input.
  const bandOwner = Bandowner.value.trim();
  if (bandOwner == '') {
    Bandowner.style.border = '1px solid red';
    BandownerERROR.innerHTML = ' Band Owner Field Required ';
    BandownerERROR.style = 'color:red';
    Bandowner.focus();
  } else if (!(bandOwner.length > 1)) {
    Bandowner.style.border = '1px solid red';
    BandownerERROR.innerHTML = 'Band Owner is supposed to be more than one letter';
    BandownerERROR.style = 'color:red ';
    Bandowner.focus();
  } else if (!bandOwner.match(alphaNumeric)) {
    BandownerERROR.innerHTML = 'Band  Owner  should not  contain numbers';
    BandownerERROR.style = 'color:red ';
    Bandowner.style.border = '1px solid red';
    Bandowner.focus();
  } else if (!bandOwner.match(capitalize)) {
    BandownerERROR.innerHTML = 'Band Owner  should start with a capital letter';
    BandownerERROR.style = 'color:red ';
    Bandowner.style.border = '1px solid red';
    Bandowner.focus();
  } else {
    BandownerERROR.innerHTML = ' Field correctly filled ';
    BandownerERROR.style = 'color:green ';
    Bandowner.style.border = '1px solid green';
  }

  // Validating the band home input.
  const bandHome = Bandhome.value.trim();
  if (bandHome == '') {
    BandhomeERROR.innerHTML = ' Band Home Field Required ';
    BandhomeERROR.style = 'color:red';
    Bandhome.style.border = '1px solid red';
    Bandhome.focus();
  } else if (!(bandHome.length > 1)) {
    Bandhome.style.border = '1px solid red';
    BandhomeERROR.innerHTML = 'Band Home is supposed to be more than one letter';
    BandhomeERROR.style = 'color:red ';
    Bandhome.focus();
  } else if (!bandHome.match(alphaNumeric)) {
    Bandhome.style.border = '1px solid red';
    BandhomeERROR.innerHTML = 'Band Home  Format should be Alphanumeric';
    BandhomeERROR.style = 'color:red';
    Bandhome.focus();
  } else if (!bandHome.match(capitalize)) {
    BandhomeERROR.innerHTML = 'Band Home  should start with a capital letter';
    BandhomeERROR.style = 'color:red ';
    Bandhome.style.border = '1px solid red';
    Bandhome.focus();
  } else {
    BandhomeERROR.innerHTML = ' Field correctly filled ';
    BandhomeERROR.style = 'color:green ';
    Bandhome.style.border = '1px solid green';
  }

  // Validating number of members in the band.
  if (BandNumberofMembers.value == '') {
    BandmenbersERROR.innerHTML = 'Number of Band Members field Required ';
    BandmenbersERROR.style = 'color:red';
    BandNumberofMembers.style.border = '1px solid red';
    BandNumberofMembers.focus();
  } else if (BandNumberofMembers.value < 0) {
    BandmenbersERROR.innerHTML = ' Wrong Number Input  ';
    BandmenbersERROR.style = 'color:red';
    BandNumberofMembers.style.border = '1px solid red';
    BandNumberofMembers.focus();
  } else {
    BandmenbersERROR.innerHTML = ' Field correctly filled ';
    BandmenbersERROR.style = 'color:green';
    BandNumberofMembers.style.border = '1px solid green';
  }

  // Validating the band slogan input
  const bandSlogan = Bandslogan.value.trim();
  if (bandSlogan == '') {
    BandSloganERROR.innerHTML = 'Band  Slogan  Field  Required ';
    BandSloganERROR.style = 'color:red';
    Bandslogan.style.border = '1px solid red';
    Bandslogan.focus();
  } else if (!(bandSlogan.length > 1)) {
    Bandslogan.style.border = '1px solid red';
    BandSloganERROR.innerHTML = 'Band  Slogan is supposed to be more than one letter';
    BandSloganERROR.style = 'color:red ';
    Bandslogan.focus();
  } else if (!bandSlogan.match(capitalize)) {
    BandSloganERROR.innerHTML = 'Band  Slogan  should start with a capital letter';
    BandSloganERROR.style = 'color:red ';
    Bandslogan.style.border = '1px solid red';
    Bandslogan.focus();
  } else if (!bandSlogan.match(alphaNumeric)) {
    Bandslogan.style.border = '1px solid red';
    BandSloganERROR.innerHTML = 'Band Slogan  Format should be Alphanumeric';
    BandSloganERROR.style = 'color:red';
    Bandslogan.focus();
  } else {
    BandSloganERROR.innerHTML = ' Field correctly filled ';
    BandSloganERROR.style = 'color:green ';
    Bandslogan.style.border = '1px solid green';
  }

  // Validating the band ID in the band.
  const bandID = Bandid.value.trim();
  if (bandID == '') {
    BandIDERROR.innerHTML = ' Band ID Field is Required ';
    BandIDERROR.style = 'color:red';
    Bandid.style.border = '1px solid red';
    Bandid.focus();
  } else if (!bandID.match(systemIDFormat)) {
    Bandid.style.border = '1px solid red';
    BandIDERROR.innerHTML = ' Band  ID Format entered  is wrong';
    BandIDERROR.style = 'color:red';
    Bandid.focus();
  } else {
    BandIDERROR.innerHTML = 'Field correctly filled ';
    BandIDERROR.style = 'color:green ';
    Bandid.style.border = '1px solid green';
  }

  // Validating the  band number of songs.
  if (BandSongs.value == '') {
    BandSongsERROR.innerHTML = 'Band Songs Field Required ';
    BandSongsERROR.style = 'color:red';
    BandSongs.style.border = '1px solid red';
    BandSongs.focus();
  } else if (BandSongs.value < 0) {
    BandSongsERROR.innerHTML = ' Wrong Number Input  ';
    BandSongsERROR.style = 'color:red';
    BandSongs.style.border = '1px solid red';
    BandSongs.focus();
  } else {
    BandSongsERROR.innerHTML = ' Field correctly filled ';
    BandSongsERROR.style = 'color:green';
    BandSongs.style.border = '1px solid green';
  }
  // Validating the date band was formed.
  if (DateofFormation.checked == false && DateofFormation.value == '') {
    DateofFormationERROR.innerHTML = 'Date of Formation  Field Required ';
    DateofFormationERROR.style = 'color:red';
    DateofFormation.style.border = '1px solid red';
    DateofFormation.focus();
  } else {
    DateofFormationERROR.innerHTML = 'Field correctly filled ';
    DateofFormationERROR.style = 'color:green ';
    DateofFormation.style.border = '1px solid green';
  }

  // Validating the Band Telephone.
  const bandphone = TelephoneContact.value.trim();
  if (bandphone == '') {
    TelephoneERROR.innerHTML = 'Telephone Contact Field Required ';
    TelephoneERROR.style = 'color: red';
    TelephoneContact.style.border = '1px solid red';
    TelephoneContact.focus();
  } else if (!bandphone.match(phoneFormat)) {
    TelephoneERROR.innerHTML = 'Telephone Contact  Format Entered is Wrong';
    TelephoneERROR.style = 'color:red';
    TelephoneContact.style.border = '1px solid red';
    TelephoneContact.focus();
  } else {
    TelephoneERROR.innerHTML = 'Field correctly filled ';
    TelephoneERROR.style = 'color:green ';
    TelephoneContact.style.border = '1px solid green';
  }

  // Validating the twitter handle of bands.
  const bandTwitter = TwitterHandle.value.trim();
  if (bandTwitter == '') {
    TwitterHandleERROR.innerHTML = ' Twitter  Handle  Field  Required ';
    TwitterHandleERROR.style = 'color:red ';
    TwitterHandle.style.border = ' 1px solid red ';
    TwitterHandle.focus();
  } else if (!bandTwitter.match(twitterFormat)) {
    TwitterHandleERROR.innerHTML = 'Twitter Handle  doesnot match Twitter format ';
    TwitterHandleERROR.style = 'color:red';
    TwitterHandle.style.border = '1px solid red';
    TwitterHandle.focus();
  } else {
    TwitterHandleERROR.innerHTML = 'Field correctly filled ';
    TwitterHandleERROR.style = 'color:green ';
    TwitterHandle.style.border = '1px solid green';
  }

  // Validating the band email.
  const bandEmail = BandEmail.value.trim();
  if (bandEmail == '') {
    BandEmailERROR.innerHTML = ' Band Email Field Required ';
    BandEmailERROR.style = 'color:red';
    BandEmail.style.border = '1px solid red ';
    BandEmail.focus();
  } else if (!bandEmail.match(emailFormat)) {
    BandEmailERROR.innerHTML = 'Email Format entered is Wrong';
    BandEmailERROR.style = 'color:red';
    BandEmail.style.border = '1px solid red';
    BandEmail.focus();
  } else {
    BandEmailERROR.innerHTML = 'Field correctly filled ';
    BandEmailERROR.style = 'color:green ';
    BandEmail.style.border = '1px solid green';
  }

  // Validation the Band Crowns.
  const bandCrowns = Bandcrowns.value.trim();
  if (bandCrowns == '') {
    BandcrownsERROR.innerHTML = 'Band Crowns Field  Required ';
    BandcrownsERROR.style = 'color:red';
    Bandcrowns.style.border = '1px solid red ';
    Bandcrowns.focus();
  } else if (!(bandCrowns.length > 1)) {
    Bandcrowns.style.border = '1px solid red';
    BandcrownsERROR.innerHTML = 'Band Crowns are  supposed to be more than one letter';
    BandcrownsERROR.style = 'color:red ';
    Bandcrowns.focus();
  } else if (!bandCrowns.match(capitalize)) {
    BandcrownsERROR.innerHTML = 'Band Crowns  should start with a capital letter';
    BandcrownsERROR.style = 'color:red ';
    Bandcrowns.style.border = '1px solid red';
    Bandcrowns.focus();
  } else if (!bandCrowns.match(alphaNumeric)) {
    Bandcrowns.style.border = '1px solid red';
    BandcrownsERROR.innerHTML = 'Band Crowns Format should be Alphanumeric';
    BandcrownsERROR.style = 'color:red';
    Bandcrowns.focus();
  } else {
    BandcrownsERROR.innerHTML = ' Field correctly filled ';
    BandcrownsERROR.style = 'color:green ';
    Bandcrowns.style.border = '1px solid green';
  }

  // Validating the Numbers of Albums.
  if (BandAlbums.value == '') {
    BandAlbumsERROR.innerHTML = ' Band  Albums  field  Required ';
    BandAlbumsERROR.style = 'color:red';
    BandAlbums.style.border = '1px solid red ';
    BandAlbums.focus();
  } else if (BandAlbums.value < 0) {
    BandAlbumsERROR.innerHTML = ' Wrong Number Input  ';
    BandAlbumsERROR.style = 'color:red';
    BandAlbums.style.border = '1px solid red';
    BandAlbums.focus();
  } else {
    BandAlbumsERROR.innerHTML = ' Field correctly filled ';
    BandAlbumsERROR.style = 'color:green';
    BandAlbums.style.border = '1px solid green';
  }

  // Validating the Genre of Band.
  const bandgenre = Genre.value.trim();
  if (bandgenre == '') {
    GenreERROR.innerHTML = ' Genre field Required ';
    GenreERROR.style = 'color:red';
    Genre.style.border = '1px solid red';
    Genre.focus();
  } else if (!(bandgenre.length > 1)) {
    Genre.style.border = '1px solid red';
    GenreERROR.innerHTML = 'Genre  is  supposed to be more than one letter';
    GenreERROR.style = 'color:red ';
    Genre.focus();
  } else if (!bandgenre.match(capitalize)) {
    GenreERROR.innerHTML = 'Genre   should start with a capital letter';
    GenreERROR.style = 'color:red ';
    Genre.style.border = '1px solid red';
    Genre.focus();
  } else if (!bandgenre.match(alphaNumeric)) {
    Genre.style.border = '1px solid red';
    GenreERROR.innerHTML = 'Genre Format should be Alphanumeric';
    GenreERROR.style = 'color:red';
    Genre.focus();
  } else {
    GenreERROR.innerHTML = ' Field correctly filled ';
    GenreERROR.style = 'color:green ';
    Genre.style.border = '1px solid green';
  }

  // Validating the band icon
  if (BandIcon.value == false) {
    BandIconERROR.innerHTML = 'Band Icon Field Required';
    BandIconERROR.style = 'color:red';
    BandIcon.focus();
  } else {
    BandIconERROR.innerHTML = 'Field correctly filled';
    BandIconERROR.style = 'color:green ';
  }

  // Validating the band profile photo.
  if (ProfilePicture.value == false) {
    ProfilePictureERROR.innerHTML = 'Band Photo Field Required';
    ProfilePictureERROR.style = 'color:red';
    ProfilePicture.focus();
  } else {
    ProfilePictureERROR.innerHTML = 'Field correctly filled';
    ProfilePictureERROR.style = 'color:green ';
  }

  // Validating more band owners.
  const bandSponsors = Bandsponsors.value.trim();
  if (bandSponsors == '') {
    BandsponsorsERROR.innerHTML = 'Band Sponsors Field Required. If Non indicate N/A';
    BandsponsorsERROR.style = 'color:red';
    Bandsponsors.style.border = '1px solid red ';
    BandBandsponsors.focus();
  } else {
    BandsponsorsERROR.innerHTML = 'Field correctly filled ';
    BandsponsorsERROR.style = 'color:green ';
    Bandsponsors.style.border = '1px solid green';
  }

  // Validating more band owners.
  const otherBandOwners = OtherBandOwners.value.trim();
  if (otherBandOwners == '') {
    OtherBandOwnersERROR.innerHTML = 'Other Band Owners Field Required. If Non indicate N/A';
    OtherBandOwnersERROR.style = 'color:red';
    OtherBandOwners.style.border = '1px solid red ';
    OtherBandOwners.focus();
  } else {
    OtherBandOwnersERROR.innerHTML = ' Field correctly filled ';
    OtherBandOwnersERROR.style = 'color:green ';
    OtherBandOwners.style.border = '1px solid green';
  }
  // Validating the password input.
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

  // Validating the role input.
  const userRole = Role.value.trim();
  if (userRole == 'default') {
    userRoleERROR.innerHTML = 'Role Field Required';
    userRoleERROR.style = 'color:red';
    Role.style.border = '1px solid red';
    Role.focus();
  } else {
    userRoleERROR.innerHTML = 'Field Correctly Field';
    userRoleERROR.style = 'color:green';
    Role.style.border = '1px solid green';
  }
  // Validating the band bio input .
  const bandBio = Bandbio.value.trim();
  if (bandBio == '') {
    BandbioERROR.innerHTML = 'Band Bio Field Required';
    BandbioERROR.style = 'color:red';
    Bandbio.style.border = '1px solid red';
    Bandbio.focus();
  } else {
    BandbioERROR.innerHTML = 'Field Correctly Field';
    BandbioERROR.style = 'color:green';
    Bandbio.style.border = '1px solid green';
  }
};

const Bandform = document.getElementById('form-id');
Bandform.addEventListener('submit', validate);

// Bandform.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

