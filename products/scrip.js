let productImg = document.querySelector(".productImg");
let btn = document.getElementsByClassName("btn");
let labelRed = document.querySelector("label[for='red']");
let labelGreen = document.querySelector("label[for='green']");
let labelGray = document.querySelector("label[for='gray']");
let smallSize = document.querySelector("#small");
let quantityTextfield = document.querySelector(".quantity-select");
let addToCartButton = document.querySelector(".add-to-cart-button");

var size;
var color;

// btn[0].onclick = function(){
//     productImg.src = "img/kobeshoe1.jpg";

//     for(bt of btn){
//         bt.classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[1].onclick = function(){
//     productImg.src = "img/kobeshoe2.jpg";

//     for(bt of btn){
//         bt.classList.remove("active");
//     }
//     this.classList.add("active");
// }

// labelGreen.onclick = function(){
//     var shoe = labelGreen.parentElement.parentElement.parentElement.querySelector("h1").innerText;
//     var color = labelGreen.getAttribute("for");
//     console.log("DEBUG: " + shoe);
//     labelGreen.parentElement.parentElement.parentElement.parentElement.querySelector(".productImg").src="img/" + shoe + " - " + color + ".jpg";
// }

// labelRed.onclick = function(){
//     var shoe = labelRed.parentElement.parentElement.parentElement.querySelector("h1").innerText;
//     var color = labelRed.getAttribute("for");
//     console.log("DEBUG: " + color);
//     labelRed.parentElement.parentElement.parentElement.parentElement.querySelector(".productImg").src="img/" + shoe + " - " + color + ".jpg";
// }

// labelGray.onclick = function(){
//     var shoe = labelGray.parentElement.parentElement.parentElement.querySelector("h1").innerText;
//     var color = labelGray.getAttribute("for");
//     console.log("DEBUG: " + shoe);
//     labelGray.parentElement.parentElement.parentElement.parentElement.querySelector(".productImg").src="img/" + shoe + " - " + color + ".jpg";
// }


// smallSize.onclick = function(){
//     size = document.querySelector("label[for='small'] span").textContent;
//     console.log("DEBUG: " + size);
// }

// addutucart.onclick = function(){
//     // console.log("DEBUG: " + document.querySelector(".quantity-select input").value);
//     location.href = "/cart.htm";
// };

// addToCartButton.addEventListener("click", function() {
//     console.log("DEBUG: " + size);
//     let quantity = document.querySelector(".quantity-select input").value;
//     console.log("DEBUG: " + quantity);
//     console.log(addToCartButton.parentElement.parentElement.querySelector(".quantity-select input").value)
//     // location.href = "../cart.htm?size=" + size + "&quantity=" + quantity;
//     // location.href = '../cart.htm?size=${size}&quantity=${quantity}";
    
//     // console.log("DEBUG: " + document.querySelector(".quantity-select input").value);
// })

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var colorSelects = document.querySelectorAll(".color-select label")
    for (var i = 0; i < colorSelects.length; i++) {
        var colorSelect = colorSelects[i];
        colorSelect.addEventListener('click', colorClicked);
    }

    var sizeSelects = document.querySelectorAll(".size-select label")
    for (var i = 0; i < sizeSelects.length; i++) {
        var sizeSelect = sizeSelects[i];
        console.log("DEBUG: LOOP [" + i + "] " + sizeSelect.parentElement.parentElement.parentElement.querySelector("h1").innerText);
        sizeSelect.addEventListener('click', sizeClicked);
    }

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-to-cart-button');
    
    for (var i = 0; i < addToCartButtons.length; i++) {
        var addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function colorClicked(event) {
    var element = event.target
    var shoe = element.parentElement.parentElement.parentElement.parentElement.querySelector("h1").innerText;
    color = element.parentElement.getAttribute("for");
    var shoeItem = element.parentElement.parentElement.parentElement.parentElement.parentElement;
    shoeItem.querySelector(".productImg").src="img/" + shoe + " - " + color + ".jpg";
}

function sizeClicked(event) {
    removeCurrentSizeClicked();
    var element = event.target
    console.log(element.parentElement.querySelector("span").innerText);
    console.log(element.parentElement.parentElement.parentElement.parentElement.querySelector("h1").innerText);
    element.parentElement.querySelector("span").style.color = 'blue';
    size = element.parentElement.querySelector("span").textContent;
}

function removeCurrentSizeClicked(){
    var sizeSelects = document.querySelectorAll(".size-select label span");
    for (var i = 0; i < sizeSelects.length; i++) {
        var sizeSelect = sizeSelects[i];
        sizeSelect.style.color = 'black';
    }
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.parentElement.querySelector("h1").innerText + "[" + color + "-" + size + "]"
    var price = shopItem.parentElement.querySelector("h2").innerText
    var imageSrc = shopItem.parentElement.parentElement.querySelector("div img").src
    var quantity = shopItem.querySelector(".quantity-select input").value;
    addItemToCart(title, price, imageSrc, quantity)
    updateCartTotal()
}

function purchaseClicked() {
    // alert('Thank you for your purchase')
    location.href = "../terms/terms.html";
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc, quantity) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="${quantity}">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₱','').replace(',',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total
}



    



