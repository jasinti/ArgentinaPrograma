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
public class AutoCarrera extends Auto{
    //atributos
    private String tipoDeAleron;
    
    //constructores
    public AutoCarrera() {}

    public AutoCarrera(String tipoDeAleron, String marca, int velocidad) {
        super(marca, velocidad);
        this.setTipoDeAleron(tipoDeAleron);
    }
    
    //getters y setters
    public String getTipoDeAleron() {
        return tipoDeAleron;
    }

    public void setTipoDeAleron(String tipoDeAleron) {
        this.tipoDeAleron = tipoDeAleron;
    }
    
    //metodos
    //redefino el cuerpo(no la firma) del metodo acelerar del padre(Auto)
    @Override
    public void acelerar() {
        this.velocidad += 50;
    }
    
    
    @Override
    public String toString() {
        return super.toString() + " tipoDeAleron=" + tipoDeAleron + '}';
    }
}
