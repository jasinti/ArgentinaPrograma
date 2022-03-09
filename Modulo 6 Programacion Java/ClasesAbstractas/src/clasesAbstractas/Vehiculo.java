/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clasesAbstractas;

/**
 *
 * una clase abstracta no puede instanciar objetos
 * sino que debe heredar en otras clases hijas, que sea
 * concretas(que puedan crear objetos).
 * 
 * una clase abstracta puede o no tener metodos abstractos.
 * 
 * un metodo abstracto tiene firma pero no cuerpo, ya que las
 * clases hijas DEBERAN implementar el cuerpo.
 */
public abstract class Vehiculo {
    //atributos
    protected int velocidad;
    
    //constructores
    public Vehiculo() {}

    public Vehiculo(int velocidad) {
        this.setVelocidad(velocidad);
    }
    
    //getters y setters
    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }
    
    //metodos
    //metodo abstracto
    public abstract void acelerar();

    @Override
    public String toString() {
        return " velocidad=" + velocidad;
    }
}
