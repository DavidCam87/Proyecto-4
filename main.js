import { data } from './src/components/useObjet/data.js'
// Crear elementos
const header = document.createElement('header');
const nav = document.createElement('nav');
const titleDiv = document.createElement('div');
const img = document.createElement('img');
const title = document.createElement('h1');
title.textContent = 'David Camuñez';
const headListUl = document.createElement('ul');
const rrssUl = document.createElement('ul');
const menuBtn = document.createElement('button');
const closeBtn = document.createElement('button');
const menu = document.createElement('div');

// Agregar clases e imagenes delLI
nav.classList.add('flex_container');
nav.classList.add('navi');
titleDiv.classList.add('flex_container');
titleDiv.classList.add('titleDiv');
img.src = './assets/DCI.png';
img.classList.add('logo');
headListUl.classList.add('headList');
rrssUl.classList.add('RRSS');
menuBtn.textContent = '≡';
menuBtn.classList.add('btnNav');
menu.classList.add('menu');
closeBtn.textContent = 'X';
closeBtn.classList.add('closeBtn');

// Añadir elementos al DOM
nav.appendChild(titleDiv);
titleDiv.appendChild(img);
titleDiv.appendChild(title);
nav.appendChild(headListUl);
nav.appendChild(rrssUl);
nav.appendChild(menuBtn);
header.appendChild(nav);
header.appendChild(menu);
// Agregar al body
document.body.appendChild(header);
// Llenar elementos List
const ulList = ["Home", "Sobre Mi", "Tech Stack", "Proyectos", "Contacto"];
const ulrrss = [
  {
    img: "./assets/GitHub.svg",
    link: "https://github.com/DavidCam87",
  },
  {
    img: "./assets/twitter.svg",
    link: "https://twitter.com/DaCamdev",
  },
  {
    img: "./assets/linked.svg",
    link: "https://www.linkedin.com/in/david-camu%C3%B1ez-iglesias-b9b7a1273/",
  }
];

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


for (const li of ulrrss) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="" target="_blank" rel="noopener noreferrer"><img src="${li.img}" alt="social" /></a>`;
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
const main = document.createElement('main');
document.body.appendChild(main);


//!main
const hello = document.createElement('section');
hello.className = 'flex_container';
hello.id = 'hero';
main.appendChild(hello);
const presentation = document.createElement('div');
presentation.className = 'greeting';
hello.appendChild(presentation);
const h2 = document.createElement('h2');
h2.innerHTML = `Hola, soy <span id = "egg" class="nameColor">${data.name}</span> desarrollador Full Stack`;
const audio = document.createElement('audio');
audio.id = 'audio';
audio.src = "./assets/Day One (Interstellar Theme).mp3";
audio.type = "audio/mpeg";
document.body.appendChild(audio);
presentation.appendChild(h2);
const divimg = document.createElement('div');
divimg.className = 'divImg';
hello.appendChild(divimg);
const section2 = document.createElement('section');
section2.id = 'sobreMi';
main.appendChild(section2);
const divButtons = document.createElement('div');
divButtons.className = 'divButtons';
section2.appendChild(divButtons);
const image = document.createElement('img');
image.src = data.avatar;
image.classList.add('avatar');
image.alt = "Imagen de mi perfil";
divimg.appendChild(image);

document.getElementById("egg").addEventListener("click", function () {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

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

//generamos contenido de cada articulo
const aboutMeSect = document.getElementById('aboutMeSectionConten');
for (let i = 0; i < 3; i++) {
  if (i == 0) {
    const divAboutMe = document.createElement('div');
    divAboutMe.classList.add('divAboutMe');
    aboutMeSect.appendChild(divAboutMe);
    const h3 = document.createElement('h3');
    h3.textContent = 'Sobre Mi';
    divAboutMe.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = data.aboutMe;
    divAboutMe.appendChild(p);

  } else if (i == 1) {
    const work = document.createElement('div');
    work.classList.add('divWork');
    aboutMeSect.appendChild(work);
    const h3 = document.createElement('h3');
    h3.textContent = 'Experiencia De Trabajo';
    work.appendChild(h3);
    for (const experience of data.workExperience) {
      const experienciaHTML = `
        <div class="experience">
          <div class= "left">
            <p class="position">${experience.position}</p>
            <p class="company"> 🏢${experience.company}</p>
          </div>
          <div class= "right">
              <p class="workday">${experience.workday}</p>
            <p class="date">📅${experience.startDate} - ${experience.endDate}</p>
          </div>
        </div>
      `;
      work.innerHTML += experienciaHTML;
    }
  } else if (i == 2) {
    const educacion = document.createElement('div');
    educacion.classList.add('divEducation');
    aboutMeSect.appendChild(educacion);
    const h3 = document.createElement('h3');
    educacion.appendChild(h3);
    h3.textContent = 'Educacion';
    const eduLeft = document.createElement('div');
    eduLeft.classList.add('eduLeft');
    const eduRight = document.createElement('div');
    eduRight.classList.add('eduRight');
    educacion.appendChild(eduLeft);
    educacion.appendChild(eduRight);
    for (const key in data.education) {
      const p = document.createElement('p');
      p.textContent = `${data.education[key]}`;
      if (data.education[key] == "Full Stack Development") {
        p.textContent = `Actualemnte Estudiando ${data.education[key]} en Rock {The Code}`;
        eduRight.appendChild(p);

      } else {
        eduLeft.appendChild(p);
      }
      if (data.education[key] == "2012") {
        p.textContent = `📅 Jul-${data.education[key]}`;
        eduLeft.appendChild(p);
      }
    }
  }

}

const techStackSect = document.getElementById('techStackSectionContent');
const divTech = document.createElement('div');
divTech.classList.add('divTech');
techStackSect.append(divTech);

const h3Tech = document.createElement('h3');
h3Tech.textContent = 'Mis Tech Stacks';
divTech.append(h3Tech);

const pT = document.createElement('p');
pT.textContent = 'Estas son algunas de las tecnologías que manejo y aprendiendo mas';
pT.classList.add('pT');
divTech.append(pT);

const divT = document.createElement('div');
divT.classList.add('divT');
techStackSect.appendChild(divT);

for (const date of data.skills) {
  const di = document.createElement('div');
  di.classList.add('di');
  divT.appendChild(di);
  const pTech = document.createElement('p');
  const imgT = document.createElement('img');
  imgT.src = date.icon;
  imgT.alt = date.name;
  pTech.textContent = date.name;
  di.appendChild(imgT);
  di.appendChild(pTech);
};



const projectsSect = document.getElementById('projectsSectionContent');
const divTProyects = document.createElement('div');
divTProyects.classList.add('divTP');
projectsSect.append(divTProyects);
const h3Projects = document.createElement('h3');
h3Projects.textContent = 'Proyectos';
divTProyects.append(h3Projects);
const pProjects = document.createElement('p');
pProjects.textContent = 'Estos son algunos de mis proyectos';
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

const contacto = document.createElement('section');
contacto.id = 'contact';
contacto.classList = 'flex_container';
main.appendChild(contacto);
const divTitle = document.createElement('div');
divTitle.classList = 'divTitle';
contacto.appendChild(divTitle);
const titleContact = document.createElement('h2');
titleContact.innerText = "Para cualquier consulta, ¡Contáctame!";
divTitle.appendChild(titleContact);
const mail = document.createElement('p');
mail.innerHTML = `<span class="mailColor">${data.email}</span>`;
divTitle.appendChild(mail);

const info = document.createElement('div');
info.classList = 'info';
contacto.appendChild(info);
const p1 = document.createElement('a');
p1.textContent = `${data.phone}`;
p1.href = `tel:${data.phone}`;
info.appendChild(p1);
const p2 = document.createElement('a');
p2.textContent = `${data.email}`;
p2.href = 'mailto: ${data.email}';
info.appendChild(p2);

const ulInfo = document.createElement('ul');
ulInfo.classList = 'ulInfo';
info.appendChild(ulInfo);
for (const li of ulrrss) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="${li.link}" target="_blank" rel="noopener noreferrer"><img src="${li.img}" alt="" /></a>`;
  ulInfo.appendChild(listItem);
}

const footer = document.createElement('footer');
footer.classList = 'footer';
footer.innerHTML = `
  <p>CopyRight© 2024 DCI - All Rights Reserved</p>
  <p>Desarrollado por ${data.name} con pasion y mucha paciencia</p>`;
document.body.appendChild(footer);





