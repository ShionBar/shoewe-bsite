if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('submit_btn')[0].addEventListener('click', checkoutClicked)
}

function checkoutClicked() {
    alert('Thank you for your purchase. Your order summary has been sent to our store and our staff will contact you withtin 24hrs.')
    location.href = "../index.htm";
    // var cartItems = document.getElementsByClassName('cart-items')[0]
    // while (cartItems.hasChildNodes()) {
    //     cartItems.removeChild(cartItems.firstChild)
    // }
    // updateCartTotal()
}
