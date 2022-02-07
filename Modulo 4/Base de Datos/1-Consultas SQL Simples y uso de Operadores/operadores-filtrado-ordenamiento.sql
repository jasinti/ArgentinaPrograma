-- esto es un comentario de linea
use negocio;-- use: permite seleccionar una base x defecto

/*
	Esto es un
    comentario de
    bloque
*/

-- veo las tablas de la base seleccionada por defecto
show tables;


-- veo la estructura de la tabla clientes
describe clientes;

-- queries(query): consulta
-- listar todos los clientes
select * from clientes;-- * significa todos los campos

-- listar nombre, apellido y email de todos los clientes
select  email, nombre, apellido from clientes;

-- listar articulo, precio, precio con iva, stock de 
-- todos los productos. Agregar en que momento se hizo la query
select 	articulo,
		precio,
        round(precio * 1.21,2) as 'Precio con IVA',-- columna agregada y calculada
        stock,
        now() as 'Fecha de Consulta'
from	productos;
        
select * from productos;
describe productos;

-- operadores aritmeticos: +  -  *  /

-- operadores relacionales: >   <   >=   <=   =  !=  <>

-- operadores logicos: and   or   not

-- operador de rango: between

-- operador de lista: in

-- listar los productos cuyo precio sea mayor a 100 $.
select * from productos;

select 	* 
from 	productos
where	precio > 100;


-- listar los productos cuyo precio este entre 100  y 200 $.
select 	* 
from 	productos
-- where	precio >= 100 and precio <= 200;
where	precio between 100 and 200;-- el operador between incluye extremos

-- listar los productos cuyo precio NO este entre 100  y 200 $.
select 	* 
from 	productos
where	precio not between 100 and 200;
-- where	precio between 200 and 100;-- 1ro colocar el valor mas pequeño

-- listar las ventas facturadas en 2017
select 	* 
from 	facturas
where	fecha between '2017-01-01' and '2017-12-31';
-- where	year(fecha) = 2017;
-- where	year(fecha) != 2017;
-- where	year(fecha) <> 2017;

-- listar los productos cuyo color sea verde o azul o violeta
select 	* 
from 	productos
-- where	color = 'verde' or color = 'azul' or color = 'violeta';
where	color in ('verde' ,'azul','violeta');
-- where	color not in ('verde' ,'azul','violeta');
 

-- ordenamiento de valores
select 		*
from		productos
-- order by	precio;-- orden por defecto es ascendente
-- order by	precio desc;-- orden descendente
order by	precio asc;-- orden ascendente

-- listar los clientes ordenados en forma alfabetica por apellido y nombre
select 		* 
from 		clientes
-- order by	apellido;-- por defecto, orden alfabetico = orden ascendente
-- order by	apellido desc;
order by	apellido, nombre;


-- operador de similitud like
-- seleccionamos la base negocio por defecto
use negocio;

-- listar los clientes cuyo nombre empiece con la letra a
select 	* 
from 	clientes
where	nombre like 'a%';


-- listar los clientes cuyo apellido termine con ez
select 	* 
from 	clientes
where	apellido like '%ez';

-- listar los clientes cuyo nombre empiece con j y termine con n
select 	* 
from 	clientes
where	nombre like 'j%n';

-- listar clientes cuyo nombre empiece con m, el segundo caracter 
-- no importe, el tercer caracter sea un r y que termine de cualquier forma

/*
	Martin
    Marcos
    Mercedes
    Marcelo
    Maria
    Martha
    Muriel
    Moria
    Mirtha
    
*/

select 	* 
from 	clientes
where	nombre like 'm_r%';

-- base pubs
use pubs;

select 	* 
from 	employee
where	fname like 'm_r%';


-- operador rlike
-- listar los empleados cuyo nombre empiece con m
select	*
from	employee
-- where	fname rlike '^m';
where	fname like 'm%';

-- listar los empleados cuyo apellido termine con z
select	*
from	employee
-- where	lname rlike 'z$';
where	lname like '%z';

-- listar los empleados cuyo apellido empiece con h y termine con z
select	*
from	employee
-- where	lname rlike '^h.*z$';
-- where	lname like 'h%z';
where	lname not like 'h%z';

-- listar los empleados cuyo año de ingreso no sea 1990
select	* 
from 	employee 
-- where	hire_date rlike '199[^0]';
-- where	hire_date rlike '199[^0-2]';-- q no sean del 90 al 92(rango)
-- where	hire_date rlike '199[^0,2]';-- q no sean ni 90 ni 92(lista)
-- where year(hire_date) != 1990;
-- where year(hire_date) <> 1990;
where not year(hire_date) <> 1990;


-- operador is null, is not null
-- listar los titulos cuyo precio no este definido
select 	* 
from 	titles
-- where	price is null;
where	price is not null;

-- clausula distinct: lista los diferentes valores(sin repeticiones)
-- de una columna
-- listar lss diferentes categorias de libros
select * from titles; -- aqui aparecen repetidas las categorias

select distinct(type) as 'variedad de categorias' from titles;
select distinct type as 'variedad de categorias' from titles;

-- listar el precio de los libros que contenga cero
select 	* 
from 	titles
where	price like '%0%';



















