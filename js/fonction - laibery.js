// for increase & decrease value of input field 
function updateFieldValue(field_id, isIncrease) {
    const field = document.getElementById(field_id);
    const fieldValue = parseInt(field.value);
    if (isIncrease === true) {
        const newValue = field.value = fieldValue + 1;
        return newValue;
    }
    else {
        if (fieldValue > 1) {
            const newValue = field.value = fieldValue - 1;
            return newValue;
        }
    }

}


// for get previwes price 
function getPrice(element_id) {
    const element = document.getElementById(element_id);
    const price = parseFloat(element.innerText);
    return price;
}

// calculet product price 
function calculetProductPrice_Set(productQuntity, previwesPrice, priceElement_id) {
    if (productQuntity >= 1) {
        const totalPrice = previwesPrice * productQuntity;
        const element = document.getElementById(priceElement_id);
        element.innerText = totalPrice;
        return totalPrice;
    }
}

// for set totalPrice inside the subtotal / tax / totalPrice
function setTotal(element_id, total) {
    const element = document.getElementById(element_id);
    element.innerText = total;
}


// calculet final price/amount 
function calculetFinalPrice() {
    const iphoneParentElement = document.getElementById('iphone-item');
    const coverParentElement = document.getElementById('cover-item');

    if (iphoneParentElement.style.display === 'none') {
        const newCoverPrice = getPrice('cover-amount');
        setTotal('subTotal-pirce', newCoverPrice);

        const taxAmount = getPrice('tax-amount');
        const calculet = newCoverPrice * taxAmount / 100;
        const tax = parseFloat(calculet.toFixed(2));
        setTotal('tax-pirce', tax);

        const totalPirice = newCoverPrice + tax;
        setTotal('total-price', totalPirice)

    }
    else if (coverParentElement.style.display === 'none') {
        const newIphonePrice = getPrice('iphone-amount');
        setTotal('subTotal-pirce', newIphonePrice);

        const taxAmount = getPrice('tax-amount');
        const calculet = newIphonePrice * taxAmount / 100;
        const tax = parseFloat(calculet.toFixed(2));
        setTotal('tax-pirce', tax);

        const totalPirice = newIphonePrice + tax;
        setTotal('total-price', totalPirice)

    }
    else {
        const newIphonePrice = getPrice('iphone-amount');
        const newCoverPrice = getPrice('cover-amount');

        const subtotal = newIphonePrice + newCoverPrice;
        setTotal('subTotal-pirce', subtotal);

        const taxAmount = getPrice('tax-amount');
        const calculet = subtotal * taxAmount / 100;
        const tax = parseFloat(calculet.toFixed(2));
        setTotal('tax-pirce', tax);

        const totalPirice = subtotal + tax;
        setTotal('total-price', totalPirice)
    }


}

// for remove product (x button) 
function removeProduct(element_id) {
    const element = document.getElementById(element_id);
    element.style.display = 'none';
}
