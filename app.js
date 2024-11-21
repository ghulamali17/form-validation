let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let passerror = document.getElementById("passerror");
let emailErr = document.getElementById("emailErr");
let selectErr = document.getElementById("selectErr");
let usererror = document.getElementById("usererror");
let selectedCity = document.getElementById("state");
let userInfo = [];

function UserData(userName, password, email, gender, city) {
  this.userName = userName;
  this.password = password;
  this.email = email;
  this.gender = gender;
  this.city = city;
}

// Username Validation
function checkUser() {
  let nameRegex = /^[a-zA-Z0-9_.]{3,20}$/;
  if (!username.value.match(nameRegex)) {
    usererror.innerHTML =
      "Username contains invalid characters. <br>Only letters, numbers,<br> underscores (_), and periods (.) are allowed and should be 3 char long.";
    return false;
  } else if (username.value.length < 3) {
    usererror.innerHTML = "Username should be at least 3 characters.";
    return false;
  } else {
    usererror.innerHTML = "";
    return true;
  }
}

// Password Validation

function checkPass() {
  let passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  if (!password.value.match(passRegex)) {
    passerror.innerHTML =
      "Password must be at least 8 characters long.<br>Contain uppercase and lowercase letters.<br>Contain at least one digit.<br>Contain one special character.";
    return false;
  } else {
    passerror.innerHTML = "";
    return true;
  }
}

// Email Validation
function checkEmail() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailRegex)) {
    emailErr.innerHTML = "Please enter a valid email.";
    return false;
  } else {
    emailErr.innerHTML = "";
    return true;
  }
}

// Dropdown Validation
function checkSelect() {
  if (selectedCity.selectedIndex === 0) {
    selectErr.innerHTML = "Please select a city.";
    return false;
  } else {
    selectErr.innerHTML = "";
    return true;
  }
}

// Gender Validation
function validateGender() {
  const genderInputs = document.getElementsByName("gender");
  const errorMessage = document.getElementById("errorMessage");
  let isSelected = false;
  for (const input of genderInputs) {
    if (input.checked) {
      isSelected = true;
      break;
    }
  }

  if (isSelected) {
    errorMessage.textContent = "";
    return true;
  } else {
    errorMessage.textContent = "Please select your gender.";
    return false;
  }
}

// Form Submit Handler
function formValidate(e) {
  e.preventDefault();
  usererror.innerHTML = "";
  emailErr.innerHTML = "";
  selectErr.innerHTML = "";
  errorMessage.textContent = "";

  // Duplicate Username and Email
  for (let i = 0; i < userInfo.length; i++) {
    if (username.value === userInfo[i].userName) {
      usererror.innerHTML = "Username already exists.";
      return false;
    }
    if (email.value === userInfo[i].email) {
      emailErr.innerHTML = "Email already exists.";
      return false;
    }
  }

  const isUserValid = checkUser();
  const isPassValid = checkPass();
  const isEmailValid = checkEmail();
  const isSelectValid = checkSelect();
  const isGenderValid = validateGender();

  if (
    isUserValid &&
    isPassValid &&
    isEmailValid &&
    isSelectValid &&
    isGenderValid
  ) {
    alert("Form submitted successfully");
    const selectedGender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    
    let user = new UserData(
      username.value,
      password.value,
      email.value,
      selectedGender,
      selectedCity.value
    );

    userInfo.push(user);
    console.log(userInfo);
    return true;
  } else {
    alert("Please correct the errors before submitting.");
    return false;
  }
}
