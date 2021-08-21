//memory-cost
document.getElementById('16gb-memory').addEventListener('click', function () {
    productsCostCounter('extraMemory', 180, true);

})
document.getElementById('8gb-memory').addEventListener('click', function () {
    productsCostCounter('extraMemory', 0, false);

})
//storage-cost
document.getElementById('512gb-storage').addEventListener('click', function () {
    productsCostCounter('extraStorage', 100, true);

})
document.getElementById('1tb-storage').addEventListener('click', function () {
    productsCostCounter('extraStorage', 180, true);

})
document.getElementById('256gb-storage').addEventListener('click', function () {
    productsCostCounter('extraStorage', 0, false);

})
//delivery-cost
document.getElementById('charge-delivery').addEventListener('click', function () {
    productsCostCounter('deliveryCharge', 20, true);

})
document.getElementById('free-delivery').addEventListener('click', function () {
    productsCostCounter('deliveryCharge', 0, false);

})
// function-for-product-priceCounts
function productsCostCounter(product, price, isIncreasing) {
    const productPrice = document.getElementById(product + '-cost');

    if (isIncreasing) {
        productPrice.innerText = price;
    }
    else {
        productPrice.innerText = price;
    }
    //total-Counts
    totalCost();
    function totalCost() {
        const bestPrice = document.getElementById('bestPrice-cost');
        const bestPriceCost = parseFloat(bestPrice.innerText);
        const extraMemoryCost = productsCostCounter('extraMemory');
        const extraStorageCost = productsCostCounter('extraStorage');
        const deliveryChargeCost = productsCostCounter('deliveryCharge');
        const costTotal = bestPriceCost + extraMemoryCost + extraStorageCost + deliveryChargeCost;
        document.getElementById('totalPrice-cost').innerText = costTotal;
        document.getElementById('total').innerText = costTotal;


    }

    function productsCostCounter(product) {
        const productPrice = document.getElementById(product + '-cost');
        const productPriceText = productPrice.innerText;
        const productPriceNumber = parseFloat(productPriceText);
        return productPriceNumber;
    }


}
// promo-code
document.getElementById('promo-button').addEventListener('click', function () {
    const promoCode = 'stevekaku';
    const allCostText = document.getElementById('totalPrice-cost').innerText;
    let allCostNumber = parseFloat(allCostText);
    let discounts = allCostNumber - (allCostNumber / 100 * 20);
    const enteredCode = document.getElementById('promo-input');
    if (enteredCode.value == promoCode) {

        document.getElementById('total').innerText = discounts;
    }
    enteredCode.value = '';
})



