// for product price form the total price 
function lessPriceFormTotal(price){

    const subTotal = getPrice('subTotal-pirce');
    const newSubTotal = subTotal - price;
    setTotal('subTotal-pirce', newSubTotal);

    const taxAmount = getPrice('tax-amount');
    const calculet = newSubTotal * taxAmount / 100;
    const newTax = parseFloat(calculet.toFixed(2));
    setTotal('tax-pirce', newTax);

    const totalPirice = newSubTotal + newTax;
    setTotal('total-price', totalPirice);
}

document.getElementById('iphone-x-button').addEventListener('click', function(){
    removeProduct('iphone-item');
    const iphoneTotalPrice = getPrice('iphone-amount');
    lessPriceFormTotal(iphoneTotalPrice);
})
document.getElementById('cover-x-button').addEventListener('click', function(){
    removeProduct('cover-item');
    const coverTotalPrice = getPrice('cover-amount');
    lessPriceFormTotal(coverTotalPrice);

})
