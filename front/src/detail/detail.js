//Obtener parametros que se mandaron por la url
//El DOMContentLoaded es un evento que hace que se ejecute una función despues de que toda la pagina este cargada
document.addEventListener('DOMContentLoaded', function(){
    const data = new URLSearchParams(window.location.search);
    const stringData = data.get('data');
    const object = JSON.parse(decodeURIComponent(stringData));
    
    let className = document.getElementById("class-name");
    const h1 = document.createElement("h2");
    h1.innerText = object.class_name
    className.appendChild(h1)

    let preference = document.getElementById("preference");
    const h2 = document.createElement("h3");
    h2.innerText = object.prefer
    preference.appendChild(h2)

    let timer = document.getElementById("timer");
    const h2_2 = document.createElement("h3");
    h2_2.innerText = object.Horario
    timer.appendChild(h2_2)

    let modal = document.getElementById("modal");
    const h3 = document.createElement("h3");
    h3.innerText = object.modalidad
    modal.appendChild(h3)

    let similars = document.getElementById("similars");
    const h3_2 = document.createElement("h3");
    h3_2.innerText = object.similares
    similars.appendChild(h3_2)


    history.pushState({}, document.title, window.location.pathname);
   })