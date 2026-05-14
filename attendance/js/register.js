let btnCreate = document.getElementById('btnCreate')

btnCreate.addEventListener('click', () =>{
 let txtFname = document.getElementById("txtFname").value
 let txtLname = document.getElementById("txtLname").value
 let txtEmail = document.getElementById("txtEmail").value
 let txtPass = document.getElementById("txtPass").value
 let txtConPass = document.getElementById("txtConPass").value

  if(txtFname == "" || txtEmail == "" || txtPass == ""){
          alert("Name and email be filled")
  }else{
          if (txtConPass == txtPass) {
                
                  let emailID = txtEmail.replace(/\./g, "_dot_").replace(/@/g, "_at_")
                  let status = "inactive"
                  let timeNow = Date.now(); 
                  let role = "Admin"
                  firebase.auth().createUserWithEmailAndPassword(txtEmail,txtPass)
                  .then((userCredential) =>{
                          firebase.database().ref('userDetails/' + emailID).set({
                                  FirstName:txtFname,
                                  LastName:txtLname,
                                  Email: txtEmail,
                                  Status: status,
                                  CreatedBy: txtEmail,
                                  Role: role,
                                  CreatedOn: timeNow
                          })
                          alert("Account Created ")
                  })
                  .catch((error) => {
                          console.log(error)
                          alert(error.message)
                  })
          }else{
                  alert("Password do  not match")
          }
  }

})
