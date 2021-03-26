document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.querySelector('a.toggler-btn')
    toggle.addEventListener('click', (e) => {
        e.preventDefault()

        let navbarMobile = document.querySelector('.navbar-nav__mobile')
        if (navbarMobile) {
            if (navbarMobile.classList.contains('show')) {
                navbarMobile.classList.remove('show')
                toggle.innerHTML = '<i class="fas fa-bars"></i>'
            }
            else {
                toggle.innerHTML = '<i class="fas fa-times"></i>'          
                navbarMobile.classList.add('show')
            }
        }
    })

    let hasSubMenus = document.querySelectorAll(".has__sub")
    hasSubMenus.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            let menu = item.querySelector('.sub-menu__mobile')
            if (menu.classList.contains('show')) {
                menu.classList.remove('show')
                item.querySelector('i').classList.remove('rotate')
            }
            else {
                menu.classList.add('show')
                item.querySelector('i').classList.add('rotate')

            }

            console.log()
        })
    })
})