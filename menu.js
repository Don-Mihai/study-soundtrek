// const links = document.querySelectorAll('.nav__link')


// const clearActiveLink = (links) => {
//     links.forEach((link) => {
//         link.classList.remove('nav__link--active');
//     })
// }

// links.forEach((link) => {
//     link.onclick = () => {
//         clearActiveLink(links)
//         link.classList.add('nav__link--active');
//     }
// })


// Функция для проверки, видима ли секция на экране
function isSectionVisible(section) {
    let rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const sections = document.querySelectorAll('section')


window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const link = document.querySelector(`a[href="#${section.id}"]`)

        console.log(link)
        console.log(isSectionVisible(section))
        

        if(isSectionVisible(section)) {
            link.classList.add('nav__link--active');
        } else {
            link.classList.remove('nav__link--active');
        }
    })
})
