import { data } from '../../../data.js'

export function FooterComponent() {
  const footer = document.createElement('footer');
  footer.classList = 'footer';
  footer.innerHTML = `
  <p>CopyRight© 2024 DCI - All Rights Reserved</p>
  <p>Desarrollado por ${data.name} con pasion y mucha paciencia</p>`;
  document.body.appendChild(footer);
}