const formForm = document.getElementById("formulario");

formForm.addEventListener("submit", (e) => {
  e.preventDefault();


const prefer = document.getElementById("prefer").value;
const day = document.getElementById("day").value;
const modal = document.getElementById("modal").value;
const importance = document.getElementById("valoration").value;

const body = {prefer, day, modal, importance}

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

