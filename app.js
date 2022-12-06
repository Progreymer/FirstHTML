function verify_creds(){
    let userName = document.usernameForm.username.value;
    let passWord = document.usernameForm.password.value;
    if (userName == "Stoyan" && passWord == "12345"){
        location.href = "page2.html";
    } else {
        document.getElementById("extra-message").innerHTML = "Login Failed"
    }
}

let pw = document.querySelector("#password");
pw.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        document.querySelector('#submit').click();
    }
})
