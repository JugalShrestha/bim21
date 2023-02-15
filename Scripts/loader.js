const loadingScreen = document.querySelector('.loading-screen')
const everything = document.querySelector('.everything')

const loadingAnimation = document.querySelector('.loading-screen .loading-animation')

window.addEventListener('load',setTimeout(closeLoadingScreen,2000))

function openLoadingScreen(){
    loadingScreen.style.display = "flex"
    loadingScreen.style.opacity = "100%"
}
function closeLoadingScreen(){  
    loadingScreen.style.display = "none"
    loadingScreen.style.opacity = "0%"
    openEverything()
}

function openEverything(){
    everything.style.display = "flex"
    setTimeout(realOpenEverything,100)
}
function realOpenEverything(){
    everything.style.opacity = "100%"
}

function closeEverything(){
    everything.style.display = "none"
    everything.style.opacity = "0%"
}