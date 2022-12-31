let products = JSON.parse(localStorage.getItem("productsData"))

let itemId =  Number(localStorage.getItem("ItemId"))
let detailsContainer = document.querySelector(".details-container")
let clicked = products.find(item => item.id === itemId)

//////////////////////profile name ///
let profileName = document.querySelector(".profile-name a")

profileName.innerHTML = localStorage.getItem("first").charAt(0).toUpperCase()
//////////////////////////////////////////////

detailsContainer.innerHTML = `

<img src=${clicked.imgurl} alt="bgb">
<h2>${clicked.name}</h2>
<p>${clicked.p} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, fugiat.</p>
`


let searchLi = document.getElementById("Settings")
let searchSide = document.querySelector(".side-search")

searchLi.addEventListener("click" , openForSearch)

function openForSearch(){
    let div = document.createElement("div")

    div.className = "created-overlay"

    document.body.appendChild(div)
    searchSide.classList.add("show")
}

document.querySelector(".fa-arrow-left").addEventListener("click",()=>{
    document.querySelector(".created-overlay").remove()
    searchSide.classList.remove("show")  
})

/////////////colors//////
document.querySelectorAll(".set-box ul.colors li").forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color)
        localStorage.setItem("main-color" , e.target.dataset.color)
    })
})