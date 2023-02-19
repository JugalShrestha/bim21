const pages = document.querySelectorAll('#page')
const pagesHeader = document.querySelectorAll('#page .header .main-header')
const clickable = document.querySelectorAll('#clickable')

const notFoundPage = document.querySelector('.nothing-page-found-page')

const recommendationPage = document.querySelector('.recommended-link')
const helpingHandPage = document.querySelector('.helping-hand-part')

const loadingPage = document.querySelector('.loading-page')

const loadingSpeed = 1000

//Nothing found page
function openNotFoundPage()
{
    notFoundPage.style.display="flex"
}

function closeNotFoundPage()
{
    notFoundPage.style.display = "none"
}

//Opens hero page

function openHeroPage(){
    recommendationPage.style.display = "flex"
    recommendationPage.style.opacity = "100%"
    helpingHandPage.style.display = "flex"
    helpingHandPage.style.opacity = "100%"
}

//CLoses hero page

function closeHeroPage()
{
    recommendationPage.style.display = "none"
    recommendationPage.style.opacity = "0%"
    helpingHandPage.style.display = "none"
    helpingHandPage.style.opacity = "0%"
    searchPage.style.display = "none"
}

//Opens loading page

function openLoadingPage(){
    loadingPage.style.display = "flex"
}

//Closes loading page

function closeLoadingPage(){
    loadingPage.style.display = "none"
}

function closeClickablePage(){
    pages.forEach(page=>{
        page.style.display = "none"
        page.style.opacity = "0%"
    })
}

function openClickablePage(index)
{
    pages[index].style.opacity = "100%"
}

//-------------Closes Every Page-----------------

function closeEveryPage()
{
    emptyChecker = 0
    closeNotFoundPage()
    closeMobileMenuFunction()
    closeHeroPage()
    closeSearchPage()
    closeClickablePage()
    openLoadingPage()
    setTimeout(closeLoadingPage,loadingSpeed)
}

//--------------------------------------------------

//----When Clickable is clicked---------------------
clickable.forEach(clicker=>{
    clicker.addEventListener('click',()=>{
        closeEveryPage()
        let pageChecker = 0
        let text = clicker.innerText
        text = text.toUpperCase()
        pagesHeader.forEach(function(header,index){
            let headerTxt = header.innerText    
            headerTxt = headerTxt.toUpperCase()
            if(headerTxt.includes(text))
            {
                closeEveryPage()
                pages[index].style.display = "flex"
                setTimeout(openClickablePage,loadingSpeed,index)
                pageChecker++
            }
        })
        if(pageChecker==0)
        {
            closeEveryPage()
            setTimeout(openNotFoundPage,loadingSpeed)
        }
    })
})
//-----------------------------------------------------