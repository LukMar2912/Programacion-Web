export class Persona {
    //atributo de la clase 
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(nombre: string, apellido: string, edad: number, kilometros: number) {
        this.kilometros = kilometros;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    caminar(): string {
        console.log("soy " + this.nombre + " y camino " + this.kilometros + " km por mes");
        return "hola";
    }
}

export interface MortyObject {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export interface ObjetoRoot {
    info: Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface Result {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}