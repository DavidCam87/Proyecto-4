import { MainComponent } from "./MainComponent.js";
import { data } from "../../../data.js";
export function ContactComponent() {
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

  const main = document.querySelector('main');
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

  for (let i = 0; i < ulrrss.length; i++) {
    const li = ulrrss[i];
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${li.link}" target="_blank" rel="noopener noreferrer"><img src="${li.img}" alt="social" /></a>`;
    ulInfo.appendChild(listItem);
  }
}