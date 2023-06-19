
const searchField = document.querySelector('.text-input input')
const search = document.querySelector('.search-btn')
const searchPage = document.querySelector('.search-page')
const searchResults = document.querySelector('.search-results')
const searchMsg = document.querySelector('.search-page .header .sub-header')

//For landing Everthing page
const everyProjectResult = document.querySelector('.every-projects-body')

//for show items

//This is for tagged items
const tags = document.querySelectorAll('#clickable-tag')
let tagText = null

//TO check whether the search is empty or not
var emptyChecker = 0

//All Searchable items
const noteItems = ['digital logic','c course','java course','python course']
const items = [
    {name:'coverpage generator',tag: 'project'},
    {name: 'syllabus',tag:'syllabus'},
    {name: 'class routine',tag:'routine'},
    {name:'digital logic course',tag: 'note'},
    {name:'c course',tag: 'note'},
    {name:'java course',tag: 'note'},
]
//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

//For resulting all results
items.forEach(item=>{
    const showItem = document.createElement('div')
    showItem.classList.add('show-item')
    showItem.setAttribute('id','clickable')
    showItem.innerText = item.name
    everyProjectResult.appendChild(showItem) 
})
//For search
items.forEach(item=>{
    const showItem = document.createElement('div')
    showItem.classList.add('search-item')
    showItem.setAttribute('id','clickable')
    showItem.innerText = item.name
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
    searchField.value = ''
    searchedItem = searchedItem.toLowerCase()
    let message = "This is the search result on "
    if(tagText != null)
    {
        searchItems.forEach(item=>{
            item.style.display = "none"
        })
        if(tagText == "projects")
        {
            items.forEach(function(item,index){
                if(tagText==item.tag+'s')
                {
                    searchItems[index].style.display= "flex"
                    searchedItem = "Projects"
                }
            })
        }
        else if(tagText == "notes")
        {
            items.forEach(function(item,index){
                if(tagText==item.tag+'s')
                {
                    searchItems[index].style.display= "flex"
                    searchedItem = "Notes"
                }
            })
        }
        tagText = null
    }
    else
    {

        items.forEach(function(item,index){
            searchItems[index].style.display = "none"
            if(item.name.includes(searchedItem) && searchedItem.length>0)
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