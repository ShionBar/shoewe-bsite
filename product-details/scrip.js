let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
let labelRed = document.querySelector("label[for='red']");
let labelGreen = document.querySelector("label[for='green']");
let smallSize = document.querySelector("#small");
let quantityTextfield = document.querySelector(".quantity-select");
let addutucart = document.querySelector("#addutucart");

var size;
var quantity;

btn[0].onclick = function(){
    productImg.src = "img/kobeshoe1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "img/kobeshoe2.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

labelGreen.onclick = function(){
    productImg.src = "img/kobeshoe1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
    btn[0].classList.add("active");
}

labelRed.onclick = function(){
    productImg.src = "img/kobeshoe2.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
    btn[1].classList.add("active");
}


smallSize.onclick = function(){
    size = document.querySelector("label[for='small'] span").textContent;
    console.log("DEBUG: " + size);
}

// addutucart.onclick = function(){
//     // console.log("DEBUG: " + document.querySelector(".quantity-select input").value);
//     location.href = "/cart.htm";
// };

addutucart.addEventListener("click", function() {
    console.log("DEBUG: " + size);
    let quantity = document.querySelector(".quantity-select input").value;
    console.log("DEBUG: " + quantity);
    location.href = "../cart.htm?size=" + size + "&quantity=" + quantity;
    // location.href = '../cart.htm?size=${size}&quantity=${quantity}";
    
    // console.log("DEBUG: " + document.querySelector(".quantity-select input").value);
})



    



