const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];



const form = document.querySelector("#form");
const input = document.querySelector("#input")
const resultado = document.querySelector("#resultado")
//console.log(form, input);

const buscar = (id)=>{
  return pizzas.find(pizza => pizza.id === id);
}

const renderizar = (pizza) =>{
  resultado.innerHTML = `
        <div class="card">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p>Precio: $${pizza.precio}</p>
        </div>
    `;
};
const mensajeError= (mensaje) =>{
  resultado.innerHTML = `<p class="error-message">${mensaje}</p>`;
}
document.addEventListener("DOMContentLoaded", () => {
  const lastSearchedPizza = JSON.parse(localStorage.getItem("ultimabusqueda"));
  if (lastSearchedPizza) {
      renderizar(lastSearchedPizza);
  }
});
const manejarBusqueda = (e) => {
  e.preventDefault();
  const pizzaid = input.value
  console.log(pizzaid);
  const pizza = buscar(parseInt(pizzaid));
  
  if (pizza !== undefined) {
    renderizar(pizza);
    localStorage.setItem("ultimabusqueda", JSON.stringify(pizza));
} else {
    mensajeError("esa id no existe en el menú");
}

  

};


const init = () => {
  form.addEventListener("submit", manejarBusqueda );

};

init();