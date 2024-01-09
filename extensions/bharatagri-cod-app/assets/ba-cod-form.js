// @ts-nocheck
function openSmileyModal() {
  let smileyDiscountAmt = document.getElementById('ba-cod-saved-amount').innerHTML;
  smileyDiscountAmt = smileyDiscountAmt.split('₹')[1];
  let smileyCouponCode = localStorage.getItem('BA_COD_Coupon_code');

  document.getElementById('ba-smiley-modal-amt-id').innerHTML = `₹${smileyDiscountAmt} ${smileyModalDiscountLabel}`;
  document.getElementById('ba-smiley-modal-coupon-id').innerHTML = smileyCouponCode;
  document.getElementById('ba-smiley-modal-applied-id').innerHTML = smileyModalDiscountAppliedLabel;
  document.getElementById('ba-party-smiley-btn').click();

  setTimeout(() => {
    document.getElementById('ba-party-smiley-close').click();
  }, 4000);

}

function incrementQuantity() {
  var quantityInput = document.getElementById('ba-cod-quantity');
  var currentQuantity = parseInt(quantityInput.value, 10);
  var maxQuantity = parseInt(quantityInput.getAttribute('max'), 10);

  if (currentQuantity < maxQuantity) {
    quantityInput.value = currentQuantity + 1;
  }
}

function decrementQuantity() {
  var quantityInput = document.getElementById('ba-cod-quantity');
  var currentQuantity = parseInt(quantityInput.value, 10);
  var minQuantity = parseInt(quantityInput.getAttribute('min'), 10);

  if (currentQuantity > minQuantity) {
    quantityInput.value = currentQuantity - 1;
  }
}
