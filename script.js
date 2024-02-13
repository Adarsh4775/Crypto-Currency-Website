
var btc = document.getElementById("bitcoin");
var ethe = document.getElementById("ethereum");
var dgc = document.getElementById("dogecoin");

let settings ={
    "async" : true,
    "scrossdomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET",
    "headers" : {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ethe.innerHTML = response.ethereum.usd;
    dgc.innerHTML = response.dogecoin.usd;
});