create database relaciones;

use relaciones;

create table sucursales(suc_id int, suc_nombre varchar(20));

create table empleados(emp_id int, emp_nombre varchar(20), suc_id int);

insert into sucursales values(1,'Centro'),(2,'Congreso'),(3,'Almagro'),(4,'Palermo');
insert into empleados values(1,'Juan',1),(1,'Carlos',2),(3,'Jose',2),(4,'Maria',null);

select * from sucursales;
select * from empleados;


truncate table sucursales;

delete from sucursales;

/*
	tipos de joins
		--> inner join
			--> busco coincidencias en los valores de los campos por los
            q se relacionan las tablas. Ej.: listar nombre y fecha de ingreso
            de los empleados y el nombre de las editoriales dnd trabajan.
        --> outer join
			--> left outer join (left join)
            --> right outer join (right join)
            --> full outer join (full join)
			--> busco NO coincidencias en los valores de los campos por los
            q se relacionan las tablas. Ej.: listar nombre de las editoriales 
            que no publicaron libros de negocio.
		--> cross join(producto cartesiano)
*/

-- inner join
-- Listar el nombre de los empleados y de las sucursales dnd trabajan.
select		emp_nombre, suc_nombre
from		empleados
inner join	sucursales
on			(empleados.suc_id = sucursales.suc_id);

-- variante invirtiendo las tablas
select		emp_nombre, suc_nombre
from		sucursales
inner join	empleados
on			(empleados.suc_id = sucursales.suc_id);

-- variante usando alias de tablas
select		emp_nombre, suc_nombre
from		sucursales as s
inner join	empleados e
-- on			(e.suc_id = s.suc_id);
on			e.suc_id = s.suc_id;

-- variante --> inner join = join
select		emp_nombre, suc_nombre
from		sucursales as s
join		empleados e
on			e.suc_id = s.suc_id;

-- variante usando coma para separar las tablas(ANSI SQL)
select		emp_nombre, suc_nombre
from		sucursales as s, empleados e
where		e.suc_id = s.suc_id;

-- producto cartesiano (cross join)
select		emp_nombre, suc_nombre
from		sucursales as s, empleados e;

select		emp_nombre, suc_nombre
from		sucursales as s
cross join	empleados e;

-- outer join
-- Listar el nombre de los empleados q NO trabajan en ninguna sucursal
-- tabla principal: es aquella de la cual quiero obtener datos.
-- En este ejemplo, la tabla ppal es empleados
select		e.emp_nombre 
			-- ,s.*
from		empleados e left join sucursales s
-- from		sucursales s  right join empleados e
on			(e.suc_id = s.suc_id)
where		s.suc_id is null;

-- en el resultset, las no coincidencias se ven cuando TODOS 
-- los campos de la tabla secundaria son NULL

-- Con la clausula WHERE filtro y me quedo con las NO coincidencias.
-- Filtro por la clave principal de la tabla secundaria que sea nula.


-- Listar el nombre de las sucursales en las que NO trabaja ningun empleado
-- En este ejemplo, la tabla ppal es sucursales
select 		s.suc_nombre
			-- , e.* 
from 		sucursales s left join 	empleados e
on 			(e.suc_id = s.suc_id)
where 		e.suc_id is null; 








