/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package objetos;

/**
 *
 * @author alumno
 */
public class Auto{
    //atributos
    public String marca;
    public String color;
    public int velocidad;
    
    //constructor vacio o por defecto
    public Auto() {}
    
    //metodos
    public void acelerar() {
        String frase = "Hola";
        System.out.println(frase);
        this.velocidad += 10;
    }
    
    public void frenar() {
        this.velocidad -= 5;
    }

    @Override
    public String toString() {
        return "marca=" + marca + ", color=" + color + ", velocidad=" + velocidad;
    }
}
