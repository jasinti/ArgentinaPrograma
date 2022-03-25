/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import negocio.Auto;

/**
 *
 * @author Jorge
 */
@WebServlet(name = "SvAuto", urlPatterns = {"/SvAuto"})
public class SvAuto extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        String marca = request.getParameter("marca");
        String color = request.getParameter("color");
        int velocidad = Integer.parseInt(request.getParameter("velocidad"));
        
        Auto a = new Auto(marca, color, velocidad);
        
        out.println(a);
        
        request.getSession().setAttribute("marca", a.getMarca());
        request.getSession().setAttribute("color", a.getColor());
        request.getSession().setAttribute("velocidad", String.valueOf(a.getVelocidad()));
        response.sendRedirect("index.jsp");
        
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
