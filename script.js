// document.querySelector('.header').style.background = 'grey'
// document.querySelector('.header').style.color = 'red'


const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')

moon.onclick = () => {
    document.body.classList.toggle('black')
    sun.style.display = 'block'
    moon.style.display = 'none'
}

sun.onclick = () => {
    document.body.classList.toggle('black')
    sun.style.display = 'none'
    moon.style.display = 'block'
}
