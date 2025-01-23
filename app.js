// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];
function iniciarPrincipal(){
    asignarTextoElemento('h1','Amigo Secreto');
    asignarTextoElemento('h2','Digite el nombre de sus amigos');
}
function asignarTextoElemento(etiqueta,texto){
    let objetoHTML = document.querySelector(etiqueta);
    objetoHTML.innerHTML = texto;
    return;
}
function agregarAtributo(atributo,estado){

}
function limpiarCaja(){
    document.getElementById("amigo").value = "";
    return;
}
function agregarAmigo()
{
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo != ''){
        if(!amigosIngresados.includes(nombreAmigo))
            {
                asignarTextoElemento('h2','Digite el nombre de su amigo numero ' + (amigosIngresados.length + 1))
                amigosIngresados.push(nombreAmigo);
                limpiarCaja();
                actualizarLista();
                console.log(amigosIngresados);
            }else{
                asignarTextoElemento('h2','El nombre ' + nombreAmigo + " ya existe");
        }
    }else{
        asignarTextoElemento('h2','Ingrese almenos un valor en el campo de texto');
    }
    return;
}
function sortearAmigo(){
    if(!amigosIngresados.length){
        alert('Asegúrate de agregar amigos');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random()*amigosIngresados.length);
    let listaHTML = document.getElementById('resultado');
    listaHTML.innerHTML = '';

    listaHTML.innerHTML = 'El ganador es: ' + amigosIngresados[numeroAleatorio];
    console.log(numeroAleatorio);
}
function actualizarLista(){
    let listaHTML = document.querySelector('#listaAmigos');

    let items = '';
    for(let itemLista = 0; itemLista< amigosIngresados.length; itemLista++ ){
        //console.log(amigosIngresados[itemLista]);
        items += '<li>'+amigosIngresados[itemLista]+'</li>';
    }
    listaHTML.innerHTML = items;
}

iniciarPrincipal();