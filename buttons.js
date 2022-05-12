// 2nd page js
// js for the shares checkboxes
let shares_value = document.querySelector('.share_option_value')
let checkbox = document.querySelectorAll('.share_checkbox')
let totalPrice = document.querySelector('#total_price')
let sharesAmount = document.querySelector('#share_amount')
let numberShare = document.querySelector('#number_share')
let premium = document.querySelector('#premium')
const checkexists = () => {
  let a = false
  checkbox.forEach((check) => {
    if (check.checked) {
      a = true
    }
  })
  return a
}
const checkexists2 = () => {
  let a = false
  checkbox2.forEach((check) => {
    if (check.checked) {
      a = true
    }
  })
  return a
}
const checkexists3 = () => {
  let checkbox3 = document.querySelectorAll('.abyssinia_choice_checkbox')
  let a = false
  checkbox3.forEach((check) => {
    if (check.checked) {
      a = true
    }
  })
  return a
}
const checkexists5 = () => {
  let a = false
  let checkbox5 = document.querySelectorAll('.dashen_choice_checkbox')
  checkbox5.forEach((check) => {
    if (check.checked) {
      a = true
    }
  })
  return a
}
const uncheckall1 = (type) => {
  checkbox.forEach((check) => {
    if (type === check.dataset.type) {
    } else {
      // console.log(check.dataset.type)
      check.checked = false
    }
  })
}
const referalNameValue =()=>{
let toggle = document.querySelector('.toggle__input')
if (toggle.checked){
  let referNameInput = document.querySelector("#referal-name-input")
  return referNameInput.value
}else{
  let referNamePlaceholder = document.querySelector("#refered_name")
  return referNamePlaceholder.placeholder
}
}
const referalCodeValue =()=>{
  let toggle = document.querySelector('.toggle__input')
  if (toggle.checked){
    let referCodePlaceholder = document.querySelector("#refered_code")
    return referCodePlaceholder.placeholder
  }else{
    let referCodeInput = document.querySelector("#referal-code-input")
    return referCodeInput.value
    
  }
  }
// uncheckall()
checkbox.forEach((check) => {
  check.addEventListener('change', () => {
    premium.placeholder = 5 * parseInt(numberShare.value)
    sharesAmount.placeholder = check.dataset.value * parseInt(numberShare.value)
    totalPrice.placeholder =
      check.dataset.value * parseInt(numberShare.value) +
      5 * parseInt(numberShare.value)
    shares_value.style.display = 'block'
    uncheckall1(check.dataset.type)
  })
  // console.log()
})
uncheckall1()
let checkbox2 = document.querySelectorAll('.intpay_checkbox')
const uncheckall2 = (type) => {
  checkbox2.forEach((check) => {
    if (type === check.dataset.type) {
    } else {
      // console.log(check.dataset.type)
      check.checked = false
    }
  })
}
const whichcheck1 = () => {
  let checkbox = document.querySelectorAll('.share_checkbox')
  let a
  checkbox.forEach((check) => {
    if (check.checked) {
      a = check.dataset.value
    }
  })
  return a
}
const whichcheck2 = () => {
  let checkbox2 = document.querySelectorAll('.intpay_checkbox')
  // return "yes"
  let a
  checkbox2.forEach((check) => {
    if (check.checked) {
      a = check.dataset.type
    }
  })
  return a
}
const whichcheck3 = () => {
  let checkbox3 = document.querySelectorAll('.abyssinia_choice_checkbox')
  // return "yes"
  let a
  checkbox3.forEach((check) => {
    if (check.checked) {
      a = check.dataset.type
    }
  })
  return a
}
const whichcheck5 = () => {
  let checkbox5 = document.querySelectorAll('.dashen_choice_checkbox')
  // return "yes"
  let a
  checkbox5.forEach((check) => {
    if (check.checked) {
      a = check.dataset.type
    }
  })
  return a
}
// uncheckall()
checkbox2.forEach((check) => {
  check.addEventListener('change', () => {
    uncheckall2(check.dataset.type)
    document.querySelector('.percentage-error2').style.display = 'none'

    let box = document.querySelector('.payment_cards_wrapper')
    if (check.dataset.type == 'abyssinia') {
      box.innerHTML = `
      <h3>Available Payment cards</h3>
      <hr style="margin-bottom: 0.3rem; margin-top: 0; opacity: 0.5;" />

      <div class="abyssinia_choice_container">
      <label class="abyssinia_choice_option_item MasterCard">
        <input
          data-type="MasterCard"
          type="checkbox"
          class="abyssinia_choice_checkbox"
        />
        <div class="abyssinia_choice_option_inner MasterCard">
          <div class="tickmark"></div>
          <img
            src="https://invest.purposeblacketh.com/payment-icons/MasterCard_Logo_svg.png"
            alt=""
            srcset=""
          />
        </div>
      </label>
      <label class="abyssinia_choice_option_item">
        <input
          data-type="Visa"
          type="checkbox"
          class="abyssinia_choice_checkbox"
          checked
        />
        <div class="abyssinia_choice_option_inner Visa">
          <div class="tickmark"></div>
          <img
            src="https://s2.svgbox.net/payments.svg?ic=visa-2"
            alt=""
            srcset=""
          />
        </div>
      </label>
    </div>
    <div class="percentage-error3">
              You have to choose a payment options
            </div>
    `
      let checkbox3 = document.querySelectorAll('.abyssinia_choice_checkbox')
      //console.log('checkbox3', checkbox3)
      const uncheckall3 = (type) => {
        checkbox3.forEach((check) => {
          if (type === check.dataset.type) {
          } else {
            //console.log(check.dataset.type)
            check.checked = false
          }
        })
      }
      // uncheckall()
      checkbox3.forEach((check) => {
        check.addEventListener('change', () => {
          uncheckall3(check.dataset.type)
          document.querySelector('.percentage-error3').style.display = 'none'
        })
        // console.log()
      })
      uncheckall3()
    }
    if (check.dataset.type == 'dashen') {
      box.innerHTML = `
      <h3>Available Payment cards</h3>

      <hr style="margin-bottom: 0.3rem; margin-top: 0; opacity: 0.5;" />

      <div class="dashen_choice_container">
      <label class="dashen_choice_option_item MasterCard">
        <input
          data-type="MasterCard"
          type="checkbox"
          class="dashen_choice_checkbox"
        />
        <div class="dashen_choice_option_inner MasterCard">
          <div class="tickmark"></div>
          <img
            src="https://invest.purposeblacketh.com/payment-icons/MasterCard_Logo_svg.png"
            alt=""
            srcset=""
          />
        </div>
      </label>
      <label class="dashen_choice_option_item">
        <input
          data-type="AmericanExpress"
          type="checkbox"
          class="dashen_choice_checkbox"
          checked
        />
        <div class="dashen_choice_option_inner AmericanExpress">
          <div class="tickmark"></div>
          <img
            src="https://invest.purposeblacketh.com/payment-icons/amex.png"
            alt=""
            srcset=""
          />
        </div>
      </label>
      <label class="dashen_choice_option_item">
        <input
          data-type="Visa"
          type="checkbox"
          class="dashen_choice_checkbox"
          checked
        />
        <div class="dashen_choice_option_inner Visa">
          <div class="tickmark"></div>
          <img
            src="https://s2.svgbox.net/payments.svg?ic=visa-2"
            alt=""
            srcset=""
          />
        </div>
      </label>
    </div>
    <div class="percentage-error5">
              You have to choose a payment options
            </div>`
      let checkbox5 = document.querySelectorAll('.dashen_choice_checkbox')
      //console.log('checkbox5', checkbox5)
      const uncheckall5 = (type) => {
        checkbox5.forEach((check) => {
          if (type === check.dataset.type) {
          } else {
            check.checked = false
          }
        })
      }
      // uncheckall()
      checkbox5.forEach((check) => {
        check.addEventListener('change', () => {
          document.querySelector('.percentage-error5').style.display = 'none'
          uncheckall5(check.dataset.type)
          //console.log('this5')
        })
        // //console.log()
      })
      uncheckall5()
    }
  })
  // console.log()
})
uncheckall2()
let sharesWrapper = document.querySelector('.shares_wrapper')
$(document).ready(function () {
  $('#number_share').on('input', function (evt) {
    // Print entered value in a div box
    // console.log()
    if (this.value.length > 0) {
      document.querySelector('#initial_share').placeholder =
        evt.target.value * 100
      sharesWrapper.style.display = 'block'
      checkbox.forEach((check) => {
        if (check.checked) {
          premium.placeholder = 5 * parseInt(numberShare.value)
          sharesAmount.placeholder =
            check.dataset.value * parseInt(numberShare.value)
          totalPrice.placeholder =
            check.dataset.value * parseInt(numberShare.value) +
            5 * parseInt(numberShare.value)
        }
      })
    } else {
      sharesWrapper.style.display = 'none'
    }
  })
})
// end of second page js
const FirstName = document.getElementById('FirstName')
const MiddleName = document.getElementById('MiddleName')
const LastName = document.getElementById('LastName')
const PhoneNumber = document.getElementById('PhoneNumber')
const HouseNumber = document.getElementById('HouseNumber')
const StreetAddress = document.getElementById('streetaddress')
const State = document.getElementById('State')
const City = document.getElementById('City')
const Country = document.getElementById('country-code-input')
const ZipCode = document.getElementById('ZipCode')
const Email = document.getElementById('Email')
const Nationality = document.getElementById('Nationality')
let togglebtn = document.querySelector('.toggle__input')
let ReferalCheck = togglebtn.checked?document.querySelector('#referal-name-input'):document.querySelector('#referal-code-input')
togglebtn.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    ReferalCheck = togglebtn.checked?document.querySelector('#referal-name-input'):document.querySelector('#referal-code-input')
    // console.log("referalcheck changed")
  } else {
    ReferalCheck = togglebtn.checked?document.querySelector('#referal-name-input'):document.querySelector('#referal-code-input')
    // console.log("referalcheck changed")
  }
})
// form validation and next and prev buttons fucntionality are connected
function checkInputs() {
  // trim to remove the whitespaces
  const FirstNameValue = FirstName.value.trim()
  const MiddleNameValue = MiddleName.value.trim()
  const LastNameValue = LastName.value.trim()
  const PhoneNumberValue = PhoneNumber.value.trim()
  const HouseNumberValue = HouseNumber.value.trim()
  const StreetAddressValue = StreetAddress.value.trim()
  const StateValue = State.value.trim()
  const CityValue = City.value.trim()
  const ZipCodeValue = ZipCode.value.trim()
  const EmailValue = Email.value.trim()
  const NationalityValue = Nationality.value.trim()
  const CountryValue = Country.value.trim()
  const ReferalCheckValue = ReferalCheck.value.trim()
  if(ReferalCheckValue === ""){
    setErrorFor3(ReferalCheck, 'Referal cannot be blank')
  } else {
    setSuccessFor3(ReferalCheck)
  }
  if (CountryValue === '') {
    setErrorFor2(Country, 'Country cannot be blank')
  } else {
    setSuccessFor2(Country)
  }
  if (NationalityValue === '') {
    setErrorFor(Nationality, 'Nationality cannot be blank')
  } else {
    setSuccessFor(Nationality)
  }
  if (EmailValue === '') {
    setErrorFor(Email, 'Email cannot be blank')
  } else {
    setSuccessFor(Email)
  }
  if (ZipCodeValue === '') {
    setErrorFor(ZipCode, 'ZipCode cannot be blank')
  } else {
    setSuccessFor(ZipCode)
  }
  if (CityValue === '') {
    setErrorFor(City, 'City cannot be blank')
  } else {
    setSuccessFor(City)
  }
  if (StateValue === '') {
    setErrorFor2(State, 'State cannot be blank')
  } else {
    setSuccessFor2(State)
  }
  if (StreetAddressValue === '') {
    setErrorFor2(StreetAddress, 'Street cannot be blank')
  } else {
    setSuccessFor2(StreetAddress)
  }
  if (HouseNumberValue === '') {
    setErrorFor2(HouseNumber, 'HouseNum cannot be blank')
  } else {
    setSuccessFor2(HouseNumber)
  }
  if (PhoneNumberValue === '') {
    setErrorFor(PhoneNumber, 'Phone cannot be blank')
  } else {
    setSuccessFor(PhoneNumber)
  }
  if (LastNameValue === '') {
    setErrorFor(LastName, 'LastName cannot be blank')
  } else {
    setSuccessFor(LastName)
  }
  if (MiddleNameValue === '') {
    setErrorFor(MiddleName, 'MiddleN cannot be blank')
  } else {
    setSuccessFor(MiddleName)
  }
  if (FirstNameValue === '') {
    setErrorFor(FirstName, 'FirstName cannot be blank')
  } else {
    setSuccessFor(FirstName)
  }
}
function Validated() {
  return (
    FirstName.dataset.valid === 'true' &&
    MiddleName.dataset.valid === 'true' &&
    LastName.dataset.valid === 'true' &&
    PhoneNumber.dataset.valid === 'true' &&
    HouseNumber.dataset.valid === 'true' &&
    StreetAddress.dataset.valid === 'true' &&
    State.dataset.valid === 'true' &&
    City.dataset.valid === 'true' &&
    ZipCode.dataset.valid === 'true' &&
    Email.dataset.valid === 'true' &&
    Nationality.dataset.valid === 'true' &&
    ReferalCheck.dataset.valid === "true"
  )
}
function setErrorFor3 (input,message) {
  // console.log(input)
  const formControl2 = input.parentElement
  const formControl = formControl2.parentElement
  input.dataset.valid = 'false'
  const small = formControl.querySelector('small')
  formControl.className = 'col-12 col-sm-6 referal-container form-control2 error'
  small.innerText = message
}
function setSuccessFor3(input) {
  input.dataset.valid = 'true'
  const formControl2 = input.parentElement
  const formControl = formControl2.parentElement
  formControl.className = 'col-12 col-sm-6 form-control2 referal-container success'
}
function setErrorFor(input, message) {
  const formControl = input.parentElement
  input.dataset.valid = 'false'
  const small = formControl.querySelector('small')
  formControl.className = 'col-12 col-sm-6 form-control2 error'
  small.innerText = message
}
function setErrorFor2(input, message) {
  const formControl = input.parentElement
  input.dataset.valid = 'false'
  if (input.id === 'State') {
    //console.log('state')
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error state-col'
    small.innerText = message
  } else if (input.id === 'streetaddress') {
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error street-col'
    small.innerText = message
  } else if (input.id === 'country-code-input') {
    const small = formControl.querySelector('small')
    formControl.className = 'col-12 form-control2 error country-code-container'
    small.innerText = message
  } else {
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error'
    small.innerText = message
  }
  // console.log(formControl)
}
function setSuccessFor2(input) {
  input.dataset.valid = 'true'
  if (input.id === 'country-code-input') {
    const formControl = input.parentElement
    formControl.className =
      'col-12 form-control2 success country-code-container'
  } else {
    const formControl = input.parentElement
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 success'
  }
  // const formControl = input.parentElement
}
function setSuccessFor(input) {
  input.dataset.valid = 'true'
  const formControl = input.parentElement
  formControl.className = 'col-12 col-sm-6 form-control2 success'
}
// next and prev defination written
for (let i = 1; i < 5; i++) {
  document.querySelector(`.next${i}`).onclick = () => {
    if (i === 1) {
      // form validation button
      checkInputs()
      if(Validated()){
      // if (true) {
        document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
        document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
        document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
        for (let j = i; j < 5; j++) {
          document.querySelector(
            `.section${j}`,
          ).style.transform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j}`,
          ).style.WebkitTransform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j}`,
          ).style.msTransform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j + 1}`,
          ).style.transform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j + 1}`,
          ).style.WebkitTransform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j + 1}`,
          ).style.msTransform = `translate(-${i}00vw)`
        }
      }
    } else if (i === 2) {
      if (document.querySelector('#number_share').value.trim() == '') {
        document.querySelector('.share-error').style.display = 'block'
      } else {
        document.querySelector('.share-error').style.display = 'none'
      }
      if (!checkexists()) {
        document.querySelector('.percentage-error').style.display = 'block'
      } else {
        document.querySelector('.percentage-error').style.display = 'none'
      }
      if (
        checkexists() &&
        !(document.querySelector('#number_share').value.trim() == '')
      ){
      // if (true) {
        document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
        document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
        document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
        for (let j = i; j < 5; j++) {
          //console.log('j', j)
          document.querySelector(
            `.section${j}`
          ).style.transform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j}`
          ).style.WebkitTransform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j}`
          ).style.msTransform = `translate(-${i}00vw)`
          //console.log(`.section${j + 1}`)
          document.querySelector(
            `.section${j + 1}`
          ).style.transform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j + 1}`
          ).style.WebkitTransform = `translate(-${i}00vw)`
          document.querySelector(
            `.section${j + 1}`
          ).style.msTransform = `translate(-${i}00vw)`
        }
      }
    } else if (i === 3) {
      //console.log(checkexists2)
      if (!checkexists2()) {
        document.querySelector('.percentage-error2').style.display = 'block'
      } else {
        if (whichcheck2() == 'abyssinia') {
          if (!checkexists3()) {
            document.querySelector('.percentage-error3').style.display = 'block'
          } else {
            document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
            document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
            document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
            for (let j = i; j < 5; j++) {
              //console.log('j', j)
              document.querySelector(
                `.section${j}`,
              ).style.transform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j}`,
              ).style.WebkitTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j}`,
              ).style.msTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.transform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.WebkitTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.msTransform = `translate(-${i}00vw)`
            }
          }
        } else if (whichcheck2() == 'dashen') {
          if (!checkexists5()) {
            document.querySelector('.percentage-error5').style.display = 'block'
          } else {
            document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
            document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
            document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
            for (let j = i; j < 5; j++) {
              //console.log('j', j)
              document.querySelector(
                `.section${j}`,
              ).style.transform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j}`,
              ).style.WebkitTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j}`,
              ).style.msTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.transform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.WebkitTransform = `translate(-${i}00vw)`
              document.querySelector(
                `.section${j + 1}`,
              ).style.msTransform = `translate(-${i}00vw)`
            }
          }
        }
      }
    } else {
      document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
      document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
      document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
      for (let j = i; j < 5; j++) {
        //console.log('j', j)
        document.querySelector(
          `.section${j}`,
        ).style.transform = `translate(-${i}00vw)`
        document.querySelector(
          `.section${j}`,
        ).style.WebkitTransform = `translate(-${i}00vw)`
        document.querySelector(
          `.section${j}`,
        ).style.msTransform = `translate(-${i}00vw)`
        document.querySelector(
          `.section${j + 1}`,
        ).style.transform = `translate(-${i}00vw)`
        document.querySelector(
          `.section${j + 1}`,
        ).style.WebkitTransform = `translate(-${i}00vw)`
        document.querySelector(
          `.section${j + 1}`,
        ).style.msTransform = `translate(-${i}00vw)`
      }
    }
  }
}
for (let i = 2; i <= 5; i++) {
  document.querySelector(`.prev${i}`).onclick = () => {
    document.querySelector(`.blue-line`).style.width = `${17 * (i - 2)}vw`
    for (let j = 1; j <= 5; j++) {
      document.querySelector(`.blue-dot${i}`).style.display = 'none'
      document.querySelector(`.txt${i}`).style.color = 'hsl(264, 3%, 68%)'
      if (i === 2) {
        document.querySelector(
          `.section${j}`,
        ).style.transform = `translate(0vw)`
        document.querySelector(
          `.section${j}`,
        ).style.WebkitTransform = `translate(0vw)`
        document.querySelector(
          `.section${j}`,
        ).style.msTransform = `translate(0vw)`
      } else {
        document.querySelector(`.section${j}`).style.transform = `translate(-${
          i - 2
        }00vw)`
        document.querySelector(
          `.section${j}`,
        ).style.WebkitTransform = `translate(-${i - 2}00vw)`
        document.querySelector(
          `.section${j}`,
        ).style.msTransform = `translate(-${i - 2}00vw)`
      }
    }
  }
}
// submit btn functionality
let NumberOfShares = document.querySelector("#number_share")
let ShareAmount1 = document.querySelector("#initial_share")
const submit = document.querySelector(".submit")
//console.log(ShareAmount1.value)
submit.onclick = () =>{
  let agreementBox = document.querySelector("#agreement-input")
  console.log(agreementBox.checked)
  if(agreementBox.checked){
    let a = whichcheck2()
    let b;
    if(a === "abyssinia"){
      b = whichcheck3()
    }else if (a === "dashen"){
      b = whichcheck5()
    }
    //console.log(a)
    //console.log(b)
    const formdata = {
      FirstName : FirstName.value,
      MiddleName:MiddleName.value,
      LastName:LastName.value,
      PhoneNumber:PhoneNumber.value,
      HouseNumber:HouseNumber.value,
      Country:Country.value,
      StreetAddress:StreetAddress.value,
      State:State.value,
      City:City.value,
      ZipCode:ZipCode.value,
      Nationality:Nationality.value,
      Email:Email.value,
      NumberOfShares:NumberOfShares.value,
      ShareAmount1:ShareAmount1.placeholder,
      PaymentPercentage:whichcheck1(),
      Premium : parseInt(NumberOfShares.value) *5,
      ShareAmount2:parseInt(NumberOfShares.value) * parseInt(whichcheck1()),
      totalPrice:parseInt(NumberOfShares.value) * parseInt(whichcheck1()) +(parseInt(NumberOfShares.value) *5),
      InternationalPayment : a,
      AvailablePayment: b,
      referalCodeValue : referalCodeValue(),
      referalNameValue : referalNameValue()
    }
    console.log(formdata)
  //   const api = axios.create({baseURL: 'http://example.com'})
  // api.post('/user/12345', formdata)
  // .then(res => {
  //      console.log(res)
  // })
  // .catch(error => {
  //      console.log(error)
  // })
  }else{
    console.log("please check the uncehck box")
  }
}
