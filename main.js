let ac = document.querySelector('#ac')
let container = document.querySelector('#container')
let kapat = document.querySelector('#kapat')

ac.addEventListener('click', function () {
    container.style.display = 'flex'
})

kapat.addEventListener('click', function () {
    container.style.display = 'none'
})