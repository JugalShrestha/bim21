
const searchField = document.querySelector('.text-input input')
const search = document.querySelector('.search-btn')
const searchPage = document.querySelector('.search-page')
const searchResults = document.querySelector('.search-results')
const searchMsg = document.querySelector('.search-page .header .sub-header')

//for show items

//This is for tagged items
const tags = document.querySelectorAll('#clickable-tag')
let tagText = null

//TO check whether the search is empty or not
var emptyChecker = 0

//All Searchable items
const projectItems = ['coverpage generator','color picker','calculator']
const noteItems = ['digital logic','c course','java course','python course']
const items = ['coverpage generator'
                ,'syllabus'
                ,'class routine'
                ,'color picker'
                ,'digital logic'
                ,'c course'
                ,'python course'
                ,'java course']
//For sorting searchable items
items.sort()
items.forEach(function(item,index){
    const showItem = document.createElement('div')
    showItem.classList.add('search-item')
    showItem.setAttribute('id','clickable')
    showItem.innerText = item
    searchResults.appendChild(showItem) 
})

//All searchItems
const searchItems = document.querySelectorAll('.search-item')

searchField.addEventListener('keydown',function(btn){
    let key = btn.keyCode   
    if(key=='13')
    {
        openSearchPage()
    }
})

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
    searchedItem = searchedItem.toLowerCase()
    let message = "This is the search result on "
    if(tagText != null)
    {
        searchItems.forEach(item=>{
            item.style.display = "none"
        })
        if(tagText == "projects")
        {
            projectItems.forEach(function(pItem){
                items.forEach(function(item,index){
                    if(pItem==item)
                    {
                        searchItems[index].style.display= "flex"
                        searchedItem = "Projects"
                    }
                })
            })
        }
        else if(tagText == "notes")
        {
            noteItems.forEach(nItem=>{
                items.forEach(function(item,index){
                    if(nItem==item)
                    {
                        searchItems[index].style.display= "flex"
                        searchedItem = "Notes"
                    }
                })
            })
        }
        tagText = null
    }
    else
    {

        items.forEach(function(item,index){
            searchItems[index].style.display = "none"
            if(item.includes(searchedItem) && searchedItem.length>0)
            {
                searchItems[index].style.display= "flex"
            }
            else if(searchedItem.length == 0)
            {
                message = "Hey.. try searching 'coverpage'"
                searchedItem = ""        
                searchMsg.innerText = message
                return
            }
            else{
                emptyChecker++
                if(emptyChecker == searchItems.length)
                {
                    message = "Looks like nothing was found on "
                }
            }
        })
    }
    searchMsg.innerText = message + "' "+searchedItem+" '"
}

function closeSearchPage(){
    searchPage.style.display = "none"
    searchPage.style.opacity = "0%"
}

//-----------------For Clickable Tags------------------------
tags.forEach(tag=>{
    tag.addEventListener('click',()=>{
        tagText = tag.innerText.toLowerCase()
        openSearchPage()
    })
})