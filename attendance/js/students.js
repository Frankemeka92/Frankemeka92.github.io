let btnAddStudent = document.getElementById('btnAddStudent')

btnAddStudent.addEventListener('click', () =>{
 let txtFname = document.getElementById("txtFname").value
 let txtLname = document.getElementById("txtLname").value
 let txtEmail = document.getElementById("txtEmail").value
 

  if(txtFname == "" || txtEmail == "" || txtPass == ""){
          alert("Name and email be filled")
  }else{
                  let emailID = txtEmail.replace(/\./g, "_dot_").replace(/@/g, "_at_")
                  let status = "inactive"
                  let timeNow = Date.now(); 
                  let role = "Student"
                  let autoPass = "12345678"
                  let user = firebase.auth().currentUser;
                  let createdBy = user.email;
                  firebase.auth().createUserWithEmailAndPassword(txtEmail,autoPasS)
                  .then((userCredential) =>{
                          firebase.database().ref('userDetails/' + emailID).set({
                                  FirstName:txtFname,
                                  LastName:txtLname,
                                  Email: txtEmail,
                                  Status: status,
                                  CreatedBy: createdBy,
                                  Role: role,
                                  CreatedOn: timeNow
                          })
                          alert("New student added password is 12345678 and username is the email")
                  })
                  .catch((error) => {
                          console.log(error)
                          alert(error.message)
                  })
          
  }

})
