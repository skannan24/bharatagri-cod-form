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
  return 30;
}

function updateOnlinePaymentPrice(price) {
  let baOnlineDiscount = getOnlinePayDiscountAmount();
  let baOnlineAmount = Number(price)- baOnlineDiscount;
  if (price.toString().includes('.')) {
    baOnlineAmount = baOnlineAmount.toFixed(2);
  }
  document.getElementById('ba-cod-footer-online-amount').innerHTML = `₹ ${baOnlineAmount}`;
  document.getElementById('baCodFooterOnlineDiscount').innerHTML = `₹${baOnlineDiscount} ${baOnlinePaymentDiscountLabel}`;
}

function getOnlinePaymentPrice() {
  let onlinePrice = document.getElementById('ba-cod-footer-online-amount').innerHTML;
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

function resetCodFooter() {
  document.getElementById('ba-cod-create-order-button').disabled = false;
  document.getElementById('ba-cod-create-order-online-button').disabled = false;
  document.getElementById('ba-cod-footer-total-amount').style.display = 'block';
  document.getElementById('ba-cod-footer-apply-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-footer-online-amount').style.display = 'block';
  document.getElementById('ba-cod-footer-online-btn-loader').style.display = 'none';
}

function resetCodConfirmationModal() {
  document.getElementById('ba-cod-confirm-no-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-confirm-yes-btn-loader').style.display = 'none';
  document.getElementById('ba-cod-confirm-no-btn').disabled = false;
  document.getElementById('ba-cod-confirm-yes-btn').disabled = false;
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

  // reset cod order url
  baCodOrderUrl = '';
  baCodOrderNumber = '';
  baOnlinePaySuccess = false;

  resetFormFieldsValidation();
}

function resetLocationFields() {
  stateId = '';
  districtId = '';
  stateName = '';
  stateNameEn = '';
  districtName = '';
  districtNameEn = '';
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

function onStateClick(id, name, nameEn) {
  console.log('district set here');
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

function sendBaFbEvents(name, value) {
  try {
    // fbq('track', 'Purchase', {currency: "INR", value: createOrderTotalValue});
    value['content_ids'] = ['{{ product.id }}'];
    value['content_name'] = "{{ product.title }}";
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

  ['state', 'district'].forEach((type) => {
    const dataItem = data[type];
    if (dataItem) {
      let name = dataItem[langKey] || dataItem.name;
      type === 'state'
        ? setStateFromPincode(dataItem.id, name, dataItem.name_en)
        : setDistrictFromPincode(dataItem.id, name, dataItem.name_en);
    }
  });
}

function checkPincodeServiceability(value) {
  if (String(blacklistedPincodes).indexOf(value) > -1) {
    document.getElementById('baCodPincode').classList.add('ba-mandatory-field-border');
    document.getElementById('baCodPincodeServiceableRequired').style.display = 'block';
    sendBaCodGEvents('ba_cod_pincode_error', { 'pincode': value });
  }
}

function checkWhiteListedPincodes(value) {
  let data = getBaCodProductData();
  if (data.pincode_whitelist && data.pincode_whitelist.length > 0) {
    if (String(data.pincode_whitelist).indexOf(value) > -1) {
      console.log('');
    } else {
      document.getElementById('baCodPincode').classList.add('ba-mandatory-field-border');
      document.getElementById('baCodPincodeNotWhitelistRequired').innerHTML = pincodeNotWhitelistRequiredLabel.replace('pincode', value);
      document.getElementById('baCodPincodeNotWhitelistRequired').style.display = 'block';
      sendBaCodGEvents('ba_cod_pincode_error', { 'pincode': value });
    }
  } else {
    checkPincodeServiceability(value)
  }
}

function validateWhiteListedPincode(value) {
  let data = getBaCodProductData();
  return String(data.pincode_whitelist).indexOf(value) > -1;
}

function getBaCodProductData() {
  return JSON.parse(localStorage.getItem('baCodProductData')) || {};
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
  fivePercentAmt = ((fivePercentAmt * 0.05).toFixed(2)).toString();
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

function loadHighRiskOrders() {
  fetch(`https://shopify-krushidukan.leanagri.com/high-risk-products/en/products/risk_products.json`)
    .then(response => {
      if (response.status === 200) {
        response.json().then( result => {
          if (result.data && result.data.high_risk_products) {
            highRiskProducts = result.data.high_risk_products;
            checkHighRiskOrder();
          } else {
            highRiskProducts = [];
          }
        });
      }
    }).catch(error => {
    console.log('Unable to get high risk products: ', error);
  });
}

function checkHighRiskOrder() {
  let baUpdateCart = JSON.parse(localStorage.getItem('baUpdateCartResponse'));
  let items = baUpdateCart.items;
  let riskVariantId = items[0].id;

  highRiskProducts = [];

  let data = getBaCodProductData();
  if (data.verification_popup_variants && data.verification_popup_variants.length > 0) {
    highRiskProducts = data.verification_popup_variants;
  }
  if (highRiskProducts && highRiskProducts.indexOf(String(riskVariantId)) > -1) {
    highRiskProductFlag = true;
  }
}

function onConfirmationModalClick(value) {
  document.getElementById('ba-cod-confirm-no-btn').disabled = true;
  document.getElementById('ba-cod-confirm-yes-btn').disabled = true;
  if (value === 'yes') {
    document.getElementById('ba-cod-confirm-yes-btn-loader').style.display = 'inline-block';
  } else {
    document.getElementById('ba-cod-confirm-no-btn-loader').style.display = 'inline-block';
  }

  fetch(`https://lcrks.leanagri.com/third_parties/shopify/api/v1/shopify_confirmation_pop/?order_id=${baCodOrderNumber}&confirmation=${value}`)
    .then(response => {
      if (response.status === 200) {
        if (value === 'yes') {
          document.getElementById('ba-confirmation-close').click();
          document.getElementById('ba-cod-form-overlay-loader').style.display = 'block';
          resetCodConfirmationModal();
          // window.open(baCodOrderUrl, '_self');
          baAuthenticateOrderPageUrlAndRoute();
        } else {
          document.getElementById('ba-confirmation-close').click();
          resetCodFooter();
          resetCodConfirmationModal();
        }
      }
    }).catch(error => {
    console.log('Unable to update confirm popup: ', error);
  });
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
