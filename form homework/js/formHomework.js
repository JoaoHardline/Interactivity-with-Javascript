/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    var sameInfo = document.getElementById('same');

    var shippingName = document.getElementById('shippingName');
    var shippingZip = document.getElementById('shippingZip');

    var billingName = document.getElementById('billingName');
    var billingZip = document.getElementById('billingZip');

    if(sameInfo.checked){
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
        billingName.setAttribute("required", true);
        billingZip.setAttribute("required", true);
    }else{
        billingName.value = "";
        billingZip.value = "";
    }
}
 