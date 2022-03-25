/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package excepciones.ejemplo1;

/**
 *
 * @author jorge
 */
public class Programa {
    public static void main(String[] args) {
        /*
            excepcion: se da cuando algo inesperado ocurre durante la ejecucion
            de una aplicacion.
            
            La aplicacion se "cuelga" y no sigue ejecutandose.
            
            Se debe atender la excepcion desde el codigo para q el usuario sepa
            lo q ocurre y para q la aplicacion siga ejecutandose.
            
            Cuando Java "lanza" una excepcion, significa que crea un objeto de
            ese tipo de excepcion, la cual es una clase cuyo nombre termina con
            la palabra Exception.
        
        */
        
        try {
            System.out.println("Comienzo de la aplicacion");
            int numero1 = Integer.parseInt("25");
            System.out.println("numero1 = " + numero1);
            int numero2 = Integer.parseInt("Hola q tal?");
            System.out.println("numero2 = " + numero2);
            System.out.println("Fin de la aplicacion");
        } catch (NumberFormatException e) {
            System.out.println("No podes parsear!!");
        }finally{
            System.out.println("Reestableciendo el control...");
        }
        System.out.println("otra cosa..........");
        
        
        
    }
}
