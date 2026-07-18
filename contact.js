const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const demande = document.querySelector("#demande").value;
const commune = document.querySelector("#commune").value;


contactForm.addEventListener("submit", function (e) {

    e.preventDefault();


    const nom = document.querySelector("#nom").value;
    const email = document.querySelector("#email").value;
    const telephone = document.querySelector("#telephone").value;
    const demande = document.querySelector("#demande").value;
    const commune = document.querySelector("#commune").value;
    const sujet = document.querySelector("#sujet").value;
    const message = document.querySelector("#message").value;


    if (
        nom === "" ||
        email === "" ||
        telephone === "" ||
        demande === "" ||
        commune === "" ||
        sujet === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Veuillez remplir tous les champs.";

        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
        "Votre message a bien été envoyé. Merci de nous contacter.";

    formMessage.style.color = "green";


    contactForm.reset();

});