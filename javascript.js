const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(checkBox.checked){
        subResult.textContent = `You are SUBSCRIBED!!`;
    }

    else{
        subResult.textContent = `You are NOT SUBSCRIBED!!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }

    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with Mastercard`;
    }

    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    }

    else{
        paymentResult.textContent = `You have not selected payment Method`;
    }
}