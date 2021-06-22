const turtleBox = document.querySelector('.turtleBox')
const restart = document.querySelector('.restart')
const places = document.querySelector('.places')
const stopAtTag = document.querySelector('.stopAt')
const colorTurtle = ['red', 'blue', 'green', 'white']
const timeSpeed = 50
const stopAt = 550

function startGAme() {
  createTurtles()
  startTurtles()
}
startGAme()

function createTurtles() {
  for (let i = 0; i < 4; i++) {
    const turtle = document.createElement('div')

    turtle.innerHTML = `
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="20px" height="20px" viewBox="0 0 45.959 45.959" style="enable-background:new 0 0 45.959 45.959;"
      xml:space="preserve" fill="${colorTurtle[i]}">
        <path d="M45.105,15.176c-2.826-2.239-7.411-4.072-13.918-1.454c-1.082-1.193-2.318-2.141-3.661-2.814
          c0.474-1.08,0.748-2.337,0.748-3.686C28.274,3.234,25.903,0,22.98,0l0,0l0,0c-2.926,0-5.296,3.234-5.296,7.222
          c0,1.348,0.276,2.605,0.747,3.686c-1.341,0.673-2.578,1.621-3.66,2.814c-6.508-2.62-11.093-0.786-13.919,1.453
          c-0.526,0.417-0.726,1.125-0.498,1.756c0.229,0.631,0.834,1.046,1.506,1.03c3.197-0.076,6.675,1.093,9.289,2.233
          c-0.636,2.01-0.99,4.214-0.99,6.528c0,3.949,1.032,7.573,2.748,10.453c-1.882,2.394-2.531,4.963-2.641,7.146
          c-0.034,0.67,0.367,1.287,0.992,1.53c0.625,0.246,1.336,0.063,1.767-0.45c1.152-1.377,2.662-2.56,4.219-3.55
          c1.728,1.146,3.672,1.807,5.737,1.807c2.064,0,4.009-0.66,5.736-1.807c1.558,0.99,3.066,2.173,4.218,3.55
          c0.434,0.515,1.145,0.696,1.77,0.45c0.625-0.242,1.023-0.859,0.99-1.53c-0.108-2.183-0.759-4.752-2.641-7.146
          c1.716-2.88,2.748-6.504,2.748-10.453c0-2.313-0.354-4.52-0.99-6.528c2.613-1.141,6.092-2.309,9.289-2.234
          c0.671,0.017,1.277-0.398,1.505-1.03C45.832,16.301,45.632,15.593,45.105,15.176z"/>
      </svg>`

    turtleBox.appendChild(turtle)
    turtle.classList.add('turtle')
    let k = i;
    setTimeout(function () {
      turtle.style.left = `${i * 10 + 40}%`
      turtle.style.bottom = `50px`
    }, 500 * (k + 1));
    turtle.style.fill = `${colorTurtle[i]}`
    turtle.dataset = 'number'
    turtle.setAttribute('data-name', `${colorTurtle[i]}`)
  }
}

function startTurtles() {
  setTimeout(() => {
    const turtles = document.querySelectorAll('.turtle')
    turtles.forEach(turtle => {
      let moveY = 0
      const time = setInterval(() => {
        const randomMove = Math.floor(Math.random() * 40) + 1;
        moveY += randomMove
        if (moveY >= stopAt) {
          stopAtTag.classList.add('stopAtFinish')
          moveY = 560
          turtle.style.transform = `translateY(${-moveY}px)`
          const placeLi = document.createElement('li')
          placeLi.textContent = 'Place: ' + turtle.getAttribute('data-name')
          places.appendChild(placeLi)
          return clearTimeout(time)
        }
        turtle.style.transform = `translateY(${-moveY}px)`
        return
      }, timeSpeed)
    });
  }, 3500)
}

function restartGAme() {
  restart.addEventListener('click', () => {
    stopAtTag.classList.remove('stopAtFinish')
    turtleBox.innerHTML = ''
    places.innerHTML = ''
    createTurtles()
    startTurtles()
  })
}
restartGAme()


