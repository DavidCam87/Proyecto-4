import { Buttons } from "./Buttons.js";
import { data } from "../../../data.js";

export function AboutComponent() {
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
}