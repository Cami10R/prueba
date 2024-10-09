const respuesta = document.querySelector("tbody"); // Corrected selector
const btnSearch = document.getElementById("btn"); // Corrected element ID
const tbody = document.querySelector("tbody");  


btnSearch.addEventListener("click", () => {
  const searchTerm = document.getElementById("buscar").value; // Corrected casing
  tbody.innerHTML = "";
  searchID(searchTerm);
});

function searchID(searchTerm) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${searchTerm}`) // Corrected URL format
    .then((response) => response.json())
    .then((data) => {
      if (data) { // Handle potential empty response
        let tableRow = `<tr>
        <td>ID: ${data.id}</td>
          <td>Title: ${data.title}</td>
          <td>User ID: ${data.userId}</td>
          </tr>`;
          
          respuesta.innerHTML = "";
          respuesta.innerHTML += tableRow;
        } else {
            respuesta.innerHTML = "No result found for your search.";
        }
    })
    .catch((error) => { // Handle potential fetch errors
        console.error("Error fetching data:", error);
        respuesta.innerHTML = "An error occurred. Please try again later.";
    });
}


//<td>Body: ${data.body}</td>   