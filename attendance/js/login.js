let btnlogin = document.getElementById("btnlogin");
btnlogin.addEventListener('click', () =>{
    let txtusername = document.getElementById("txtusername").value
    let txtpass = document.getElementById("txtpass").value
    btnlogin.innerHTML = "Please wait..."
    if(txtusername == "" || txtpass == ""){
        alert("Username and password must be filled")
        btnlogin.innerHTML = "Log in"
    }else{
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSSION)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(txtusername, txtpass)
    })
    .then((userCredential) => {
        let emailid = txtusername.replace(/\./g, "_dot_").replace(/@/g, "_at_")
        return firebase.database().ref('userDetails/' + emailid).once('value')
    })
    .then((snapshot) => { 
        const userData = snapshot.val()
        const role = userData.Role
        const status = userDetails.Status
        if (status === "active") {
            if (role === "Admin") {
                window.location.href = "admin.html"
            } else if (role === "User") {
                window.location.href = "user.html"
            }
        }else
            //inactive account
            alert("Your account is blocked, contact admin")  
})
 .catch((error) => {
                alert("wrong credentials")
                btnlogin.innerHTML = "Log in"
    })
    })

