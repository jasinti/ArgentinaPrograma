
import java.sql.Connection;
import java.sql.DriverManager;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author hp
 */
public class Conexion {
    
    public static Connection getConnection() throws Exception
        {

        // Establece el nombre del driver a utilizar
        String driver = "com.mysql.jdbc.Driver";

        // Establece la conexion a utilizar
        String conexion = "jdbc:mysql://localhost/abm";

        // Establece el usuario de la base de datos
        String usuario = "root";

        // Establece la contraseña de la base de datos
        String password = "";

        // Establece el driver de conexion
        Class.forName(driver).newInstance();

        // Retorna la conexion
        return DriverManager.getConnection(conexion, usuario, password);

        }
    
}
