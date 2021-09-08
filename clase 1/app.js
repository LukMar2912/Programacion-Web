"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var objeto = new Persona_1.Persona("alex", "De Assis", 26, 31);
var miJson = {
    "id": 20,
    "name": "Earth (Replacement Dimension)",
    "type": "Planet",
    "dimension": "Replacement Dimension"
};
//MODIFICO LOS VALUES DE JSON
miJson.dimension = "Cuarta Dimension";
miJson.id = 34;
miJson.type = "planet56";
var miJsonMasComplejo = {
    "info": {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2"
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }
    ]
};
console.log('HOLA MUNDO ISTEA');
// let - var - const
// var: es para variables globales
// let: es para variables locales
if (true) {
    var foo = 123;
    if (true) {
        var foo_1 = 456;
    }
    console.log(foo);
}
//CONST : fue añadido en el ES6 (ECMAScript v6)
var foo1 = 123;
//foo1 = 456 ; // NO PERMITIDO 
console.log('foo1' + foo1);
//las contantes tambien admiten objetos literales 
var foo2 = { bar: 123 };
// foo2 = { bar: 456 }; //error no se permite la modificacion de objeto 
// Pero si se puede modificar el contenido de las variables que contiene el objeto literal  ejemplo : 
var foo3 = { bar: 123 };
foo3.bar = 456; //PERMITIDO
console.log("foo3" + foo3);
//Tipode de datos primitivos
// Boolean : true o false
var isDone = false;
console.log("isDone :" + isDone);
//Number : Datos nùmericos
var decimal = 6;
console.log('decimal :' + decimal);
var hex = 0xf00d;
console.log('hexadecimal :' + hex);
var bin = 10;
console.log('binario : ' + bin);
var octal = 508;
console.log('octal : ' + octal);
//String  : Cadenas de caracteres y/o textos 
var color = "yellow";
console.log("color :" + color);
color = 'white';
console.log("color :" + color);
//Tambien aqui podemos utilizar "Templates" para concatenar strings 
// como por ejemplo :
var fullName = "Daniel Barbera";
var age = 24;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log("sentence");
console.log(sentence);
// este tipo de sintaxis es equivalente a lo siguiente:
var sentence2 = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log("sentence2");
console.log(sentence2);
//any : nos sirve como un comodin para cualquier tipo de dato 
var miVaribleQuePuedeContenerCualquierDato = "hola";
var miVaribleQuePuedeContenerCualquierDato1 = 4;
var miVaribleQuePuedeContenerCualquierDato2 = true;
// Arrays :sino se les especifica un tipo seran ANY
var list = [1, 2, 3];
// Con esta sintaxis tambien puedes especificar que tipo de datos debe haber en el array
var list2 = [1, 2, 3];
console.log(undefined == undefined); //true
console.log(null == undefined); //true
console.log(0 == undefined); //false
console.log('' == undefined); //false
console.log(false == undefined); //false
