/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package polimorfismo;

/**
 *
 * @author centro8
 */
public class Test {
    public static void main(String[] args) {
        Auto a = new Auto("Fiat", 0);
        AutoCarrera ac = new AutoCarrera("titanio", "Ferrari", 0);
        
        //comportamiento
        a.acelerar();//0 --> 10
        ac.acelerar();//0 --> 50
        
        //estado
        System.out.println(a);
        System.out.println("--------------");
        System.out.println(ac);
    }
}
