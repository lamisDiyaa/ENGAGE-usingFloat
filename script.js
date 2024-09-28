let menu=document.querySelector(".menu button")
let navBar=document.querySelector(".toggle")
let content=document.querySelector(".hidden-content")
let tabs=document.querySelectorAll(".goal-tab")
let nature=document.getElementById("nature")
let photography=document.getElementById("photography")
let albumTabs=document.querySelectorAll(".Albums-tab")
let cards=document.querySelectorAll(".card")
let txt=document.querySelectorAll(".our__goal__txt")
let check=false
let readMore=document.querySelectorAll(".readMe")
let articleImage=document.querySelector(".article__container img")

// to make sure that i have src for the image
let imageee= JSON.parse(localStorage.getItem('img'))??"./imgs/romain-lours-133986-600x.jpg" 

if(articleImage){
    articleImage.src=imageee
}

menu.addEventListener("click",function(e){
    navBar.classList.toggle("hidden-header")
    check= !check
  
    if (check) {
        content.style.animationName = "top-nav"
        content.style.animationDuration=" 1s"
    }
})





tabs.forEach(function(ele){   
    ele.addEventListener("click",function(e){
        tabs.forEach(function(tab){
            tab.classList.remove("active-tab")
        })
        ele.classList.add("active-tab")
        e.preventDefault()
        txt.forEach(function(text){
            text.classList.add("hidden")
        })
        let idEle=e.target.id
        let element=document.querySelector(`.${idEle}`)
        element.classList.remove("hidden")
        element.style.animationName="move"
        element.style.animationDuration="1.8s"
    })
})

albumTabs.forEach(function(ele){
ele.addEventListener("click",function(e){
    albumTabs.forEach(function(selectedTab){
        selectedTab.classList.remove("active-tab-index")
    })
    e.target.classList.add("active-tab-index")
    let id=e.target.id
    cards.forEach(function(card){
        card.classList.add("hidden")
        if(card.classList.contains(id)){
            card.classList.remove("hidden")
        }else if(ele.id =="All"){
            cards.forEach(function(allCards){
                console.log(allCards)
                allCards.classList.remove("hidden")
            })
        }
    })
})
})


readMore.forEach(function(ele){
    ele.addEventListener("click",function(e){
        e.preventDefault()
        if(e.target.classList.contains("readMe")){
    let selectedImage=e.target.parentElement.parentElement.parentElement.querySelector("img").src
    console.log(e.target.parentElement.parentElement.parentElement)
    localStorage.setItem('img',JSON.stringify(selectedImage));
    let savedImage= JSON.parse(localStorage.getItem('img'))
    window.open('article.html', '_self')
    articleImage.src=savedImage
    console.log(savedImage)
        }
    })

})



