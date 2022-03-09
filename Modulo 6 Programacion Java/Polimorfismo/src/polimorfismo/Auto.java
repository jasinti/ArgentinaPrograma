/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package polimorfismo;

/**
 *
 * Para que exista polimorfismo con redefinicion
 * 1)debe existir herencia
 * 2)la clase hija redefine por lo menos el cuerpo de un metodo heredado 
 * desde la clase padre.
 */
public class Auto {
    //atributos
    private String marca;
    
    //solo las clases hijas ven como publico este atributo protegido.
    //Para el resto de las clases seguira siendo privado
    protected int velocidad;
    
    //constructores
    public Auto() {}

    public Auto(String marca, int velocidad) {
        this.setMarca(marca);
        this.setVelocidad(velocidad);
    }
    
    //getters y setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }
    
    //metodos
    public void acelerar() {
        this.velocidad += 10;
    }

    @Override
    public String toString() {
        return "marca=" + marca + ", velocidad=" + velocidad;
    }
}
