// gestion  d'onglet(connexion et inscription)
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.onclick = () => {

    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginTab.classList.add("active");
    registerTab.classList.remove("active")

};
registerTab.onclick = () => {

    loginForm.style.display = "none"
    registerForm.style.display = "block"
    registerTab.classList.add("active")
    loginTab.classList.remove("active")
};

// verifier le mot de passe incription

const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", (e) => {

    if (registerPassword.value !== confirmPassword.value) {
        e.preventDefault()
        alert("Les mots de passe sont différents.");
    }
    else{
          alert("Compte créé avec succès !");
    }


});

