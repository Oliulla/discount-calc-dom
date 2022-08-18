// add event handler on discount button
document.getElementById('paynow-btn').addEventListener('click', () => {
    // const productPriceElm = document.getElementById('product-price');
    // const productPriceAmount = productPriceElm.innerText;

    // const payableTotalElm = document.getElementById('payable-total');
    // payableTotalElm.innerText = payableTotalElm.value;

    setTimeout(() => {
        alert('Paid successful!')
    }, 2000);

    // get input field value
    // const inputFieldDomCoupon = document.getElementById('dom-coupon');
    // const inputFieldText = inputFieldDomCoupon.value;

    // if (inputFieldText === 'DOM'){

    // }

    // inputFieldDomCoupon.value = '';
});

// add event handler for discount button
document.getElementById('discount-btn').addEventListener('click', () => {
    const productPriceElm = document.getElementById('product-price');
    const productPriceAmountString = productPriceElm.innerText;
    const productPriceAmount = parseFloat(productPriceAmountString);
    
    // payable price total
    const payableTotalElm = document.getElementById('payable-total');

    // get input field text
    const inputFieldDomCoupon = document.getElementById('dom-coupon');
    const inputFieldText = inputFieldDomCoupon.value;
    if(inputFieldText === 'DOM'){
        const discountPrice = productPriceAmount - (productPriceAmount * (30 / 100));
        payableTotalElm.innerText = discountPrice;
        // const productPrice = productPriceAmount - discountPrice;
        // console.log(discountPrice);

    } else {
        payableTotalElm.innerText = productPriceAmount;
    }
})