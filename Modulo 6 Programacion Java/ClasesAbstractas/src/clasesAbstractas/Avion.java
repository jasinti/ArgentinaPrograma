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
public class Avion extends Vehiculo{
    //atributos
    private int asientos;
    
    //constructores
    public Avion() {}

    public Avion(int asientos, int velocidad) {
        super(velocidad);
        this.setAsientos(asientos);
    }
    
    //get y set
    public int getAsientos() {
        return asientos;
    }

    public void setAsientos(int asientos) {
        this.asientos = asientos;
    }
    
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    @Override
    public void acelerar() {
        this.velocidad += 100;
    }
    
    
    @Override
    public String toString() {
        return " asientos=" + asientos + super.toString();
    }
}
