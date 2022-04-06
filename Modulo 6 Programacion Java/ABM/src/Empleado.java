
import java.sql.Statement;
import java.sql.Connection;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jorge
 */
public final class Empleado {
    
    //Atributos

    private String nombre;
    
    private int remuneracion;

    //constructores

    public Empleado(){}

    public Empleado(String nombre,String apellido,int remuneracion){

    setNombre(nombre);
    
    setRemuneracion(remuneracion);

    }

    //Setters y getters

    public void setNombre(String nombre){

        this.nombre=nombre;

    }

    public String getNombre(){

        return nombre;

    }

       

    public void setRemuneracion(int remuneracion){

        this.remuneracion=remuneracion;

    }

    public int getRemuneracion(){

        return remuneracion;

    }

    //metodo insertar

    public void insertar (Connection c) throws Exception {
        
        //Obtiene una conexion
        Connection unaConexion = Conexion.getConnection();
        
        // Arma la sentencia de inserción 
        String sql ="INSERT INTO empleados(nombre,remuneracion) "
        + "VALUES('"+this.getNombre()+"',"+this.getRemuneracion()+")";
        
        Statement insercion = unaConexion.createStatement();
        
        //Ejecuta la consulta
        insercion.execute(sql);
        
        //Cierra la conexion
        insercion.close();
        unaConexion.close();
        
      //Informa que la insercion se realiao correctamente
        System.out.println("La insercion se realizo con exito!...");
            
    }
    
    public void actualizar (Connection c) throws Exception {
        
        //Obtiene una conexion
        Connection unaConexion = Conexion.getConnection();
        
        // Arma la sentencia de actualización y la ejecuta
        String sql = "UPDATE empleados SET remuneracion = 6700 WHERE nombre = '"+this.getNombre()+"'";
        
        Statement actualizacion = unaConexion.createStatement();
        
        actualizacion.execute(sql);
        
        // Cierra el Statement y la Connection
        actualizacion.close();
        unaConexion.close();
        
        // Informa que la actualización ha sido realizada con éxito
        System.out.println("La actualización ha sido realizada con éxito...");
    }
    
    
    
    public void eliminar (Connection c) throws Exception {
    
    // Define la conexion
        Connection unaConexion = Conexion.getConnection();
        
        // Arma la sentencia de eliminación y la ejecuta
        String sql = "DELETE FROM empleados WHERE nombre = '"+this.getNombre()+"'";
        
        Statement eliminacion = unaConexion.createStatement();
        
        eliminacion.execute(sql);
        
        // Cierra el Statement y la Connection
        eliminacion.close();
        unaConexion.close();
        
        // Informa que la eliminación ha sido realizada con éxito
        System.out.println("La eliminación ha sido realizada con éxito...");
}
    


}
    
    


