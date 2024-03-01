import { data } from '../../../data.js'

export function TechStackComponent() {
  const techStackSect = document.getElementById('techStackSectionContent');
  const divTech = document.createElement('div');
  divTech.classList.add('divTech');
  techStackSect.append(divTech);

  const h3Tech = document.createElement('h3');
  h3Tech.textContent = 'Mis Tech Stacks';
  divTech.append(h3Tech);

  const pT = document.createElement('p');
  pT.textContent = 'Estas son algunas de las tecnologías que manejo y aprendiendo mas cada dia.';
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
}