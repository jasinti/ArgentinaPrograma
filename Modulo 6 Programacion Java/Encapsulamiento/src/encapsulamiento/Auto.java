/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package encapsulamiento;

/**
 *
 * 1) hacer private el atributo a encapsular
 * 2)generar get y set dela tributo a encapsular 
 * para acceder desde otras clases al atributo privado.
 * get: obtiene el valor del atributo privado
 * set: establece el valor del atributo privado
 * 3) Definir en el setter reglas de negocio
 * 4) invocar el setter en todos aquellos metodos que
 * manipulen el atributo a encapsular
 */
public class Auto {
    //atributos
    public String marca;
    public String color;
    private int velocidad;
    
    //constructores
    //constructor vacio
    public Auto() {}

    //constructor sobrecargado
    public Auto(String marca, String color, int velocidad) {
        this.marca = marca;
        this.color = color;
        //this.velocidad = velocidad;
        //invoco el setter dentro del constructor sobrecargado
        this.setVelocidad(velocidad);
    }
    
    //getters y setters
    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        //regla de negocio
        if (velocidad >= 0 && velocidad <= 130) 
        {
            this.velocidad = velocidad;
        } 
        else 
        {
            System.out.println("velocidad fuera de rango");
        }
    }
    
    
    //metodos
    public void acelerar() {
//        this.velocidad += 10;
        this.setVelocidad(this.velocidad + 10);
    }
    
    //acelerar sobrecargado con 1 parametro
    public void acelerar(int km) {
//        this.velocidad += km;
        this.setVelocidad(this.velocidad + km);
        
    }
    
    public void frenar() {
//        this.velocidad -= 5;
        this.setVelocidad(this.velocidad - 5);
    }
    
    //frenar sobrecargado con 1 parametro
    public void frenar(int km) {
//        this.velocidad -= km;
        this.setVelocidad(this.velocidad - km);
    }

    @Override
    public String toString() {
        return "marca=" + marca + ", color=" + color + ", velocidad=" + velocidad;
    }
}
