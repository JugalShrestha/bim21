
const searchField = document.querySelector('.text-input input')
const search = document.querySelector('.search-btn')
const searchPage = document.querySelector('.search-page')
const searchMsg = document.querySelector('.search-page .header .sub-header')

const searchItems = document.querySelectorAll('.search-item')

//Opens Search page
search.addEventListener('click',openSearchPage)

function openSearchPage(){
    closeEveryPage()
    searchPage.style.display = "flex"
    setTimeout(realOpenSearchPage,loadingSpeed)
}

//Removes the opacity to 100% for search page

function realOpenSearchPage()
{
    closeLoadingPage()
    searchPage.style.opacity="100%"
    let searchedItem = searchField.value
    let message = "This is the search result on "
    searchedItem = searchedItem.toUpperCase()
    searchItems.forEach(item=>{
        let text = item.innerText
        text = text.toUpperCase()
        if(text.includes(searchedItem) && searchedItem.length > 0)
        {
            item.style.display = "flex"
        }
        else if(searchedItem.length <= 0)
        {
            message = ""
            item.style.display = "none"
        }
        else{
            item.style.display = "none"
        }
    })
    searchMsg.innerHTML = message + searchedItem
}

function closeSearchPage(){
    searchPage.style.display = "none"
    searchPage.style.opacity = "0%"
}