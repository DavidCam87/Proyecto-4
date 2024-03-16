import { data } from '../../../data.js';
export function ProjectsComponent() {
  const projectsSect = document.getElementById('projectsSectionContent');
  const divTProyects = document.createElement('div');
  divTProyects.classList.add('divTP');
  projectsSect.append(divTProyects);
  const h3Projects = document.createElement('h3');
  h3Projects.textContent = 'Proyectos';
  divTProyects.append(h3Projects);
  const pProjects = document.createElement('p');
  pProjects.textContent = 'Estos son algunos de mis proyectos.';
  divTProyects.append(pProjects);

  const divProject = document.createElement('div');
  divProject.classList.add('divProject');
  projectsSect.appendChild(divProject);

  let contadorDivTP = 0;
  for (const project of data.projects) {
    if (contadorDivTP < 3) {
      const divP = document.createElement('div');
      divP.classList.add('divP');
      divProject.appendChild(divP);
      divP.innerHTML = `
    <img src="${project.preview}" alt="${project.title}" class="imgPrev">
      <h4 class="title">${project.title}</h4>
      <p class="description">${project.description}</p>
      <div class="fila">
        <a class="link" href="${project.livePrev}" target="_blank" rel="noopener noreferrer"><img src="assets/link-chain.svg" alt="linkPrev">Ver Proyecto</a>
        <a class="link" href="${project.link}" target="_blank" rel="noopener noreferrer"><img src="assets/github-fill.svg" alt="githubLink">Ver Codigo</a>
      </div>`;
    }
  }
}