
// =================================== Iphone section =================================
// previwes Price of Iphone-12-128GB 
const previwesIphonePrice = getPrice('iphone-amount');
// -
document.getElementById('iphone-minus').addEventListener('click', function () {
    const iphoneQuntity = updateFieldValue('iphone-field', false);
    const newIphonePrice = calculetProductPrice_Set(iphoneQuntity, previwesIphonePrice, 'iphone-amount');
    calculetFinalPrice('cover-item');

})
// +
document.getElementById('iphone-plus').addEventListener('click', function () {
    const iphoneQuntity = updateFieldValue('iphone-field', true);
    const newIphonePrice = calculetProductPrice_Set(iphoneQuntity, previwesIphonePrice, 'iphone-amount');
    calculetFinalPrice();

});



// ==================================== Cover Section ===========================
const previwesCoverPrice = getPrice('cover-amount');
// -
document.getElementById('cover-minus').addEventListener('click', function () {
    const coverQuntity = updateFieldValue('cover-field', false);
    const newCoverPrice = calculetProductPrice_Set(coverQuntity, previwesCoverPrice, 'cover-amount');
    calculetFinalPrice();

})
// +
document.getElementById('cover-plus').addEventListener('click', function () {
    const coverQuntity = updateFieldValue('cover-field', true);
    const newCoverPrice = calculetProductPrice_Set(coverQuntity, previwesCoverPrice, 'cover-amount');
    calculetFinalPrice();
    
});
calculetFinalPrice();
