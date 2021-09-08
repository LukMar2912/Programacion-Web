"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, kilometros) {
        this.kilometros = kilometros;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.caminar = function () {
        console.log("soy " + this.nombre + " y camino " + this.kilometros + " km por mes");
        return "hola";
    };
    return Persona;
}());
exports.Persona = Persona;
