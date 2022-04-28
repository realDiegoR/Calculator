let output = document.getElementById("output");
let botones = document.getElementsByName('numero');
let operaciones = document.getElementsByName('operaciones');
let digital = document.getElementsByName("digital");

//TEMAS - ETIQUETAS
let theme = document.getElementById("theme")
let bola = document.getElementById("ball")
let container = document.getElementById("container")
let del = document.getElementById("del")
let reset = document.getElementById("reset")
let equalButton = document.getElementById("equal")
let body = document.getElementById("body")
let buttonss = document.getElementsByClassName("button")

//TEMAS - CAMBIOS DE TEMAS
let botonActual = 0;
theme.addEventListener("click", () =>{
  botonActual++
  switch (botonActual) {
    case 1:
      bola.style.marginLeft = "calc(50% - 7.5px)"
      bola.classList.add("ball-orange")
      body.classList.add("body-white")
      del.classList.add("turquoise")
      reset.classList.add("turquoise")
      equalButton.classList.add("orange")
      output.classList.add("output-white")
      break;
    case 2:
      for(let button of buttonss){
        button.classList.add("buttons-purple")
      }
      bola.style.marginLeft = "calc(100% - 15px)"
      bola.classList.add("ball-blue")
      body.classList.add("body-purple")
      del.classList.add("purple3")
      reset.classList.add("purple3")
      equalButton.classList.add("blue")
      output.classList.add("output-purple")
      break;
    case 3:
      bola.style.marginLeft = "0"
      bola.classList.remove("ball-orange", "ball-blue")
      body.classList.remove("body-white", "body-purple")
      del.classList.remove("turquoise", "purple3")
      reset.classList.remove("turquoise", "purple3")
      equalButton.classList.remove("orange", "blue")
      output.classList.remove("output-white", "output-purple")
      for(let button of buttonss){
        button.classList.remove("buttons-purple")
      }
      botonActual = 0;
  }
})
//RECONOCIMIENTO DE LOS BOTONES NUMERO Y OPERACION -----
for(let numero of botones) {
  numero.addEventListener("click", agregarNumero);
}
for(let operacional of operaciones){
  operacional.addEventListener('click', agregarOperacion)
}

//FUNCIONES A EJECUTAR DE NUMERO Y OPERACION -----
function agregarNumero(ev) {
  if(output.innerHTML.includes("<i>")) output.innerHTML = '';
  output.innerHTML += ev.target.value;
 }
function agregarOperacion(ev){
  if(output.innerHTML.includes("<i>")) output.innerHTML = '';
  let touched = ev.target.value;
  output.innerHTML += touched;
}

// DIG --- RESULTADO --------
 digital[2].addEventListener('click', equal);

 function equal(){
   try{
     if(output.innerHTML){

       if(output.innerHTML.includes("//")) throw Error 

       output.innerHTML = eval(output.innerHTML);

       if(!isFinite(output.innerHTML)) {
         output.innerHTML = "<i>Math Error</i>"
       }

       if(output.innerHTML.includes(".")) {
         output.innerHTML = parseFloat(output.innerHTML).toFixed(2)
       }
     }
   } catch(error){
     output.innerHTML = "<i>Syntax Error</i>"
   }
}

//DIG --- BORRAR ÚLTIMO DIGITO ------
digital[0].addEventListener('click', borrarUltimo );
function borrarUltimo(){
  output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1)
}

//DIG --- BORRAR TODA LA PANTALLA ---------
digital[1].addEventListener('click', borrarTodo )
function borrarTodo(){
  output.innerHTML = '';
}
