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