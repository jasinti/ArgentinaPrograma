/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clasesAbstractas;

/**
 *
 * @author centro8
 */
public class Test {
    public static void main(String[] args) {
            //no se puede crear objetos de una clase abstracta
//        Vehiculo v = new Vehiculo();
        Avion a = new Avion(100, 0);
        Bici b = new Bici(28, 0);
        
        //comportamiento
        a.acelerar();
        b.acelerar();
        
        //estado
        System.out.println(a);
        System.out.println("-------------");
        System.out.println(b);
    }
}
