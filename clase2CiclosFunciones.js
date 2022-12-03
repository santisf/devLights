//Si hay mas de 3 parametros que se le pasan a una funcion, es mejor pasarlo como un objeto
function myFunction({param1, param2, param3,param4}){

}
//Al pasarle un efecto no va a importar el orden en el que pasemos los parametros

myFunction({param3:1, param2:3, param4:"Hola", param1:7});

//arrow function

const arrowFunction = ()=>{
    console.log("edad: ");
};

//funciones Anonimas
const objeto = {

    edad:25,
    funcion: function (){

        console.log("edad: "+this.edad);

    }

}

//funcion que se autoejecuta
//para eso debe ser anonima

/*(function (){
    console.log("auto-ejecutado");
})();*/

objeto.funcion();
arrowFunction();

//Preguntas de entrevista

//this es el contexto en el que se llama

//hoisting se refiere al contexto de ejecucion, las funciones y var se inicializan primero por eso se pueden llamar antes de su definicion
//inicializa todo antes de ejecutar, funciona con function y var(no const ni let)
//hoisting se refiere al contexto de ejecucion: las var y las function son las priemras en inicializarse, 
//ademas las function se inicializan con su contenido, a diferencia de las var que se inicializan como undefined, 
//por eso se las puede llamar antes de haber sido definidas.


//Copiar de manera segura un objeto 

//funciones mutables: splice, modifican los arrays. Inmutables no modifican: slice.



//Asincronismo
//callback

function callBack(resultado){

    console.log(resultado);

}

function operacion(a, b, cb){

    let resultado=0;
    //simluamos consulta base de datos asincrona con setTimeOut

    setTimeout(()=>{

        resultado=a+b;

    }, 500);

    cb(resultado);

}

operacion(a,b,callBack);

//esto da 0 porque setTimeOut es asincrona

//para que funcione la linea 74 debe estar dentro del setTimeOut