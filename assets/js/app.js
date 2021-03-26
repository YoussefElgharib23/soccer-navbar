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

    let hasSubMenus = document.querySelectorAll(".nav__link")
    hasSubMenus.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            let menu = item.parentNode.parentNode.querySelector('.sub-menu__mobile')
            if (menu.classList.contains('show')) {
                menu.classList.remove('show')
                item.parentNode.parentNode.querySelector('i').classList.remove('rotate')
            }
            else {
                menu.classList.add('show')
                item.parentNode.parentNode.querySelector('i').classList.add('rotate')
            }

            console.log()
        })
    })

    let subMenusLinks = document.querySelectorAll('.has-sub-menu')
    subMenusLinks.forEach(link => {
        let id = link.getAttribute('data-target')
        let subMenu = document.getElementById(id)
        if (subMenu) {
            link.addEventListener('mouseover', () => {
                subMenu.classList.add('show')
            })

            subMenu.addEventListener('mouseover', () => {
                if (!subMenu.classList.contains('show'))
                    subMenu.classList.add('show')
            })

            subMenu.addEventListener('mouseleave', () => {
                if (subMenu.classList.contains('show'))
                    subMenu.classList.remove('show')
            })

            setTimeout(() => {
                link.addEventListener('mouseleave', () => {
                    subMenu.classList.remove('show')
                })
            }, 500);
        }
        
    })
})