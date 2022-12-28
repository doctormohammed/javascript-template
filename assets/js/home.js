/////////////////Items Data/////////////////////////
let productsData = JSON.parse(localStorage.getItem("productsData"))


let profileName = document.querySelector(".profile-name a")

profileName.innerHTML = localStorage.getItem("first").charAt(0).toUpperCase()

///////log Out //////////////////////////////////////

let logOut = document.querySelector(".log-out")

logOut.addEventListener("click",logOutFunction)

function logOutFunction(){

    localStorage.removeItem("pass")

    localStorage.removeItem("email")

    localStorage.removeItem("first")

    window.location = "sign-in.html"
}



function drowUi(products){
let mo = products.map(product=>{
        return `
        <div class="product">
            <img src=${product.imgurl} alt="logo">
            <div class="info">
               <h3 onclick="saveItemId(${product.id})">${product.name}</h3>
               <p>${product.p}</p>
               <span>${product.size}</span>
            </div>
            <div class="control">
                <i style="color:${product.like === true?"red":"black"}" onclick="addToFav(${product.id})" class="fa fa-heart"></i>
                <button onclick="addToCart(${product.id})">Add To Cart</button>
            </div>
        </div>`
})

    document.querySelector(".products").innerHTML = mo
} 

drowUi(productsData)

///////////////search//////////////////////////////

let searchInput = document.querySelector(".search")

searchInput.addEventListener("keyup" , ()=>{

    let filtered = productsData.filter(item=>item.name

        .indexOf((searchInput.value).trim().toLowerCase())!==-1)

    drowUi(filtered)
})
//////////////////////////////////////////////////


window.onload  = function(){
   if(localStorage.getItem("cart-length")){

    if(localStorage.getItem("cart-length") ==0){

        document.querySelector(".span-count").style.display = "none"

    }else{
        document.querySelector(".span-count").innerHTML = localStorage.getItem("cart-length")

        document.querySelector(".span-count").style.display = "inline-block"
    }
   }
   if(localStorage.getItem("addedToFav")){

    if(JSON.parse(localStorage.getItem("addedToFav")).length ===0){

        document.querySelector(".fav-count").style.display = "none"
    }else{
        document.querySelector(".fav-count").style.display = "block"

        document.querySelector(".fav-count").innerHTML =

         JSON.parse(localStorage.getItem("addedToFav")).length
    }
   }
   
   if(localStorage.getItem("main-color")){

    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("main-color"))
   }
   
}

///////////////////////////////////////////////////////////////////////////////////////////

let added = localStorage.getItem("productsInCart")?
JSON.parse(localStorage.getItem("productsInCart")):
[]


function addToCart(id){
    let clicked = productsData.find(item=>item.id === id)
  
    let item = added.find(item=>item.id == clicked.id )
    
    if(item){
        clicked.quantity +=1
    }else{
        added = [...added , clicked]
    }


    localStorage.setItem("cart-length" , added.length)

    localStorage.setItem("productsInCart" ,JSON.stringify(added))

    document.querySelector(".span-count").innerHTML = 

    localStorage.getItem("cart-length")
    
    document.querySelector(".span-count").style.display = "inline-block"

}

let addedToFAv = localStorage.getItem("addedToFav")?
JSON.parse(localStorage.getItem("addedToFav")):
[]

////////////////// Add To Favorite//////////////////////////////////////////////////////

function addToFav(id){

    let choosen = productsData.find(item=>item.id === id)

    let item = addedToFAv.find(item=>item.id == choosen.id)

    if(item){

        addedToFAv.pop(choosen)

        choosen.like  = false

        drowUi(productsData)

    }else{

        addedToFAv = [...addedToFAv , choosen]   

        choosen.like = true

        drowUi(productsData)
    }

    localStorage.setItem("addedToFav",JSON.stringify(addedToFAv))

    document.querySelector(".fav-count").innerHTML = addedToFAv.length

    if(addedToFAv.length === 0){

        document.querySelector(".fav-count").style.display = "none"

    }else{
        document.querySelector(".fav-count").style.display = "block"
    }
   
}
///////////////////////////////////////////////////////////////////////////////////////
function saveItemId(id){

    localStorage.setItem("ItemId" , id)

    window.location = "details.html"
}

///////////////search////////////////////////////////////////////////////////////////////

let searchLi = document.getElementById("Settings")

let searchSide = document.querySelector(".side-search")

searchLi.addEventListener("click" , openForSearch)

function openForSearch(){

    let div = document.createElement("div")

    div.className = "created-overlay"

    document.body.appendChild(div)

    searchSide.classList.add("show")
}

/////////////Back Fuction/////////////////////////////////////////////////////////////////

let back = document.querySelector(".fa-arrow-left")

back.addEventListener("click",backFuction)

function backFuction(){

    document.querySelector(".created-overlay").remove()

    searchSide.classList.remove("show")
}

/////////////colors////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".set-box ul li").forEach(li=>{

    li.addEventListener("click",(e)=>{

        document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color)

        localStorage.setItem("main-color" , e.target.dataset.color)
    })
})

//////////////////////////profile///////////////////////////////////////////////////////

let profile = document.getElementById("profile")
let backProfile = document.querySelector(".profile .fa-arrow-left")


profile.addEventListener("click" ,()=>{
    document.querySelector(".profile").classList.add("show")
})

backProfile.addEventListener("click",()=>{   
     document.querySelector(".profile").classList.remove("show")
})