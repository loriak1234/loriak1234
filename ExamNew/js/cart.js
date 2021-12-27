"use strict";

window.addEventListener("load", function() {
  var orderForm = document.forms.orderForm;

  calcOrder();

  // Event handlers for the web form
  for (var i = 0; i < orderForm.elements.qty.length; i++) {
    orderForm.elements.qty[i].onchange = calcOrder;
  }

});

// Calc total
function calcOrder() {
  var orderForm = document.forms.orderForm;

  // Calculate the initial cost of the order
  var mIndex = new Array();
  for (var i = 0; i < orderForm.elements.modelPrice.length; i++) {
    mIndex[i] = orderForm.elements.modelPrice[i].value;
  }

  var quantity = new Array();
  for (var i = 0; i < orderForm.elements.qty.length; i++) {
    quantity[i] = orderForm.elements.qty[i].value;
  }

  // Initial cost = model cost x quantity

  var initialCost = new Array();
  // Calculate the subtotal
  for (var i = 0; i < orderForm.elements.initialCost.length; i++) {
    initialCost[i] = mIndex[i] * quantity[i];
    orderForm.elements.initialCost[i].value = formatUSCurrency(initialCost[i]);
  }

  var calSubTotal = 0;
  for (var i = 0; i < orderForm.elements.initialCost.length; i++) {
    calSubTotal += initialCost[i];
  }
  orderForm.elements.subTotal.value = formatNumber(formatUSCurrency(calSubTotal), 2);
  // Calculate VAT(10%)
  var calVAT = 0.1 * (calSubTotal)
  orderForm.elements.VAT.value = formatNumber(formatUSCurrency(calVAT), 2);

  // Calculate the cost of the total order
  var totalCost = calSubTotal + calVAT + 10; // 10: Shipping fee default
  orderForm.elements.total.value = formatNumber(formatUSCurrency(totalCost), 2);
  //
  // Store the order details

  // console.log()
  for (var i = 0; i < orderForm.elements.model.length; i++) {
    orderForm.elements.modelName[i].value = orderForm.elements.model[i].placeholder;
  }
  orderForm.elements.listLength.value = orderForm.elements.model.length;
  var feeShipping = 10;
  orderForm.elements.Shipping.value = formatUSCurrency(feeShipping);

  // var image = document.getElementsByClassName("c-img").src;
  var image = document.getElementsByClassName("c-img");
  for(var i = 0; i < image.length; i++) {
    orderForm.elements.inputIMG[i].value = image[i].src;
  }

}


function formatNumber(val, decimals) {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function formatUSCurrency(val) {
  return val.toLocaleString('en-US', {
    style: "currency",
    currency: "USD"
  });
}
