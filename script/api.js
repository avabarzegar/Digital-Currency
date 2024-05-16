var url = "https://panel.bartarpardakht.com/api/prices";



fetch(url)
    .then(response => response.json())
    .then(data => {


        // var btc = data.filter((item) => item.BTC)

        // window.addEventListener('DOMContentLoaded', function() {
        //     document.getElementsByClassName('price-btc').innerHTML= btc;
        // });

        $(document).ready(function () {
          


            // prices-usd

            var pUsdBTC = data.BTC.usd;
            var pUsdETH = data.ETH.usd;
            var pUsdUSDT = data.USDT.usd;
            var pUsdDOT = data.DOT.usd;
            var pUsdADA = data.ADA.usd;
            var pUsdXRP = data.XRP.usd;
            var pUsdBNB = data.BNB.usd;
            var pUsdUSDC = data.USDC.usd;
            var pUsdLUNA = data.LUNA.usd;
            var pUsdSOL = data.SOL.usd;
            var UsdAVAX = data.AVAX.usd;

            // /prices-usd


            // prices-buy
            var pBuyUSDT = data.USDT.buy;
            var pBuyBTC = data.BTC.buy;
            var pBuyETH = data.ETH.buy;
            var pBuyDOT = data.DOT.buy;
            var pBuyADA = data.ADA.buy;
            var pBuyXRP = data.XRP.buy;
            var pBuyBNB = data.BNB.buy;
            var pBuyLTC = data.LTC.buy;
            var pBuyLINK = data.LINK.buy;
            var pBuyDOGE = data.DOGE.buy;
            var pBuyUSDC = data.USDC.buy;
            var pBuyLUNA = data.LUNA.buy;
            var pBuySOL = data.SOL.buy;
            var pBuyAVAX = data.AVAX.buy;
            // /prices-buy


            // prices-sell
            var pSellUSDT = data.USDT.sell;
            var pSellBTC = data.BTC.sell;
            var pSellETH = data.ETH.sell;
            var pSellDOT = data.DOT.sell;
            var pSellADA = data.ADA.sell;
            var pSellXRP = data.XRP.sell;
            var pSellBNB = data.BNB.sell;
            var pSellLTC = data.LTC.sell;
            var pSellLINK = data.LINK.sell;
            var pSellDOGE = data.DOGE.sell;
            var pSellUSDC = data.USDC.sell;
            var pSellLUNA = data.LUNA.sell;
            var pSellSOL = data.SOL.sell;
            var pSellAVAX = data.AVAX.sell;
            // /prices-sell

            $('.sell-btc').html(pSellBTC)
            $('.sell-eth').html(pSellETH)
            $('.sell-usdc').html(pSellUSDC)
            $('.sell-usdt').html(pSellUSDT)
            $('.sell-avax').html(pSellAVAX)
            $('.sell-luna').html(pSellLUNA)
            $('.sell-ada').html(pSellADA)
            $('.sell-sol').html(pSellSOL)
            $('.sell-xrp').html(pSellXRP)
            $('.sell-bnb').html(pSellBNB)
            $('.sell-dot').html(pSellDOT)


            $('.price-btc').html(pUsdBTC)
            $('.price-eth').html(pUsdETH)
            $('.price-usdc').html(pUsdUSDC)
            $('.price-usdt').html(pUsdUSDT)
            $('.price-avax').html(UsdAVAX)
            $('.price-luna').html(pUsdLUNA)
            $('.price-ada').html(pUsdADA)
            $('.price-sol').html(pUsdSOL)
            $('.price-xrp').html(pUsdXRP)
            $('.price-bnb').html(pUsdBNB)
            $('.price-dot').html(pUsdDOT)


            $('.buy-btc').html(pBuyBTC)
            $('.buy-eth').html(pBuyETH)
            $('.buy-usdc').html(pBuyUSDC)
            $('.buy-usdt').html(pBuyUSDT)
            $('.buy-avax').html(pBuyAVAX)
            $('.buy-luna').html(pBuyLUNA)
            $('.buy-ada').html(pBuyADA)
            $('.buy-sol').html(pBuySOL)
            $('.buy-xrp').html(pBuyXRP)
            $('.buy-bnb').html(pBuyBNB)
            $('.buy-dot').html(pBuyDOT)







            // converter-buy 
            const currencyData = document.querySelector('#currency-select1');
            var currencyValue = currencyData.options[currencyData.selectedIndex].value;
            const unitPriceBuy = document.querySelector('.unit-price-buy');

            switch (currencyValue) {
                case "Tether":
                    unitPriceBuy.innerHTML = pBuyUSDT;
                    break;
                case "Bitcoin":
                    unitPriceBuy.innerHTML = pBuyBTC;
                    break;
                case "Ethereum":
                    unitPriceBuy.innerHTML = pBuyETH;
                    break;
                case "DOT":
                    unitPriceBuy.innerHTML = pBuyDOT;
                    break;
                case "ADA":
                    unitPriceBuy.innerHTML = pBuyADA;
                    break;
                case "XRP":
                    unitPriceBuy.innerHTML = pBuyXRP;
                    break;
                case "BNB":
                    unitPriceBuy.innerHTML = pBuyBNB;
                    break;
                case "LTC":
                    unitPriceBuy.innerHTML = pBuyLTC;
                    break;
                case "LINK":
                    unitPriceBuy.innerHTML = pBuyLINK;
                    break;
                case "DOGE":
                    unitPriceBuy.innerHTML = pBuyDOGE;
                    break;
                default:
                    unitPriceBuy.innerHTML = pBuyBTC;

            }
            // /converter-buy 

            // converter-sell 
            const currencyDataSell = document.querySelector('#currency-select2');
            var currencyValueSell = currencyDataSell.options[currencyDataSell.selectedIndex].value;

            const unitPriceSell = document.querySelector('.unit-price-sell');

            switch (currencyValueSell) {
                case "Tether":
                    unitPriceSell.innerHTML = pSellUSDT;
                    break;
                case "Bitcoin":
                    unitPriceSell.innerHTML = pSellBTC;
                    break;
                case "Ethereum":
                    unitPriceSell.innerHTML = pSellETH;
                    break;
                case "DOT":
                    unitPriceSell.innerHTML = pSellDOT;
                    break;
                case "ADA":
                    unitPriceSell.innerHTML = pSellADA;
                    break;
                case "XRP":
                    unitPriceSell.innerHTML = pSellXRP;
                    break;
                case "BNB":
                    unitPriceSell.innerHTML = pSellBNB;
                    break;
                case "LTC":
                    unitPriceSell.innerHTML = pSellLTC;
                    break;
                case "LINK":
                    unitPriceSell.innerHTML = pSellLINK;
                    break;
                case "DOGE":
                    unitPriceSell.innerHTML = pSellDOGE;
                    break;
                default:
                    unitPriceSell.innerHTML = pSellBTC;
            }

            // /converter-sell 



        })

    });

function changeCurrency() {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            // prices
            var pBuyUSDT = data.USDT.buy;
            var pBuyBTC = data.BTC.buy;
            var pBuyETH = data.ETH.buy;
            var pBuyDOT = data.DOT.buy;
            var pBuyADA = data.ADA.buy;
            var pBuyXRP = data.XRP.buy;
            var pBuyBNB = data.BNB.buy;
            var pBuyLTC = data.LTC.buy;
            var pBuyLINK = data.LINK.buy;
            var pBuyDOGE = data.DOGE.buy;

            // /prices


            const currencyData = document.querySelector('#currency-select1');
            var currencyValue = currencyData.options[currencyData.selectedIndex].value;


            const unitPriceBuy = document.querySelector('.unit-price-buy');

            switch (currencyValue) {
                case "Tether":
                    unitPriceBuy.innerHTML = pBuyUSDT;
                    break;
                case "Bitcoin":
                    unitPriceBuy.innerHTML = pBuyBTC;
                    break;
                case "Ethereum":
                    unitPriceBuy.innerHTML = pBuyETH;
                    break;
                case "DOT":
                    unitPriceBuy.innerHTML = pBuyDOT;
                    break;
                case "ADA":
                    unitPriceBuy.innerHTML = pBuyADA;
                    break;
                case "XRP":
                    unitPriceBuy.innerHTML = pBuyXRP;
                    break;
                case "BNB":
                    unitPriceBuy.innerHTML = pBuyBNB;
                    break;
                case "LTC":
                    unitPriceBuy.innerHTML = pBuyLTC;
                    break;
                case "LINK":
                    unitPriceBuy.innerHTML = pLINK;
                    break;
                case "DOGE":
                    unitPriceBuy.innerHTML = pDOGE;
                    break;
                default:
                    unitPriceBuy.innerHTML = pBTC;
            }

            document.querySelector('.currency-name-converter').innerHTML = currencyValue;
            var currencyText = currencyData.options[currencyData.selectedIndex].text;
            document.querySelector('.unit-price').placeholder = 'مقدار(' + currencyText + ')';
        })
}

function changeCurrency2() {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            // prices
            var pSellUSDT = data.USDT.sell;
            var pSellBTC = data.BTC.sell;
            var pSellETH = data.ETH.sell;
            var pSellDOT = data.DOT.sell;
            var pSellADA = data.ADA.sell;
            var pSellXRP = data.XRP.sell;
            var pSellBNB = data.BNB.sell;
            var pSellLTC = data.LTC.sell;
            var pSellLINK = data.LINK.sell;
            var pSellDOGE = data.DOGE.sell;

            // /prices


            const currencyData = document.querySelector('#currency-select2');
            var currencyValue = currencyData.options[currencyData.selectedIndex].value;
            const unitPriceSell = document.querySelector('.unit-price-sell');

            switch (currencyValue) {
                case "Tether":
                    unitPriceSell.innerHTML = pSellUSDT;
                    break;
                case "Bitcoin":
                    unitPriceSell.innerHTML = pSellBTC;
                    break;
                case "Ethereum":
                    unitPriceSell.innerHTML = pSellETH;
                    break;
                case "DOT":
                    unitPriceSell.innerHTML = pSellDOT;
                    break;
                case "ADA":
                    unitPriceSell.innerHTML = pSellADA;
                    break;
                case "XRP":
                    unitPriceSell.innerHTML = pSellXRP;
                    break;
                case "BNB":
                    unitPriceSell.innerHTML = pSellBNB;
                    break;
                case "LTC":
                    unitPriceSell.innerHTML = pSellLTC;
                    break;
                case "LINK":
                    unitPriceSell.innerHTML = pSellLINK;
                    break;
                case "DOGE":
                    unitPriceSell.innerHTML = pSellDOGE;
                    break;
                default:
                    unitPriceSell.innerHTML = pSellBTC;
            }
            const currencyDataSell = document.querySelector('#currency-select2');
            var currencyTextSell = currencyDataSell.options[currencyDataSell.selectedIndex].text;
            document.querySelector('#all-amount').placeholder = 'مقدار(' + currencyTextSell + ')';



        })
}