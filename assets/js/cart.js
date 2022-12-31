let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))

let productsInCartDom = document.querySelector(".products-in-cart")
let noItems = document.querySelector(".no-items")

//////profile Trick////////////////
let profileName = document.querySelector(".profile-name a")
profileName.innerHTML = localStorage.getItem("first").charAt(0).toUpperCase()
////////////////////////////////////////////////

if(productsInCart){
    let items = JSON.parse(localStorage.getItem("productsInCart"))
    drowUi(items)
}

function drowUi(allProducts){
   if(productsInCart.length ==0){
    noItems.innerHTML = "No Items To Show"
   }

    let mo = allProducts.map(product=>{
        return `
        <div class="product">
           <img src=${product.imgurl} alt="logo">
           <div class="info">
               <h3>${product.name}</h3>
               <p>${product.p}</p>
               <span>${product.size}</span><br>
               <span class="plus">+</span>
               <span> Quantity : 
                    <span class="quantity">${product.quantity}</span>
               </span>
               <span class="minus">-</span>
           </div>
           <div class="control">
               <button onclick = "removeFromCart(${product.id})">Remove From Cart</button>
           </div>
        </div>`
    })
    productsInCartDom.innerHTML = mo 
}




function removeFromCart(id){
    if(localStorage.getItem("productsInCart")){
        let items = JSON.parse(localStorage.getItem("productsInCart"))
        let filtered = items.filter(item=>item.id !== id)
        drowUi(filtered)
        if( localStorage.getItem("cart-length")){
            
            localStorage.setItem("cart-length" , filtered.length)
        }
        
        localStorage.setItem("productsInCart" , JSON.stringify(filtered))
    }
     if(productsInCart.length ==1){
            productsInCartDom.innerHTML ="No Items To Show We Are Back To Home"
            setTimeout(()=>{
                window.location = "home.html"
            },1500)
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

document.querySelector(".fa-arrow-left").addEventListener("click",()=>{
    document.querySelector(".created-overlay").remove()
    searchSide.classList.remove("show")  
})

///////add quantity//////////

let add = document.querySelector(".plus")

let minus = document.querySelector(".minus")

let qun = document.querySelector(".quantity")

add.addEventListener("click" , addFuction)
minus.addEventListener("click" , minusFuction)

function addFuction(){
    let num = Number(qun.innerHTML)
    num += 1
    qun.innerHTML = num
}
function minusFuction(){
    let num = Number(qun.innerHTML)
    if(num<=0){
        return false
    }else{
        num -= 1
        qun.innerHTML = num
    }
}




/////////////colors//////
document.querySelectorAll(".set-box ul.colors li").forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color)
        localStorage.setItem("main-color" , e.target.dataset.color)
    })
})