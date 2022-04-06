<%-- 
    Document   : index
    Created on : 14 mar. 2022, 21:28:28
    Author     : Jorge
--%>

<%@page import="negocio.Auto"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Formulario de Autos</h1>
        <form action="SvAuto" method="post">
            Marca: <input name="marca" /><br>
            Color: <input name="color" /><br>
            Velocidad: <input name="velocidad" /><br>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Cancelar" />
        </form>
        
        <%--mediante el siguiente scriptlet capturamos lo enviado por el servlet--%>
        <% 
            
            String marca = (String)session.getAttribute("marca");
            String color = (String)session.getAttribute("color");
            String velocidad = (String)session.getAttribute("velocidad");
            
            if (marca != null && color != null) 
            {
        %>
        <!<!-- uso de expresiones -->
                <p>Marca: <%=marca%></p>
                <p>Color: <%=color%></p>
                <p>Velocidad: <%=velocidad%></p>
        <%
            }
        %>
        
    </body>
</html>
