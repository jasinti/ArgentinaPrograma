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
public class Test {
    public static void main(String[] args) {
        //creo un objeto de la clase Auto
        Auto a = new Auto();
        
        //estado inicial del objeto
        a.marca = "Ford";
        a.color = "Gris";
        a.velocidad = 0;
        
        //comportamiento
        a.acelerar();//0--> 10
        a.acelerar();//10 --> 20
        a.acelerar();//20 --> 30
        
        a.frenar();//30 --> 25

        //muestro el estado final del objeto
        System.out.println(a.toString());
        
        
        
    }
}
