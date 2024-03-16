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
  h3.textContent = 'Educacion';
  section.appendChild(h3);
  const eduLeft = document.createElement('div');
  eduLeft.classList.add('eduLeft');
  const eduRight = document.createElement('div');
  eduRight.classList.add('eduRight');
  section.appendChild(eduLeft);
  section.appendChild(eduRight);
  for (const key in data.education) {
    const p = document.createElement('p');
    p.textContent = `${data.education[key]}`;
    if (data.education[key] === "Full Stack Development") {
      p.textContent = `Actualmente Estudiando ${data.education[key]} en Rock {The Code}`;
      eduRight.appendChild(p);
    } else if (data.education[key] === "1999 - 2013") {
      p.textContent = `📅 ${data.education[key]}`;
      eduLeft.appendChild(p);
    } else {
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