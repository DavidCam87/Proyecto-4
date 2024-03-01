import { HeaderComponent } from './HeaderComponent.js';
import { MainComponent } from '../main/MainComponent.js';
import { Buttons } from '../main/Buttons.js';
export function NavigationComponent() {
  const main = new MainComponent();

  const header = HeaderComponent();
  const nav = document.createElement('nav');
  const titleDiv = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('h1');
  const headListUl = document.createElement('ul');
  const rrssUl = document.createElement('ul');
  const menuBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  const menu = document.createElement('div');
  nav.classList.add('flex_container');
  nav.classList.add('navi');
  titleDiv.classList.add('flex_container');
  titleDiv.classList.add('titleDiv');
  img.src = '/assets/DCI.png';
  img.classList.add('logo');
  title.textContent = 'David Camuñez';
  headListUl.classList.add('headList');
  rrssUl.classList.add('RRSS');
  menuBtn.textContent = '≡';
  menuBtn.classList.add('btnNav');
  closeBtn.textContent = 'X';
  closeBtn.classList.add('closeBtn');
  menu.classList.add('menu');
  nav.appendChild(titleDiv);
  nav.appendChild(headListUl);
  nav.appendChild(rrssUl);
  nav.appendChild(menuBtn);
  header.appendChild(nav);
  titleDiv.appendChild(img);
  titleDiv.appendChild(title);
  header.appendChild(menu);
  nav.appendChild(menu);
  menu.appendChild(closeBtn);
  const section2 = document.createElement('section');
  section2.id = 'sobreMi';
  document.body.appendChild(section2);

  // añadimos el contenido de las ul y le damos funcionalidad con event listeners
  const ulList = ["Home", "Sobre Mi", "Tech Stack", "Proyectos", "Contacto"];
  const ulrrss = [
    {
      img: "/assets/GitHub.svg",
      link: "https://github.com/DavidCam87",
    },
    {
      img: "/assets/twitter.svg",
      link: "https://twitter.com/DaCamdev",
    },
    {
      img: "/assets/linked.svg",
      link: "https://www.linkedin.com/in/david-camu%C3%B1ez-iglesias-b9b7a1273/",
    }
  ];
  const sections = {
    "Sobre Mi": "aboutMeSectionConten",
    "Tech Stack": "techStackSectionContent",
    "Proyectos": "projectsSectionContent"
  };
  const sectionHref = ["hero", "aboutMeSectionConten", "techStackSectionContent", "projectsSectionContent", "contact"];

  for (let i = 0; i < ulList.length; i++) {
    const li = ulList[i];
    const section = sectionHref[i];
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${section}">${li}</a>`;
    headListUl.append(listItem);
    listItem.addEventListener('click', (event) => {
      section2.querySelectorAll('article').forEach(section => {
        section.style.display = 'none';
      });
      document.getElementById(section).style.display = 'flex';
    });
  }
  for (let i = 0; i < ulrrss.length; i++) {
    const li = ulrrss[i];
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${li.link}" target="_blank" rel="noopener noreferrer"><img src="${li.img}" alt="social" /></a>`;
    rrssUl.appendChild(listItem);
  }
  menu.appendChild(closeBtn);
  for (let i = 0; i < ulList.length; i++) {
    const li = ulList[i];
    const section = sectionHref[i];
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${section}">${li}</a>`;
    menu.append(listItem);
    listItem.addEventListener('click', (event) => {
      section2.querySelectorAll('article').forEach(section => {
        section.style.display = 'none';
        menu.classList.remove('active')
      });
      document.getElementById(section).style.display = 'flex';
    });
  }
  // Agregar eventos
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('active');
  });
}