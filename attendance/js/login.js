let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener('click', () =>{
    let txtUsername = document.getElementById("txtUsername").value
    let txtPass = document.getElementById("txtPass").value
    btnLogin.innerHTML = "Please wait..."
    if(txtUsername == "" || txtPass == ""){
        alert("Username and password must be filled")
        btnLogin.innerHTML = "Log in"
    }else{
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(txtUsername, txtPass)
    })
    .then((userCredential) => {
        let emailID = txtUsername.replace(/\./g, "_dot_").replace(/@/g, "_at_")
        return firebase.database().ref('userDetails/' + emailID).once('value')
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
                btnLogin.innerHTML = "Log in"
    })
    })


