export function NavigationComponent() {

  const headerTemplate = `
  <header>
    <nav class="flex_container navi">
      <div class="flex_container titleDiv">
        <img src="/assets/DCI.png" class="logo">
        <h1>David Camuñez</h1>
      </div>
      <ul class="headList"></ul>
      <ul class="RRSS"></ul>
      <button class="btnNav">≡</button>
    </nav>
    <div class="menu">
      <button class="closeBtn">X</button>
    </div>
  </header>
`;
  const section2Template = `<section id="sobreMi"></section>`;

  document.body.innerHTML = headerTemplate + section2Template;
  const headListUl = document.querySelector('.headList');
  const rrssUl = document.querySelector('.RRSS');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.closeBtn');
  const menuBtn = document.querySelector('.btnNav');
  const section2 = document.getElementById('sobreMi');

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