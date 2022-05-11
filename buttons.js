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
const uncheckall1 = (type) => {
  checkbox.forEach((check) => {
    if (type === check.dataset.type) {
    } else {
      // console.log(check.dataset.type)
      check.checked = false
    }
  })
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
    Nationality.dataset.valid === 'true'
  )
}
function setErrorFor(input, message) {
  const formControl = input.parentElement
  input.dataset.valid = 'false'
  // console.log(formControl)
  const small = formControl.querySelector('small')
  formControl.className = 'col-12 col-sm-6 form-control2 error'
  small.innerText = message
}
function setErrorFor2(input, message) {
  const formControl = input.parentElement
  input.dataset.valid = 'false'
  if (input.id === 'State') {
    console.log('state')
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error state-col'
    small.innerText = message
  } else if (input.id === 'streetaddress') {
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error street-col'
    small.innerText = message
  } else if(input.id === "country-code-input"){
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 form-control2 error'
    small.innerText = message
  }
  else {
    const small = formControl.querySelector('small')
    formControl.className =
      'col-12 col-lg-3 col-md-6 col-sm-6 form-control2 error'
    small.innerText = message
  }
  // console.log(formControl)
}
function setSuccessFor2(input) {
  input.dataset.valid = 'true'
  if(input.id === "country-code-input"){
    const formControl = input.parentElement
    formControl.className =
      'col-12 form-control2 success'
  }else{
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
        document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
        document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
        document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
        for (let j = i; j < 5; j++) {
          console.log('j', j)
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
      ) {
        document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
        document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
        document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
        for (let j = i; j <= 5; j++) {
          console.log('j', j)
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
    } else {
      document.querySelector(`.blue-line`).style.width = `${17 * i}vw`
      document.querySelector(`.blue-dot${i + 1}`).style.display = 'block'
      document.querySelector(`.txt${i + 1}`).style.color = '#007afd'
      for (let j = i; j <= 5; j++) {
        console.log('j', j)
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
