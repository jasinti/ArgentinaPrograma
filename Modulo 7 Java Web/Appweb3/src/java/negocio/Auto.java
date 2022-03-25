/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package negocio;

/**
 *
 * @author Jorge
 */
public class Auto {
    private String marca;
    private String color;
    private int velocidad;

    public Auto() {}

    public Auto(String marca, String color, int velocidad) {
        this.setMarca(marca);
        this.setColor(color);
        this.setVelocidad(velocidad);
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }

    @Override
    public String toString() {
        return "Auto{" + "marca=" + marca + ", color=" + color + ", velocidad=" + velocidad + '}';
    }
}
