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
      
      };
  
  }

  const Libros = [

    {
     id: 1, 
     titulo: "Rayuela", 
     autor: "Julio Cortazar", 
     precio: 3999.00 ,
    },
    {
      id: 2, 
      titulo: "El Túnel", 
      autor: "Ernesto Sábato", 
      precio: 2999.00,
    },
    {
    
    id: 3, 
    titulo: "Ficciones", 
    autor: "Jorge Luis Borges", 
    precio: 4999.00 , 
    },
    {
      id: 4, 
      titulo: "El Segundo Sexo", 
      autor: "Simone de Beauvoir", 
      precio: 5999.00,
    },
    {
      id: 5, 
      titulo: "Jurassic Park", 
      autor: "Michael Crichton", 
      precio: 6999.00 ,
    },
    {
      id: 6, 
      titulo: "Los Siete Maridos de Evelyn Hugo", 
      autor: "Taylor Jenkins Reid", 
      precio: 7999.00 , 
    },
    {
      id: 7, 
      titulo: "Todos Quieren a Daisy Jones", 
      autor: "Taylor Jenkins Reid", 
      precio: 7500.00 ,
    },
    
    ]

let busqueda = prompt("Ingresa título del libro que estás buscando.");

const encontrado = Libros.find((item) => item.titulo.includes(busqueda));
console.log(encontrado)

       let mensaje = `
       ¡Libro encontrado! :)
        ID: ${encontrado.id}
        Título: ${encontrado.titulo}
        Autor: ${encontrado.autor}
        Precio: $${encontrado.precio}

       `;

       alert(mensaje);
      

let suscripcion = prompt("¿Te gustaría asociarte a nuestro club? Accederás a un 20% de descuento en tus compras. S/N").toUpperCase();

function descuento(encontrado){
  if(suscripcion === "S"){
    let PrecioConDesc = encontrado.precio - encontrado.precio * 0.20 


       return encontrado = {
       id: encontrado.id, 
       titulo: encontrado.titulo,
       autor: encontrado.autor,
       precio: PrecioConDesc
       };
       
     }
  
     
   }

   console.log(descuento(encontrado))

   