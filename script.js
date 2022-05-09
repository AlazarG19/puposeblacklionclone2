let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let section5 = document.querySelector('.section5')
let prev1 = document.querySelector('.prev1')
let prev2 = document.querySelector('.prev2')
let prev3 = document.querySelector('.prev3')
let prev4 = document.querySelector('.prev4')
let prev5 = document.querySelector('.prev5')
let next1 = document.querySelector('.next1')
let next2 = document.querySelector('.next2')
let next3 = document.querySelector('.next3')
let next4 = document.querySelector('.next4')
let next5 = document.querySelector('.next5')
for (let i = 1; i < 5; i++) {
  document.querySelector(`.next${i}`).onclick = () => {
    document.querySelector(`.blue-line`).style.width = `${17*i}vw`
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
for (let i = 2; i <= 5; i++) {
  document.querySelector(`.prev${i}`).onclick = () => {
    document.querySelector(`.blue-line`).style.width = `${17*(i-2)}vw`
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
// prev2.onclick = () => {
//   // section1.style.display = "none"
//   section1.style.transform = 'translate(0vw)'
//   section1.style.WebkitTransform = 'translate(0vw)'
//   section1.style.msTransform = 'translate(0vw)'
//   section2.style.transform = 'translate(0vw)'
//   section2.style.WebkitTransform = 'translate(0vw)'
//   section2.style.msTransform = 'translate(0vw)'
//   section3.style.transform = 'translate(0vw)'
//   section3.style.WebkitTransform = 'translate(0vw)'
//   section3.style.msTransform = 'translate(0vw)'
//   section4.style.transform = 'translate(0vw)'
//   section4.style.WebkitTransform = 'translate(0vw)'
//   section4.style.msTransform = 'translate(0vw)'
//   section5.style.transform = 'translate(0vw)'
//   section5.style.WebkitTransform = 'translate(0vw)'
//   section5.style.msTransform = 'translate(0vw)'
//   console.log('next1')
// }
// prev3.onclick = () => {
//   // section1.style.display = "none"
//   section1.style.transform = 'translate(-100vw)'
//   section1.style.WebkitTransform = 'translate(--100vw)'
//   section1.style.msTransform = 'translate(-100vw)'
//   section2.style.transform = 'translate(-100vw)'
//   section2.style.WebkitTransform = 'translate(-100vw)'
//   section2.style.msTransform = 'translate(-100vw)'
//   section3.style.transform = 'translate(-100vw)'
//   section3.style.WebkitTransform = 'translate(-100vw)'
//   section3.style.msTransform = 'translate(-100vw)'
//   section4.style.transform = 'translate(-100vw)'
//   section4.style.WebkitTransform = 'translate(-100vw)'
//   section4.style.msTransform = 'translate(-100vw)'
//   section5.style.transform = 'translate(-100vw)'
//   section5.style.WebkitTransform = 'translate(-100vw)'
//   section5.style.msTransform = 'translate(-100vw)'
//   console.log('next1')
// }
// prev4.onclick = () => {
//   // section1.style.display = "none"
//   section1.style.transform = 'translate(-200vw)'
//   section1.style.WebkitTransform = 'translate(-200vw)'
//   section1.style.msTransform = 'translate(-200vw)'
//   section2.style.transform = 'translate(-200vw)'
//   section2.style.WebkitTransform = 'translate(-200vw)'
//   section2.style.msTransform = 'translate(-200vw)'
//   section3.style.transform = 'translate(-200vw)'
//   section3.style.WebkitTransform = 'translate(-200vw)'
//   section3.style.msTransform = 'translate(-200vw)'
//   section4.style.transform = 'translate(-200vw)'
//   section4.style.WebkitTransform = 'translate(-200vw)'
//   section4.style.msTransform = 'translate(-200vw)'
//   section5.style.transform = 'translate(-200vw)'
//   section5.style.WebkitTransform = 'translate(-200vw)'
//   section5.style.msTransform = 'translate(-200vw)'
//   console.log('next1')
// }
// prev5.onclick = () => {
//   // section1.style.display = "none"
//   section1.style.transform = 'translate(-100vw)'
//   section1.style.WebkitTransform = 'translate(--100vw)'
//   section1.style.msTransform = 'translate(-100vw)'
//   section2.style.transform = 'translate(-100vw)'
//   section2.style.WebkitTransform = 'translate(-100vw)'
//   section2.style.msTransform = 'translate(-100vw)'
//   section3.style.transform = 'translate(-100vw)'
//   section3.style.WebkitTransform = 'translate(-100vw)'
//   section3.style.msTransform = 'translate(-100vw)'
//   section4.style.transform = 'translate(-100vw)'
//   section4.style.WebkitTransform = 'translate(-100vw)'
//   section4.style.msTransform = 'translate(-100vw)'
//   section5.style.transform = 'translate(-100vw)'
//   section5.style.WebkitTransform = 'translate(-100vw)'
//   section5.style.msTransform = 'translate(-100vw)'
//   console.log('next1')
// }
// next2.onclick = () => {
//     console.log('next2')
//   // section1.style.display = "none"
//   section2.style.transform = 'translate(-200vw)'
//   section2.style.WebkitTransform = 'translate(-200vw)'
//   section2.style.msTransform = 'translate(-200vw)'
//   section3.style.transform = 'translate(-200vw)'
//   section3.style.WebkitTransform = 'translate(-200vw)'
//   section3.style.msTransform = 'translate(-200vw)'
//   section4.style.transform = 'translate(-200vw)'
//   section4.style.WebkitTransform = 'translate(-200vw)'
//   section4.style.msTransform = 'translate(-200vw)'
//   section5.style.transform = 'translate(-200vw)'
//   section5.style.WebkitTransform = 'translate(-200vw)'
//   section5.style.msTransform = 'translate(-200vw)'
// }
// next3.onclick = () => {
//     console.log('next3')
//   // section1.style.display = "none"
//   section3.style.transform = 'translate(-300vw)'
//   section3.style.WebkitTransform = 'translate(-300vw)'
//   section3.style.msTransform = 'translate(-300vw)'
//   section4.style.transform = 'translate(-300vw)'
//   section4.style.WebkitTransform = 'translate(-300vw)'
//   section4.style.msTransform = 'translate(-300vw)'
//   section5.style.transform = 'translate(-300vw)'
//   section5.style.WebkitTransform = 'translate(-300vw)'
//   section5.style.msTransform = 'translate(-300vw)'
// }
// next4.onclick = () => {
//     console.log('next4')
//   // section1.style.display = "none"
//   section4.style.transform = 'translate(-400vw)'
//   section4.style.WebkitTransform = 'translate(-400vw)'
//   section4.style.msTransform = 'translate(-400vw)'
//   section5.style.transform = 'translate(-400vw)'
//   section5.style.WebkitTransform = 'translate(-400vw)'
//   section5.style.msTransform = 'translate(-400vw)'
// }
// next5.onclick = () => {
//     console.log('next5')
//   // section1.style.display = "none"
//   section5.style.transform = 'translate(-500vw)'
//   section5.style.WebkitTransform = 'translate(-500vw)'
//   section5.style.msTransform = 'translate(-500vw)'
//   section6.style.transform = 'translate(-500vw)'
//   section6.style.WebkitTransform = 'translate(-500vw)'
//   section6.style.msTransform = 'translate(-500vw)'
// }
