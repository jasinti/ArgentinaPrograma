/*
 * WriterMejorado.java
 *
 *
 */

package ar.com.argentinaprograma.ejercicio2;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;


public class EscritorMejorado {
    
    /** Creates a new instance of WriterMejorado */
    public EscritorMejorado() {
    }
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException
    {
        /* 
         Para que funcione correctamente deberá:
            · existir el directorio archivosES\salida
        */
        
        // Instancia un objeto File de salida
        File outputFile = new File( "archivosES" + File.separator + "salida" + File.separator + "bufferedWriterOutput.txt" );
        
        // Define el contenido a grabar en el archivo
        String linea1 = "Hola, soy la línea #1";
        String linea2 = "Como te va? Yo soy la línea #2!";
        String linea3 = "Y yo la línea #3!!!";
        
        // Construye un BufferedWriter
        BufferedWriter writerMejorado = new BufferedWriter( new FileWriter(outputFile) );
        
        // Escribe el archivo de salida a traves del BufferedWriter
        writerMejorado.write(linea1, 0, linea1.length());
        writerMejorado.newLine();
        writerMejorado.write(linea2, 0, linea2.length());
        writerMejorado.newLine();
        writerMejorado.write(linea3, 0, linea3.length());
        
        // Cierra el BufferedWriter
        writerMejorado.close();
    }
    
}
