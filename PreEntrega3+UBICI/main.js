  // let libros = [

  //   {
  //    id: 1, 
  //    titulo: "Rayuela", 
  //    autor: "Julio Cortazar", 
  //    precio: 3999.00 ,
  //   },
  //   {
  //     id: 2, 
  //     titulo: "El Túnel", 
  //     autor: "Ernesto Sábato", 
  //     precio: 2999.00,
  //   },
  //   {
    
  //   id: 3, 
  //   titulo: "Ficciones", 
  //   autor: "Jorge Luis Borges", 
  //   precio: 4999.00 , 
  //   },
  //   {
  //     id: 4, 
  //     titulo: "El Segundo Sexo", 
  //     autor: "Simone de Beauvoir", 
  //     precio: 5999.00,
  //   },
  //   {
  //     id: 5, 
  //     titulo: "Jurassic Park", 
  //     autor: "Michael Crichton", 
  //     precio: 6999.00 ,
  //   },
  //   {
  //     id: 6, 
  //     titulo: "Los Siete Maridos de Evelyn Hugo", 
  //     autor: "Taylor Jenkins Reid", 
  //     precio: 7999.00 , 
  //   },
  //   {
  //     id: 7, 
  //     titulo: "Todos Quieren a Daisy Jones", 
  //     autor: "Taylor Jenkins Reid", 
  //     precio: 7500.00 ,
  //   },
    
  //   ]

  //   localStorage.setItem("libros", JSON.stringify(libros)); 

let formulario = document.getElementById("formulario");
let agregados = document.getElementById("agregados");
let librosContenedor = document.getElementById("librosContenedor");
let libros = JSON.parse(localStorage.getItem("libros")) || [];




const ingresar = (titulo, autor) => {
	let nuevoLibro = {
		id: libros.length + 1,
		titulo: titulo,
		autor: autor,
	};

	libros.push(nuevoLibro);
	localStorage.setItem("libros", JSON.stringify(libros));
};

formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	let inputs = e.target.children;

	ingresar(inputs[0].value, inputs[1].value);
});

agregados.addEventListener("click", () => {
	librosContenedor.innerHTML = "";
	libros.forEach((libro) => {
		let div = document.createElement("div");
		console.log(libro);
		div.innerHTML = `
          <h2>Id: ${libro.id}</h2>
          <b>Nombre: ${libro.titulo}</b>
          <p>Autor: ${libro.autor}</p>
          <hr />
        `;

		librosContenedor.append(div);
	});
});
