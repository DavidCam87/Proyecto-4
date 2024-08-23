import { data } from '/data.js'
// HeroComponent.js
export function HeroComponent() {
  const main = document.createElement('main');
  document.body.appendChild(main);
  const hello = document.createElement('section');
  hello.className = 'flex_container';
  hello.id = 'hero';
  main.appendChild(hello);
  const presentation = document.createElement('div');
  presentation.className = 'greeting';
  hello.appendChild(presentation);
  const h2 = document.createElement('h2');
  h2.innerHTML = `Hola, soy <span id = "egg" class="nameColor">${data.name}</span> programador FullStack y estudiante React`;
  /* const audio = document.createElement('audio');
  audio.id = 'audio';
  audio.src = "/assets/Day One (Interstellar Theme).mp3";
  audio.type = "audio/mpeg";
  document.body.appendChild(audio); */
  presentation.appendChild(h2);
  const divimg = document.createElement('div');
  divimg.className = 'divImg';
  hello.appendChild(divimg);
  const image = document.createElement('img');
  image.src = data.avatar;
  image.classList.add('avatar');
  image.alt = "Imagen de mi perfil";
  divimg.appendChild(image);

  /* document.getElementById("egg").addEventListener("click", function () {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }); */
  return hero;
}