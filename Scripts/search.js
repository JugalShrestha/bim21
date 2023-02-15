
const searchField = document.querySelector('.text-input input')
const search = document.querySelector('.search-btn')
const searchPage = document.querySelector('.search-page')
const searchMsg = document.querySelector('.search-page .header .sub-header')

const tags = document.querySelectorAll('#clickable-tag')
let tagText = null

var emptyChecker = 0

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
    if(tagText == null)
    {
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
                message = "Hey.. Try searching 'coverpage'"
                item.style.display = "none"
            }
            else{
                item.style.display = "none"
                emptyChecker ++
            }
        })
        if(emptyChecker == searchItems.length)
        {    
            emptyChecker = 0
            message = "Looks like nothing was found on "
        }
        searchMsg.innerHTML = message + searchedItem
    }
    else if(tagText != null)
    {   
        searchItems.forEach(item=>{
            if(item.hasAttribute('data-tag'))
            {
                let tag = item.getAttribute('data-tag')
                tag = tag.toLowerCase()
                tagText = tagText.toLowerCase()
                if(tagText == tag)
                {    
                    item.style.display = "flex"
                }
                else{
                    item.style.display = "none"
                }
            }
            else{
                item.style.display = "none"
            }
        })
        tagText = tagText.toUpperCase()
        searchMsg.innerHTML = message + tagText
        tagText = null
    }
}

function closeSearchPage(){
    searchPage.style.display = "none"
    searchPage.style.opacity = "0%"
}

//-----------------For Clickable Tags------------------------
tags.forEach(tag=>{
    tag.addEventListener('click',()=>{
        tagText = tag.innerText.toUpperCase()
        openSearchPage()
    })
})