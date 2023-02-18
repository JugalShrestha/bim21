const logo = document.querySelector('.logo')

logo.addEventListener('click',()=>{
    closeEveryPage()
    setTimeout(closeLoadingPage,loadingSpeed)
    setTimeout(openHeroPage,loadingSpeed+1)
})

const openMobileMenu = document.querySelector('.nav-mobile')
const closeMobileMenu = document.querySelector('.close-nav-mobile')
const mobileMenu = document.querySelector('.mobile-menu')

openMobileMenu.addEventListener('click',()=>{
    mobileMenu.style.transform ="translateX(0)"
})

function closeMobileMenuFunction(){
    mobileMenu.style.transform ="translateX(500vh)"
}

closeMobileMenu.addEventListener('click',closeMobileMenuFunction)