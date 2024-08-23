import { data } from "../../../data.js";

function createAboutMeSection(data) {
  const section = document.createElement('div');
  section.classList.add('divAboutMe');
  const h3 = document.createElement('h3');
  h3.textContent = 'Sobre Mi';
  const p = document.createElement('p');
  p.textContent = data.aboutMe;
  section.appendChild(h3);
  section.appendChild(p);
  return section;
}

function createWorkExperienceSection(data) {
  const section = document.createElement('div');
  section.classList.add('divWork');
  const h3 = document.createElement('h3');
  h3.textContent = 'Experiencia De Trabajo';
  section.appendChild(h3);
  for (const experience of data.workExperience) {
    const experienciaHTML = `
      <div class="experience">
        <div class="left">
          <p class="position">${experience.position}</p>
          <p class="company">🏢${experience.company}</p>
        </div>
        <div class="right">
          <p class="workday">${experience.workday}</p>
          <p class="date">📅${experience.startDate} - ${experience.endDate}</p>
        </div>
      </div>
    `;
    const divS = document.createElement('div');
    divS.innerHTML = experienciaHTML;
    section.appendChild(divS);
  }

  return section;
}

function createEducationSection(data) {
  const section = document.createElement('div');
  section.classList.add('divEducation');
  const h3 = document.createElement('h3');
  h3.textContent = 'Educación';
  section.appendChild(h3);
  const eduLeft = document.createElement('div');
  eduLeft.classList.add('eduLeft');
  const eduRight = document.createElement('div');
  eduRight.classList.add('eduRight');
  const eduCert = document.createElement('div');
  eduCert.classList.add('eduCert');
  section.appendChild(eduLeft);
  section.appendChild(eduRight);
  section.appendChild(eduCert);

  const entries = Object.entries(data.education);
  for (const [key, value] of entries) {
    let p = document.createElement('p');

    if (value === "React") {
      p.textContent = `Actualmente Estudiando ${value} en Rock {The Code}`;
      eduRight.appendChild(p);
    } else if (value === "1999 - 2013") {
      p.textContent = `📅 ${value}`;
      eduLeft.appendChild(p);
    } else if (key === "credential" || key === "credential2") {
      const a = document.createElement('a');
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.href = value;
      a.innerHTML = `Diplomado en desarrollo ${key === "credential" ? 'FrontEnd' : 'BackEnd'}:<strong>"Ver"</strong>`;
      p.append(a);
      eduCert.appendChild(p);
    } else {
      p.textContent = value;
      eduLeft.appendChild(p);
    }
  }

  return section;
}

export function AboutComponent() {
  const aboutMeSect = document.getElementById('aboutMeSectionConten');
  const sectionCreators = [createAboutMeSection, createWorkExperienceSection, createEducationSection];

  for (let i = 0; i < sectionCreators.length; i++) {
    const section = sectionCreators[i](data);
    aboutMeSect.appendChild(section);
  }
}