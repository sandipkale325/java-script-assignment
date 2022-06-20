function validation() {
  var myName = document.getElementById("myName").value;
  var myEmail = document.getElementById("myEmail").value;
  var myPan = document.getElementById("myPan").value;
  var myLoan = document.getElementById("myLoan").value;
  var letters = /^[A-Za-z]+$/;
  var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  // username validation logic
  if (myName == "") {
    document.getElementById("myNameid").innerHTML = "*Enter your full name";
    return false;
  }
  if (!myName.match(letters)) {
    document.getElementById("myNameid").innerHTML =
      "*Only charactors are allowed";
    return false;
  }

  // email validation logic
  if (myEmail == "") {
    document.getElementById("myMailid").innerHTML = "*Enter email address";
    return false;
  }
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!myEmail.match(mailFormat)) {
    document.getElementById("myMailid").innerHTML =
      "*Enter valid email address";
    return false;
  }
  // pan card validation logic
  if (myPan == "") {
    document.getElementById("myPanid").innerHTML = "*Enter pan number";
    return false;
  }
  if (!myPan.match(regex)) {
    document.getElementById("myPanid").innerHTML =
      "*Must be in this order ABCDE1234F";
    return false;
  }
  // loan validation loagic
  if (myLoan == "") {
    document.getElementById("myLoanid").innerHTML = "*Enter loan amount";
    return false;
  }
  if (myLoan.length >= 9) {
    document.getElementById("myLoanid").innerHTML = "*Enter valid loan amount";
    return false;
  }
  if (isNaN(myLoan)) {
    document.getElementById("myLoanid").innerHTML = "*Enter numers only";
    return false;
  }
}
