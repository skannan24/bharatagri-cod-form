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
      console.log("API call for number:", latestNumber);
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
          document.getElementById('ba-price-details-total-value').innerHTML = `₹ ${priceDetailsTotalValue}`;
          document.getElementById('ba-cod-footer-total-amount').innerHTML = `₹ ${priceDetailsTotalValue}`;
          document.getElementById('ba-cod-main-product-price0').innerHTML = `₹ ${priceDetailsTotalValueWithoutBundle}`;
          document.getElementById('ba-cod-product-price0').innerHTML = `₹ ${priceDetailsTotalValueWithoutBundle}`;
          document.getElementById('ba-cod-main-product-quantity0').innerHTML = quantityValue;
          loadCouponCodes();
        }
      );
  }
}

function resetCodFooter() {
  document.getElementById('ba-cod-create-order-button').disabled = false;
  document.getElementById('ba-cod-footer-place-order').style.display = 'block';
  document.getElementById('ba-cod-footer-apply-btn-loader').style.display = 'none';
}

function resetCodFormFields() {
  resetLocationFields();

  document.getElementById('farmerName').value = '';
  document.getElementById('farmerMobile').value = '';
  document.getElementById('alternateMobile').value = '';
  document.getElementById('baCodPincode').value = '';
  document.getElementById('baAddress').value = '';
  document.getElementById('baLandmark').value = '';
  document.getElementById('baPostOffice').value = '';

  resetFormFieldsValidation();
}

function resetLocationFields() {
  stateId = '';
  districtId = '';
  stateName = '';
  stateNameEn = '';
  districtName = '';
  districtNameEn = '';
  document.getElementById('baCodStateSelect').innerHTML = stateLabel;
  document.getElementById('baCodStateSelectLabel').innerHTML = stateLabel;
  document.getElementById('baCodDistrictSelectLabel').innerHTML = districtLabel;
  document.getElementById('baCodDistrictSelectLabel2').innerHTML = districtLabel;

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
  document.getElementById('baCodStateSelectRequired').style.display = 'none';
  document.getElementById('baCodDistrictSelectRequired').style.display = 'none';
  document.getElementById('talukaNameRequired').style.display = 'none';
  document.getElementById('villageNameRequired').style.display = 'none';
  document.getElementById('baAddressRequired').style.display = 'none';
  document.getElementById('baLandmarkRequired').style.display = 'none';
}

function onStateClick(id, name, nameEn) {
  document.getElementById('baCodStateSelect').innerHTML = name.length > 18 ? name.slice(0,18) + '..' : name;
  document.getElementById('baCodDistrictSelectLabel').innerHTML = districtLabel;
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
  document.getElementById('baCodDistrictSelectLabel').innerHTML = name.length > 18 ? name.slice(0,18) + '..' : name;
}

function loadDistricts(stateId) {
  document.getElementById('ba-cod-district-loader').style.display = 'inline-block';
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`https://s3.ap-south-1.amazonaws.com/cached-bharatagri-apis/location/district_list/en/${stateId}/district_list.json`, requestOptions)
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
  const districtDiv = document.getElementById('baCodDistrictOptions');
  replaceChildrenAlternative(districtDiv);

  for (let i=0; i < districts.length; i++) {
    let districtName;
    if (lang === 'en') {
      districtName = districts[i] ? districts[i].name_en : undefined;
    } else if (lang === 'mr') {
      districtName = districts[i] ? districts[i].name_mr : undefined;
    } else {
      districtName = districts[i] ? districts[i].name_hi : undefined;
    }

    let districtOptionsBtn = document.createElement('button');
    districtOptionsBtn.className = 'dropdown-item';
    districtOptionsBtn.type = 'button';
    districtOptionsBtn.innerHTML = districtName;
    districtOptionsBtn.addEventListener("click", function(){ onDistrictClick(stateList[i].id, districtName, districts[i].name_en); });
    districtDiv.appendChild(districtOptionsBtn);
  }
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
    fetch(`https://s3.ap-south-1.amazonaws.com/shopify-krushidukan-apis/pincode_mapping/en/pincode/${value}/pincode.json`)
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
        ? onStateClick(dataItem.id, name, dataItem.name_en)
        : onDistrictClick(dataItem.id, name, dataItem.name_en);
    }
  });
}

function checkPincodeServiceability(value) {
  if (String(blacklistedPincodes).indexOf(value) > -1) {
    document.getElementById('baCodPincode').classList.add('ba-mandatory-field-border');
    document.getElementById('baCodPincodeServiceableRequired').style.display = 'block';
  }
}

function replaceChildrenAlternative(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}
