

window.addEventListener("load", function(){
   // Retrieve the field/value pairs from the URL
   var formData = location.search.slice(1);
   formData = formData.replace(/\+/g," ");
   formData = decodeURIComponent(formData);
   var formFields = formData.split(/[&=]/g);

   // Write the field values to the order form
   var length = formFields[35];
   var x = 5;

   // Model Name
   for(var i = 0; i < length; i++) {
     document.forms.order.elements.modelName[i].value = formFields[x]
     x += 14;
   }

   x = 3;
   for(var i = 0; i < length; i++) {
     document.forms.order.elements.size[i].value = formFields[x]
     x += 14;
   }

   x = 9;
   for(var i = 0; i < length; i++) {
     document.forms.order.elements.qty[i].value = formFields[x]
     x += 14;
   }

   x = 11;
   for(var i = 0; i < length; i++) {
     document.forms.order.elements.initialCost[i].value = formFields[x]
     x += 14;
   }

   document.forms.order.elements.subTotal.value = formFields[27];
   document.forms.order.elements.feeShip.value = formFields[29];
   document.forms.order.elements.VAT.value = formFields[31];



   console.log(formFields[31]);
} );
