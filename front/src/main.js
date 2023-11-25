const formForm = document.getElementById("formulario");

formForm.addEventListener("submit", (e) => {
  e.preventDefault();


const prefer = document.getElementById("prefer").value;
const day = document.getElementById("day").value;
const modal = document.getElementById("modal").value;
const method = document.getElementById("method").value;
const personalGrowth = document.getElementById("personal-growth").value;
const rec = document.getElementById("rec").value;
const teacher = document.getElementById("teacher").value;
const time = 5;
const general = 5;

const body = {usuario: 
  [
    {'general_rating' : general },
    {'method_rating' :method}, 
    {'personalGrowth_rating': personalGrowth},
    {'rec_rating' : rec}, 
    { 'teacher_rating' : teacher },
    {'time_rating' : time}, 
    {'classification' : prefer}, 
    {'day' : day},  
    {'modal' : modal },  
  ]}

sendToPythonServer(body);
});


async function sendToPythonServer(pData) {
  try {
    const response = await fetch('http://localhost:5000/rec-dmi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pData),
    });

    const data = await response.json();
    console.log('Respuesta del servidor:', data);
  } catch (error) {
    console.error('Error al enviar datos:', error);
  }
}

