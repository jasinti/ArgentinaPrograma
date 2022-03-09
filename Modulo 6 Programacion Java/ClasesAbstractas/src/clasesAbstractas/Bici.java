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
public class Bici extends Vehiculo{
    //atributos
    private int rodado;
    
    //constructores
    public Bici() {}

    public Bici(int rodado, int velocidad) {
        super(velocidad);
        this.rodado = rodado;
    }
    
    //get y set
    public int getRodado() {
        return rodado;
    }

    public void setRodado(int rodado) {
        this.rodado = rodado;
    }
    
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    @Override
    public void acelerar() {
        this.velocidad += 5;
    }
    

    @Override
    public String toString() {
        return super.toString() + " rodado=" + rodado;
    }
}
