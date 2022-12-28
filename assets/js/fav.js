let addedToFAv = localStorage.getItem("addedToFav")?
JSON.parse(localStorage.getItem("addedToFav")):
[]

//////profile Trick////////////////
let profileName = document.querySelector(".profile-name a")
profileName.innerHTML = localStorage.getItem("first").charAt(0).toUpperCase()
////////////////////////////////////////////////

function drowUi(products){
    let mo = products.map(product=>{
            return `
            <div class="product">
                <img src=${product.imgurl} alt="logo">
                <div class="info">
                   <h3>${product.name}</h3>
                   <p>${product.p}</p>
                   <span>${product.size}</span>
                </div>
                <div class="control">
                    <button onclick="removeFromFav(${product.id})">Remove From Fav</button>
                </div>
            </div>`
    })
    
        document.querySelector(".fav-container").innerHTML = mo
    }
    
    drowUi(addedToFAv)



    function removeFromFav(id){

        if(localStorage.getItem("addedToFav")){
            let items = JSON.parse(localStorage.getItem("addedToFav"))
            let filtered = items.filter(item=>item.id !==id)
            drowUi(filtered)

            localStorage.setItem("addedToFav" , JSON.stringify(filtered))
        }

    }


let searchLi = document.getElementById("Settings")
let searchSide = document.querySelector(".side-search")

searchLi.addEventListener("click" , openForSearch)

function openForSearch(){

    let div = document.createElement("div")

    div.className = "created-overlay"

    document.body.appendChild(div)

    searchSide.classList.add("show")
}

///////////////back //////////////////////////////////
let back = document.querySelector(".fa-arrow-left")

back.addEventListener("click",backFuction)

function  backFuction(){

    document.querySelector(".created-overlay").remove()

    searchSide.classList.remove("show") 
} 

/////////////colors//////
document.querySelectorAll(".set-box ul li").forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color)
        localStorage.setItem("main-color" , e.target.dataset.color)
    })
})