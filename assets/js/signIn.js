let email = document.querySelector("input[type='email']")
let pass = document.querySelector("input[type='password']")
let submit = document.querySelector("input[type='submit']")
let form = document.querySelector("form")

form.onsubmit  = function(e){
    e.preventDefault()
    if(email.value ===""||pass.value ===""){
        alert("Enter  data")
    }else if(pass.value!==localStorage.getItem("pass")||email.value!==localStorage.getItem("email")){
        alert("wrong data")
    }else{
        window.location = "home.html"
    }
}
