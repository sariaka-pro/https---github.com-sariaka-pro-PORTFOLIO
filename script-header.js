// Header DARK 
/// Création de la Nav bar avec les liens 
if(document.getElementById("headPageDark")){


    document.addEventListener("DOMContentLoaded", function addNavDark () {
        const header = document.getElementById("headPageDark"); 
        const nav = document.createElement("nav"); 
        const aimg = document.createElement("a");
        const img = document.createElement("img");

        aimg.href = "index.html";
        img.setAttribute('src','images/logo-dark.png'); 
        header.appendChild(aimg);
        aimg.appendChild(img); 
        header.appendChild(nav); 


        // les éléments du menu avec leur texte et leur lien
        const liens = [
            { titre: "À PROPOS", url: "index-apropos.html" },
            { titre: "PORTFOLIO", url: "index-portfolio.html" },
            { titre: "CONTACT", url: "index-contact.html" },
        ];

        // Boucle de création des li et a
        liens.forEach(item => {
            const a = document.createElement("a");

            a.textContent = item.titre;
            a.href = item.url;
            a.classList.add("lien-a1");
            nav.appendChild(a);
        });
    });
}

// Header LIGHT 
/// Création de la Nav bar avec les liens 
if(document.getElementById("headPageLight")){

    document.addEventListener("DOMContentLoaded", function addNavLight () {
        const header = document.getElementById("headPageLight"); 
        const nav = document.createElement("nav"); 
        const aimg1 = document.createElement("a");
        const img = document.createElement("img");

        aimg1.href = "index.html";
        img.setAttribute('src','images/logo-light.png'); 
        header.appendChild(aimg1); 
        aimg1.appendChild(img);
        header.appendChild(nav); 


        // les éléments du menu avec leur texte et leur lien
        const liens = [
            { titre: "À PROPOS", url: "index-apropos.html" },
            { titre: "PORTFOLIO", url: "index-portfolio.html" },
            { titre: "CONTACT", url: "index-contact.html" }
        ];

        // Boucle de création des li et a
        liens.forEach(item => {
            const a = document.createElement("a");

            a.textContent = item.titre;
            a.href = item.url;
            a.classList.add("lien-a2");

            nav.appendChild(a);
        });
    })
}


