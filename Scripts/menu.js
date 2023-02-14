const logo = document.querySelector('.logo')

logo.addEventListener('click',()=>{
    closeEveryPage()
    setTimeout(closeLoadingPage,loadingSpeed)
    setTimeout(openHeroPage,loadingSpeed+1)
})