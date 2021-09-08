import { MortyObject, ObjetoRoot, Persona } from './Persona';

var objeto = new Persona("alex", "De Assis", 26, 31);

var miJson: MortyObject = {
    "id": 20,
    "name": "Earth (Replacement Dimension)",
    "type": "Planet",
    "dimension": "Replacement Dimension"
};

//MODIFICO LOS VALUES DE JSON
miJson.dimension = "Cuarta Dimension";
miJson.id = 34;
miJson.type = "planet56";


var miJsonMasComplejo: ObjetoRoot = {
    "info": {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null,
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
}

console.log('HOLA MUNDO ISTEA')

// let - var - const

// var: es para variables globales
// let: es para variables locales

if (true) {
    let foo = 123;
    if (true) {
        let foo = 456;
    } 
    console.log(foo);
}

//CONST : fue añadido en el ES6 (ECMAScript v6)
const foo1 = 123;
//foo1 = 456 ; // NO PERMITIDO 
console.log('foo1' + foo1);

//las contantes tambien admiten objetos literales 
const foo2 = { bar: 123 };

// foo2 = { bar: 456 }; //error no se permite la modificacion de objeto 

// Pero si se puede modificar el contenido de las variables que contiene el objeto literal  ejemplo : 
const foo3 = { bar: 123 };
foo3.bar = 456; //PERMITIDO
console.log("foo3" + foo3);

//Tipode de datos primitivos
// Boolean : true o false

let isDone: boolean = false;
console.log("isDone :" + isDone);

//Number : Datos nùmericos
let decimal: number = 6;
console.log('decimal :' + decimal);

let hex: number = 0xf00d;
console.log('hexadecimal :' + hex);

let bin: number = 0b1010;
console.log('binario : ' + bin);

let octal: number = 0o774;
console.log('octal : ' + octal);

//String  : Cadenas de caracteres y/o textos 
let color: string = "yellow";
console.log("color :" + color);

color = 'white';
console.log("color :" + color);

//Tambien aqui podemos utilizar "Templates" para concatenar strings 
// como por ejemplo :
let fullName: string = `Daniel Barbera`;
let age: number = 24;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log("sentence");
console.log(sentence);

// este tipo de sintaxis es equivalente a lo siguiente:
let sentence2: string = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month."
console.log("sentence2");
console.log(sentence2);

//any : nos sirve como un comodin para cualquier tipo de dato 
let miVaribleQuePuedeContenerCualquierDato: any = "hola";

let miVaribleQuePuedeContenerCualquierDato1: any = 4;

let miVaribleQuePuedeContenerCualquierDato2: any = true;

// Arrays :sino se les especifica un tipo seran ANY
let list: number[] = [1, 2, 3];

// Con esta sintaxis tambien puedes especificar que tipo de datos debe haber en el array
let list2:Array<number> = [1, 2, 3];

console.log(undefined == undefined); //true

console.log(null == undefined); //true

console.log(0 == undefined); //false

console.log('' == undefined); //false

console.log(false == undefined); //false