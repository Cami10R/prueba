
 
 const respuesta = document.querySelector(".data-respuesta");
 //const respuesta = document.getElementById("respuesta");


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {

    //console.log(data)
    //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


     //   def         condicion   incremento 
    //for(var i=0; i<data.length; i++)

    let linea = "";
    data.forEach(element => {

        console.log(element)
         //varaible acumulativa    
         linea += `<tr>
         <td>Titulo: ${element.title}</td>
         <td>ID: ${element.id}</td>
         <td>body: ${element.body}</td>
         <td>User ID:${element.userId}</td>`

        //respuesta.innerHTML = JSON.stringify(data);
        //console.log(element.body)
    });

    const tbldatos = document.getElementsByTagName("tbody")[0]
    tbldatos.innerHTML = linea;

})


