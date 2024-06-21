// @ts-nocheck

// code moved from cod embed

let currentUrl1 = window.location.href;
let lang = 'hi';
if (currentUrl1.indexOf('.com/en') > -1) {
  lang = 'en';
} else if (currentUrl1.indexOf('.com/mr') > -1) {
  lang = 'mr';
} else {
  lang = 'hi';
}
let selectedBundles = [];
let serviceablePincodeFlag = true;
let blacklistedPincodes = [];
// let whitelistedPincodes = [];

let highRiskProducts = [];
let highRiskProductFlag = false;

let otpVerifyProducts = [];
let otpVerifyFlag = false;

let baCodOrderUrl = '';
let baCodOrderNumber = '';

let baRazorpayOrderId = '';
let baRazorpayPaymentId = '';
let baRazorpayReferenceId = '';

let bharatxTransactionId = '';

let baRecoveryOrder = true;
let baRecoveryApplied = false;

let baOnlinePaySuccess = false;

// let productHeader = 'प्रोडक्ट';
let productHeader = 'अपना आर्डर दें';
let discountHeader = 'डिस्काउंट कूपन';
let applyCouponBtn = 'अप्लाई करें';
let deliveryAddressHeader = 'अपना डिलीवरी पता भरें';
let priceDetailsHeader = 'ऑर्डर की जानकारी';

let nameLabel = 'आपका पूरा नाम'
let mobileLabel = '10 अंकीय फोन नंबर डालें';
let pincodeLabel = 'पिनकोड';
let stateLabel = 'राज्य';
let districtLabel = 'ज़िला';
let talukaLabel = 'तहसील';
let villageLabel = 'Village';
let addressLabel = 'मकान नंबर, रोड, कॉलोनी';
let landmarkLabel = 'लैंडमार्क (उदाहरण: गोपाल मंदिर के पास)';
let postOfficeLabel = 'डाकघर (वैकल्पिक)';

let nameRequiredLabel = 'नाम';
let mobileRequiredLabel = 'मोबाइल नंबर';
let pincodeRequiredLabel = 'पिनकोड';
let pincodeServiceableRequiredLabel = 'इस पिनकोड पर COD उपलब्ध नहीं है';
let pincodeNotWhitelistRequiredLabel = 'pincode पर डिलीवरी अनुपलब्ध';
let stateRequiredLabel = 'राज्य';
let districtRequiredLabel = 'ज़िला';
let talukaRequiredLabel = 'तहसील';
let villageRequiredLabel = 'गावं';
let addressRequiredLabel = 'मकान नंबर, रोड, कॉलोनी';
let landmarkRequiredLabel = 'लैंडमार्क';

let priceDetailsDiscountLabel = 'कोड से डिस्काउंट';
let priceDetailsFreeDeliveryLabel = 'फ्री डिलीवरी';
let priceDetailsFreeDeliveryValueLabel = '₹0 (फ्री)';
let priceDetailsTotalAmountLabel = 'कुल राशि';

let cashOnDeliveryLabel = 'कैश ऑन डिलीवरी';
let placeOrderLabel = 'कॅश ऑन डिलीवरी (COD)';
let placeOnlinePaymentOrderLabel = 'Online पेमेंट से खरीदें';

let removeIconLabel = 'हटाए';
let addIconLabel = 'जोड़ें +';
let addedBtnLabel = 'जोड़ा गया ✓';

let couponSavedLabel = 'आपकी बचत हुई';
let couponWithDiscountLabel = 'डिस्काउंट कूपन से';
let couponAppliedLabel = 'लागू हुआ!';

let smileyModalDiscountLabel = 'डिस्काउंट';
let smileyModalDiscountAppliedLabel = 'कूपन लागू हुआ';

let confirmModalTextLabel = 'क्या आप यह ऑर्डर करना चाहते हैं? डिलीवरी पर आपको ₹### का भुगतान करना होगा।';
let confirmModalYesLabel = 'हाँ';
let confirmModalNoLabel = 'नहीं';

let mainPriceAmountLabel = 'राशि';

let baSpecialDiscount = '🌱 स्पेशल डिस्काउंट 🌱';
let baSpecialOffer = 'सीमित समय के लिए एक ख़ास ऑफर';
let baRecoveryOrderNow = 'अभी आर्डर करें और 2% डिस्काउंट पाएं';
let baRecoveryOrderBtnLabel = 'स्पेशल डिस्काउंट पर आर्डर करें';
let baRecoveryCancelBtnLabel = 'मुझे डिस्काउंट नहीं चाहिए';

let baOnlinePaymentLabel = 'UPI से पेमेंट करें';
let baOnlinePaymentDiscountLabel = 'डिस्काउंट पाएं';

let baOnlinePaymentEmiLabel = 'EMI से पेमेंट करें';
let baOnlinePaymentDiscountEmiLabel = '(ब्याज-मुक्त किश्तें)';

let baCodOtpHeaderLabel = 'कैश ऑन डिलीवरी पर भुगतान करें: ₹###';
let baCodOtpInstructionsLabel = 'ऑर्डर कंफर्म करने के लिए कृपया OTP दर्ज करें +91-### पर भेजा गया';
let baCodOtpEnterLabel = 'OTP दर्ज करें';
let baCodOtpResendLabel = 'पुन: OTP भेजें';
let baCodOtpSubmitLabel = 'OTP सबमिट करके ऑर्डर प्लेस करें';
let baCodOtpCancelLabel = 'ऑर्डर कैंसिल करें';
let baCodOtpFooterLabel = '*इस ऑर्डर की पुष्टि के लिए भारतअ‍ॅग्री से कॉल किया जाएगा।';

let baCheckoutType = 'cod';

if (lang === 'en') {
  // productHeader = 'Product';
  productHeader = 'Place your order';
  discountHeader = 'Discount Coupon';
  applyCouponBtn = 'Apply';
  deliveryAddressHeader = 'Fill your delivery address';
  priceDetailsHeader = 'Price Details';

  nameLabel = 'Your Full Name';
  mobileLabel = 'Enter 10-digit phone number';
  pincodeLabel = 'Pincode';
  stateLabel = 'State';
  districtLabel = 'District';
  talukaLabel = 'Taluka';
  villageLabel = 'Village';
  addressLabel = 'House Number, Road, Colony';
  landmarkLabel = 'Landmark (Example: Near Gopal Mandir)';
  postOfficeLabel = 'Post Office (Optional)';

  nameRequiredLabel = 'Enter Name';
  mobileRequiredLabel = 'Enter Mobile Number';
  pincodeRequiredLabel = 'Enter Pincode';
  pincodeServiceableRequiredLabel = 'COD is not available on this pincode';
  pincodeNotWhitelistRequiredLabel = 'Not serviceable at pincode';
  stateRequiredLabel = 'Enter State';
  districtRequiredLabel = 'Enter District';
  talukaRequiredLabel = 'Enter Taluka';
  villageRequiredLabel = 'Enter Village';
  addressRequiredLabel = 'Enter Address';
  landmarkRequiredLabel = 'Enter Landmark';

  priceDetailsDiscountLabel = 'Coupon Code Discount';
  priceDetailsFreeDeliveryLabel = 'FREE Delivery';
  priceDetailsFreeDeliveryValueLabel = '₹0 (FREE)'
  priceDetailsTotalAmountLabel = 'Total Amount';

  cashOnDeliveryLabel = 'Cash On Delivery';
  placeOrderLabel = 'Cash on Delivery (COD)';
  placeOnlinePaymentOrderLabel = 'Online payment';

  removeIconLabel = 'Remove';
  addIconLabel = 'Add +';
  addedBtnLabel = 'Added ✓';

  couponSavedLabel = 'Saved';
  couponWithDiscountLabel = 'with discount Coupon';
  couponAppliedLabel = 'Applied!';

  smileyModalDiscountLabel = 'Discount';
  smileyModalDiscountAppliedLabel = 'Coupon Applied';

  confirmModalTextLabel = 'क्या आप यह ऑर्डर करना चाहते हैं? डिलीवरी पर आपको ₹### का भुगतान करना होगा।';
  confirmModalYesLabel = 'Yes';
  confirmModalNoLabel = 'No';
  mainPriceAmountLabel = 'Amount';

  baSpecialDiscount = '🌱 Special Discount 🌱';
  baSpecialOffer = 'Special offer for a limited time';
  baRecoveryOrderNow = 'Order now and get 2% discount';
  baRecoveryOrderBtnLabel = 'Order with a special discount';
  baRecoveryCancelBtnLabel = "I don't want a discount";

  baOnlinePaymentLabel = 'Pay via UPI ';
  baOnlinePaymentDiscountLabel = 'Discount';

  baOnlinePaymentEmiLabel = 'Pay via EMI';
  baOnlinePaymentDiscountEmiLabel = '(No Interest EMI)';

  baCodOtpHeaderLabel = 'Pay Cash on Delivery : ₹###';
  baCodOtpEnterLabel = 'Enter OTP';
  baCodOtpInstructionsLabel = 'To Confirm this order please enter the OTP sent to +91-###';
  baCodOtpResendLabel = 'Resend OTP';
  baCodOtpSubmitLabel = 'Submit OTP & Place Order';
  baCodOtpCancelLabel = 'Cancel Order';
  baCodOtpFooterLabel = '*You will receive a call from BharatAgri to confirm this order.';
}

if (lang === 'mr') {
  // productHeader = 'प्रॉडक्ट';
  productHeader = 'आपला ऑर्डर करा';
  discountHeader = 'डिस्काउंट कूपन';
  applyCouponBtn = 'लागू करा';
  deliveryAddressHeader = 'डिलिव्हरी पत्ता';
  priceDetailsHeader = 'ऑर्डरची माहिती';

  nameLabel = 'तुमचे पुर्ण नाव';
  mobileLabel = '10 अंकी फोन नंबर प्रविष्ट करा';
  pincodeLabel = 'पिनकोड';
  stateLabel = 'राज्य';
  districtLabel = 'ज़िला';
  talukaLabel = 'तहसील';
  villageLabel = 'Village';
  addressLabel = 'घर क्रमांक, रस्ता, कॉलनी';
  landmarkLabel = 'लैंडमार्क (उदाहरण: गोपाळ मंदिराजवळ)';
  postOfficeLabel = 'पोस्ट ऑफिस (पर्यायी)';

  nameRequiredLabel = 'नाव';
  mobileRequiredLabel = 'मोबाइल नंबर';
  pincodeRequiredLabel = 'पिनकोड';
  pincodeServiceableRequiredLabel = 'या पिनकोडवर COD उपलब्ध नाही';
  pincodeNotWhitelistRequiredLabel = 'डिलिव्हरी pincode वर उपलब्ध नाही';
  stateRequiredLabel = 'राज्य';
  districtRequiredLabel = 'ज़िला';
  talukaRequiredLabel = 'तहसील';
  villageRequiredLabel = 'गाव';
  addressRequiredLabel = 'घर क्रमांक, रस्ता, कॉलनी';
  landmarkRequiredLabel = 'जवळची खूण';

  priceDetailsDiscountLabel = 'कूपन कोड सवलत';
  priceDetailsFreeDeliveryLabel = 'फ्री डिलीवरी';
  priceDetailsFreeDeliveryValueLabel = '₹0 (फ्री)';
  priceDetailsTotalAmountLabel = 'एकूण रक्कम';

  cashOnDeliveryLabel = 'कैश ऑन डिलिव्हरी';
  placeOrderLabel = 'कॅश ऑन डिलिव्हरी (COD)';
  placeOnlinePaymentOrderLabel = 'Online पेमेंट से खरीदें';

  removeIconLabel = 'हटाए';
  addIconLabel = 'जोड़ें +';
  addedBtnLabel = 'जोड़ा गया ✓';

  couponSavedLabel = 'तुमची बचत झाली';
  couponWithDiscountLabel = 'अधिक सूट मिळाली';
  couponAppliedLabel = 'लागू झाला!';

  smileyModalDiscountLabel = 'डिस्काउंट';
  smileyModalDiscountAppliedLabel = 'कूपन लागू हुआ';

  confirmModalTextLabel = 'क्या आप यह ऑर्डर करना चाहते हैं? डिलीवरी पर आपको ₹### का भुगतान करना होगा।';
  confirmModalYesLabel = 'होय';
  confirmModalNoLabel = 'नाही';
  mainPriceAmountLabel = 'रक्कम';

  baSpecialDiscount = '🌱 स्पेशल डिस्काउंट 🌱';
  baSpecialOffer = 'सीमित समय के लिए एक ख़ास ऑफर';
  baRecoveryOrderNow = 'अभी आर्डर करें और 2% डिस्काउंट पाएं';
  baRecoveryOrderBtnLabel = 'स्पेशल डिस्काउंट पर आर्डर करें';
  baRecoveryCancelBtnLabel = 'मुझे डिस्काउंट नहीं चाहिए';

  baOnlinePaymentLabel = 'UPI से पेमेंट करें';
  baOnlinePaymentDiscountLabel = 'चा डिस्काउंट';

  baOnlinePaymentEmiLabel = 'EMI से पेमेंट करें';
  baOnlinePaymentDiscountEmiLabel = '(ब्याज-मुक्त किश्तें)';

  baCodOtpHeaderLabel = 'कैश ऑन डिलीवरी पर भुगतान करें: ₹###';
  baCodOtpInstructionsLabel = 'ऑर्डर कंफर्म करने के लिए कृपया OTP दर्ज करें +91-### पर भेजा गया';
  baCodOtpEnterLabel = 'OTP दर्ज करें';
  baCodOtpResendLabel = 'पुन: OTP भेजें';
  baCodOtpSubmitLabel = 'OTP सबमिट करके ऑर्डर प्लेस करें';
  baCodOtpCancelLabel = 'ऑर्डर कैंसिल करें';
  baCodOtpFooterLabel = '*इस ऑर्डर की पुष्टि के लिए भारतअ‍ॅग्री से कॉल किया जाएगा।';
}
document.getElementById('product-header-id').innerHTML = productHeader;
document.getElementById('discount-header-id').innerHTML = discountHeader;
document.getElementById('delivery-address-header-id').innerHTML = deliveryAddressHeader;
document.getElementById('ba-cod-price-header-id').innerHTML = priceDetailsHeader;

document.getElementById('ba-cod-footer-place-order').innerHTML = placeOrderLabel;
document.getElementById('ba-cod-footer-delivery-label').innerHTML = cashOnDeliveryLabel;

document.getElementById('farmerName').placeholder = nameLabel;
document.getElementById('farmerNameRequired').innerHTML = nameRequiredLabel;

document.getElementById('farmerMobile').placeholder = mobileLabel;
document.getElementById('farmerMobileRequired').innerHTML = mobileRequiredLabel;

document.getElementById('baCodPincode').placeholder = pincodeLabel;
document.getElementById('baCodPincodeRequired').innerHTML = pincodeRequiredLabel;
document.getElementById('baCodPincodeServiceableRequired').innerHTML = pincodeServiceableRequiredLabel;
document.getElementById('baCodPincodeNotWhitelistRequired').innerHTML = pincodeNotWhitelistRequiredLabel;

document.getElementById('talukaName').placeholder = talukaRequiredLabel;
document.getElementById('talukaNameRequired').innerHTML = talukaRequiredLabel;

document.getElementById('villageName').placeholder = villageLabel;
document.getElementById('villageNameRequired').innerHTML = villageRequiredLabel;

document.getElementById('baAddress').placeholder = addressLabel;
document.getElementById('baAddressRequired').innerHTML = addressRequiredLabel;

document.getElementById('baLandmark').placeholder = landmarkLabel;
document.getElementById('baLandmarkRequired').innerHTML = landmarkRequiredLabel;

document.getElementById('baPostOffice').placeholder = postOfficeLabel;

document.getElementById('baCodDistrictSelect').placeholder = districtRequiredLabel;
document.getElementById('baCodDistrictSelectRequired').innerHTML = districtRequiredLabel;

document.getElementById('baCodStateSelectRequired').innerHTML = stateRequiredLabel;

document.getElementById('ba-cod-confirm-txt-div').innerHTML = confirmModalTextLabel;
document.getElementById('ba-cod-confirm-yes-btn-label').innerHTML = confirmModalYesLabel;
document.getElementById('ba-cod-confirm-no-btn-label').innerHTML = confirmModalNoLabel;

document.getElementById('baSpecialDiscount').innerHTML = baSpecialDiscount;
document.getElementById('baSpecialOffer').innerHTML = baSpecialOffer;
document.getElementById('baRecoveryOrderNow').innerHTML = baRecoveryOrderNow;
document.getElementById('baRecoveryOrderBtnLabel').innerHTML = baRecoveryOrderBtnLabel;
document.getElementById('baRecoveryCancelBtnLabel').innerHTML = baRecoveryCancelBtnLabel;

document.getElementById('baCodFooterOnlineLabel').innerHTML = baOnlinePaymentLabel;
document.getElementById('baCodFooterOnlineEmiLabel').innerHTML = baOnlinePaymentEmiLabel;

document.getElementById('ba-cod-otp-header').innerHTML = baCodOtpHeaderLabel;
document.getElementById('ba-cod-otp-instructions').innerHTML = baCodOtpInstructionsLabel;
document.getElementById('baCodEnterOTP').innerHTML = baCodOtpEnterLabel;
document.getElementById('baCodResendOtpBtn').innerHTML = baCodOtpResendLabel;
document.getElementById('baCodOtpSubmitBtn').innerHTML = baCodOtpSubmitLabel;
document.getElementById('baCodOtpCancelBtn').innerHTML = baCodOtpCancelLabel;
document.getElementById('baCodOtpFooter').innerHTML = baCodOtpFooterLabel;


document.getElementById('baCreditBanner').src = `https://shopify-krushidukan.leanagri.com/ba-cod-form-images/ba_credit_${lang}.webp`;




function setBaItems(type = 'cod') {
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;

  baCheckoutType = type;

  baCodOrderUrl = '';
  baCodOrderNumber = '';
  baOnlinePaySuccess = false;
  baRazorpayOrderId = '';
  baRazorpayPaymentId = '';
  baRazorpayReferenceId = '';
  bharatxTransactionId = '';

  let quantityFb = document.getElementsByClassName('quantity__input')[0].value;
  sendBaFbEvents('AddToCart', {
    currency: "INR",
    value: Number(items[0].final_line_price) / 100,
    'num_items': Number(quantityFb)
  });
  sendBaFbEvents('InitiateCheckout', {
    currency: "INR",
    value: Number(items[0].final_line_price) / 100,
    'num_items': Number(quantityFb)
  });

  document.getElementById('product-count-id').innerHTML = items.length;

  for (let i = 0; i < items.length; i++) {
    const parentContainer = document.getElementById('product-info-div');
    replaceChildrenAlternative2(parentContainer);

    document.getElementById('ba-product-info-div-loader').style.display = 'none';

    let productMainDiv = document.createElement('div');
    document.getElementById('product-info-div').appendChild(productMainDiv);

    let productRowDiv = document.createElement('div');
    productRowDiv.className = "row align-items-center";
    productMainDiv.appendChild(productRowDiv);

    let productImageColDiv = document.createElement('div');
    productImageColDiv.className = "col-3 pr-0";
    productImageColDiv.style.position = "relative";
    productRowDiv.appendChild(productImageColDiv);

    let productImage = document.createElement('img');
    productImage.className = "ba-cod-product-img";
    productImage.src = items[i].image;
    productImage.alt = 'product image';
    productImage.width = 60;
    productImage.height = 60;
    // productImage.loading = "lazy";
    productImageColDiv.appendChild(productImage);

    let productImageQuantity = document.createElement('div');
    productImageQuantity.className = "ba-cod-product-img-quantity";
    productImageQuantity.id = "ba-cod-main-product-quantity" + i;
    productImageQuantity.innerHTML = document.getElementsByClassName('quantity__input')[0].value;
    productImageColDiv.appendChild(productImageQuantity);

    let productTitleColDiv = document.createElement('div');
    productTitleColDiv.className = "col-6 pr-0 pl-0";
    productRowDiv.appendChild(productTitleColDiv);

    let productTitle = document.createElement('div');
    productTitle.className = "ba-cod-product-title";
    let productTitleValue = (items[i] && items[i].product_title) ? items[i].product_title : '';
    productTitle.innerHTML = productTitleValue.length > 50 ? productTitleValue.slice(0, 50) + '..' : productTitleValue;

    productTitleColDiv.appendChild(productTitle);

    let productVariantTitle = document.createElement('div');
    productVariantTitle.className = "ba-cod-variant-info";
    let variantTitleValue = (items[i] && items[i].variant_title) ? items[i].variant_title : '';
    productVariantTitle.innerHTML = variantTitleValue.length > 25 ? variantTitleValue.slice(0, 25) + '..' : variantTitleValue;
    productTitleColDiv.appendChild(productVariantTitle);

    let productPriceColDiv = document.createElement('div');
    productPriceColDiv.className = "col-3 pl-0";
    productPriceColDiv.style.paddingRight = "16px";
    productRowDiv.appendChild(productPriceColDiv);

    let productPriceDiv = document.createElement('div');
    productPriceColDiv.appendChild(productPriceDiv);

    let productSellingPrice = document.createElement('span');
    productSellingPrice.className = "ba-cod-selling-price";
    productSellingPrice.id = "ba-cod-main-product-price" + i;
    productSellingPrice.innerHTML = (items[i] && items[i].final_line_price) ? `₹ ${Number(items[i].final_line_price) / 100}` : '₹ 0';

    productPriceDiv.appendChild(productSellingPrice);

    let productQuantityMainDiv = document.createElement('div');
    productQuantityMainDiv.className = "d-flex justify-content-start";
    productQuantityMainDiv.style.marginLeft = "78px";
    document.getElementById('product-info-div').appendChild(productQuantityMainDiv);

    let productQuantityDiv = document.createElement('div');
    productQuantityDiv.className = "ba-cod-quantity-div";
    productQuantityMainDiv.appendChild(productQuantityDiv);

    let productQuantityMinus = document.createElement('span');
    productQuantityMinus.className = "ba-cod-quantity-symbols ba-cod-minus-symbol";
    productQuantityMinus.innerHTML = '➖';
    productQuantityMinus.addEventListener("click", function() {
      decrementQuantity();
    });
    productQuantityDiv.appendChild(productQuantityMinus);

    let productQuantityInput = document.createElement('input');
    productQuantityInput.className = "ba-cod-quantity-number";
    productQuantityInput.type = "number";
    productQuantityInput.id = "ba-cod-quantity";
    productQuantityInput.value = document.getElementsByClassName('quantity__input')[0].value;
    productQuantityInput.min = "1";
    productQuantityInput.max = "10";
    productQuantityInput.disabled = true;
    productQuantityDiv.appendChild(productQuantityInput);

    let productQuantityPlus = document.createElement('span');
    productQuantityPlus.className = "ba-cod-quantity-symbols ba-cod-plus-symbol";
    productQuantityPlus.innerHTML = '➕';
    productQuantityPlus.addEventListener("click", function() {
      incrementQuantity();
    });
    productQuantityDiv.appendChild(productQuantityPlus);
  }

  loadBaProductBundles();
  resetPlaceOrderButton();
  resetCodFormFields();
  resetCodFooter();
  resetCodConfirmationModal();
  checkCodEligibility(baCheckoutType);
  populatePriceDetailsCard();
  loadCouponCodes(true);
  checkFreeDelivery();
  sendBaCodGEvents('ba_cod_order_begin_checkout', {
    'productId': items[0].id
  });
  sendBaCodGAConversionEvents('add_to_cart');
  sendBaCodGAConversionEvents('begin_checkout');
  document.getElementById('baCodTriggerRecovery').disabled = false;
  if (baRecoveryApplied) {
    applyBaRecoveryDiscount(false);
  }
  // if (!blacklistedPincodes || blacklistedPincodes.length === 0 || !whitelistedPincodes || whitelistedPincodes.length === 0) {
  //   loadBlackListedPincodes();
  // }
  if (!blacklistedPincodes || blacklistedPincodes.length === 0) {
    loadBlackListedPincodes();
  }

  // checking high risk and otp verify variant
  checkHighRiskAndOTPVerifyOrder();

  // auto populate value
  autoFillUserDetails();
}

function clearCartEmbed() {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`/cart/clear.js`, requestOptions)
    .then(response => {
      if (response.status === 200) {
        // response.json().then(result => {
        // });
        addCartDetailsEmbed();
      } else {
        console.log('Unable to clear cart');
      }
    }).catch(error => {
    console.log('error: ', error);
  });
}

function addCartDetailsEmbed() {
  let items = JSON.parse(localStorage.getItem('baCodCartStorage'));

  if (items && items.length > 0) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'items': items
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        let baBubbleIcon = document.getElementById('ba-cart-icon-value');
        if (baBubbleIcon) {
          baBubbleIcon.innerHTML = (res && res.items) ? res.items.length : 0;
        }
      });
  }

  // resetting cart storage
  localStorage.removeItem('baCodCartStorage');
  localStorage.removeItem('baUpdateCartResponse');

  // resetting the main product cart values
  const parentContainer = document.getElementById('product-info-div');
  replaceChildrenAlternative2(parentContainer);
  document.getElementById('ba-product-info-div-loader').style.display = 'block';

  // resetting price details card
  document.getElementById('ba-cod-price-details-div').style.display = 'none';

  // resetting discount div card
  const discountDiv = document.getElementById('ba-cod-discount-div');
  const discountActiveDiv = document.getElementById('ba-active-coupon');
  replaceChildrenAlternative2(discountDiv);
  discountDiv.appendChild(discountActiveDiv);
  // document.getElementById('ba-discount-coupon-div-loader').style.display = 'block';

  // resetting bundles values
  const bundlesDiv = document.getElementById('ba-cod-bundle-cards-div');
  replaceChildrenAlternative2(bundlesDiv);

  // resetting coupon discount apply loader
  document.getElementById('ba-cod-discount-loader').style.display = 'none';

  // reset coupon code
  localStorage.removeItem('BA_COD_Coupon_code');
  previousCouponCode = '';
  let resetActiveCouponCardEl = document.getElementById('ba-active-coupon');
  if (resetActiveCouponCardEl) {
    resetActiveCouponCardEl.style.display = 'none';
  }

  document.getElementById('product-count-id').innerHTML = '';

  // reset close button to disabled initially
  document.getElementById('baCodTriggerRecovery').disabled = true;

  resetCodFooter();
  resetCodFormFields();
  resetPlaceOrderButton();

  selectedBundles = [];
  serviceablePincodeFlag = true;
}

function loadBaProductBundles() {
  selectedBundles = [];

  // let bundleVariant = 44093057958131;
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;
  let bundleVariant = items[0].id;

  let data = getBaCodProductData();
  if (data.variant_bundles && data.variant_bundles[bundleVariant] && data.variant_bundles[bundleVariant].length > 0) {
    setBaProductBundles(data.variant_bundles[bundleVariant]);
  } else {
    document.getElementById('ba-cod-bundle-div').style.display = 'none';
  }
}

function setBaProductBundles(bundles) {
  const bundlesDiv = document.getElementById('ba-cod-bundle-cards-div');
  replaceChildrenAlternative2(bundlesDiv);

  if (!bundles || bundles.length === 0) {
    bundles = [];
    document.getElementById('ba-cod-bundle-div').style.display = 'none';
  } else {
    bundles = bundles.sort((a, b) => b.priority_index - a.priority_index);
    document.getElementById('ba-cod-bundle-div').style.display = 'block';
  }


  let bundleImagePlaceholder = 'https://shopify-krushidukan.leanagri.com/ba-cod-form-images/product-img-placeholder.png';

  for (let i = 0; i < bundles.length; i++) {
    const bundle = bundles[i] && bundles[i].secondary_product && bundles[i].secondary_product.product;
    let bundleProductTitle = bundle && bundle.title;
    let bundleProductVariantTitle = bundle && bundle.variant_title;
    let bundleProductPrice = bundle && bundle.selling_price;
    let bundleProductDiscountPrice = bundles[i] && bundles[i].price;
    let bundleDiscountPercent;
    if (bundleProductPrice !== undefined && bundleProductDiscountPrice !== undefined) {
      bundleDiscountPercent = Math.floor(((bundleProductPrice - bundleProductDiscountPrice) / bundleProductPrice) * 100);
    }
    let bundleDiscountedAmount;
    if (bundleProductPrice !== undefined && bundleProductDiscountPrice !== undefined) {
      bundleDiscountedAmount = bundleProductPrice - bundleProductDiscountPrice;
    }

    let bundleProductImage = bundleImagePlaceholder;
    if (bundle && bundle.images && bundle.images[0] && bundle.images[0].media_url) {
      bundleProductImage = bundle.images[0].media_url;
    }

    let bundleCardColDiv = document.createElement('div');
    bundleCardColDiv.id = 'baBundleCard' + bundles[i].id;
    if (bundles.length === 1) {
      bundleCardColDiv.className = 'p-3 ba-cod-bundle-card ba-cod-bundle-card-full-width mr-3';
    }
    if (bundles.length > 1) {
      bundleCardColDiv.className = 'p-3 ba-cod-bundle-card ba-cod-bundle-card-half-width mr-3';
    }
    bundlesDiv.appendChild(bundleCardColDiv);

    let bundleCardImagePriceDiv = document.createElement('div');
    bundleCardImagePriceDiv.className = 'row align-items-center mb-2';
    bundleCardColDiv.appendChild(bundleCardImagePriceDiv);

    let bundleCardSelectDiv = document.createElement('div');
    bundleCardSelectDiv.className = 'col-auto pr-1';
    bundleCardImagePriceDiv.appendChild(bundleCardSelectDiv);

    let bundleCardSelectInput = document.createElement('input');
    bundleCardSelectInput.className = 'ba-cod-bundle-select-box';
    bundleCardSelectInput.type = 'checkbox';
    bundleCardSelectInput.id = 'baBundleCardSelect' + i;
    bundleCardSelectDiv.appendChild(bundleCardSelectInput);

    let bundleCardPriceDiv = document.createElement('div');
    bundleCardPriceDiv.className = 'col-8 pl-0';
    bundleCardImagePriceDiv.appendChild(bundleCardPriceDiv);

    let baBundleTitle = '';

    if (bundles[i] && bundles[i].title) {
      baBundleTitle = bundles[i].title;
    } else {
      let title1 = bundleProductTitle ? bundleProductTitle : '';
      let title2 = bundleProductVariantTitle ? bundleProductVariantTitle : '';
      let title3Price = bundleProductDiscountPrice ? `₹ ${bundleProductDiscountPrice}` : '0';
      baBundleTitle = title1 + ' ' + title2 + ' - ' + title3Price;
    }

    let bundleCardProductTitle = document.createElement('div');
    bundleCardProductTitle.className = "ba-cod-bundle-title";
    bundleCardProductTitle.innerHTML = baBundleTitle;

    if (bundleDiscountPercent > 0 && bundles[i] && !bundles[i].title) {
      let bundleCardTitleDiscountPercent = document.createElement('span');
      bundleCardTitleDiscountPercent.className = "ba-cod-bundle-discount ml-2"
      bundleCardTitleDiscountPercent.innerHTML = `(${bundleDiscountPercent}% off)`;
      bundleCardProductTitle.appendChild(bundleCardTitleDiscountPercent);
    }
    bundleCardPriceDiv.appendChild(bundleCardProductTitle);

    let bundleCardProductDescription = document.createElement('div');
    bundleCardProductDescription.className = 'ba-cod-bundle-description';
    bundleCardProductDescription.innerHTML = bundles[i] && bundles[i].desc ? bundles[i].desc : '';
    bundleCardPriceDiv.appendChild(bundleCardProductDescription);

    let bundleCardImageDiv = document.createElement('div');
    bundleCardImageDiv.className = 'col-2 pl-0';
    bundleCardImagePriceDiv.appendChild(bundleCardImageDiv);

    let bundleCardImage = document.createElement('img');
    bundleCardImage.alt = 'product image';
    bundleCardImage.src = bundleProductImage;
    bundleCardImage.style.borderRadius = '6px';
    bundleCardImage.width = 60;
    bundleCardImage.height = 60;
    bundleCardImageDiv.appendChild(bundleCardImage);

    bundleCardColDiv.addEventListener("click", function() {
      let bundleSelectBtn = document.getElementById(`baBundleCardSelect${i}`);
      if (bundleSelectBtn.checked) {
        bundleSelectBtn.checked = false;
        onBaProductBundleRemoveClick(bundles[i].id)
      } else {
        bundleSelectBtn.checked = true;
        onBaProductBundleClick(bundles[i], i);
      }
    });

    let bundleSelectBtnEvent = document.getElementById(`baBundleCardSelect${i}`);
    bundleSelectBtnEvent.addEventListener("click", function() {
      bundleSelectBtnEvent.checked = !bundleSelectBtnEvent.checked;
    });

  }
}

function onBaProductBundleClick(product, productIndex) {
  let bundleProductPush = JSON.parse(JSON.stringify(product));

  sendBaCodGEvents('BA_bundle_cart_added', {
    'from_frag': currentUrl1,
    'product_title': (product && product.secondary_product && product.secondary_product.product) ?
      product.secondary_product.product.title : undefined,
    'productId': (product && product.secondary_product) ?
      product.secondary_product.shopify_id : undefined,
    'variantId': (product && product.secondary_product) ?
      product.secondary_product.variant_id : undefined,
    'selling_price': product ? product.price : undefined,
  });

  bundleProductPush['selected'] = true;

  selectedBundles.push(bundleProductPush);
  let productCountHeader = Number(document.getElementById('product-count-id').innerHTML);
  document.getElementById('product-count-id').innerHTML = String(productCountHeader + 1);
  let selectedBundlesIndex = selectedBundles.length - 1;

  let bundleProductTitle = (product && product.secondary_product && product.secondary_product.product) ?
    product.secondary_product.product.title :
    undefined;
  let bundleProductDiscountPrice = product ? product.price : undefined;

  // Adding the product to the price card
  let bundlePriceItemsMainDiv = document.getElementById('ba-cod-price-details-bundle-items');
  let priceItemsRow = document.createElement('div');
  priceItemsRow.className = 'row mt-2 pb-2 align-items-center ba-cod-price-details-items';
  priceItemsRow.id = 'bundlePriceRow' + selectedBundlesIndex;
  bundlePriceItemsMainDiv.appendChild(priceItemsRow);

  let priceItemsCol1 = document.createElement('div');
  priceItemsCol1.className = 'col-7 ba-cod-price-details-product-title';
  priceItemsCol1.innerHTML = (bundleProductTitle && bundleProductTitle.length > 34) ?
    bundleProductTitle.slice(0, 34) + '..' :
    (bundleProductTitle !== null && bundleProductTitle !== undefined) ? bundleProductTitle : '';
  priceItemsRow.appendChild(priceItemsCol1);

  let priceItemsCol2 = document.createElement('div');
  priceItemsCol2.className = 'col-5 text-right pl-0 ba-cod-price-details-product-price';
  priceItemsCol2.innerHTML = bundleProductDiscountPrice ? `₹ ${bundleProductDiscountPrice}` : '0';
  priceItemsRow.appendChild(priceItemsCol2);

  // Updating price details card
  let bundleOrderTotalValue = document.getElementById('ba-price-details-total-value').innerHTML;
  bundleOrderTotalValue = bundleOrderTotalValue && bundleOrderTotalValue.replace('₹ ', '');

  bundleOrderTotalValue = Number(bundleOrderTotalValue) + bundleProductDiscountPrice;
  bundleOrderTotalValue = Number(bundleOrderTotalValue).toFixed(2);

  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${bundleOrderTotalValue}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${bundleOrderTotalValue}`;
  updateOnlinePaymentPrice(bundleOrderTotalValue);
}

function onBaProductBundleRemoveClick(bundleId) {
  let index;
  for (let i = 0; i < selectedBundles.length; i++) {
    if (selectedBundles[i].id === bundleId) {
      index = i;
    }
  }
  console.log(bundleId, selectedBundles[index]);
  sendBaCodGEvents('BA_bundle_cart_removal', {
    'from_frag': currentUrl1,
    'product_title': (selectedBundles[index] && selectedBundles[index].secondary_product && selectedBundles[index].secondary_product.product) ?
      selectedBundles[index].secondary_product.product.title : undefined,
    'productId': (selectedBundles[index] && selectedBundles[index].secondary_product) ?
      selectedBundles[index].secondary_product.shopify_id : undefined,
    'variantId': (selectedBundles[index] && selectedBundles[index].secondary_product) ?
      selectedBundles[index].secondary_product.variant_id : undefined,
    'selling_price': selectedBundles[index].price,
  });
  selectedBundles[index].selected = false;

  let productCountHeader = Number(document.getElementById('product-count-id').innerHTML);
  document.getElementById('product-count-id').innerHTML = String(productCountHeader - 1);
  document.getElementById(`bundlePriceRow${index}`).style.display = 'none';

  // Updating price details card
  let bundleOrderTotalValue = document.getElementById('ba-price-details-total-value').innerHTML;
  bundleOrderTotalValue = bundleOrderTotalValue && bundleOrderTotalValue.replace('₹ ', '');

  bundleOrderTotalValue = Number(bundleOrderTotalValue) - selectedBundles[index].price;
  bundleOrderTotalValue = Number(bundleOrderTotalValue).toFixed(2);
  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${bundleOrderTotalValue}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${bundleOrderTotalValue}`;
  updateOnlinePaymentPrice(bundleOrderTotalValue);
}

function getBundlesTotalPrice() {
  let bundleCurrentPrice = 0;
  if (selectedBundles) {
    for (let i = 0; i < selectedBundles.length; i++) {
      if (selectedBundles[i].enabled && selectedBundles[i].selected) {
        bundleCurrentPrice = bundleCurrentPrice + selectedBundles[i].price;
      }
    }
  }
  return bundleCurrentPrice;
}

function getBundlesActualTotalPriceWithoutDiscount() {
  let bundleFullPrice = 0;
  if (selectedBundles) {
    for (let i = 0; i < selectedBundles.length; i++) {
      if (selectedBundles[i].enabled && selectedBundles[i].selected) {
        bundleFullPrice = bundleFullPrice + selectedBundles[i].secondary_product.product.selling_price;
      }
    }
  }
  return bundleFullPrice;
}


function loadCouponCodes(showPopup) {
  let couponResults = JSON.parse(localStorage.getItem('baCodCoupons')) || [];

  if (couponResults.length > 0) {
    setDiscountCoupons(couponResults, showPopup);
  } else {
    document.getElementById('ba-discount-coupon-div').style.display = 'none';
  }
}

function setDiscountCoupons(discounts, showPopup) {
  const discountDiv = document.getElementById('ba-cod-discount-div');
  const discountActiveDiv = document.getElementById('ba-active-coupon');

  replaceChildrenAlternative2(discountDiv);
  discountDiv.appendChild(discountActiveDiv);
  document.getElementById('ba-discount-coupon-div-loader').style.display = 'none';

  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let discountCouponsCartItemTotalValue = Number(baUpdateCart.total_price / 100);

  let finalCodes = [];

  let couponVariant = getBaCartMainItemDetails();
  for (let i = 0; i < discounts.length; i++) {
    let excludedProducts = '';
    if (discounts[i].excluded_variant_ids) {
      excludedProducts = discounts[i].excluded_variant_ids;
    }
    let today = new Date();
    today.setHours(0, 0, 0);
    let endDate = null;
    if (discounts[i].ends_at !== 'None') {
      endDate = new Date(discounts[i].ends_at);
    }
    if ((endDate >= today || endDate === null) && discountCouponsCartItemTotalValue > discounts[i].min_amount_rule &&
      excludedProducts.indexOf(couponVariant.id.toString()) === -1) {
      finalCodes.push(discounts[i]);
    }
    if (excludedProducts.indexOf(couponVariant.id.toString()) > -1) {
      baRecoveryOrder = false;
    }
  }

  if (finalCodes.length === 0) {
    document.getElementById('ba-discount-coupon-div').style.display = 'none';
    // document.getElementById('ba-discount-div-separator').setAttribute('style', 'display:none !important');
  } else {
    finalCodes = finalCodes.sort((a, b) => b.priority_index - a.priority_index);
    document.getElementById('ba-discount-coupon-div').style.display = 'block';
    // document.getElementById('ba-discount-div-separator').setAttribute('style', 'display:block !important');
  }

  for (let i = 0; i < finalCodes.length; i++) {
    let coupon_title_translation = '';
    let coupon_sub_title_translation = '';
    if (lang === 'en') {
      coupon_title_translation = finalCodes[i].coupon_title_en;
      coupon_sub_title_translation = finalCodes[i].coupon_sub_title_en;
    } else if (lang === 'mr') {
      coupon_title_translation = finalCodes[i].coupon_title_mr;
      coupon_sub_title_translation = finalCodes[i].coupon_sub_title_mr;
    } else {
      coupon_title_translation = finalCodes[i].coupon_title_hi;
      coupon_sub_title_translation = finalCodes[i].coupon_sub_title_hi;
    }

    let discountCardColDiv = document.createElement('div');
    discountCardColDiv.id = finalCodes[i].title;
    discountCardColDiv.className = 'col-auto p-3 ba-cod-discount-card mr-2';
    discountDiv.appendChild(discountCardColDiv);

    let discountTitleDiv = document.createElement('div');
    discountTitleDiv.className = 'ba-cod-discount-title';
    discountCardColDiv.appendChild(discountTitleDiv);

    let discountTitle1 = document.createElement('span');
    discountTitle1.className = 'ba-cod-discount-title1 mr-3';
    discountTitle1.innerHTML = coupon_title_translation;
    discountTitleDiv.appendChild(discountTitle1);

    let discountTitle2 = document.createElement('span');
    discountTitle2.className = 'ba-cod-discount-title2';
    discountTitle2.innerHTML = coupon_sub_title_translation;
    discountTitleDiv.appendChild(discountTitle2);

    let discountInfoApplyDiv = document.createElement('div');
    discountInfoApplyDiv.className = 'row m-1 align-items-center justify-content-between';
    discountCardColDiv.appendChild(discountInfoApplyDiv);

    let discountMainTitle = document.createElement('div');
    discountMainTitle.className = 'col-auto ba-cod-discount-coupon';
    discountMainTitle.innerHTML = finalCodes[i].title;
    discountInfoApplyDiv.appendChild(discountMainTitle);

    let discountApplyBtn = document.createElement('div');
    discountApplyBtn.className = 'col-auto ba-cod-discount-apply-btn';
    discountApplyBtn.innerHTML = applyCouponBtn;
    // discountApplyBtn.addEventListener("click", function(){ applyCouponCodes(finalCodes[i].title, true); });
    discountInfoApplyDiv.appendChild(discountApplyBtn);

    // Discount coupon card click at card level
    discountCardColDiv.addEventListener("click", function() {
      applyCouponCodes(finalCodes[i].title, finalCodes[i], true);
    });
  }

  // applying first discount code
  if (!baRecoveryApplied) {
    if (finalCodes.length > 0) {
      applyCouponCodes(finalCodes[0].title, finalCodes[0], false, showPopup);
    } else {
      // Resetting price details card discount amount and ba coupon code
      document.getElementById('ba-price-details-discount-value').innerHTML = `0`;
      document.getElementById('ba-price-details-discount-row').style.display = 'none';
      localStorage.removeItem('BA_COD_Coupon_code');
    }
  }
}



let previousCouponCode = '';

function applyCouponCodes(couponCode, couponObj, scrollFlag, showPopup) {
  document.getElementById('ba-cod-discount-loader').style.display = 'block';
  if (!previousCouponCode) {
    previousCouponCode = couponCode;
  }

  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));

  // Resetting price details card discount and total amount
  document.getElementById('ba-price-details-discount-value').innerHTML = `0`;
  document.getElementById('ba-price-details-discount-row').style.display = 'none';


  // Resetting total amount with the cart and bundles
  let bundleCartOrderTotalValue = getBundlesTotalPrice();
  let priceDetailsTotalValueWithoutBundle = Number(baUpdateCart.total_price / 100);
  let priceDetailsTotalValue = Number(baUpdateCart.total_price / 100);
  priceDetailsTotalValue = priceDetailsTotalValue + bundleCartOrderTotalValue;

  sendBaCodGEvents('BA_cart_cc_clk', {
    'from_frag': currentUrl1,
    'discount_coupon': couponCode,
    'order_value': priceDetailsTotalValueWithoutBundle,
  });

  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
  updateOnlinePaymentPrice(priceDetailsTotalValue.toFixed(2));

  if (previousCouponCode) {
    let activeCouponEl = document.getElementById(previousCouponCode);
    if (activeCouponEl) {
      activeCouponEl.style.display = 'block';
    }
  }

  let activeCouponCardEl = document.getElementById('ba-active-coupon');
  if (activeCouponCardEl) {
    activeCouponCardEl.style.display = 'none';
  }

  document.getElementById(couponCode).style.display = 'none';
  document.getElementById('ba-active-coupon').style.display = 'block';

  let mainItem = getBaCartMainItemDetails();

  let baDiscountAmt = 0;

  if (couponObj.value_type && couponObj.value_type === 'percentage') {
    let percentValue = Math.abs(couponObj.value) / 100;
    baDiscountAmt = Number(mainItem.final_line_price) / 100;
    baDiscountAmt = ((baDiscountAmt * percentValue).toFixed(2)).toString();
    if (Number(baDiscountAmt) > Number(couponObj.max_discount_rule)) {
      baDiscountAmt = couponObj.max_discount_rule.toString();
    }
  } else if (couponObj.value_type) {
    baDiscountAmt = Number(mainItem.final_line_price) / 100;
    let fixedValue = Math.abs(couponObj.value);
    baDiscountAmt = (baDiscountAmt - fixedValue).toFixed(2);
    baDiscountAmt = baDiscountAmt.toString();
  }

  let bundleCartOrderTotalValue2 = getBundlesTotalPrice();
  let mainItemPrice = Number(mainItem.final_line_price) / 100;
  mainItemPrice = mainItemPrice + bundleCartOrderTotalValue2 - baDiscountAmt;
  mainItemPrice = Number(mainItemPrice);

  document.getElementById('ba-price-details-discount-value').innerHTML = `-₹ ${baDiscountAmt.replace('.00', '')}`;
  document.getElementById('ba-price-details-discount-row').style.display = 'flex';

  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${mainItemPrice.toFixed(2)}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${mainItemPrice.toFixed(2)}`;
  updateOnlinePaymentPrice(mainItemPrice.toFixed(2));

  document.getElementById('ba-cod-saved-amount').innerHTML = `${couponSavedLabel} ₹${baDiscountAmt.replace('.00', '')}`;
  document.getElementById('ba-cod-saved-amount-line2').innerHTML = couponWithDiscountLabel;
  document.getElementById('ba-cod-applied-coupon-content').innerHTML = `${couponCode} ${couponAppliedLabel}`;


  previousCouponCode = couponCode;
  document.getElementById('ba-cod-discount-loader').style.display = 'none';

  if (scrollFlag) {
    document.getElementById('ba-active-coupon').scrollIntoView({
      behavior: 'smooth'
    });
  }

  localStorage.setItem('BA_COD_Coupon_code', `BA_${couponCode}`);

  // setting recovery discount applied to false / reset value
  baRecoveryApplied = false;

  if (showPopup) {
    // openSmileyModal();
  }

}



let stateId = '';
let districtId = '';
let stateName = '';
let districtName = '';
let talukaName = '';
let stateNameEn = '';
let districtNameEn = '';
let talukaNameEn = '';
let numericalNumberRegex = /^[0-9]+$/;

let stateList = [];

fetch('https://api-cache.leanagri.com/location/state_list/en/state/state_list.json', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}).then(response => {
  response.json().then(result => {
    stateList = result.data;
    setStates();
  });
}).catch(error => {
  console.log('Unable to get states : ', error);
});

function setStates() {
  const stateDiv = document.getElementById('baCodStateSelect');
  stateDiv.addEventListener("change", function() {
    onSelectBoxStateChange(this);
  });
  const stateOptionFirstLabel = document.getElementById('baCodStateSelectLabel');
  replaceChildrenAlternative2(stateDiv);
  stateOptionFirstLabel.innerHTML = stateLabel;
  stateDiv.add(stateOptionFirstLabel);

  for (let i = 0; i < stateList.length; i++) {
    // let stateName = lang === 'en' ? stateList[i].name_en : ( lang === 'mr' ? stateList[i].name_mr : stateList[i].name_hi);
    let stateName = stateList[i].name_en;

    let stateOptionsBtn = document.createElement('option');
    stateOptionsBtn.innerHTML = stateName;
    stateOptionsBtn.value = stateList[i].name_en;
    stateDiv.add(stateOptionsBtn);
  }
}

function createOrderObject(type) {
  sendBaCodGEvents('ba_cod_order_submit_click', {});
  document.getElementById('ba-cod-create-order-button').disabled = true;
  document.getElementById('ba-cod-create-order-online-button').disabled = true;
  document.getElementById('ba-cod-create-order-online-emi-button').disabled = true;

  let name = document.getElementById('farmerName');
  let mobile = document.getElementById('farmerMobile');
  let pincode = document.getElementById('baCodPincode');
  let stateField = document.getElementById('baCodStateSelect');
  let state = stateNameEn;
  let district = document.getElementById('baCodDistrictSelect');
  let taluka = document.getElementById('talukaName');
  let village = document.getElementById('villageName');
  let address = document.getElementById('baAddress');
  let landmark = document.getElementById('baLandmark');
  let postOffice = document.getElementById('baPostOffice');

  let validationError = false;
  let prePaidError = false;

  resetFormFieldsValidation();

  if (!(name.value)) {
    name.classList.add('ba-mandatory-field-border');
    document.getElementById('farmerNameRequired').style.display = 'block';
    prePaidError = validationError = true;
    baScrollToId('farmerName');
  }

  if (!mobile || !mobile.value || mobile.value.length !== 10 || !mobile.value.match(numericalNumberRegex)) {
    mobile.classList.add('ba-mandatory-field-border');
    document.getElementById('farmerMobileRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('farmerMobile');
    }
    prePaidError = validationError = true;
    if (mobile.value) {
      sendBaCodGEvents('ba_cod_order_validate_error_mobile', {
        'mobile': mobile.value
      });
    }
  }

  if (!(address.value)) {
    address.classList.add('ba-mandatory-field-border');
    document.getElementById('baAddressRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('baAddress');
    }
    prePaidError = validationError = true;
  }

  if (!state) {
    stateField.classList.add('ba-mandatory-field-border');
    document.getElementById('baCodStateSelectRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('baCodStateSelect');
    }
    prePaidError = validationError = true;
  }

  if (!district.value) {
    district.classList.add('ba-mandatory-field-border');
    document.getElementById('baCodDistrictSelectRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('baCodDistrictSelect');
    }
    prePaidError = validationError = true;
  }

  if (!taluka.value) {
    taluka.classList.add('ba-mandatory-field-border');
    document.getElementById('talukaNameRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('talukaName');
    }
    prePaidError = validationError = true;
  }

  if (!pincode || !pincode.value || pincode.value.length !== 6 || !pincode.value.match(numericalNumberRegex) || pincode.value[0] === "0") {
    pincode.classList.add('ba-mandatory-field-border');
    document.getElementById('baCodPincodeRequired').style.display = 'block';
    if (!validationError) {
      baScrollToId('baCodPincode');
    }
    prePaidError = validationError = true;
  } else {
    // Commented pincode validation for blacklist and whitelist pincodes
    let whitelistedPincodes = getWhitelistedPincodes();
    if (whitelistedPincodes.length > 0) {
      if (!validateWhiteListedPincode(pincode.value)) {
        pincode.classList.add('ba-mandatory-field-border');
        document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'block';
        sendBaCodGEvents('ba_cod_pincode_error', {
          'pincode': pincode.value
        });
        if (!validationError) {
          baScrollToId('baCodPincode');
        }
        prePaidError = validationError = true;
      } else if (String(blacklistedPincodes).indexOf(pincode.value) > -1) {
        displayPincodeError(pincode);
        if (!validationError) {
          baScrollToId('baCodPincode');
        }
        validationError = true;
      }
    } else if (String(blacklistedPincodes).indexOf(pincode.value) > -1) {
      displayPincodeError(pincode);
      if (!validationError) {
        baScrollToId('baCodPincode');
      }
      validationError = true;
    }
  }

  if (!validationError || !prePaidError) {
    sendBaCodGEvents('ba_cod_order_creation', {
      'mobile': mobile.value
    });
    let baO2 = getBaOrderObject();

    document.getElementById('baCodTriggerRecovery').disabled = true;

    let createOrderLineItems = getLineItemsObject();
    let createOrderTotalValue = getBaTotalOrderAmount();

    if (type === 'cod' && !validationError) {
      sendBaCodGEvents('ba_cod_order_submit_cod', {});
      document.getElementById('ba-cod-footer-apply-btn-loader').style.display = 'inline-block';
      document.getElementById('ba-cod-footer-total-amount').style.display = 'none';
      baCreateOrderApi(baO2, createOrderTotalValue, createOrderLineItems, mobile.value, type);
    } else if (type === 'online' && !prePaidError) {
      sendBaCodGEvents('ba_cod_order_submit_online_pay', {});
      document.getElementById('ba-cod-footer-online-btn-loader').style.display = 'inline-block';
      document.getElementById('ba-cod-footer-online-amount').style.display = 'none';
      let onlineAmount = getOnlinePaymentPrice();
      generateBaRazorpayOrder(mobile.value, onlineAmount, name.value);
    } else if (type === 'emi' && !prePaidError) {
      sendBaCodGEvents('ba_cod_order_submit_emi_pay', {});
      document.getElementById('ba-cod-footer-online-btn-emi-loader').style.display = 'inline-block';
      document.getElementById('ba-cod-footer-online-emi-amount').style.display = 'none';
      let emiAmount = getOnlineEmiPaymentPrice();
      generateBaBharatxOrder(mobile.value, emiAmount, name.value);
    } else {
      baFormValidationErrorRest();
    }
  } else {
    baFormValidationErrorRest();
  }
}

function baCreateOrderApi(baO2, createOrderTotalValue, createOrderLineItems, mobileValue, type) {
  if (type === 'online') {
    sendBaCodGEvents('ba_payment_success_order_creation', {});
  }
  if (type === 'emi') {
    sendBaCodGEvents('ba_payment_emi_success_order_creation', {});
  }

  let processOrderObj = {
    baO2,
    createOrderTotalValue,
    createOrderLineItems,
    mobileValue,
    type
  }

  localStorage.setItem('baProcessOrder', JSON.stringify(processOrderObj));

  if ((highRiskProductFlag || otpVerifyFlag) && type === 'cod') {
    displayConfirmationModal();
  } else {
    baProcessOrder(baO2, createOrderTotalValue, createOrderLineItems, mobileValue, type);
  }
}

function baProcessOrder(baO2, createOrderTotalValue, createOrderLineItems, mobileValue, type) {
  fetch('https://lcrks.leanagri.com/third_parties/shopify_cod_app/api/v1/create-order/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(baO2)
  }).then(response => {
    if (response.status === 201) {
      response.json().then(result => {
        sendBaCodGEvents('BA_cod_ordered', {
          'from_frag': currentUrl1,
          'order_value': createOrderTotalValue,
          'ba_phone_number': mobileValue
        });
        if (type === 'cod') {
          sendBaCodGEvents('ba_cod_ordered_cod', {});
        } else if (type === 'online') {
          sendBaCodGEvents('ba_cod_ordered_online', {});
        } else if (type === 'emi') {
          sendBaCodGEvents('ba_cod_ordered_emi', {});
        }
        document.getElementById('baCodTriggerRecovery').disabled = false;
        sendBaFbEvents('Purchase', {
          currency: "INR",
          value: createOrderTotalValue,
          num_items: createOrderLineItems.length
        });
        sendBaCodGAConversionOrderedEvents(createOrderTotalValue, result.order.order_number);
        try {
          gtag('event', 'conversion', {
            'send_to': 'AW-682014322/--74CKG9_dcDEPLsmsUC',
            'value': createOrderTotalValue,
            'currency': 'INR',
            'transaction_id': ''
          });
        } catch (error) {
          console.log('gtag error');
        }
        localStorage.setItem('BA_COD_FORM_NOTES_ATTRIBUTES', JSON.stringify(baO2["order"]["note_attributes"]));
        // window.open(result.order.order_status_url, '_self');
        baCodOrderUrl = result.order.order_status_url;
        baCodOrderNumber = result.order.order_number;
        document.getElementById('ba-cod-form-overlay-loader').style.display = 'block';
        baAuthenticateOrderPageUrlAndRoute();
      });
    } else {
      resetCodFooter();
      document.getElementById('baCodTriggerRecovery').disabled = false;
    }
  }).catch(error => {
    console.log('error: ', error);
    resetCodFooter();
    document.getElementById('baCodTriggerRecovery').disabled = false;
  });

  // dev store api call to create order
  // fetch('/admin/api/2023-07/orders.json', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Shopify-Access-Token': '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'
  //   },
  //   body: JSON.stringify(baO2)
  // }).then(response => {
  //   if (response.status === 201) {
  //     response.json().then( result => {
  //         document.getElementById('baCodTriggerRecovery').disabled = false;
  //       // window.open(result.order.order_status_url, '_self');
  //         baCodOrderUrl = result.order.order_status_url
  //         baCodOrderNumber = result.order.order_number;
  //         baOnlinePaySuccess = false;
  //         localStorage.setItem('BA_COD_FORM_NOTES_ATTRIBUTES', JSON.stringify(baO2["order"]["note_attributes"]));
  //         document.getElementById('ba-cod-form-overlay-loader').style.display = 'block';
  //         baAuthenticateOrderPageUrlAndRoute();
  //     });
  //   } else {
  //     document.getElementById('ba-cod-create-order-button').disabled = false;
  //     document.getElementById('ba-cod-create-order-online-button').disabled = false;
  //     document.getElementById('ba-cod-create-order-online-emi-button').disabled = false;
  //     document.getElementById('baCodTriggerRecovery').disabled = false;
  //   }
  // }).catch(error => {
  //   console.log('error: ', error);
  //   document.getElementById('ba-cod-create-order-button').disabled = false;
  //   document.getElementById('ba-cod-create-order-online-button').disabled = false;
  //   document.getElementById('ba-cod-create-order-online-emi-button').disabled = false;
  //   document.getElementById('baCodTriggerRecovery').disabled = false;
  // });
  // dev store api ends here
}

function baScrollToId(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

setInterval(() => {
  let name = document.getElementById('farmerName');
  let mobile = document.getElementById('farmerMobile');
  let pincode = document.getElementById('baCodPincode');
  let stateField = document.getElementById('baCodStateSelect');
  let district = document.getElementById('baCodDistrictSelect');
  let state = stateName;
  let taluka = document.getElementById('talukaName');
  let village = document.getElementById('villageName');
  let address = document.getElementById('baAddress');
  let landmark = document.getElementById('baLandmark');


  if (name.value) {
    name.classList.remove('ba-mandatory-field-border');
    document.getElementById('farmerNameRequired').style.display = 'none';
  }

  if (mobile && mobile.value && mobile.value.length === 10 && mobile.value.match(numericalNumberRegex)) {
    mobile.classList.remove('ba-mandatory-field-border');
    document.getElementById('farmerMobileRequired').style.display = 'none';
  }

  if (pincode && pincode.value && pincode.value.length === 6 && pincode.value.match(numericalNumberRegex) && pincode.value[0] !== "0") {
    document.getElementById('baCodPincodeRequired').style.display = 'none';
    let whitelistedPincodes = getWhitelistedPincodes();
    if (whitelistedPincodes.length > 0) {
      if (validateWhiteListedPincode(pincode.value)) {
        pincode.classList.remove('ba-mandatory-field-border');
        document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'none';
      } else {
        checkAndRemovePincodeError(pincode);
      }
    } else {
      checkAndRemovePincodeError(pincode);
    }
  }

  if (state) {
    stateField.classList.remove('ba-mandatory-field-border');
    document.getElementById('baCodStateSelectRequired').style.display = 'none';
  }

  if (district.value) {
    district.classList.remove('ba-mandatory-field-border');
    document.getElementById('baCodDistrictSelectRequired').style.display = 'none';
  }

  if (taluka.value) {
    taluka.classList.remove('ba-mandatory-field-border');
    document.getElementById('talukaNameRequired').style.display = 'none';
  }

  if (village.value) {
    village.classList.remove('ba-mandatory-field-border');
    document.getElementById('villageNameRequired').style.display = 'none';
  }

  if (address.value) {
    address.classList.remove('ba-mandatory-field-border');
    document.getElementById('baAddressRequired').style.display = 'none';
  }

  if (landmark.value) {
    landmark.classList.remove('ba-mandatory-field-border');
    document.getElementById('baLandmarkRequired').style.display = 'none';
  }
}, 2500);



function populatePriceDetailsCard() {
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;

  const priceParentContainer = document.getElementById('ba-cod-price-details-content');
  replaceChildrenAlternative2(priceParentContainer);

  let priceItemsMainDiv = document.createElement('div');
  priceItemsMainDiv.id = 'ba-cod-price-details-items';
  document.getElementById('ba-cod-price-details-content').appendChild(priceItemsMainDiv);

  for (let i = 0; i < items.length; i++) {
    let priceItemsRow = document.createElement('div');
    priceItemsRow.className = 'row mt-2 pb-2 align-items-center ba-cod-price-details-items';
    priceItemsMainDiv.appendChild(priceItemsRow);

    let priceItemsCol1 = document.createElement('div');
    priceItemsCol1.className = 'col-7 ba-cod-price-details-product-title';
    // priceItemsCol1.innerHTML = items[i].product_title.length > 34 ? items[i].product_title.slice(0,34) + '..' : items[i].product_title;
    priceItemsCol1.innerHTML = mainPriceAmountLabel;
    priceItemsRow.appendChild(priceItemsCol1);

    let priceItemsCol2 = document.createElement('div');
    priceItemsCol2.className = 'col-5 text-right pl-0 ba-cod-price-details-product-price';
    priceItemsCol2.id = 'ba-cod-product-price' + i;
    priceItemsCol2.innerHTML = items[i].final_line_price ? `₹ ${(Number(items[i].final_line_price)/100).toFixed(2)}` : '0';
    priceItemsRow.appendChild(priceItemsCol2);
  }

  let priceItemsFreeDeliveryDiv = document.createElement('div');
  priceItemsFreeDeliveryDiv.id = 'ba-free-delivery-div';
  priceItemsFreeDeliveryDiv.className = 'row mt-2 pb-2 align-items-center ba-cod-price-details-items';
  priceItemsFreeDeliveryDiv.style.display = 'none';
  document.getElementById('ba-cod-price-details-content').appendChild(priceItemsFreeDeliveryDiv);

  let priceItemsFreeDeliveryCol1 = document.createElement('div');
  priceItemsFreeDeliveryCol1.className = 'col-7';
  priceItemsFreeDeliveryCol1.innerHTML = priceDetailsFreeDeliveryLabel;
  priceItemsFreeDeliveryDiv.appendChild(priceItemsFreeDeliveryCol1);

  let priceItemsFreeDeliveryCol2 = document.createElement('div');
  priceItemsFreeDeliveryCol2.className = 'col-5 text-right pl-0 ba-cod-price-details-free-delivery';
  priceItemsFreeDeliveryCol2.innerHTML = priceDetailsFreeDeliveryValueLabel;
  // priceItemsFreeDeliveryCol2.style.color = '#0A8047';
  priceItemsFreeDeliveryDiv.appendChild(priceItemsFreeDeliveryCol2);

  let priceItemsDiscountDiv = document.createElement('div');
  priceItemsDiscountDiv.id = 'ba-price-details-discount-row';
  priceItemsDiscountDiv.className = 'row mt-2 pb-2 align-items-center ba-cod-price-details-discount';
  document.getElementById('ba-cod-price-details-content').appendChild(priceItemsDiscountDiv);

  let priceItemsDiscountCol1 = document.createElement('div');
  priceItemsDiscountCol1.className = 'col-7';
  priceItemsDiscountCol1.innerHTML = priceDetailsDiscountLabel;
  priceItemsDiscountDiv.appendChild(priceItemsDiscountCol1);

  let priceItemsDiscountCol2 = document.createElement('div');
  priceItemsDiscountCol2.className = 'col-5 text-right pl-0 ba-cod-price-details-total-discount';
  priceItemsDiscountCol2.id = 'ba-price-details-discount-value';
  priceItemsDiscountDiv.appendChild(priceItemsDiscountCol2);

  let priceItemsBundlesMainDiv = document.createElement('div');
  priceItemsBundlesMainDiv.id = 'ba-cod-price-details-bundle-items';
  document.getElementById('ba-cod-price-details-content').appendChild(priceItemsBundlesMainDiv);

  let priceItemsTotalDiv = document.createElement('div');
  priceItemsTotalDiv.id = 'ba-price-details-discount-total';
  priceItemsTotalDiv.className = 'row mt-3 pb-2 align-items-center ba-cod-price-details-total-amount';
  document.getElementById('ba-cod-price-details-content').appendChild(priceItemsTotalDiv);

  let priceItemsTotalCol1 = document.createElement('div');
  priceItemsTotalCol1.className = 'col-7';
  priceItemsTotalCol1.innerHTML = priceDetailsTotalAmountLabel;
  priceItemsTotalDiv.appendChild(priceItemsTotalCol1);

  let priceItemsTotalCol2 = document.createElement('div');
  priceItemsTotalCol2.className = 'col-5 text-right pl-0 ba-cod-price-details-total-price';
  priceItemsTotalCol2.innerHTML = `₹ ${(baUpdateCart.total_price/100).toFixed(2)}`;
  priceItemsTotalCol2.id = 'ba-price-details-total-value';
  priceItemsTotalDiv.appendChild(priceItemsTotalCol2);

  document.getElementById('ba-cod-price-details-div').style.display = 'block';

  // Setting price value on the BA COD place order button
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${baUpdateCart.total_price/100}`;
  updateOnlinePaymentPrice(baUpdateCart.total_price / 100);
}



document.getElementById('baCodPincode').addEventListener('input', function() {
  if (this.value.length === 6) {
    document.getElementById('baCodPincodeServiceableRequired').style.display = 'none';
    document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'none';
    loadBaLocation(this.value);
    checkWhiteListedPincodes(this.value);
  }
});



// Blacklisted pincode api - will be called once when page is loaded
function loadBlackListedPincodes() {
  fetch(`https://shopify-krushidukan.leanagri.com/blacklisted_pincodes/en/pincodes/blacklisted.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(res => {
      if (res.data) {
        blacklistedPincodes = res.data.cod_blacklist || [];
        // whitelistedPincodes = res.data.pincode_whitelist || [];
      } else {
        blacklistedPincodes = [];
        // whitelistedPincodes = [];
      }
    });
}

function replaceChildrenAlternative2(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}




// Actual cod form js file starts

let options = {
  "key": "rzp_live_884X1cDEIdcCxd", // Enter the Key ID generated from the Dashboard
  "currency": "INR",
  "name": "BharatAgri", //your business name
  "description": "BA Payment",
  "order_id": "",
  "handler": function (response){
    baPaymentHandler(response)
  },
  "prefill": {
    "name": "",
    "email": "",
    "contact": ""
  },
  "notes": {},
  "theme": {
    "color": "#009688"
  },
  "modal": {
    "ondismiss": function(){
      updatePaymentStatus(false, 'ba_payment_modal_close');
    }
  }
};

function checkFreeDelivery() {
  let data = getBaCodProductData();
  let finalVariantId = sessionStorage.getItem('baCodVariantId') || 1;
  let freeDeliveryDiv = document.getElementById('ba-free-delivery-div');
  if (data.variant_prices[finalVariantId] && data.variant_prices[finalVariantId].show_free_delivery) {
    freeDeliveryDiv.style.display = 'flex';
  } else {
    freeDeliveryDiv.style.display = 'none';
  }
}

function checkCodEligibility(type) {
  let data = getBaCodProductData();
  let finalVariantId = sessionStorage.getItem('baCodVariantId') || 1;
  if (type === 'cod') {
    if (data.variant_prices[finalVariantId] && data.variant_prices[finalVariantId].is_cod_enabled) {
      document.getElementById('ba-cod-place-btn-div').style.display = 'block';
      document.getElementById('ba-online-pay-main-div').style.display = 'none';
      // remove above line and uncomment below for displaying cod and razorpay
      // document.getElementById('ba-online-pay-main-div').style.display = 'block';
      document.getElementById('ba-online-pay-main-emi-div').style.display = 'none';
    } else {
      document.getElementById('ba-cod-place-btn-div').style.display = 'none';
      document.getElementById('ba-online-pay-main-div').style.display = 'block';
      document.getElementById('ba-online-pay-main-emi-div').style.display = 'block';
    }
  } else {
    document.getElementById('ba-cod-place-btn-div').style.display = 'none';
    document.getElementById('ba-online-pay-main-div').style.display = 'block';
    document.getElementById('ba-online-pay-main-emi-div').style.display = 'block';
  }
}

function displayBaCodOnlinePayButton(displayStyle) {
  let data = getBaCodProductData();
  let finalVariantId = sessionStorage.getItem('baCodVariantId') || 1;
  if (data.variant_prices[finalVariantId] && data.variant_prices[finalVariantId].is_cod_enabled && baCheckoutType === 'cod') {
    document.getElementById('ba-online-pay-main-div').style.display = displayStyle;
    // will display online button always
    // remove above line and uncomment below for displaying cod and razorpay
    // document.getElementById('ba-online-pay-main-div').style.display = 'block';
    document.getElementById('ba-online-pay-main-emi-div').style.display = displayStyle;
  }
}

function getMobileValue() {
  return document.getElementById('farmerMobile').value;
}

function getLineItemsObject() {
  let baUpdateCartCreateOrder = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let createOrderItems = baUpdateCartCreateOrder.items;
  let createOrderLineItems = [];

  for (let i = 0; i < createOrderItems.length; i++) {
    let variant = {'variant_id': createOrderItems[i].variant_id, 'quantity': createOrderItems[i].quantity, 'properties': {}};
    createOrderLineItems.push(variant);
  }

  return createOrderLineItems;
}

function getBaTotalOrderAmount() {
  let createCartBundleOrderTotalValue = getBundlesActualTotalPriceWithoutDiscount();
  let createCartBundleOrderTotalDiscountedValue = getBundlesTotalPrice();
  let createCartFinalTotalValue = 0;
  let createCartBundleTotalDiscount = 0;

  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let createOrderCartItemTotalValue = Number(baUpdateCart.total_price/100);
  createCartFinalTotalValue = createCartBundleOrderTotalValue + createOrderCartItemTotalValue;
  let createOrderTotalValue = createCartFinalTotalValue;

  return createOrderTotalValue;
}

function getBaOrderObject() {
  let name = document.getElementById('farmerName');
  let mobile = document.getElementById('farmerMobile');
  let pincode = document.getElementById('baCodPincode');
  let stateField = document.getElementById('baCodStateSelect');
  let state = stateNameEn;
  let district = document.getElementById('baCodDistrictSelect');
  let taluka = document.getElementById('talukaName');
  let village = document.getElementById('villageName');
  let address = document.getElementById('baAddress');
  let landmark = document.getElementById('baLandmark');
  let postOffice = document.getElementById('baPostOffice');

  let nameValue = name.value;
  let mobileValue = mobile.value;
  let  pincodeValue = pincode.value;
  let stateValue = state;
  let districtValue = district.value;
  let talukaValue = taluka.value ? taluka.value : '';
  let villageValue = village.value ? village.value : '';
  let addressValue = address.value;
  let landmarkValue = landmark.value ? landmark.value : '';
  let postOfficeValue = postOffice.value ? postOffice.value : '';

  let baOrder = {
    name: name.value,
    mobile: mobile.value,
    pincode: pincode.value,
    state: state,
    district: district.value,
    taluka: talukaValue,
    village: villageValue,
    address: address.value,
    landmark: landmarkValue,
    postOffice: postOfficeValue,
    // is_confirmation_popup: highRiskProductFlag,
    is_confirmation_popup: false
  }

  let noteAttributesArray = [];

  for (let [key, value] of Object.entries(baOrder)) {
    let noteAttributesObject = {"name": key, "value": value};
    noteAttributesArray.push(noteAttributesObject);
  }

  let createOrderDiscount = document.getElementById('ba-price-details-discount-value').innerHTML;
  createOrderDiscount = createOrderDiscount.replace('-₹ ', '');

  // Calculating total amount with the cart and bundles for create order
  let createCartBundleOrderTotalValue = getBundlesActualTotalPriceWithoutDiscount();
  let createCartBundleOrderTotalDiscountedValue = getBundlesTotalPrice();
  let createCartFinalTotalValue = 0;
  let createCartBundleTotalDiscount = 0;

  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let createOrderCartItemTotalValue = Number(baUpdateCart.total_price/100);
  createCartFinalTotalValue = createCartBundleOrderTotalValue + createOrderCartItemTotalValue;
  let createOrderTotalValue = createCartFinalTotalValue;
  createCartBundleTotalDiscount = createCartBundleOrderTotalValue - createCartBundleOrderTotalDiscountedValue;

  let createOrderDiscountCode = '';
  if (Number(createOrderDiscount) > 0) {
    createOrderDiscountCode = localStorage.getItem('BA_COD_Coupon_code');
  }

  let createOrderLineItems = getLineItemsObject();

  for (let i = 0; i < selectedBundles.length; i++) {
    if (selectedBundles[i].enabled && selectedBundles[i].selected) {
      let variant = {'variant_id': selectedBundles[i].secondary_product.variant_id, 'quantity': 1, 'properties': {}};
      createOrderLineItems.push(variant);
    }
  }


  let baO2 = {
    "order": {
      "line_items":createOrderLineItems,
      "customer": {
        "first_name": nameValue,
      },
      "phone": `+91${mobileValue}`,
      "shipping_address": {
        "first_name": nameValue,
        "last_name": '-',
        "address1": addressValue,
        "phone": `+91${mobileValue}`,
        "city": districtValue,
        "province": stateValue,
        "country": "India",
        "zip": pincodeValue
      },
      "billing_address": {
        "first_name": nameValue,
        "last_name": '-',
        "address1": addressValue,
        "phone": `+91${mobileValue}`,
        "city": districtValue,
        "province": stateValue,
        "country": "India",
        "zip": pincodeValue
      },
      "financial_status": "pending",
      "payment_gateway_names": [
        "Cash on Delivery (COD)"
      ],
      "tags": "BharatAgri COD Form",
      "note_attributes": noteAttributesArray
    }
  }

  if (Number(createOrderDiscount) > 0 || createCartBundleTotalDiscount > 0) {
    // Bundle Discounts logic
    let couponText = createOrderDiscountCode ? createOrderDiscountCode : '';
    if (createCartBundleTotalDiscount > 0) {
      couponText = couponText ? couponText + ', BA Custom Bundles Discount' : 'BA Custom Bundles Discount';
      noteAttributesArray.push({"name": "bundle_product_added", "value": "yes"});
      baO2["order"]["note_attributes"] = noteAttributesArray;
    }

    let couponDiscount = Number(createOrderDiscount) > 0 ? Number(createOrderDiscount) : 0;
    couponDiscount = couponDiscount + createCartBundleTotalDiscount;

    baO2["order"]["discount_codes"] = [
      {
        "code": couponText,
        "amount": couponDiscount
      }
    ]
  }

  return baO2;
}

function baPaymentHandler(res) {
  if (res && res.razorpay_payment_id) {
    baRazorpayPaymentId = res.razorpay_payment_id;
    let mobileValue = getMobileValue();
    sendBaCodGEvents('ba_payment_razorpay_success', { 'value': mobileValue });
    updatePaymentStatus(true, 'ba_payment_success');
  } else {
    updatePaymentStatus(false, 'ba_payment_failed');
  }
}

function updatePaymentStatus(status, message) {
  fetch(`https://lcrks.leanagri.com/third_parties/shopify/api/v1/update_order_status/?ref_id=${baRazorpayReferenceId}&payment_id=${baRazorpayPaymentId}&order_id=${baRazorpayOrderId}&status=${status}`)
    .then(response => response.json())
    .then(result => {
      sendMessage(message);
      if (status) {
        triggerOnlineOrderCreation();
      } else {
        onOnlinePaymentFail();
      }
    })
    .catch(error => {
      sendMessage(message);
      if (status) {
        triggerOnlineOrderCreation();
      } else {
        onOnlinePaymentFail();
      }
    });
}

function triggerOnlineOrderCreation() {
  sendBaCodGEvents('ba_payment_success_trigger_order', {value: baRazorpayOrderId});
  let mobileValue = getMobileValue();
  let baO2 = getBaOrderObject();
  baO2["order"]["financial_status"] = 'paid';
  baO2["order"]["payment_gateway_names"] = ["Razorpay Secure"];
  let baDiscountCodes = baO2["order"]["discount_codes"] || [];
  baO2["order"]["discount_codes"] = getBaOnlineDiscountCodeObject(baDiscountCodes);
  baO2["order"]["note_attributes"].push({"name": "order_id", "value": baRazorpayOrderId});
  baO2["order"]["note_attributes"].push({"name": "payment_id", "value": baRazorpayPaymentId});
  let createOrderLineItems = getLineItemsObject();
  let createOrderTotalValue = getBaTotalOrderAmount();
  baCreateOrderApi(baO2, createOrderTotalValue, createOrderLineItems, mobileValue, 'online');
}

function triggerEmiOrderCreation() {
  sendBaCodGEvents('ba_payment_emi_success_trigger_order', {value: bharatxTransactionId});
  let mobileValue = getMobileValue();
  let baO2 = getBaOrderObject();
  baO2["order"]["financial_status"] = 'paid';
  baO2["order"]["payment_gateway_names"] = ["Razorpay Secure"];
  // let baDiscountCodes = baO2["order"]["discount_codes"] || [];
  // baO2["order"]["discount_codes"] = getBaOnlineDiscountCodeObject(baDiscountCodes);
  baO2["order"]["note_attributes"].push({"name": "order_id", "value": bharatxTransactionId});
  baO2["order"]["note_attributes"].push({"name": "bharatx_payment", "value": "yes"});
  let createOrderLineItems = getLineItemsObject();
  let createOrderTotalValue = getBaTotalOrderAmount();
  baCreateOrderApi(baO2, createOrderTotalValue, createOrderLineItems, mobileValue, 'emi');
}

function sendMessage(message) {
  sendBaCodGEvents(message, {value: baRazorpayOrderId});
}

function generateBaRazorpayOrder(mobileValue, onlineAmount, nameValue) {
  let baO2 = getBaOrderObject();
  let baDiscountCodes = baO2["order"]["discount_codes"] || [];
  baO2["order"]["discount_codes"] = getBaOnlineDiscountCodeObject(baDiscountCodes);
  let generateOrderObj = {
    "phone_number": mobileValue,
    "cart_amount": onlineAmount,
    "order_details": baO2
  }
  fetch(`https://lcrks.leanagri.com/third_parties/shopify/api/v1/generate_order/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(generateOrderObj)
  }).then(response => response.json())
    .then(result => {
      baRazorpayOrderId = result.order_id;
      baRazorpayReferenceId = result.reference_id;
      options.order_id = result.order_id;
      // options.amount = 22;
      options.prefill.contact = '+91' + mobileValue.toString();
      options.prefill.email = mobileValue.toString() + '@bharatagri.com';
      let rzp = new Razorpay(options);
      rzp.open();
      rzp.on('payment.error', (resp) => {
        sendMessage('ba_payment_error');
        onOnlinePaymentFail();
      });
      rzp.on('payment.failed', (resp) => {
        updatePaymentStatus(false, 'ba_payment_failed');
      });
    })
    .catch(error => console.log('error', error));
}

function onOnlinePaymentFail() {
  document.getElementById('baCodTriggerRecovery').disabled = false;
  resetCodFooter();
}

function generateBaBharatxOrder(mobileValue, emiAmount, nameValue) {
  let baO2 = getBaOrderObject();
  emiAmount = (Number(emiAmount) * 100).toFixed(0);
  emiAmount = Number(emiAmount);
  baO2["order"]["note_attributes"].push({"name": "bharatx_payment", "value": "yes"});
  let bharatxObj = {
    "transaction": {
      "amount": emiAmount,
      // "mode": "TEST",
      "notes": {}
    },
    "user": {
      "name": nameValue,
      "phoneNumber": "+91" + mobileValue
    },
    "createConfiguration": {
      "successRedirectUrl": `https://app.bharatagri.com/bharatx-success?lang=${lang}`,
      "failureRedirectUrl": `https://app.bharatagri.com/bharatx-failed?lang=${lang}`,
      "cancelRedirectUrl": `https://app.bharatagri.com/bharatx-failed?lang=${lang}`
    }
  };
  let generateOrderObj = {
    "bharatx": bharatxObj,
    "ba_order": baO2
  };

  console.log(generateOrderObj);

  fetch(`https://lcrks.leanagri.com/payments/vendors/bharatx/api/v1/external_payment/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Extra-Auth': 'YmhhcmF0eGF1dGg='
    },
    body: JSON.stringify(generateOrderObj)
  }).then(response => response.json())
    .then(result => {
      if (result.transaction) {
        bharatxTransactionId = result.transaction.id;
        let bharatxUrl = window.open(result.transaction.url);
        triggerBharatxStatus();
      } else {
        onEmiPaymentFail();
      }
    }).catch(error => {
      onEmiPaymentFail();
      console.log("error", error);
    });
}

function triggerBharatxStatus() {
  let bharatxInterval = setInterval(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://shopify-krushidukan.leanagri.com/bharatx_payment/en/payments/${bharatxTransactionId}.json`, requestOptions)
      .then(response => response.json())
      .then(result => {
        clearInterval(bharatxInterval);
        if (result.status) {
          triggerEmiOrderCreation();
        } else {
          onEmiPaymentFail();
        }
      }).catch(error => {
      // onEmiPaymentFail();
      console.log("error", error);
    });
  }, 5000)
}

function onEmiPaymentFail() {
  sendBaCodGEvents('ba_payment_emi_failed', {value: bharatxTransactionId});
  document.getElementById('baCodTriggerRecovery').disabled = false;
  resetCodFooter();
}

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

function getBaOnlineDiscountCodeObject(codes) {
  if (codes.length > 0) {
    let baDiscountCodes = codes[0];
    return [
      {
        "code": baDiscountCodes.code + ', BA Online Pay Discount',
        "amount": Number(baDiscountCodes.amount) + getOnlinePayDiscountAmount()
      }
    ];
  } else {
    return [
      {
        "code": 'ba_online_pay',
        "amount": getOnlinePayDiscountAmount()
      }
    ];
  }
}

function getOnlinePayDiscountAmount() {
  return 40;
}

function updateOnlinePaymentPrice(price) {
  let baCodAmount = Number(price);
  let baOnlineDiscount = getOnlinePayDiscountAmount();
  let baOnlineAmount = Number(price)- baOnlineDiscount;
  if (price.toString().includes('.')) {
    baOnlineAmount = baOnlineAmount.toFixed(2);
    baCodAmount = baCodAmount.toFixed(2);
  }
  document.getElementById('ba-cod-footer-online-original-amount').innerHTML = `₹ ${baCodAmount}`;
  document.getElementById('ba-cod-footer-online-amount').innerHTML = `₹ ${baOnlineAmount}`;
  document.getElementById('baCodFooterOnlineDiscount').innerHTML = `₹${baOnlineDiscount} ${baOnlinePaymentDiscountLabel}`;

  // No discount and online pay difference amount for BharatX
  // document.getElementById('ba-cod-footer-online-original-emi-amount').innerHTML = `₹ ${baCodAmount}`;
  // document.getElementById('ba-cod-footer-online-emi-amount').innerHTML = `₹ ${baCodAmount}`;

  document.getElementById('ba-cod-footer-online-original-emi-amount').style.display = 'none';
  document.getElementById('ba-cod-footer-online-emi-amount').innerHTML = `₹ ${baCodAmount}`;
  document.getElementById('baCodFooterOnlineEmiDiscount').innerHTML = `${baOnlinePaymentDiscountEmiLabel}`;
}

function getOnlinePaymentPrice() {
  let onlinePrice = document.getElementById('ba-cod-footer-online-amount').innerHTML;
  onlinePrice = onlinePrice.replace('₹ ', '');
  return onlinePrice.replace('.00', '');
}

function getOnlineEmiPaymentPrice() {
  let onlinePrice = document.getElementById('ba-cod-footer-online-emi-amount').innerHTML;
  onlinePrice = onlinePrice.replace('₹ ', '');
  return onlinePrice.replace('.00', '');
}

const updateBaCartApiCaller = createUpdateBaCartApiCaller();
function incrementQuantity() {
  let quantityInput = document.getElementById('ba-cod-quantity');
  let currentQuantity = Number(quantityInput.value);
  let maxQuantity = 10;

  if (currentQuantity < maxQuantity) {
    quantityInput.value = currentQuantity + 1;
    updateBaCartApiCaller('add', currentQuantity + 1);
  }
}

function decrementQuantity() {
  let quantityInput = document.getElementById('ba-cod-quantity');
  let currentQuantity = Number(quantityInput.value);
  let minQuantity = 1;

  if (currentQuantity > minQuantity) {
    quantityInput.value = currentQuantity - 1;
    updateBaCartApiCaller('remove', currentQuantity - 1);
  }
}

function createUpdateBaCartApiCaller() {
  let latestNumber = 0;

  return function (operation, quantityValue) {
    latestNumber = quantityValue;

    // Clear any previous timeouts
    clearTimeout(this.timeout);

    // Set a new timeout for making the API call
    this.timeout = setTimeout(() => {
      updateBaCart(operation, quantityValue);
    }, 500);
  };
}

function updateBaCart(operation, quantityValue) {
  if (quantityValue >= 1 || operation === 'add') {
    let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
    let items = baUpdateCart.items;
    let finalVariantId = items[0].variant_id;
    let updates = {};
    updates[finalVariantId] = quantityValue;
    fetch('/cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'updates': updates})
    }).then(res => res.json())
      .then(res => {
          localStorage.setItem('baUpdateCartResponse', JSON.stringify(res));
          let bundleCartOrderTotalValue = getBundlesTotalPrice();
          let priceDetailsTotalValueWithoutBundle = Number(res.total_price/100);
          let priceDetailsTotalValue = Number(res.total_price/100);
          priceDetailsTotalValue = priceDetailsTotalValue + bundleCartOrderTotalValue;
          document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
          document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
          updateOnlinePaymentPrice(priceDetailsTotalValue.toFixed(2));
          document.getElementById('ba-cod-main-product-price0').innerHTML = `₹ ${priceDetailsTotalValueWithoutBundle}`;
          document.getElementById('ba-cod-product-price0').innerHTML = `₹ ${priceDetailsTotalValueWithoutBundle.toFixed(2)}`;
          document.getElementById('ba-cod-main-product-quantity0').innerHTML = quantityValue;
          if (baRecoveryApplied) {
            applyBaRecoveryDiscount(false);
          }
          loadCouponCodes(false);
        }
      );
  }
}

function autoFillUserDetails() {
  let infos = JSON.parse(localStorage.getItem('BA_COD_FORM_NOTES_ATTRIBUTES')) || [];
  infos.forEach( info => {
    if (info.name === 'name') {
      document.getElementById('farmerName').value = info.value;
    }
    if (info.name === 'mobile') {
      sendBaCodGEvents('ba_cod_auto_address', {'ba_phone_number': info.value});
      document.getElementById('farmerMobile').value = info.value;
    }
    if (info.name === 'state') {
      document.getElementById('baCodStateSelect').value = info.value;
      stateName = info.value;
      stateNameEn = info.value;
    }
    if (info.name === 'district') {
      document.getElementById('baCodDistrictSelect').value = info.value;
    }
    if (info.name === 'taluka') {
      document.getElementById('talukaName').value = info.value;
    }
    if (info.name === 'address') {
      document.getElementById('baAddress').value = info.value;
    }
    if (info.name === 'landmark') {
      document.getElementById('baLandmark').value = info.value;
    }
    if (info.name === 'pincode') {
      document.getElementById('baCodPincode').value = info.value;
    }
  } );
}

function resetPlaceOrderButton() {
  document.getElementById('ba-cod-place-btn').setAttribute('style', 'display:flex !important');
  displayBaCodOnlinePayButton('none');
}

function resetCodFooter() {
  document.getElementById('ba-cod-create-order-button').disabled = false;
  document.getElementById('ba-cod-create-order-online-button').disabled = false;
  document.getElementById('ba-cod-create-order-online-emi-button').disabled = false;
  document.getElementById('ba-cod-footer-total-amount').style.display = 'block';
  document.getElementById('ba-cod-footer-apply-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-footer-online-amount').style.display = 'block';
  document.getElementById('ba-cod-footer-online-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-footer-online-emi-amount').style.display = 'block';
  document.getElementById('ba-cod-footer-online-btn-emi-loader').style.display = 'none';
}

function resetCodConfirmationModal() {
  document.getElementById('ba-cod-confirm-no-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-confirm-yes-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-confirm-no-btn').disabled = false;
  document.getElementById('ba-cod-confirm-yes-btn').disabled = false;
  document.getElementById('baCodTriggerRecovery').disabled = false;

  document.getElementById('baCodOtpSubmitBtn').disabled = false;
  document.getElementById('baCodOtpCancelBtn').disabled = false;
}

function resetCodFormFields() {
  resetLocationFields();

  document.getElementById('farmerName').value = '';
  document.getElementById('farmerMobile').value = '';
  document.getElementById('baCodPincode').value = '';
  document.getElementById('baAddress').value = '';
  document.getElementById('baLandmark').value = '';
  document.getElementById('baPostOffice').value = '';

  // reset high risk product modal flag
  highRiskProductFlag = false;
  otpVerifyFlag = false;

  // reset cod order url
  baCodOrderUrl = '';
  baCodOrderNumber = '';
  baOnlinePaySuccess = false;
  baRazorpayOrderId = '';
  baRazorpayPaymentId = '';
  baRazorpayReferenceId = '';
  bharatxTransactionId = '';

  resetFormFieldsValidation();
}

function resetLocationFields() {
  stateId = '';
  districtId = '';
  stateName = '';
  stateNameEn = '';
  districtName = '';
  districtNameEn = '';
  talukaName = '';
  talukaNameEn = '';
  document.getElementById('baCodStateSelect').value = '';
  document.getElementById('baCodDistrictSelect').value = '';
  // document.getElementById('baCodStateSelectLabel').innerHTML = stateLabel;
  // document.getElementById('baCodDistrictSelect').innerHTML = districtLabel;
  // document.getElementById('baCodDistrictSelectLabel2').innerHTML = districtLabel;

  resetTalukaAndVillage();
}

function resetTalukaAndVillage() {
  document.getElementById('talukaName').value = '';
  document.getElementById('villageName').value = '';
}

function resetFormFieldsValidation() {
  document.getElementById('farmerName').classList.remove('ba-mandatory-field-border');
  document.getElementById('farmerMobile').classList.remove('ba-mandatory-field-border');
  document.getElementById('baCodPincode').classList.remove('ba-mandatory-field-border');
  document.getElementById('baCodStateSelect').classList.remove('ba-mandatory-field-border');
  document.getElementById('baCodDistrictSelect').classList.remove('ba-mandatory-field-border');
  document.getElementById('talukaName').classList.remove('ba-mandatory-field-border');
  document.getElementById('villageName').classList.remove('ba-mandatory-field-border');
  document.getElementById('baAddress').classList.remove('ba-mandatory-field-border');
  document.getElementById('baLandmark').classList.remove('ba-mandatory-field-border');

  document.getElementById('farmerNameRequired').style.display = 'none';
  document.getElementById('farmerMobileRequired').style.display = 'none';
  document.getElementById('baCodPincodeRequired').style.display = 'none';
  document.getElementById('baCodPincodeServiceableRequired').style.display = 'none';
  document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'none';
  document.getElementById('baCodStateSelectRequired').style.display = 'none';
  document.getElementById('baCodDistrictSelectRequired').style.display = 'none';
  document.getElementById('talukaNameRequired').style.display = 'none';
  document.getElementById('villageNameRequired').style.display = 'none';
  document.getElementById('baAddressRequired').style.display = 'none';
  document.getElementById('baLandmarkRequired').style.display = 'none';
}

function onSelectBoxStateChange(selectValue) {
  stateName = selectValue.options[selectValue.selectedIndex].text;
  stateNameEn = selectValue.options[selectValue.selectedIndex].value;
}

function setStateFromPincode(id, name, nameEn) {
  document.getElementById('baCodStateSelect').value = nameEn;
  stateName = name;
  stateNameEn = nameEn;
}

function setDistrictFromPincode(id, name, nameEn) {
  districtName = name;
  districtNameEn = nameEn;
  document.getElementById('baCodDistrictSelect').value = nameEn;
}

function setTalukaFromPincode(id, name, nameEn) {
  talukaName = name;
  talukaNameEn = nameEn;
  document.getElementById('talukaName').value = nameEn;
}

function onStateClick(id, name, nameEn) {
  // document.getElementById('baCodStateSelect').innerHTML = name.length > 18 ? name.slice(0,18) + '..' : name;
  // document.getElementById('baCodDistrictSelectLabel').innerHTML = districtLabel;
  stateId = id;
  stateName = name;
  stateNameEn = nameEn;
  districtId = '';
  districtName = '';
  districtNameEn = '';
  loadDistricts(id);
}

function onDistrictClick(id, name, nameEn) {
  districtId = id;
  districtName = name;
  districtNameEn = nameEn;
  // document.getElementById('baCodDistrictSelectLabel').innerHTML = name.length > 18 ? name.slice(0,18) + '..' : name;
}

function loadDistricts(stateId) {
  document.getElementById('ba-cod-district-loader').style.display = 'inline-block';
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`https://api-cache.leanagri.com/location/district_list/en/${stateId}/district_list.json`, requestOptions)
    .then(response => {
      if (response.status === 200) {
        response.json().then(result => {
          document.getElementById('ba-cod-district-loader').style.display = 'none';
          setDistricts(result.data);
        });
      } else {
        console.log('Unable to fetch district list');
        document.getElementById('ba-cod-district-loader').style.display = 'none';
      }
    }).catch(error => {
    document.getElementById('ba-cod-district-loader').style.display = 'none';
    console.log('error: ', error);
  });
}

function setDistricts(districts) {
  // const districtDiv = document.getElementById('baCodDistrictOptions');
  // replaceChildrenAlternative(districtDiv);
  //
  // for (let i=0; i < districts.length; i++) {
  //   let districtName;
  //   if (lang === 'en') {
  //     districtName = districts[i] ? districts[i].name_en : undefined;
  //   } else if (lang === 'mr') {
  //     districtName = districts[i] ? districts[i].name_mr : undefined;
  //   } else {
  //     districtName = districts[i] ? districts[i].name_hi : undefined;
  //   }
  //
  //   let districtOptionsBtn = document.createElement('button');
  //   districtOptionsBtn.className = 'dropdown-item';
  //   districtOptionsBtn.type = 'button';
  //   districtOptionsBtn.innerHTML = districtName;
  //   districtOptionsBtn.addEventListener("click", function(){ onDistrictClick(stateList[i].id, districtName, districts[i].name_en); });
  //   districtDiv.appendChild(districtOptionsBtn);
  // }
}

function onInputElementClick(fieldName) {
  let mobileValue = document.getElementById('farmerMobile').value;
  if (mobileValue && mobileValue.length === 10) {
    sendBaCodGEvents('BA_cart_phn', {
      'from_frag': currentUrl1,
      'ba_field_name': fieldName,
      'ba_phone_number': mobileValue
    });
  }
  if (fieldName === 'name' || fieldName === 'mobile') {
    let cartTotalValue = document.getElementById('ba-price-details-total-value').innerHTML;
    cartTotalValue = cartTotalValue.replace('₹ ', '');
    sendBaFbEvents('AddPaymentInfo', {currency: "INR", value: Number(cartTotalValue)});
  }
  sendBaCodGEvents('BA_address_clk', {
    'from_frag': currentUrl1,
    'ba_field_name': fieldName
  });
}

function sendBaCodGEvents(name, value) {
  try {
    gtag('event', name, value);
  } catch (error) {
    console.log('gtag error');
  }
}

function sendBaCodGAConversionEvents(name) {
  let mainItem = getBaCartMainItemDetails();
  let price = (mainItem.final_line_price/100);
  try {
    gtag('event', name, {
      currency: 'INR',
      value: price,
      items: [
        {
          item_id: mainItem.id,
          item_name: mainItem.title,
          quantity: document.getElementsByClassName('quantity__input')[0].value,
          price: price
        }
      ]
    });
  } catch (error) {
    console.log('gtag error');
  }
}

function sendBaCodGAConversionOrderedEvents(totalAmount, orderId) {
  let mainItem = getBaCartMainItemDetails();
  let price = (mainItem.final_line_price/100);
  try {
    gtag('event', 'purchase', {
      transaction_id: orderId,
      value: totalAmount,
      currency: 'INR',
      items: [
        {
          item_id: mainItem.id,
          item_name: mainItem.title,
          quantity: document.getElementsByClassName('quantity__input')[0].value,
          price: price
        }
      ]
  });
  } catch (error) {
    console.log('gtag error');
  }
}

function sendBaFbEvents(name, value) {
  let mainItem = getBaCartMainItemDetails();
  try {
    // fbq('track', 'Purchase', {currency: "INR", value: createOrderTotalValue});
    value['content_ids'] = [mainItem.id];
    value['content_name'] = mainItem.title;
    value['content_type'] = 'product_group';
    fbq('track', name, value);
  } catch (error) {
    console.log('fbq error');
  }
}

function loadBaLocation(value) {
  if (value.length === 6) {
    fetch(`https://shopify-krushidukan.leanagri.com/pincode_mapping/en/pincode/${value}/pincode.json`)
      .then(response => {
        if (response.status === 200) {
          response.json().then( result => {
            if (result.data) {setPincodeLocation(result.data);}
          });
        } else {
          resetTalukaAndVillage();
          console.log('Unable to get location');
        }
      }).catch(error => {
      console.log('Unable to get pincode location: ', error);
    });
  }
}

function setPincodeLocation(data) {
  resetLocationFields();
  // const updateElement = (elementId, dataItem) => {
  //   if (dataItem?.id && dataItem?.name) {
  //     document.getElementById(elementId).value = dataItem[langKey] || dataItem.name;
  //   }
  // };
  const langKey = `name_${lang}`;
  // commented code to update taluka and village values
  // updateElement('talukaName', data?.taluka);
  // updateElement('villageName', data?.village);

  ['state', 'district', 'taluka'].forEach((type) => {
    const dataItem = data[type];
    if (dataItem) {
      let name = dataItem[langKey] || dataItem.name;
      if (type === 'state') {
        setStateFromPincode(dataItem.id, name, dataItem.name_en)
      } else if (type === 'district') {
        setDistrictFromPincode(dataItem.id, name, dataItem.name_en);
      } else {
        setTalukaFromPincode(dataItem.id, name, dataItem.name_en);
      }
    }
  });
}

function checkPincodeServiceability(value) {
  if (String(blacklistedPincodes).indexOf(value) > -1) {
    document.getElementById('ba-cod-place-btn').setAttribute('style', 'display:none !important');
    displayBaCodOnlinePayButton('block');
    document.getElementById('baCodPincode').classList.add('ba-mandatory-field-border');
    document.getElementById('baCodPincodeServiceableRequired').style.display = 'block';
    sendBaCodGEvents('ba_cod_pincode_error', { 'pincode': value });
  } else {
    displayBaCodOnlinePayButton('none');
    document.getElementById('ba-cod-place-btn').setAttribute('style', 'display:flex !important');
  }
}

function checkWhiteListedPincodes(value) {
  let whitelistedPincodes = getWhitelistedPincodes();
  if (whitelistedPincodes.length > 0) {
    if (String(whitelistedPincodes).indexOf(value) > -1) {
      checkPincodeServiceability(value);
    } else {
      document.getElementById('baCodPincode').classList.add('ba-mandatory-field-border');
      document.getElementById('baCodPincodeNotWhitelistRequired').innerHTML = pincodeNotWhitelistRequiredLabel.replace('pincode', value);
      document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'block';
      sendBaCodGEvents('ba_cod_pincode_error', { 'pincode': value });
    }
  } else {
    checkPincodeServiceability(value);
  }
}

function validateWhiteListedPincode(value) {
  let whitelistedPincodes = getWhitelistedPincodes();
  return String(whitelistedPincodes).indexOf(value) > -1;
}

function displayPincodeError(pincode) {
  document.getElementById('ba-cod-place-btn').setAttribute('style', 'display:none !important');
  displayBaCodOnlinePayButton('block');
  pincode.classList.add('ba-mandatory-field-border');
  document.getElementById('baCodPincodeServiceableRequired').style.display = 'block';
  sendBaCodGEvents('ba_cod_pincode_error', { 'pincode': pincode.value });
}

function checkAndRemovePincodeError(pincode) {
  if (String(blacklistedPincodes).indexOf(pincode.value) === -1) {
    displayBaCodOnlinePayButton('none');
    document.getElementById('ba-cod-place-btn').setAttribute('style', 'display:flex !important');
    pincode.classList.remove('ba-mandatory-field-border');
    document.getElementById('baCodPincodeServiceableRequired').style.display = 'none';
  }
}

function baFormValidationErrorRest() {
  document.getElementById('baCodTriggerRecovery').disabled = false;
  document.getElementById('ba-cod-create-order-button').disabled = false;
  document.getElementById('ba-cod-create-order-online-button').disabled = false;
  document.getElementById('ba-cod-create-order-online-emi-button').disabled = false;
  sendBaCodGEvents('ba_cod_order_validate_error', { 'field': 'addressFields' });
}

function getBaCodProductData() {
  return JSON.parse(localStorage.getItem('baCodProductData')) || {};
}

function getWhitelistedPincodes() {
  let data = getBaCodProductData();
  return data.pincode_whitelist || [];
}

function displayBaRecoveryDiscount() {
  let createOrderDiscount = document.getElementById('ba-price-details-discount-value').innerHTML;
  createOrderDiscount = createOrderDiscount.replace('-₹ ', '');
  if (baRecoveryOrder && !Number(createOrderDiscount) > 0) {
    document.getElementById('ba-cod-recovery-discount-btn').click();
  } else {
    document.getElementById('baCodFormClose').click();
  }
}

function applyBaRecoveryDiscount(closeModal) {
  let mainItem = getBaCartMainItemDetails();
  let fivePercentAmt = Number(mainItem.final_line_price)/100;
  // changed 5 % to 2 %
  fivePercentAmt = ((fivePercentAmt * 0.02).toFixed(2)).toString();
  baRecoveryApplied = true;
  localStorage.setItem('BA_COD_Coupon_code', 'BA Recovery Discount');

  let bundleCartOrderTotalValue = getBundlesTotalPrice();
  let mainItemPrice = Number(mainItem.final_line_price)/100;
  mainItemPrice = mainItemPrice + bundleCartOrderTotalValue - fivePercentAmt;
  mainItemPrice = Number(mainItemPrice);

  document.getElementById('ba-price-details-discount-value').innerHTML = `-₹ ${fivePercentAmt.replace('.00', '')}`;
  document.getElementById('ba-price-details-discount-row').style.display = 'flex';

  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${mainItemPrice.toFixed(2)}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${mainItemPrice.toFixed(2)}`;
  updateOnlinePaymentPrice(mainItemPrice.toFixed(2));
  if (closeModal) {
    document.getElementById('baRecoveryClose').click();
    sendBaCodGEvents('ba_cod_order_recovery_apply', { 'amount': fivePercentAmt });
  }
}

function closeBaRecoveryDiscountAndForm() {
  baRecoveryOrder = false;
  document.getElementById('baCodFormClose').click();
  document.getElementById('baRecoveryClose').click();
  sendBaCodGEvents('ba_cod_order_recovery_cancel', {});
}

function getBaCartMainItemDetails() {
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;
  return items[0];
}

function replaceChildrenAlternative(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

// function loadHighRiskOrders() {
//   fetch(`https://shopify-krushidukan.leanagri.com/high-risk-products/en/products/risk_products.json`)
//     .then(response => {
//       if (response.status === 200) {
//         response.json().then( result => {
//           if (result.data && result.data.high_risk_products) {
//             highRiskProducts = result.data.high_risk_products;
//             checkHighRiskAndOTPVerifyOrder();
//           } else {
//             highRiskProducts = [];
//           }
//         });
//       }
//     }).catch(error => {
//     console.log('Unable to get high risk products: ', error);
//   });
// }

function checkHighRiskAndOTPVerifyOrder() {
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;
  let riskVariantId = items[0].id;

  highRiskProducts = [];
  otpVerifyProducts = [];

  let data = getBaCodProductData();
  if (data.verification_popup_variants && data.verification_popup_variants.length > 0) {
    highRiskProducts = data.verification_popup_variants;
  }
  if (highRiskProducts && highRiskProducts.indexOf(String(riskVariantId)) > -1) {
    highRiskProductFlag = true;
  }

  if (data.otp_verification_variants && data.otp_verification_variants.length > 0) {
    otpVerifyProducts = data.otp_verification_variants;
  }
  if (otpVerifyProducts && otpVerifyProducts.indexOf(String(riskVariantId)) > -1) {
    otpVerifyFlag = true;
  }
}

function displayConfirmationModal() {
  let codAmount = document.getElementById('ba-price-details-total-value').innerHTML;
  codAmount = codAmount.replace('₹ ', '');
  codAmount = Number(codAmount).toFixed(2);
  document.getElementById('ba-cod-confirm-txt-div').innerHTML = confirmModalTextLabel.replace('###', codAmount);

  let confirmationModal = document.getElementById('ba-confirmation-modal-div');
  let otpModal = document.getElementById('ba-confirmation-otp-div');

  if (otpVerifyFlag) {
    otpModal.style.display = 'block';
    confirmationModal.style.display = 'none';
    onDisplayBaCodOTPModal();
  } else if (highRiskProductFlag) {
    otpModal.style.display = 'none';
    confirmationModal.style.display = 'block';
  }

  document.getElementById('ba-confirmation-btn').click();
}

function onBaConfirmationModalYes() {
  let obj = JSON.parse(localStorage.getItem('baProcessOrder'));
  document.getElementById('ba-cod-confirm-no-btn').disabled = true;
  document.getElementById('ba-cod-confirm-yes-btn').disabled = true;
  document.getElementById('ba-cod-confirm-yes-btn-loader').style.display = 'inline-block';
  document.getElementById('ba-confirmation-close').click();
  resetCodConfirmationModal();
  baProcessOrder(obj.baO2, obj.createOrderTotalValue, obj.createOrderLineItems, obj.mobileValue, obj.type);
}

function onBaConfirmationModalNo() {
  document.getElementById('ba-cod-confirm-no-btn').disabled = true;
  document.getElementById('ba-cod-confirm-yes-btn').disabled = true;
  document.getElementById('ba-cod-confirm-no-btn-loader').style.display = 'inline-block';
  document.getElementById('ba-confirmation-close').click();
  resetCodFooter();
  resetCodConfirmationModal();
}

// OTP functionalities

function onBaOTPModalCancel() {
  document.getElementById('ba-confirmation-close').click();
  resetCodFooter();
  resetCodConfirmationModal();
}
function onDisplayBaCodOTPModal() {
  sendBaCodOtp();
  let timerElement = document.getElementById('baCodOtpTimer');
  let resendButton = document.getElementById('baCodResendOtpBtn');
  let submitButton = document.getElementById('baCodOtpSubmitBtn');
  let cancelButton = document.getElementById('baCodOtpCancelBtn');
  let time = 29; // 29 seconds countdown

  const startTimer = () => {
    const countdown = setInterval(() => {
      if (time <= 0) {
        clearInterval(countdown);
        timerElement.textContent = '00:00';
        resendButton.disabled = false;
        resendButton.style.border = '1px solid #0A8047';
        resendButton.style.color = '#0A8047';
      } else {
        let seconds = time % 60;
        timerElement.textContent = `00:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
      }
    }, 1000);
  };

  startTimer();

  resendButton.addEventListener('click', () => {
    time = 29; // reset timer
    startTimer();
    resendButton.disabled = true;
    resendButton.style.border = '1px solid #ADB2C0';
    resendButton.style.color = '#ADB2C0';
    sendBaCodOtp();
  });

  // Automatic focus shift for OTP input
  const otpInputs = document.querySelectorAll('.ba-cod-otp');

  otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1) {
        if (index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value.length === 0) {
        if (index > 0) {
          otpInputs[index - 1].focus();
        }
      }
    });
  });
}

function sendBaCodOtp() {
  let headers = new Headers();
  headers.append("UnxsUBYk", "OerRvTJlrQLc0A==");
  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers
  };

  let phone = document.getElementById('farmerMobile').value;
  phone = `+91${phone}`;

  fetch(`https://lcrks.leanagri.com/api/v2/getOtp/?phone_number=${phone}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('OTP sent');
    }).catch(error => console.log('error', error));
}

function onConfirmationModalClick(value) {
  // document.getElementById('ba-cod-confirm-no-btn').disabled = true;
  // document.getElementById('ba-cod-confirm-yes-btn').disabled = true;
  // if (value === 'yes') {
  //   document.getElementById('ba-cod-confirm-yes-btn-loader').style.display = 'inline-block';
  // } else {
  //   document.getElementById('ba-cod-confirm-no-btn-loader').style.display = 'inline-block';
  // }
  //
  // fetch(`https://lcrks.leanagri.com/third_parties/shopify/api/v1/shopify_confirmation_pop/?order_id=${baCodOrderNumber}&confirmation=${value}`)
  //   .then(response => {
  //     if (response.status === 200) {
  //       if (value === 'yes') {
  //         document.getElementById('ba-confirmation-close').click();
  //         document.getElementById('ba-cod-form-overlay-loader').style.display = 'block';
  //         resetCodConfirmationModal();
  //         // window.open(baCodOrderUrl, '_self');
  //         baAuthenticateOrderPageUrlAndRoute();
  //       } else {
  //         document.getElementById('ba-confirmation-close').click();
  //         resetCodFooter();
  //         resetCodConfirmationModal();
  //       }
  //     }
  //   }).catch(error => {
  //   console.log('Unable to update confirm popup: ', error);
  // });
}

function loadProductBundlesOldFunction() {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://lcrks.leanagri.com/third_parties/shopify_cod_app/api/v1/cod-bundles/?variant_id=${bundleVariant}&lang=${lang}`, requestOptions)
    .then(response => {
      if (response.status === 200) {
        response.json().then(result => {
          if (result && result.data) {
            setBaProductBundles(result.data);
          } else {
            document.getElementById('ba-cod-bundle-div').style.display = 'none';
          }
        });
      } else {
        console.log('Unable to fetch web bundle products');
        document.getElementById('ba-cod-bundle-div').style.display = 'none';
      }
    }).catch(error => {
    console.log('error: ', error);
    document.getElementById('ba-cod-bundle-div').style.display = 'none';
  });
}

function baAuthenticateOrderPageUrlAndRoute() {
  let mobileAuthValue = document.getElementById('farmerMobile').value;
  let ospAuthBody = `phone=${mobileAuthValue}&order_number=${baCodOrderNumber}`

  fetch(baCodOrderUrl, {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": ospAuthBody.toString(),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(response => {
    console.log(response)
    let baCodOrderFinalUrl = baCodOrderUrl.split('/authenticate')[0];
    window.open(baCodOrderFinalUrl, '_self');
  });
}


// not used functions

calculateBaCodDeliveryDates();
function calculateBaCodDeliveryDates() {
  let someDate = new Date();
  let numberOfDaysToAdd = 4;
  let result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  result = new Date(result);
  getBaCodDeliveryFormatDate(result);
}

function getBaCodDeliveryFormatDate(dDate) {
  dDate = new Date(dDate);
  let weekEn = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let weekHi = new Array('रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार');
  let weekMr = new Array('रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवारी', 'शुक्रवार', 'शनिवार');
  let monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthHi = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'];
  let monthMr = ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'];
  let day = '';
  let month = '';
  let currentUrl = window.location.href;
  currentUrl = currentUrl.toString();
  if (currentUrl.indexOf('.com/en') > -1) {
    day = weekEn[dDate.getDay()];
    month = monthEn[dDate.getMonth()];
    document.getElementById('ba-cod-delivery-days-label').innerHTML = ' FREE Delivery';
  } else if (currentUrl.indexOf('.com/mr') > -1) {
    day = weekMr[dDate.getDay()];
    month = monthMr[dDate.getMonth()];
    document.getElementById('ba-cod-delivery-days-label').innerHTML = ' फ्री डिलिव्हरी';
  } else {
    day = weekHi[dDate.getDay()];
    month = monthHi[dDate.getMonth()];
    document.getElementById('ba-cod-delivery-days-label').innerHTML = ' फ्री डिलीवरी';
  }
  document.getElementById('ba-cod-delivery-date').innerHTML = day + ', ' + dDate.getDate() + ' ' + month;
}

function applyCouponCodes_OLDFunction(couponCode, couponObj, scrollFlag, showPopup) {
  document.getElementById('ba-cod-discount-loader').style.display = 'block';
  if (!previousCouponCode) {
    previousCouponCode = couponCode;
  }
  let shopify_features_script = document.querySelector("script[id='shopify-features']");
  let shopify_features_json = JSON.parse(shopify_features_script.innerHTML);

  // console.log(shopify_features_json);

  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;
  let lineItems = [];

  // Resetting price details card discount and total amount
  document.getElementById('ba-price-details-discount-value').innerHTML = `0`;
  document.getElementById('ba-price-details-discount-row').style.display = 'none';


  // Resetting total amount with the cart and bundles
  let bundleCartOrderTotalValue = getBundlesTotalPrice();
  let priceDetailsTotalValueWithoutBundle = Number(baUpdateCart.total_price/100);
  let priceDetailsTotalValue = Number(baUpdateCart.total_price/100);
  priceDetailsTotalValue = priceDetailsTotalValue + bundleCartOrderTotalValue;

  sendBaCodGEvents('BA_cart_cc_clk', {
    'from_frag': currentUrl1,
    'discount_coupon': couponCode,
    'order_value': priceDetailsTotalValueWithoutBundle,
  });

  document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
  document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${priceDetailsTotalValue.toFixed(2)}`;
  updateOnlinePaymentPrice(priceDetailsTotalValue.toFixed(2));

  if (previousCouponCode) {
    let activeCouponEl = document.getElementById(previousCouponCode);
    if (activeCouponEl) {
      activeCouponEl.style.display = 'block';
    }
  }

  let activeCouponCardEl = document.getElementById('ba-active-coupon');
  if (activeCouponCardEl) {
    activeCouponCardEl.style.display = 'none';
  }

  for (let i = 0; i < items.length; i++) {
    let variant = {'variant_id': items[i].variant_id, 'quantity': items[i].quantity, 'properties': {}};
    lineItems.push(variant);
  }

  let payload = {
    "checkout": {
      "discount_code": couponCode,
      "line_items": lineItems,
      "presentment_currency": "INR"
    }
  }

  fetch('/wallets/checkouts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Basic ' + btoa(shopify_features_json.accessToken)
    },
    body: JSON.stringify(payload)
  }).then(response => {
    if (response.status === 201) {
      response.json().then(result => {
        if (result.checkout.applied_discount.applicable) {
          // console.log('Wallet values: ', result);
          document.getElementById(couponCode).style.display = 'none';
          document.getElementById('ba-active-coupon').style.display = 'block';
          document.getElementById('ba-cod-saved-amount').innerHTML = `${couponSavedLabel} ₹${result.checkout.total_discount_amount.replace('.00', '')}`;
          document.getElementById('ba-cod-saved-amount-line2').innerHTML = couponWithDiscountLabel;
          document.getElementById('ba-cod-applied-coupon-content').innerHTML = `${couponCode} ${couponAppliedLabel}`;

          document.getElementById('ba-price-details-discount-value').innerHTML = `-₹ ${result.checkout.total_discount_amount.replace('.00', '')}`;

          bundleCartOrderTotalValue = getBundlesTotalPrice();
          let priceDetailsWalletTotalValue = Number(result.checkout.total_price.replace('.00', ''));
          priceDetailsWalletTotalValue = priceDetailsWalletTotalValue + bundleCartOrderTotalValue;

          document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${priceDetailsWalletTotalValue.toFixed(2)}`;
          document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${priceDetailsWalletTotalValue.toFixed(2)}`;
          updateOnlinePaymentPrice(priceDetailsWalletTotalValue.toFixed(2));
          document.getElementById('ba-price-details-discount-row').style.display = 'flex';

          previousCouponCode = couponCode;
          document.getElementById('ba-cod-discount-loader').style.display = 'none';

          if (scrollFlag) {
            document.getElementById('ba-active-coupon').scrollIntoView({
              behavior: 'smooth'
            });
          }

          localStorage.setItem('BA_COD_Coupon_code', couponCode);
          // setting recovery discount applied to false / reset value
          baRecoveryApplied = false;

          if (showPopup) {
            // openSmileyModal();
          }
        } else {
          console.log('Coupon not applicable');
          document.getElementById('ba-cod-discount-loader').style.display = 'none';
          localStorage.removeItem('BA_COD_Coupon_code');
        }
      });
    } else {
      console.log('Unable to fetch wallet');
      document.getElementById('ba-cod-discount-loader').style.display = 'none';
      localStorage.removeItem('BA_COD_Coupon_code');
    }
  }).catch(error => {
    console.log('error: ', error);
    document.getElementById('ba-cod-discount-loader').style.display = 'none';
    localStorage.removeItem('BA_COD_Coupon_code');
  });
}



// if (!(taluka.value)) {
//   taluka.classList.add('ba-mandatory-field-border');
//   document.getElementById('talukaNameRequired').style.display = 'block';
// if (!validationError) {baScrollToId('talukaName');}
//   validationError = true;
// }

// if (!(village.value)) {
//   village.classList.add('ba-mandatory-field-border');
//   document.getElementById('villageNameRequired').style.display = 'block';
// if (!validationError) {baScrollToId('villageName');}
//   validationError = true;
// }

// if (!(landmark.value)) {
//   landmark.classList.add('ba-mandatory-field-border');
//   document.getElementById('baLandmarkRequired').style.display = 'block';
// if (!validationError) {baScrollToId('baLandmark');}
//   validationError = true;
// }

// <div className="modal-footer ba-cod-footer">
//   <button id="ba-cod-create-order-button"
//           className="row w-100 ba-cod-create-order-button d-flex align-items-center justify-content-between"
//           onClick="createOrderObject()">
//     <div className="col-6 p-0">
//       <div id="ba-cod-footer-delivery-label" className="ba-cod-footer-delivery-label"></div>
//       <div id="ba-cod-footer-total-amount" className="ba-cod-footer-total"></div>
//     </div>
//     {% comment %}
//     <div className="col-4">{% endcomment %}
//       {% comment %}
//       <div className="ba-cod-footer-line-separator"> |</div>
//       {% endcomment %}
//       {% comment %}</div>
//     {% endcomment %}
//     <div className="col-6 p-0">
//       <div id="ba-cod-footer-place-order" className="ba-cod-footer-place-order"></div>
//       <div id="ba-cod-footer-apply-btn-loader" className="spinner-border ba-cod-main-divs-spinner text-secondary ml-2"
//            role="status" style="display: none; color: white!important;">
//         <span className="sr-only">Loading...</span>
//       </div>
//     </div>
//   </button>
//   {% comment %}
//   <button type="button" onClick="createOrderObject()" className="btn btn-primary">Understood</button>
//   {% endcomment %}
// </div>
