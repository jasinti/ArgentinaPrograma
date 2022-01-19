//las interfaces son estructuras de datos que contienen 
//un contrato
//El contrato es el conjunto de metodos abstractos q las
//clases que la implementen deberan codificar.

//Las interfaces dicen que comportamiento tendran las clases 
//q la implementen pero no el como lo van a implementar.

interface Empleado {
    calcularSueldo():void;
}

class Administrativo implements Empleado {
    
    //atributos
    private nombre: String;
    private valorHora: number;
    private horasTrabajadas: number;

    //constructor
    constructor(nombre:String, valorHora:number, horasTrabajadas:number) {
        this.setValorHora(valorHora);
        this.setHorasTrabajadas(horasTrabajadas);
    }

    //getters y setters
    public getValorHora():number {
        return this.valorHora;
    }

    public setValorHora(valorHora:number):void {
        this.valorHora = valorHora;
    }

    public getHorasTrabajadas():number {
        return this.horasTrabajadas;
    }

    public setHorasTrabajadas(horasTrabajadas:number):void {
        this.horasTrabajadas = horasTrabajadas;
    }

    //metodos
    public toString():String  {
        return "nombre = " + this.nombre + " horas trabajadas = " + this.horasTrabajadas + " valor hora = " + this.valorHora;  
    }
    
    //implemento el metodo abstracto de la interface Empleado
    public calcularSueldo():void  {
        console.log('Sueldo Administrativo = ' + this.horasTrabajadas * this.valorHora);
    }
}


class Gerente implements Empleado{
    
    //atributos
    private nombre: String;
    private antiguedad: number;
    private sueldoBase: number;

    //constructor
    constructor(nombre:String, antiguedad:number, sueldoBase:number) {
        this.setAntiguedad(antiguedad);
        this.setSueldoBase(sueldoBase);
    }

    //getters y setters
    public getAntiguedad():number {
        return this.antiguedad;
    }

    public setAntiguedad(antiguedad:number):void {
        this.antiguedad = antiguedad;
    }

    public getSueldoBase():number {
        return this.sueldoBase;
    }

    public setSueldoBase(sueldoBase:number):void {
        this.sueldoBase = sueldoBase;
    }

    //metodos
    public toString():String  {
        return "nombre = " + this.nombre + " antiguedad = " + this.antiguedad + " sueldo base = " + this.sueldoBase;  
    }
    
    //implemento el metodo abstracto de la interface Empleado
    public calcularSueldo():void  {
        console.log('Sueldo Gerente = ' + (this.sueldoBase + this.sueldoBase * this.antiguedad * 0.1));
    }
}



let a: Administrativo = new Administrativo("Juan Perez", 750, 160);
let g: Gerente = new Gerente("Maria Garcia", 5, 240000);
 
        
a.calcularSueldo()
console.log('--------------------')
g.calcularSueldo()