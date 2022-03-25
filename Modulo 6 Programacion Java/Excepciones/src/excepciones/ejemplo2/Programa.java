/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package excepciones.ejemplo2;

public class Programa {
    public static void main(String[] args) {
        //atencion de multiples excepciones
        
        try {
//            int numero = Integer.parseInt("cualquiera");
//            System.out.println("numero = " + numero);
            
            String palabra = null;
            System.out.println("longitud de la palabra: " + palabra.length() + " caracteres");
        } catch (NumberFormatException e) {
            System.out.println("Error de parseo!!");
        } catch (NullPointerException e) {
            System.out.println("Error de puntero a nulo!!");
        } catch (Exception e) {
            System.out.println("Error generico!!");
        }
        
    }
}
