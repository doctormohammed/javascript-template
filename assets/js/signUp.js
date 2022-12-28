let pass = document.querySelector("#pass")

let feildPass = document.querySelector("#feild-pass")

let eyeShow = document.querySelector(".fa-eye")

let fistName = document.querySelector("#first")

let lastName = document.querySelector("#last")

let email = document.querySelector("#email")

let form = document.querySelector("form")


form.addEventListener("submit",(e)=>{

   e.preventDefault()

   if(pass.value ===""||fistName.value ==""||lastName.value==""||email.value ===""){
      alert("please enter data")
   }else if(pass.value.length<8){
      alert("valid pass")
   }else{
      localStorage.setItem("email" , email.value)

      localStorage.setItem("pass" , pass.value)

      localStorage.setItem("first" , fistName.value)

      setTimeout(function(){window.location = "sign-in.html"},1500)
   }
})



pass.addEventListener("keyup",change)
function change(){
   if(pass.value.length < 8){
    feildPass.style.border = "1px solid red"
   }else{
    feildPass.style.border = "2px solid green"
    feildPass.style.transition = "0.3s"
   }
}

eyeShow.addEventListener("click",()=>{
   if(pass.type === "password"){
      pass.type = "text"
      eyeShow.style.opacity = "0.7"
   }else{
    pass.type = "password"
    eyeShow.style.opacity = "1"
   }
})
