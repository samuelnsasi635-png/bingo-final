const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", () => {

        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

//surlignage automatique header

const links = document.querySelectorAll(".menu-lien a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
})
// DONNÉES DES PROPRIÉTÉS
const allProperties = [
    {
        id: 1,
        title: "Appartement luxe mcc ",
        price: 2500,
        type: "appartement",
        agent: "John Doe",
        phone: "0896789056",
        email: "john@bingo.cd",
        description: "Un appartement moderne avec vue sur la ville, situé au cœur de Gombe.",
        location: "Gombe",
        bedrooms: 1,
        bathrooms: 1,
        images: ["photo/terasse.webp",
            "photo/salon.jpeg",
            "photo/salon-vu2.jpeg",
            "photo/chambre.webp",
            "photo/cuisine.jpeg",
            "photo/salle de bain a2.jpg"
        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    {
        id: 2,
        title: "Villa moderne avec piscine",
        price: 5000,
        type: "villa",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Une villa spacieuse avec piscine et jardin, parfaite pour une famille.",
        location: "Kinshasa",
        bedrooms: 4,
        bathrooms: 3,
        images: ["photo/villa1_cour2.jpg",
                "photo/villa1_cour.jpg",
                "photo/villa1_piscine.jpg",
        ],
        status: "À vendre",
        whatsapp: "243982113690"
    },
    {
        id: 3,
        title: "Bureau commercial - Centre ville",
        price: 1800,
        type: "bureau",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Un bureau moderne situé au centre-ville, idéal pour les entreprises.",
        location: "Gombe",
        bedrooms: 0,
        bathrooms: 1,
        images: ["photo/bur1.jpg",
                "photo/bur2.jpg",
                "photo/bur5.jpg",

        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    {
        id: 4,
        title: "Maison spacieuse - Kalamu",
        price: 350,
        type: "maison",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Une maison equipé pour couple",
        location: "Kalamu",
        bedrooms: 1,
        bathrooms: 2,
        images:[ "photo/kal-salon.jpg",
                "photo/kal-sal2.jpg",
                "photo/kal-cham.jpg",
                "photo/kal-cham2.jpg",
                "photo/kal-cuisine.jpg",
                "photo/kal-douce.jpg",
        ],
        status: "À vendre",
        whatsapp: "243982113690"
    },
    {
        id: 5,
        title: "Appartement a2 - Limete",
        price: 450,
        type: "appartement",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "DON@bingo.cd",
        description: "Un appartement moderne a2 situé à Limete, idéal pour un couple.",
        location: "Limete",
        bedrooms: 1,
        bathrooms: 1,
        images: ["photo/salon a2.jpg",
                "photo/chambre a2.jpg",
                "photo/cuisine a2.jpg",
                "photo/grenier a2.jpg",
                "photo/salle de bain a2.jpg",
            
        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    {
        id: 6,
        title: "Villa prestige - Mont-Ngafula",
        price: 60000,
        type: "villa",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Une villa de prestige avec piscine et jardin, située à Gombe.",
        location: "Gombe",
        bedrooms: 5,
        bathrooms: 4,
        images:[ "photo/villa2_cour.jpg",
                "photo/villa2_arbre.jpg",
                "photo/villa2_salon.jpg",
                "photo/villa2_etage.jpg",
                "photo/villa2_chambre.jpg",
                "photo/villa2_douche.jpg",
                "photo/villa2_balcon.jpg"

        ],
        status: "À vendre",
        whatsapp: "243982113690"
    },
    {
        id: 7,
        title: "Maison récente - Centre",
        price: 2800,
        type: "maison",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Une maison récente gombe",
        location: "Gombe",
        bedrooms: 1,
        bathrooms: 1,
        images: ["photo/gom1.jpg",
                "photo/gom2.jpg",
                "photo/gom3.jpg",
                "photo/gom4.jpg"
            
        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    {
        id: 8,
        title: "Bureau moderne avec vue",
        price: 2200,
        type: "bureau",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Un bureau moderne avec vue panoramique, idéal pour les entreprises.",
        location: "Kinshasa",
        bedrooms: 0,
        bathrooms: 1,
        images:[ "photo/bu4.jpg",
            "photo/bur3.jpg",
            "photo/bur6.jpg",
        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    {
        id: 9,
        title: "maison moderne a matete",
        price: 230,
        type: "maison",
        agent: "Don junior K",
        phone: "+243 81 234 56 78",
        email: "jean@bingo.cd",
        description: "Une maison moderne située à Matete, idéale pour un jeune couple.",
        location: "Matete",
        bedrooms: 1,
        bathrooms: 1,
        images:[ "photo/cour_mat.jpg",
                "photo/salon_mat.jpg",
                "photo/couloir_mat.jpg",
                "photo/chambre_mat.jpg",
                "photo/chambre_mat.jpg",
                "photo/cuisine_mat.jpg",
                "photo/toilettte_mat.jpg",
        ],
        status: "à louer",
        whatsapp: "243982113690"
    },
    
];
// FONCTION: Afficher les propriétés filtrées// 
function displayProperties(propertiesToDisplay) {

    const container = document.getElementById("propertiesGrid");
    if (!container) return;
    container.innerHTML = "";//mutu pasi


    propertiesToDisplay.forEach(property => {

        container.innerHTML += `
            <article class="propriete-card">
                <span class="badge">${property.status}</span>

                <img src="${property.images[0]}" alt="${property.title}">

                <div class="propriete-contenu">

                    <h3>${property.title}</h3>

                    <p class="location">
                        ${property.location}
                    </p>

                    <p class="price">
                        ${property.price} $
                    </p>
                    <p class="price">
                        ${property.agent} 
                    </p>

                    <a href="#" class="btn"
                    onclick="viewDetails(${property.id}) ; return false;">
                        Voir les détails
                    </a>

                </div>

            </article>
        `;
    });

}

function filterProperties(type) {
    // Mettre à jour le bouton actif
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');

    // Filtrer et afficher
    if (type === 'all') {
        displayProperties(allProperties);
    } else {
        // filter() = garder seulement les propriétés du type sélectionné
        const filtered = allProperties.filter(p => p.type === type);
        displayProperties(filtered);
    }
}
// FONCTION: Voir les détails
function viewDetails(id) {
    const property = allProperties.find(p => p.id === id);
    const details = document.getElementById("detailsContent");
    let galerie = "";

    property.images.forEach(image => {

        galerie += `
        <img src="${image}" class="galerie-image">
    `;

    });

    details.innerHTML = `

<img src="${property.images[0]}" class="detail-image">
<div class="galerie">
    ${galerie}
</div>

<h2> ${property.title}</h2>

<span class="detail-status">
${property.status}
</span>

<p class="detail-price">
<i class="fa-solid fa-money-bill-wave"></i> ${property.price} $
</p>

<p>
<i class="fa-solid fa-location-dot"></i> ${property.location}
</p>

<p>
 <i class="fa-solid fa-building"></i> ${property.type}
</p>

<p>
<i class="fa-solid fa-bed"></i> ${property.bedrooms} chambres
</p>

<p>
<i class="fa-solid fa-bath"></i> ${property.bathrooms} salles de bain
</p>

<h3> <i class="fa-solid fa-file-lines"></i>Description</h3>

<p>
${property.description}
</p>

<hr>

<h3>Agent responsable</h3>

<p>
<i class="fa-solid fa-user-tie"></i> ${property.agent}
</p>

<p>
<i class="fa-solid fa-phone"></i> ${property.phone}
</p>

<p>
<i class="fa-solid fa-envelope"></i> ${property.email}
</p>

<a
class="whatsapp-btn"
href="https://wa.me/${property.whatsapp}"
target="_blank">

<i class="fa-brands fa-whatsapp"></i> Contacter sur WhatsApp

</a>

`;
    document.getElementById("detailsModal").style.display = "flex";
}

const detailsModal = document.getElementById("detailsModal");
const closeDetails = document.getElementById("closeDetails");
if (detailsModal && closeDetails) {

    closeDetails.onclick = () => {
        detailsModal.style.display = "none";
    };
}

window.addEventListener("click", function (e) {

    if (e.target === detailsModal) {
        detailsModal.style.display = "none";

    }
});

// Afficher toutes les propriétés au chargement
displayProperties(allProperties);

const imageInput = document.getElementById("images");
const preview = document.getElementById("preview");

if (imageInput && preview) {

    imageInput.addEventListener("change", () => {

        preview.innerHTML = "";

        const fichiers = imageInput.files;

        for (let i = 0; i < fichiers.length; i++) {

            const lecteur = new FileReader();

            lecteur.onload = function (e) {

                const img = document.createElement("img");
                img.src = e.target.result;

                preview.appendChild(img);

            };

            lecteur.readAsDataURL(fichiers[i]);

        }

    });
}
//validation du formulaire d'annonce

const form = document.getElementById("annonceForm");
if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const prix = document.getElementById("prix").value;
        const description = document.getElementById("description").value.trim();

        if (nom === "") {
            alert("Veuillez entrer votre nom.");
            return;
        }

        if (telephone === "") {
            alert("Veuillez entrer votre numéro.");
            return;
        }

        if (prix <= 0) {
            alert("Veuillez entrer un prix valide.");
            return;
        }

        if (description === "") {
            alert("Veuillez écrire une description.");
            return;
        }

        if (imageInput.files.length === 0) {
            alert("Ajoutez au moins une image.");
            return;
        }

        const message = document.getElementById("message");

        message.innerHTML = `
message.innerHTML=

<div class="success-message">
</div>;
✅ Votre annonce a été envoyée avec succès nous l'analyserons et nous vous tiendrons informés !
</div>
`;
        setTimeout(() => {
            form.reset();
            preview.innerHTML = "";
            message.innerHTML = "";
            modal.style.display = "none";
        }, 2500);
    });
}


const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu-lien");
if (menu && hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
    })
};
 