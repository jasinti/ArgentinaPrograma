/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package encapsulamiento;

/**
 *
 * @author centro8
 */
public class Test {
    public static void main(String[] args) {
        //creo un objeto con el constructor vacio
        Auto a = new Auto();
        
        //le doy un estado inicial al objeto
        a.marca = "Ford";
        a.color = "Gris";
        a.setVelocidad(0); 
        
        //comportamiento
        a.acelerar();//0 --> 10
        a.acelerar(40);//10 --> 50
        a.frenar();//50 --> 45
        a.frenar(70);//45 --> 45
        
        
        //muestro el estado final
        System.out.println(a);
        
        
    }
}
