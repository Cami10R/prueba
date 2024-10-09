

function agregartexto() {
const nombre = document.getElementById('nombre').value;
document.getElementById('nombre').value
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const celular = document.getElementById('Celular').value;
const genero = document.querySelectorAll('input[type="radio"]:checked').value; 



const parrafo = document.getElementById("formulario").textContent;

const informacion = `

<p> <strong>Nombre:</strong> ${nombre} <hr></p>
<p> <strong>Apellido:</strong> ${apellido}<hr /></p>
<p> <strong>Email:</strong> ${email}<hr /></p>
<p> <strong>Celular:</strong> ${celular}<hr /></p>
<p>  <strong>Genero:</strong> ${genero}<hr /></p>
 `;

 
 // document.getElementById('formulario').reset();
 
 const output = document.getElementById("output")
 output.style.display = "block"
 
 output.innerHTML = informacion;
}

// const btn = document.getElementById('btn')


// btn.addEventListener('click',agregartexto)  


//.foreach(elemento,indice,array)
//elemento = el valor del elemento actual, ejemplo (diego, manzana)
//indice= la posicion del elemento dentro del array.
//array= el arreglo donde estan los elementos.  