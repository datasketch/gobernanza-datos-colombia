// Elements
const articulos = document.querySelector('.articulos')
const articulosButton = document.querySelectorAll('.articulos__button')
const articulosPanel = document.querySelectorAll('.articulos__panel')

// Functions - Events

// Parent Event
articulos.addEventListener('click', function (e) {
  // get child element
  const child = e.target.closest('.articulos__button')

  if (child) {
    // get data id
    const id = child.getAttribute('data-id')
    // remove actives button
    articulosButton.forEach(el => el.classList.remove('articulos__button--active'))
    // remove actives panel
    articulosPanel.forEach(el => el.classList.remove('articulos__panel--active'))
    // show active button
    articulosButton[id].classList.add('articulos__button--active')
    // show active panel
    articulosPanel[id].classList.add('articulos__panel--active')
  }
})
