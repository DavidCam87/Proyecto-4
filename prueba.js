function createCardProyectos(proyecto, contenedor) {
  const card = document.createElement('div');
  card.className = 'card';
  contenedor.appendChild(card);

  // Agregar la imagen de fondo del proyecto
  let imgFondo = document.createElement('img');
  imgFondo.src = proyecto.imagenPortada;
  imgFondo.className = 'fondoproyecto';
  card.appendChild(imgFondo);

  // Agregar el titulo y descripcion al proyecto
  let contInfo = document.createElement('div');
  contInfo.className = "info";
  card.appendChild(contInfo);

  let h4Title = document.createElement('h4');
  h4Title.className = "titulo";
  h4Title.textContent = proyecto.nombre;
  contInfo.appendChild(h4Title);

  let parrafoDescripcion = document.createElement('p');
  parrafoDescripcion.className = "parrafodescripcion";
  parrafoDescripcion.textContent = proyecto.descripcion;
  contInfo.appendChild(parrafoDescripcion);

  // Boton ver mas
  let btnVerMas = document.createElement('button');
  btnVerMas.className = "vermas";
  btnVerMas.addEventListener("click", () => { mostrarDetalles(proyecto) });
  btnVerMas.textContent = "Ver más";
  contInfo.appendChild(btnVerMas);
}