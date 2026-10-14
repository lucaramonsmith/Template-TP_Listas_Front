/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;
    mostrarComidas(comidas)                   // Asignar el JSON a la variable comidas

  })
  
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });
  let comidas = [];

const container = document.getElementById('comidaContainer');

function mostrarComidas (lista) {

lista.forEach(element => {
  container.innerHTML += `
        <article class="card">

          <p>${element.categoria}</p>
          <h2>${element.nombre}</h2>
      
          <span>${element.provincia}</span>
          <ul>

          ${element.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
          
          
          </ul>
        </article>
      `;
});

}

const agregarComidaForm = document.getElementById("agregarComidaForm")

agregarComidaForm.addEventListener("submit", (event) => {
  
alert("Comida agregada" + event.target.nombre.value)

event.preventDefault ()

let nuevaComida = {

nombre: event.target.nombre.value,
provincia: event.target.provincia.value,
categoría:event.target.categoria.value,
ingredientes: event.target.ingredientes.value.split(",")

}

comidas.push(nuevaComida)

mostrarComidas (comidas)

event.target.reset ()

})


const filtroCategoria = document.getElementById ("filtroCategoria")
const filtroProvincia = document.getElementById ("filtroProvincia")
const busqueda = document.getElementById ("buscador")



function filtrar() {

  let comidasFiltradas = comidas.filter(element => {

    return element.categoria.includes(filtroCategoria.value)
    && element.provincia.includes(filtroProvincia.value)
    



  })

  mostrarComidas(comidasFiltradas)

}


filtroCategoria.addEventListener("change", filtrar ())
filtroCategoria.addEventListener("change", filtrar ())
busqueda.addEventListener(input, buscar ())


function buscar() {

  let comidasFiltradas = comidas.filter(element => {
    return element.nombre.toLowerCase.includes(busqueda.value.toLowerCase)
    || element.provincia.toLowerCase.includes(filtroProvincia.value.toLowerCase)

  })

  mostrarComidas(comidasFiltradas)

}

