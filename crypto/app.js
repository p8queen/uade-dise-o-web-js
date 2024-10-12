/* get crypto live price from binance using websocket */
let wss = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let priceElement = document.getElementById('btc-price');

let wsEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let priceElementEth = document.getElementById('eth-price');

let wsLtc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let priceElementLtc = document.getElementById('ltc-price');

let wsSol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let priceElementSol = document.getElementById('sol-price');

wss.onmessage = (data) => {
 let priceObject = JSON.parse(data.data);
 price = parseFloat(priceObject.p).toFixed(2); 
 roundPrice = price;
 priceElement.innerText = price;
 
};

wsEth.onmessage = (data) => {
    let priceObject = JSON.parse(data.data);
    // round the price to 2 decimal places
    price = parseFloat(priceObject.p).toFixed(2);
    priceElementEth.innerText = price;
    
   };

   wsLtc.onmessage = (data) => {
    let priceObject = JSON.parse(data.data);
    // round the price to 2 decimal places
    price = parseFloat(priceObject.p).toFixed(2);
    priceElementLtc.innerText = price;
   };

wsSol.onmessage = (data) => {
let priceObject = JSON.parse(data.data);
   // round the price to 2 decimal places
   price = parseFloat(priceObject.p).toFixed(2);
   priceElementSol.innerText = price;
  };

