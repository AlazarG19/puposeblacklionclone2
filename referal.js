let referal = document.querySelector('#referal')
let toggle_txt_value = document.querySelector('.toggle_txt > p')
let referalCodeLabel = document.querySelector('.referal-code-label')
const addreferedbyname = () => {
  // console.log(referal.innerHTML)
  let text = `
    <div
                class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12 standard_input"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                  id="first_name"
                  aria-label="First name"
                />
                <label for="first_name" class="first_name_label">
                  First Name
                </label>
              </div>
              <div
                class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col standard_input"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middle name"
                  aria-label="Middle name"
                  id="middle_name"
                />
                <label for="middle_name" class="middle_name_label">
                  Middle Name
                </label>
              </div>
              
              
    `
}
const addreferedbycode = () => {
  // const text
}
addreferedbyname()
//switch when using referal switch
let referalContainer = document.querySelector('#referal')
// console.log('referal', referalContainer)
let toggle = document.querySelector('.toggle__input')
toggle.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    toggle_txt_value.innerHTML = 'true'
    referalContainer.innerHTML = `<div class="row" id="referal">
    <div class="col-12 col-sm-6 referal-container">
      <div class="input-group col-6 referal-name-container">
        <!-- <label class="referal-name-label" > Referal Name</label> -->

        <input
          class="multisteps-form__input form-control shadow-none"
          type="text"
          id="referal-name-input"
          placeholder="Referal-Name"
        />

        <ul
          class="referal-name-list col-sm-12 col-md-12 col-lg-12 col-xl-6"
        ></ul>
      </div>
    </div>
    <div class="col-12 col-sm-6 refered-container standard_input">
      <input
        type="text"
        class="form-control"
        id="refered_code"
        aria-label="refered_code"
        disabled
        placeholder="Refered Code"
      />
    </div>
  </div>`
    let input = document.getElementById('referal-name-input')
    console.log(input, 'input')
    input.addEventListener('keyup', (e) => {
      fetch('https://apiforsample.herokuapp.com/referal')
        .then((response) => response.json())
        .then((data) => {
          let referal2 = data.referal
          let referal2keys = []
          for (let i of referal2) {
            referal2keys.push(i.code)
          }
          removeElements()
          document.querySelector('.referal-name-list').style.display = 'block'
          for (let i of referal2) {
            if (
              i.code.toLowerCase().startsWith(input.value.toLowerCase()) &&
              input.value != ''
            ) {
              console.log(i.code)
              let listItem = document.createElement('li')
              listItem.setAttribute('id', i.code)
              listItem.classList.add('referal-list-items')
              listItem.style.cursor = 'pointer'
              let word = i.code.substr(0, input.value.length)
              word += i.code.substr(input.value.length)
              listItem.innerHTML = word
              document.querySelector('.referal-name-list').appendChild(listItem)
            }
          }
          $(document).click(function (evt) {
            console.log(referal2keys, evt.target.id)
            console.log('id of target', referal2keys.indexOf(evt.target.id))
            if (referal2keys.indexOf(evt.target.id) != -1) {
              display(
                evt.target.id,
                referal2[referal2keys.indexOf(evt.target.id)].name,
              )

              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'block'
              }
              document.querySelector('.referal-name-list').style.display =
                'none'
            } else if (evt.target.id == 'referal-name-input') {
              if (evt.target.value !== '') {
                removeElements()
                for (let i of referal2) {
                  if (
                    i.code
                      .toLowerCase()
                      .startsWith(input.value.toLowerCase()) &&
                    input.value != ''
                  ) {
                    let listItem = document.createElement('li')
                    listItem.setAttribute('id', i.code)
                    listItem.classList.add('referal-list-items')
                    listItem.style.cursor = 'pointer'
                    let word = i.name.substr(0, input.value.length)
                    word += i.name.substr(input.value.length)
                    listItem.innerHTML = word
                    document
                      .querySelector('.referal-name-list')
                      .appendChild(listItem)
                  }
                }
              }
              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'block'
              }
            } else if (evt.target.id == 'referal-name-input') {
              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'block'
              }
            } else {
              // console.log('this', evt.target.id)
              if (document.querySelector('.referal-code-list') != null) {
                document.querySelector('.referal-code-list').style.display =
                  'none'
              }
              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'none'
              }
            }
          })
        })
    })
    function display(value, key) {
      input.value = value
      document.querySelector('#refered_code').placeholder = key
      removeElements()
    }
    function removeElements() {
      //clear all the item
      let items = document.querySelectorAll('.referal-list-items')
      items.forEach((item) => {
        item.remove()
      })
    }
  } else {
    toggle_txt_value.innerHTML = 'false'
    referalContainer.innerHTML = `<div class="row" id="referal">
    <div class="col-12 col-sm-6 referal-container">
      <div class="input-group col-6 referal-code-container">
        <!-- <label class="referal-code-label" > Referal Code</label> -->

        <input
          class="multisteps-form__input form-control shadow-none"
          type="text"
          id="referal-code-input"
          placeholder="Referal-code"
        />

        <ul
          class="referal-code-list col-sm-12 col-md-12 col-lg-12 col-xl-6"
        ></ul>
      </div>
    </div>
    <div class="col-12 col-sm-6 refered-container standard_input">
      <input
        type="text"
        class="form-control"
        id="refered_name"
        aria-label="refered_name"
        disabled
        placeholder="Refered Name"
      />
    </div>
  </div>`
    let inputCode = document.getElementById('referal-code-input')
    console.log(inputCode, 'input')
    // console.log(input)
    //Execute function on keyup
    inputCode.addEventListener('keyup', (e) => {
      // console.log(sortedNames)
      //loop through above array
      // Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
      fetch('https://apiforsample.herokuapp.com/referal')
        .then((response) => response.json())
        .then((data) => {
          let countries = data.referal
          let countrieskeys = []
          for (let i of countries) {
            // console.log(i)
            countrieskeys.push(i.name)
          }
          removeElementsCode()
          console.log(countries)
          for (let i of countries) {
            //convert inputCode to lowercase and compare with each string
            // console.log(i.name)
            // console.log(i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()))
            if (
              i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()) &&
              inputCode.value != ''
            ) {
              //create li element
              let listItem = document.createElement('li')
              //One common class name
              listItem.setAttribute('id', i.name)
              listItem.classList.add('referal-list-items')
              listItem.style.cursor = 'pointer'
              //Display matched part in bold
              let word = i.name.substr(0, inputCode.value.length)
              word += i.name.substr(inputCode.value.length)
              //display the value in array
              // console.log("word",word)
              listItem.innerHTML = word
              document.querySelector('.referal-code-list').appendChild(listItem)
            }
          }

          $(document).click(function (evt) {
            // console.log(document.querySelector('.referal-code-list'))
            console.log(countrieskeys, evt.target.id)
            console.log('id of target', countrieskeys.indexOf(evt.target.id))
            if (countrieskeys.indexOf(evt.target.id) != -1) {
              displayCode(
                evt.target.id,
                countries[countrieskeys.indexOf(evt.target.id)].code,
              )

              if (document.querySelector('.referal-code-list') != null) {
                document.querySelector('.referal-code-list').style.display =
                  'block'
              }
              document.querySelector('.referal-code-list').style.display =
                'none'
            } else if (evt.target.id == 'referal-code-input') {
              if (evt.target.value !== '') {
                removeElementsCode()
                for (let i of countries) {
                  //convert input to lowercase and compare with each string
                  // console.log(i.name)
                  // console.log(i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()))
                  if (
                    i.name
                      .toLowerCase()
                      .startsWith(inputCode.value.toLowerCase()) &&
                    inputCode.value != ''
                  ) {
                    //create li element
                    let listItem = document.createElement('li')
                    //One common class name
                    listItem.setAttribute('id', i.name)
                    listItem.classList.add('referal-list-items')
                    listItem.style.cursor = 'pointer'
                    //Display matched part in bold
                    let word = i.name.substr(0, inputCode.value.length)
                    word += i.name.substr(inputCode.value.length)
                    //display the value in array
                    // console.log("word",word)
                    listItem.innerHTML = word
                    document
                      .querySelector('.referal-code-list')
                      .appendChild(listItem)
                  }
                }
              }
              if (document.querySelector('.referal-code-list') != null) {
                document.querySelector('.referal-code-list').style.display =
                  'block'
              }
            } else if (evt.target.id == 'referal-name-input') {
              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'block'
              }
            } else {
              // console.log('this', evt.target.id)
              if (document.querySelector('.referal-code-list') != null) {
                document.querySelector('.referal-code-list').style.display =
                  'none'
              }
              if (document.querySelector('.referal-name-list') != null) {
                document.querySelector('.referal-name-list').style.display =
                  'none'
              }
            }
            //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
            // if ($(evt.target).closest('#menu_content').length) {
            // }
          })
        })
    })
    function displayCode(value, key) {
      inputCode.value = value
      document.querySelector('#refered_name').placeholder = key
      removeElementsCode()
    }
    function removeElementsCode() {
      //clear all the item
      let items = document.querySelectorAll('.referal-list-items')
      items.forEach((item) => {
        item.remove()
      })
    }
  }
})

//reference
let inputCode = document.getElementById('referal-code-input')
console.log(inputCode, 'input')

inputCode.addEventListener('keyup', (e) => {
  // console.log(sortedNames)
  //loop through above array
  // Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  fetch('https://apiforsample.herokuapp.com/referal')
    .then((response) => response.json())
    .then((data) => {
      let countries = data.referal
      let countrieskeys = []
      for (let i of countries) {
        // console.log(i)
        countrieskeys.push(i.name)
      }
      removeElementsCode()
      console.log('started')
      console.log('')
      document.querySelector('.referal-code-list').style.display = 'block'
      console.log(countries)
      for (let i of countries) {
        //convert inputCode to lowercase and compare with each string
        // console.log(i.name)
        // console.log(i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()))
        if (
          i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()) &&
          inputCode.value != ''
        ) {
          //create li element
          let listItem = document.createElement('li')
          //One common class name
          listItem.setAttribute('id', i.name)
          listItem.classList.add('referal-list-items')
          listItem.style.cursor = 'pointer'
          //Display matched part in bold
          let word = i.name.substr(0, inputCode.value.length)
          word += i.name.substr(inputCode.value.length)
          //display the value in array
          // console.log("word",word)
          listItem.innerHTML = word
          document.querySelector('.referal-code-list').appendChild(listItem)
        }
      }
      $(document).click(function (evt) {
        // console.log(document.querySelector('.referal-code-list'))
        console.log(countrieskeys, evt.target.id)
        console.log('id of target', countrieskeys.indexOf(evt.target.id))
        if (countrieskeys.indexOf(evt.target.id) != -1) {
          displayCode(
            evt.target.id,
            countries[countrieskeys.indexOf(evt.target.id)].code,
          )

          if (document.querySelector('.referal-code-list') != null) {
            document.querySelector('.referal-code-list').style.display = 'block'
          }
          document.querySelector('.referal-code-list').style.display = 'none'
        } else if (evt.target.id == 'referal-code-input') {
          if (evt.target.value !== '') {
            removeElementsCode()
            for (let i of countries) {
              //convert input to lowercase and compare with each string
              // console.log(i.name)
              // console.log(i.name.toLowerCase().startsWith(inputCode.value.toLowerCase()))
              if (
                i.name
                  .toLowerCase()
                  .startsWith(inputCode.value.toLowerCase()) &&
                inputCode.value != ''
              ) {
                //create li element
                let listItem = document.createElement('li')
                //One common class name
                listItem.setAttribute('id', i.name)
                listItem.classList.add('referal-list-items')
                listItem.style.cursor = 'pointer'
                //Display matched part in bold
                let word = i.name.substr(0, inputCode.value.length)
                word += i.name.substr(inputCode.value.length)
                //display the value in array
                // console.log("word",word)
                listItem.innerHTML = word
                document
                  .querySelector('.referal-code-list')
                  .appendChild(listItem)
              }
            }
          }
          if (document.querySelector('.referal-code-list') != null) {
            document.querySelector('.referal-code-list').style.display = 'block'
          }
        } else if (evt.target.id == 'referal-name-input') {
          if (document.querySelector('.referal-name-list') != null) {
            document.querySelector('.referal-name-list').style.display = 'block'
          }
        } else {
          // console.log('this', evt.target.id)
          if (document.querySelector('.referal-code-list') != null) {
            document.querySelector('.referal-code-list').style.display = 'none'
          }
          if (document.querySelector('.referal-name-list') != null) {
            document.querySelector('.referal-name-list').style.display = 'none'
          }
        }
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        // if ($(evt.target).closest('#menu_content').length) {
        // }
      })
    })
})
function displayCode(value, key) {
  inputCode.value = value
  document.querySelector('#refered_name').placeholder = key
  removeElementsCode()
}
function removeElementsCode() {
  //clear all the item
  let items = document.querySelectorAll('.referal-list-items')
  items.forEach((item) => {
    item.remove()
  })
}
let inputCountry = document.getElementById('country-code-input')
console.log(inputCountry, 'input')
function displayCountry(value, key) {
  inputCountry.value = value
  document.querySelector('#country_name').placeholder = key
  removeElementsCountry()
  console.log('display country called')
}
function removeElementsCountry() {
  //clear all the item
  let items = document.querySelectorAll('.country-list-items')
  items.forEach((item) => {
    item.remove()
  })
}
inputCountry.addEventListener('keyup', (e) => {
  // console.log(sortedNames)
  //loop through above array
  // Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  console.log('input country touced')
  fetch('https://apiforsample.herokuapp.com/countries')
    .then((response) => response.json())
    .then((data) => {
      let countries = data.countries
      removeElementsCountry()

      // console.log(countries)
      for (let i of countries) {
        //convert inputCountry to lowercase and compare with each string
        // console.log(i)
        // console.log(i.toLowerCase().startsWith(inputCountry.value.toLowerCase()))
        document.querySelector('.country-code-list').style.display = 'block'
        if (
          i.toLowerCase().startsWith(inputCountry.value.toLowerCase()) &&
          inputCountry.value != ''
        ) {
          //create li element
          let listItem = document.createElement('li')
          //One common class name
          listItem.setAttribute('id', i)
          listItem.classList.add('country-list-items')
          listItem.style.cursor = 'pointer'
          //Display matched part in bold
          let word = i.substr(0, inputCountry.value.length)
          word += i.substr(inputCountry.value.length)
          //display the value in array
          // console.log("word",word)
          listItem.innerHTML = word
          document.querySelector('.country-code-list').appendChild(listItem)
        }
      }
      console.log('before check')
      $(document).click(function (evt) {
        console.log(evt.target.id)
        if (countries.indexOf(evt.target.id) != -1) {
          displayCountry(evt.target.id)

          if (document.querySelector('.country-code-list') != null) {
            document.querySelector('.country-code-list').style.display = 'block'
          }
          document.querySelector('.country-code-list').style.display = 'none'
        } else if (evt.target.id == 'country-code-input') {
          console.log('that')
          if (evt.target.value !== '') {
            removeElementsCountry()
            for (let i of countries) {
              //convert input to lowercase and compare with each string
              // console.log(i)
              // console.log(i.toLowerCase().startsWith(inputCountry.value.toLowerCase()))
              if (
                i.toLowerCase().startsWith(inputCountry.value.toLowerCase()) &&
                inputCountry.value != ''
              ) {
                //create li element
                let listItem = document.createElement('li')
                //One common class name
                listItem.setAttribute('id', i)
                listItem.classList.add('country-list-items')
                listItem.style.cursor = 'pointer'
                //Display matched part in bold
                let word = i.substr(0, inputCountry.value.length)
                word += i.substr(inputCountry.value.length)
                //display the value in array
                // console.log("word",word)
                listItem.innerHTML = word
                document
                  .querySelector('.country-code-list')
                  .appendChild(listItem)
              }
            }
          }
          if (document.querySelector('.country-code-list') != null) {
            document.querySelector('.country-code-list').style.display = 'block'
          }
        } else if (evt.target.id == 'country-input') {
          if (document.querySelector('.country-code-list') != null) {
            document.querySelector('.country-code-list').style.display = 'block'
          }
        } else {
          // console.log('this', evt.target.id)
          if (document.querySelector('.country-code-list') != null) {
            document.querySelector('.country-code-list').style.display = 'none'
          }
          if (document.querySelector('.country-code-list') != null) {
            document.querySelector('.country-code-list').style.display = 'none'
          }
        }
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        // if ($(evt.target).closest('#menu_content').length) {
        // }
      })
    })
})
