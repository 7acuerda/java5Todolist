const input = document.querySelector("#input");
const btnAgregar = document.querySelector("#btnAgregar")
const listaTareas = document.querySelector("#listaTareas")
const id = document.querySelector("#id")
const t = document.querySelector("#tarea")
const estado = document.querySelector("#estado")
const tareas = [
    {
        id: 1,
        text: "Ejemplo 1",
        estado: false,
    },
    {
        id: 2,
        text: "Ejemplo 2",
        estado: false,
    },
    {
        id: 3,
        text: "Ejemplo 3",
        estado: false,
    },
]
let realizadas = 0
let cont = 0



for (let tarea of tareas) {
    id.innerHTML += `<p>${tarea.id}</p>`
    t.innerHTML += `<p>${tarea.text}</p>`
    estado.innerHTML += `<p><i class="fa-regular fa-circle-check text-success-emphasis" type="button" onclick="actualizar(${tarea.id})" id="${tarea.id}"></i>
                            <i class="fa-solid fa-circle-xmark text-danger mx-2" type="button" onclick="borrar(${tarea.id})"></i></p>`
                            cont++
                            actCont()
                            actRealizadas();
}


function borrar(tareadelete){
    const indice = tareas.findIndex((tarea) => tarea.id == tareadelete)
    tareas.splice(indice,1)
    cont --
    renderTareas();
}
function renderTareas(){
    id.innerHTML=""
    t.innerHTML=""
    estado.innerHTML=""
    for (let tarea of tareas) {
        id.innerHTML += `<p>${tarea.id}</p>`
        t.innerHTML += `<p>${tarea.text}</p>`
        if (tarea.estado==false) {

            estado.innerHTML += `<p><i class="fa-regular fa-circle-check text-success-emphasis"  type="button" onclick="actualizar(${tarea.id})" id="${tarea.id}"></i>
            <i class="fa-solid fa-circle-xmark text-danger mx-2" type="button" onclick="borrar(${tarea.id})"></i></p>`
            
        }
        else{

            estado.innerHTML += `<p><i class="fa-solid fa-rotate text-primary" type="button" onclick="reAct(${tarea.id})"></i>
            <i class="fa-solid fa-circle-xmark text-danger mx-2" type="button" onclick="borrar(${tarea.id})"></i></p>`
            
        }
       
    }
    
    actCont()
    actRealizadas();
}

btnAgregar.addEventListener("click",() => {
    let inputvalue = input.value;
    if (inputvalue == "") {
        alert("Ingrese una tarea")
        return
    }
    const nuevatarea = {
        id: Date.now(),
        text : inputvalue,
        estado : false
    };
    tareas.push(nuevatarea);
    cont++
    actCont()
    renderTareas();
    console.log(cont)
    input.value=""
   
})

function reAct(treaAct){

    const indice = tareas.findIndex((tarea) => tarea.id == treaAct)
    tareas[indice].estado=false;
    renderTareas();
    realizadas --;
    actRealizadas();  
    console.log(tareas)   
}

function actualizar(tareaAct){

    const indice = tareas.findIndex((tarea) => tarea.id == tareaAct)
    tareas[indice].estado=true;
    renderTareas();
    realizadas ++;
    console.log(tareas)
    actRealizadas();  
    
}
function actCont(){
const total = document.querySelector("#Total")
total.innerHTML= `<span>${cont}</span>`
}
function actRealizadas(){
    const real = document.querySelector("#Realizadas")
    real.innerHTML= `<span>${realizadas}</span>`
}


