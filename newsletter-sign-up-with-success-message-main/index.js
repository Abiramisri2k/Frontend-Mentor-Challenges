let Form = document.getElementById("form");

if(Form){
    let emailInput = document.getElementById("email");
    let errorText = document.querySelector(".error-text");

Form.addEventListener("submit", function(e) {
    e.preventDefault();
    let emailValue = emailInput.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailValue)){
        emailInput.style.border = "2px solid red";
        emailInput.style.background = "hsl(4, 100%, 95%)";
        emailInput.style.color = "hsl(4, 100%, 50%)";
        errorText.style.opacity = 1;
        return;
    }
    
    localStorage.setItem("subscribedEmail", emailValue);
    window.location.href = "success.html";
});
}

let emailSpan = document.getElementById("mail");
let dismissBtn = document.querySelector(".success-popup button");

if(emailSpan){
    let savedEmail = localStorage.getItem("subscribedEmail");
    emailSpan.textContent = savedEmail;
    localStorage.removeItem("subscribedEmail");
}

if(dismissBtn){
    dismissBtn.addEventListener("click", ()=> {
        window.location.href = "index.html";
    });
}