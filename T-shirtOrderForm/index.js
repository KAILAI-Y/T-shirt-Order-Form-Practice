function calculate() {
    var oTshirts = document.getElementsByName("T-shirt");
    var oQuantity = document.getElementById("quantity");

    var price = 0;
    for (var index = 0; index < oTshirts.length; index++) {
        if (oTshirts[index].checked) {
            price = oTshirts[index].value;
            break;
        }
    }
    var quantity = oQuantity.value;
    var subtotal = quantity * price;
    var total = subtotal * 1.13;
    var tax = total - subtotal;

    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
}

function oQuantityChange() {
    calculate();
}

function onTshirtClick() {
    calculate();
}


window.onload = function () {
    var oTshirts = document.getElementsByClassName("tshirt");
    for (var index = 0; index < oTshirts.length; index++) {
        oTshirts[index].onclick = onTshirtClick;
    }
    document.getElementById("quantity").onchange = oQuantityChange;
    calculate();
}

function validateForm() {
    var firstName = document.forms["myform"]["fname"].value;
    if (firstName == "") {
        alert("Please insert First Name.");
        return false;
    }

    var lastName = document.forms["myform"]["lname"].value;
    if (lastName == "") {
        alert("Please insert Last Name.");
        return false;
    }

    var creditCard = document.forms["myform"]["ccnumber"].value;
    if (/^\d{16}$/.test(creditCard) == false) {
        alert("Please enter the right 16 digit credit card numbers.");
        return false;
    }

    var securityCode = document.forms["myform"]["scode"].value;
    if (/^\d{3}$/.test(securityCode) == false) {
        alert("Please enter your 3 digit security code.");
        return false;
    }

    var streetAddress = document.forms["myform"]["saddress"].value;
    if (streetAddress == "") {
        alert("Please insert street address.");
        return false;
    }

    var city = document.forms["myform"]["city"].value;
    if (city == "") {
        alert("Please insert your city.");
        return false;
    }

    var stateProvince = document.forms["myform"]["state"].value;
    if (stateProvince == "") {
        alert("Please insert your State/Province.");
        return false;
    }

    var postalCode = document.forms["myform"]["postal"].value;
    if (/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/.test(postalCode) == false) {
        alert("Please insert the right Postal/Zip code.");
        return false;
    }

    var date = document.forms["myform"]["date"].value;
    if (date == "") {
        alert("Please choose the date.");
        return false;
    }

    var dateformat = /^(\d{4})-(\d{2})-(\d{2})$/
    if (!dateformat.test(document.forms["myform"]["date"].value)) {
        alert("Please innser the right form od date.")
        return false
    }

    var email = document.forms["myform"]["email"].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        alert("Please enter the right email.");
        return false;
    }

}

