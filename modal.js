const modal = document.getElementById("modalAnnonce");

const ouvrir = document.getElementById("ouvrirModal");

const fermer = document.querySelector(".close");



ouvrir.onclick = () =>{
    modal.style.display="flex";
}

fermer.onclick = () =>{
    modal.style.display="none";
}

window.onclick=(e)=>{
    if(e.target===modal){
        modal.style.display="none";
    }
}

