

function agregartexto() {
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const celular = document.getElementById('Celular').value;
const genero = document.querySelectorAll('input[type="radio"]:checked').value; 



const tabla = document.getElementById("tbldatos");

const informacion = `

<tr>
<td>  ${nombre} <hr></td>
<td>  ${apellido}<hr /></td>
<td> ${email}<hr /></td>
<td> ${celular}<hr /></td>
<td> ${genero}<hr /></td>
<td>  <button type="button" class="delete-tr">Eliminar</button></td>
</tr>
 `;

 
 // document.getElementById('formulario').reset();
 
 const tbldatos = document.getElementById("tbldatos")
 tbldatos.style.display = "block"
 
 tbldatos.innerHTML += informacion;
}

// const btn = document.getElementById('btn')


// btn.addEventListener('click',agregartexto)  


//.foreach(elemento,indice,array)
//elemento = el valor del elemento actual, ejemplo (diego, manzana)
//indice= la posicion del elemento dentro del array.
//array= el arreglo donde estan los elementos.  


const botonEliminar = document.querySelectorAll(".delete-tr");

// Agrega evento clic a cada botón
botonEliminar.forEach(boton => {
  boton.addEventListener('click', () => {
    alert("Se Va a eliminar");
    // Selecciona la fila padre del botón
    const fila = boton.parentNode.parentNode;
    console.log(fila);
    // Remueve la fila de la tabla
    fila.remove();
  });
});


