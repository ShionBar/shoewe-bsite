// const currentOrder = require('../products/scrip.js')

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('submit_btn')[0].addEventListener('click', checkoutClicked)
}

function checkoutClicked() {
    // alert('Thank you for your purchase. Your order summary has been sent to our store and our staff will contact you withtin 24hrs.')
    

    // var cartItems = document.getElementsByClassName('cart-items')[0]
    // while (cartItems.hasChildNodes()) {
    //     cartItems.removeChild(cartItems.firstChild)
    // }
    // updateCartTotal()
    // Get values from the form inputs
    const date = new Date();
    var name = document.querySelector('#name');
    var contactNumber = document.querySelector('#contactNumber');
    var email = document.querySelector('#email');
    var address = document.querySelector('#address');
    var city = document.querySelector('#city');
    var zip = document.querySelector('#zip');
    var paymentOption = document.querySelector('#paymentOption')

    console.log("DEBUG: " + localStorage.getItem("currentOrder"));

    Email.send({
        
        Host: "smtp.elasticemail.com",
        Username: "coolkicks2k24@gmail.com",
        Password: "E9B2A176FC077F91420FA013565708D54F7E",
        // SecureToken: '528847A9E5BA5CABBAEA1142B2633CAE9B84',
        From: 'coolkicks2k24@gmail.com',
        To: 'coolkicks2k24@gmail.com',
        
        Subject: "Order Form for " + name.value + " - " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear(),
        Body: "Customer Details" + "<br />" 
        + "----------------------------------------------------------------"
        + "<br />"
        + "Full Name: " + name.value + "<br />" 
        + "Contact Number: " + contactNumber.value + "<br />" 
        + "Email: " + email.value + "<br />" 
        + "Address: " + address.value + "<br />" 
        + "City: " + city.value + "<br />" 
        + "Zip Code: " + zip.value + "<br />" 
        + "Payment Option: " + paymentOption.value
        + "<br />"
        + "<br />"
        + "Order Summary" + "<br />" 
        + "----------------------------------------------------------------"
        + "<br />"
        + localStorage.getItem("currentOrder")

    }).then(function (message) {
        // console.log("DEBUG:" + message);
        if(message!="OK"){
            alert("Errors encountered during the chekout process. It maybe because of slow internet connection causing failure in connecting to our server. Please repeat order process. Thank you.")
            location.href = "../index.htm";
        } else {
            alert("Thank you for your purchase. Your order summary has been sent to our store and our staff will contact you withtin 24hrs.");
            location.href = "../index.htm";
        }
        
        
    });
    

    // window.open('mailto:coolkicks2k24@gmail.comm?subject=subject&body=body');
}

// document.getElementById("paymentForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get values from the form inputs
//     var name = document.querySelector('#name');
//     var email = document.querySelector('#email');

//     Email.send({
//         SecureToken: "528847A9E5BA5CABBAEA1142B2633CAE9B84",
//         To: 'coolkicks2k242@gmail.com',
//         From: email.value,
//         Subject: "This is the subject",
//         Body: "And this is the body " + name + email
//     }).then(
//         message => alert(message)
//     );
// });
