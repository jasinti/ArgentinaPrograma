
import java.sql.Connection;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author hp
 */
public class Programa {
    
    public static void main(String[] args) throws Exception {
        
        // Obtiene la conexión
	Connection c =Conexion.getConnection();
        
        // Construye  empleados
		Empleado e1 = new Empleado("Juan", "Perez", 4500);
        Empleado e2 = new Empleado("Jose", "Garcia", 5600);
        Empleado e3 = new Empleado("Maria", "Gonzalez", 3400);
        
        
        
        //caso 1:insercion
       
        // Inserta los empleados
//	e1.insertar(c);
//        e2.insertar(c);
//        e3.insertar(c);
       
        
        
        //caso 2: actualizacion
        e3.actualizar(c);
        
         
        
        //caso 3: eliminacion
//        e2.eliminar(c);
        
      
        
        
	// Cierra la conexión
	c.close();
    }
    
}
