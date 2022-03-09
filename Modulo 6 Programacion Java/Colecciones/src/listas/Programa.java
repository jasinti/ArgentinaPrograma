/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package listas;

import java.util.ArrayList;
import java.util.Iterator;

/**
 *
 * @author hp
 */
public class Programa {
    public static void main(String[] args) {
        //creo la coleccion de tipo lista
        
        //coleccion no tipada
//        ArrayList lasPersonas = new ArrayList();

        //coleccion tipada
        ArrayList<Persona>lasPersonas = new ArrayList<Persona>();
        
        //creo personas
        Persona p1 = new Persona("Juan", 25);
        Persona p2 = new Persona("Maria", 30);
        Persona p3 = new Persona("Carlos", 40);
        Persona p4 = new Persona("Luis", 35);
        
        //agrego las personas a la coleccion
        lasPersonas.add(p1);
        lasPersonas.add(p2);
        lasPersonas.add(p3);
        lasPersonas.add(p4);
        
        System.out.println("Contenido de la coleccion:");
        System.out.println(lasPersonas);
        
        System.out.println("Tamaño de la lista: " + lasPersonas.size() + " elementos");
        
        Persona personaEliminada = lasPersonas.remove(1);
        System.out.println("Persona eliminada: " + personaEliminada.getNombre());
        
        System.out.println("mostrar las personas entre 20 y 30 años");
        System.out.println("recorro la coleccion con for:");
        for (int i = 0; i < lasPersonas.size(); i++) 
        {
            Persona unaPersona = lasPersonas.get(i);
            if (unaPersona.getEdad() >= 20 && unaPersona.getEdad() <= 30) 
            {
                System.out.println(unaPersona);
            }
        }
        
        System.out.println("------------------------------------");
        System.out.println("recorro la coleccion con foreach:");
        for (Persona unaPersona : lasPersonas) 
        {
            if (unaPersona.getEdad() >= 20 && unaPersona.getEdad() <= 30) 
            {
                System.out.println(unaPersona);
            }
        }
        
        System.out.println("------------------------------------");
        System.out.println("recorro la coleccion con un patron de diseño llamado iterator:");
        //creo el iterator(es un patron de diseño) q recorrera la lista
        Iterator it = lasPersonas.iterator();
        
        //recorro la coleccion con el iterator
        while (it.hasNext()) 
        {
            Persona unaPersona = (Persona)it.next();    
            if (unaPersona.getEdad() >= 20 && unaPersona.getEdad() <= 30) 
            {
                System.out.println(unaPersona);
            }
        }
    }
}
