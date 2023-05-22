let nombre = prompt("Ingrese su nombre para comenzar:");


function saludar() {
    let mensaje = `¡Bienvenid@, ${nombre}!`;
    alert(mensaje);
}

saludar()

class Libro{
    constructor(titulo, autor, precio, lista){
      this.titulo = titulo;
      this.autor = autor;
      this.precio = precio
      this.lista = lista; 
      };
  
  }

  const Libros = [

    {id: 1, titulo: "Rayuela", autor: "Julio Cortazar", precio: 3999.00 , lista: false},
    {id: 2, titulo: "El Túnel", autor: "Ernesto Sábato", precio: 2999.00 , lista: false},
    {id: 3, titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 4999.00 , lista: false},
    {id: 4, titulo: "El Segundo Sexo", autor: "Simone de Beauvoir", precio: 5999.00 , lista: false},
    {id: 5, titulo: "Jurassic Park", autor: "Michael Crichton", precio: 6999.00 , lista: false},
    {id: 6, titulo: "Los Siete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", precio: 7999.00 , lista: false},
    {id: 7, titulo: "Todos Quieren a Daisy Jones", autor: "Taylor Jenkins Reid", precio: 7500.00 , lista: false},
    
    ]

let busqueda = prompt("Ingrese título del libro que estás buscando.");

const encontrado = Libros.filter((item) => item.titulo.includes(busqueda));

encontrado.forEach((item) => {
       let mensaje = `
       ¡Libro encontrado! :)
        ID: ${item.id}
        Título: ${item.titulo}
        Autor: ${item.autor}
        Precio: $${item.precio}

       `;

       alert(mensaje);
        });

