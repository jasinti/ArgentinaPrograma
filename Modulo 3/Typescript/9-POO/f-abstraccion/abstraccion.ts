    //Las clases abstractas no instancian objetos
    //Sirven como clase base en la jerarquia de clases(arbol de herencia)
    abstract class Vehiculo {
    //atributos
    protected velocidad:number;
    
    //constructores
    constructor(velocidad: number) {
        this.setVelocidad(velocidad);
    }
    
    //getters y setters
    public getVelocidad():number {
        return this.velocidad;
    }

    public setVelocidad(velocidad:number):void {
        //Aqui debe ir una regla de negocio
        this.velocidad = velocidad;
    }
    
    //metodos
    //metodo abstracto: firma sin implementacion
    //El cuerpo debe ser implementado x las clases hijas de Vehiculo
    public abstract acelerar():void;

    
    public toString():String  {
        return " velocidad=" + this.velocidad + " km./h.";
    }
}



class Bici extends Vehiculo{
    //atributos
    private rodado:number;
    
    //constructores
    constructor(rodado:number, velocidad:number) {
        super(velocidad);
        this.rodado = rodado;
    }
    
    //get y set
    public getRodado():number {
        return this.rodado;
    }

    public setRodado(rodado:number):void {
        this.rodado = rodado;
    }
    
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    public acelerar():void {
        this.velocidad += 5;
    }
    
    public toString():String  {
        return "Rodado=" + this.rodado + super.toString();
    }
}


class Avion extends Vehiculo{
    //atributos
    private asientos:number;
    
    //constructores
    constructor(asientos:number, velocidad:number) {
        super(velocidad);
        this.setAsientos(asientos);
    }
    
    //get y set
    public getAsientos():number  {
        return this.asientos;
    }

    public setAsientos(asientos:number):void  {
        this.asientos = asientos;
    }
    
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    public acelerar():void  {
        this.velocidad += 100;
    }
    
    public toString():String  {
        return "Asientos= " + this.asientos + super.toString();
    }
}



//no se puede crear objetos de una clase abstracta
// let v: Vehiculo = new Vehiculo(0);


let a: Avion = new Avion(85, 0);
let b: Bici = new Bici(28, 0);

//comportamiento
a.acelerar();//0-100
b.acelerar();//0-5

//estado
console.log(a.toString());
console.log("-------------");
console.log(b);