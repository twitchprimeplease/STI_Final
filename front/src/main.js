const formForm = document.getElementById("formulario");

formForm.addEventListener("submit", (e) => {
  e.preventDefault();

  

const prefer = document.getElementById("prefer").value;
const day = document.getElementById("day").value;
const modal = document.getElementById("modal").value;

const body = {prefer, day, modal}

console.log(body)
});


