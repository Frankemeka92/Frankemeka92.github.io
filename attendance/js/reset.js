let btnReset =document.getElementById('btnReset')
btnReset.addEventListener("click", () =>{
    let txtEmail = document.getElementById(txtEmail).ariaValue
    auth.sendPasswordResetEmail(txtEmail)
    .then(() =>{
        alert("reset link has been sent")
        txtEmail.value=""
    })
    .catch((error)=>{
      alert(error.messages)
      console.log(error)
      txtEmail.value =""
    })
})
