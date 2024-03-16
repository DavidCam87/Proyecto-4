
export function Buttons() {

  const main = document.querySelector('main');
  const divButtons = document.createElement('div');
  divButtons.className = 'divButtons';
  main.appendChild(divButtons);

  const section2 = document.getElementById('sobreMi');
  main.appendChild(section2);

  //creamos objeto para alternar entre seleciones
  const sections = {
    "Sobre Mi": "aboutMeSectionConten",
    "Tech Stack": "techStackSectionContent",
    "Proyectos": "projectsSectionContent"
  };
  //botones para cambiar entre secciones
  for (const sectionName in sections) {
    const buton = document.createElement('button');
    buton.textContent = sectionName;
    divButtons.appendChild(buton);

    //eventos click de cada boton
    buton.addEventListener('click', function () {
      section2.querySelectorAll('article').forEach(section => {
        section.style.display = 'none';
      });
      document.getElementById(sections[sectionName]).style.display = 'flex';
    });
  };

  for (const sectionName in sections) {
    const article = document.createElement('article');
    article.id = sections[sectionName];
    section2.appendChild(article);
    //Mostramos Sobre mi primero
    if (sectionName === "Sobre Mi") {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  };
}