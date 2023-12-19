let lista = JSON.parse(localStorage.getItem("lista"));
if(lista === null){
  lista = [];
} else {
  for(let i = 0; i < lista.length; i++){
    const elemento = document.createElement("p");
    elemento.innerHTML = lista[i];
    document.querySelector(".resultados").appendChild(elemento);
  }
}

function random(array){
  return array[Math.floor(Math.random() * array.length)];
}

function añadir(){
  const valor = document.querySelector("#input_usuario").value;
  lista.push(valor);
  const elemento = document.createElement("p");
  elemento.innerHTML = valor;
  document.querySelector(".resultados").appendChild(elemento);
  document.querySelector("#input_usuario").value = "";
  localStorage.setItem("lista", JSON.stringify(lista));
}

function borrar(){
  lista = [];
  document.querySelector(".resultados").innerHTML = "";
  localStorage.removeItem(`lista`);
}

function sortea(){
  console.log("sortea")
  const ganador = random(lista);
  const p = document.createElement("p");
  p.innerHTML = ganador;
  document.querySelector(".container").appendChild(p);
}