let btnreset =document.getElementById('btnreset')
btnreset.addEventListener("click", () =>{
    let txtemail = document.getElementById(txtemail).ariaValue
    auth.sendPasswordResetEmail(txtemail)
    .then(() =>{
        alert("reset link has been sent")
        txtemail.value=""
    })
    .catch((error)=>{
      alert(error.messages)
      console.log(error)
      txtemail.value =""
    })
})
