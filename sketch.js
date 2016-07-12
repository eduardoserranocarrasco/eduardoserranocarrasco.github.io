//2016 07 12 taller p5 numero 04
//elipse que sigue al mouse en un fondo verde




//variables
//declaración de variables
var anchoElipse;

//asignación de variables
anchoElipse = 100
  //pasan cosas
  //nueva asignación
anchoElipse = 50

//manera abreviada de declarar y asignar una linea
var alturaElipse = 100
  //nueva asignación
alturaElipse = 50

//scope o rango o alcance
//variables globales y locales

//las variables globales son declaradas
//fuera de los cuerpos de las funciones

//las variables locales
//son declaradas dentro del cuerpo de alguna función
//solo puede ser variado su valor con una asignación
// de
//declaración de la función setup
function setup() {

  //createCanvas(dimHor, dimVer);
  //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  //background(R,G,B);
  background(0, 255, 0);

  //relleno de la elipse;
  //fill(R,G,B);
  fill(100, 9, 47);

  //stroke(R,G,B);
  //noStroke()hace que no tenga borde;
  stroke(0, 255, 0);

  //strokeWeight(px)
  //define el borde en pixeles
  //strokeWeight(12)

  //frameRate(framesPorSegundo)
  frameRate(4)

}

//declarando función draw
function draw() {

  //ejecutar funcion fondoRojo
  //fondoRojo();

  //ellipse(posX, posY, width, height)
  ellipse(mouseX, mouseY, anchoElipse, alturaElipse);

  //escribe en la consola de javascript
  console.log("ola ke ase")
  console.log(alturaElipse)


  muchasElipses()


}

//declaracion de funcion nueva
function nombreFuncion(argumento1, argumento2, etc) {

}


//declaración de la funcion fondoRojo
function fondoRojo() {
  //declaracion y asignacion de variable local
  //llamada rojo
  var rojo = 255
    //usamos variable local llamada rojo
  background(rojo, 0, 0)
}

function muchasElipses() {

  var muchas = 10000;

  //for(variable de loop; condición de seguir, refrescar)
  for (var i = 0; i < muchas; i++) {

    //color de relleno
    fill(random(255), random(255), random(100), random(255))
      //sin borde
    stroke(random(255))


    var ancho = 100;
    var alto = 100;
    //la funcion random x arroja un valor aleatorio entre 0 y x
    ellipse(random(width), random(height), random(ancho), random(alto));
  }}