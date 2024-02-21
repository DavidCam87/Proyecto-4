const headListUl = document.createElement('ul');
const rrssUl = document.createElement('ul');
const menuBtn = document.createElement('button');
const closeBtn = document.createElement('button');
const menu = document.createElement('div');

headListUl.classList.add('headList');
rrssUl.classList.add('RRSS');
menuBtn.textContent = '≡';
menuBtn.classList.add('btnNav');
menu.classList.add('menu');
closeBtn.textContent = 'X';
closeBtn.classList.add('closeBtn');

// Llenar elementos List
const ulList = ["Home", "About", "Tech Stack", "Projects", "Contact"];
const ulrrss = ["./assets/GitHub.svg", "./assets/twitter.svg", "./assets/linked.svg"];

for (const li of ulList) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#">${li}</a>`;
  headListUl.append(listItem);
}

for (const li of ulrrss) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#"><img src="${li}" alt=""></a>`;
  rrssUl.appendChild(listItem);
}

menu.appendChild(closeBtn);
for (const li of ulList) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#">${li}</a>`;
  menu.append(listItem);
}

// Agregar eventos
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
});

closeBtn.addEventListener('click', function () {
  menu.classList.remove('active');
});

// Agregar al body
document.body.appendChild(menu);
