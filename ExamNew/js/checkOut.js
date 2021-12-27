window.addEventListener("load", function() {
  // Retrieve the field/value pairs from the URL
  var formData = location.search.slice(1);
  formData = formData.replace(/\+/g, " ");
  formData = decodeURIComponent(formData);
  var formFields = formData.split(/[&=]/g);

  //length
  var length = formFields[37];
  var image = document.getElementsByClassName("img-checkout");

  //Model image
  var x = 1;
  for (var i = 0; i < length; i++) {
    image[i].src = formFields[x];
    x += 14;
  }

  //Model size
  x = 5;
  for (var i = 0; i < length; i++) {
    document.forms.order.elements.size[i].value = formFields[x];
    x += 14;
  }

  // Model Name
  x = 7;
  for (var i = 0; i < length; i++) {
    document.forms.order.elements.modelName[i].value = formFields[x];
    x += 14;
  }



  //Quantity
  x = 11;
  for (var i = 0; i < length; i++) {
    document.forms.order.elements.qty[i].value = formFields[x];
    x += 14;
  }

  //subTotal each row
  x = 13;
  for (var i = 0; i < length; i++) {
    document.forms.order.elements.initialCost[i].value = formFields[x];
    x += 14;
  }

  document.forms.order.elements.subTotal.value = formFields[29]; //subTotal
  document.forms.order.elements.feeShip.value = formFields[31]; //Shipping fee
  document.forms.order.elements.VAT.value = formFields[33]; //VAT
  document.forms.order.elements.total.value = formFields[35]; //Total

});


window.addEventListener("load", function() {
  document.getElementById("subButton").onclick = runSubmit;
  document.getElementById("cardName").oninput = validateName;
  document.getElementById("email").oninput = validateEmail;
  document.getElementById("phone").oninput = validatePhone;
  document.getElementById("address").oninput = validateAddress;
  document.getElementById("postalCode").oninput = validatePostalCode;
  document.getElementById("cardNumber").oninput = validateNumber;
  document.getElementById("expMonth").onchange = validateMonth;
  document.getElementById("expYear").onchange = validateYear;
});


function runSubmit() {
  validateName();
  validateEmail();
  validatePhone();
  validateAddress();
  validatePostalCode();
  validateCredit();
  validateNumber();
  validateMonth();
  validateYear();
  validateCVC();
}

function validateName() {
  var cardName = document.getElementById("cardName");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter your name as it appears on the card");
  } else {
    cardName.setCustomValidity("");
  }
}

function validateEmail() {
  var email = document.getElementById("email");
  if (email.validity.valueMissing) {
    email.setCustomValidity("Enter your email address");
  } else if (email.validity.patternMismatch) {
    email.setCustomValidity("Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
}

function validatePhone() {
  var phone = document.getElementById("phone");
  if (phone.validity.valueMissing) {
    phone.setCustomValidity("Enter your phone number");
  } else {
    phone.setCustomValidity("");
  }
}

function validateAddress() {
  var address = document.getElementById("address");
  if (address.validity.valueMissing) {
    address.setCustomValidity("Enter your address");
  } else {
    address.setCustomValidity("");
  }
}

function validatePostalCode() {
  var postalCode = document.getElementById("postalCode");
  if (postalCode.validity.valueMissing) {
    postalCode.setCustomValidity("Enter your postal code");
  } else if (postalCode.validity.patternMismatch) {
    postalCode.setCustomValidity("Enter a valid postal code");
  } else {
    postalCode.setCustomValidity("");
  }
}

function validateMonth() {
  var cardMonth = document.getElementById("expMonth");
  if (cardMonth.selectedIndex === 0) {
    cardMonth.setCustomValidity("Select the expiration month");
  } else {
    cardMonth.setCustomValidity("");
  }
}

function validateYear() {
  var cardYear = document.getElementById("expYear");
  if (cardYear.selectedIndex === 0) {
    cardYear.setCustomValidity("Select the expiration year");
  } else {
    cardYear.setCustomValidity("");
  }
}

function validateNumber() {
  var cardNumber = document.getElementById("cardNumber");
  if (cardNumber.validity.valueMissing) {
    cardNumber.setCustomValidity("Enter your card number");
  } else if (cardNumber.validity.patternMismatch) {
    cardNumber.setCustomValidity("Enter a valid card number");
  } else if (luhn(cardNumber.value) === false) {
    cardNumber.setCustomValidity("Enter a legitimate card number");
  } else {
    cardNumber.setCustomValidity("");
  }
}


function validateCredit() {
  var creditCard = document.forms.payment.elements.credit[0];
  if (creditCard.validity.valueMissing) {
    creditCard.setCustomValidity("Select your credit card");
  } else {
    creditCard.setCustomValidity("");
  }
}

function validateCVC() {
  var cardCVC = document.getElementById("cvc");
  var creditCard = document.querySelector('input[name="credit"]:checked').value;

  if (cardCVC.validity.valueMissing) {
    cardCVC.setCustomValidity("Enter your CVC number");
  } else if ((creditCard === "express") && (/^\d{4}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 4-digit CVC number");
  } else if ((creditCard !== "express") && (/^\d{3}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 3-digit CVC number");
  } else {
    cardCVC.setCustomValidity("");
  }
}

function validateName() {
  var cardName = document.getElementById("cardName");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter your name as it appears on the card");
  } else {
    cardName.setCustomValidity("");
  }
}

function sumDigits(numStr) {
  var digitTotal = 0;
  for (var i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}

function luhn(idNum) {
  var string1 = "";
  var string2 = "";

  // Retrieve the odd-numbered digits
  for (var i = idNum.length - 1; i >= 0; i -= 2) {
    string1 += idNum.charAt(i);
  }
  // Retrieve the even-numbered digits and double them
  for (var i = idNum.length - 2; i >= 0; i -= 2) {
    string2 += 2 * idNum.charAt(i);
  }

  // Return whether the sum of the digits is divisible by 10
  return sumDigits(string1 + string2) % 10 === 0;
}
