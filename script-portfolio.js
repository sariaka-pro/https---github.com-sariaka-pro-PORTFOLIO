
// FONCTION DE FILTRAGE : 
function filterProjects(category) {
    const projects = document.querySelectorAll('.project'); // querySelectorAll : me permet de renvoyer une liste de tous les éléments, que l'on stocke dans la variable "projects"
    
    projects.forEach(project => { // for Each parcours tous les projets 
      if (project.classList.contains(category)) { // il s'agit des categ 'JS, personnels, recommendations' 
        project.style.display = 'block'; // permet d'afficher uniquement les projets de la categ sélectionnée. Display = block veut dire que ça s'affiche à l'écran . 
      } else {
        project.style.display = 'none'; // display = none cache l'affiche à l'écran
      }
    });
  }

const urlParams = new URLSearchParams(window.location.search); /// On a récupéré le lien, l'emplacement de la page ou il y a les categ. 
if(urlParams.get('categorie')){ // une condition : SI il retrouve la ?categorie=js par exemple, il l'affiche. ça permet d'éviter que ça créer des problèmes au niveau du filtrage global dans la page portfolio 
  const categorie = urlParams.get('categorie');
  filterProjects(categorie);
}




