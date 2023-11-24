//Obtener parametros que se mandaron por la url
//El DOMContentLoaded es un evento que hace que se ejecute una función despues de que toda la pagina este cargada
document.addEventListener('DOMContentLoaded', function(){
    const data = new URLSearchParams(window.location.search);
    const stringData = data.get('data');
    const object = JSON.parse(decodeURIComponent(stringData));
    let visual = this.getElementById("visual")
    for (const [param, value] of Object.entries(object)) {
      const span = document.createElement("span")
      span.innerText = `${param}: ${Array.isArray(value) ? value.join(", ") : value};`
      visual.appendChild(span)
    }
    let className = this.getElementById("class-name");
    const p = document.createElement("p");
    p.innerText = object.class_name
    className.appendChild(p)
    console.log(object)
    history.pushState({}, document.title, window.location.pathname);
   })