-- funciones agrupacion
use pubs;

-- listar el titulo mas caro
select truncate(max(price), 2) as 'titulo mas caro' from titles;

-- listar la fecha en la que ingreso el ultimo empleado
select min(hire_date) as 'Fecha de ultimo ingreso' from employee;

-- listar la cantidad de horas promedio que trabajan los empleados
select avg(job_lvl) as 'Promedio de horas trabajadas' from employee;

-- informar la cantidad de empleados
select count(emp_id) as 'cantidad de empleados' from employee;

-- diferencia entre count(columna) y count(*)
select count(price) from titles;-- 16 registros --> toma SOLO a no nulos
select count(*) from titles;-- 19 registros --> toma a los no nulos y a los nulos

-- totalizar el precio de todos los titulos
select round(sum(price), 2) as 'suma total de precios' from titles;

-- resumo en una unica consulta varias funciones agrupadas
select		truncate(max(price),2) 'titulo mas caro',
			truncate(min(price),2) 'titulo mas barato',
            count(title_id) 'cantidad de titulos',
            truncate(sum(price),2) total,
            truncate(avg(price),2) promedio

from		titles;

-- consultas agrupadas
/*
	criterios de agrupacion:
    ciudad, provincia, pais
    marca, color, modelo
    sexo
    categoria, tipo
    sector
*/

-- regla de oro: cuando mezclamos campos con funciones
-- de agrupacion en un unico select, es obligatorio
-- agrupar por el o los campos que esten en las columnas
-- del select.

-- listar el titulo mas caro por categoria
select		type as categoria,
			max(price) 'titulo mas caro'
from		titles
group by	type
order by	2 desc
limit		3;-- veo solo los 3 primeros registros de lo anterior

-- clausula LIMIT
select * from employee;-- 43

select * from employee limit  20;

-- se corre los 10 primeros registros y muestra 
-- los siguientes 5
select * from employee limit 10,5;

-- Mas ejercicios de agrupaciones
-- listar el titulo mas caro por categoria
-- que no sean de psicologia
select		type as categoria,
			max(price) 'titulo mas caro'
from		titles
where		type not like '%psy%'
group by	type
order by	2 desc;

-- listar el titulo mas caro por categoria
-- que no sean de psicologia y cuyo maximo
-- precio este entre 15 y 21 pesos.
select		type as categoria,
			max(price) 'titulo mas caro'
from		titles
where		type not like '%psy%'
group by	type
having		max(price) between 15 and 21
order by	2 desc
limit		2;

/*
	La clausula where filtra registros de la 
    agrupacion condicionando a campos.
    
    La clausula having filtra registros de la 
    agrupacion condicionando a funciones agrupadas.
*/

-- ejemplo doble criterio de agrupacion
select		provincia, 
			ciudad,
            count(documento)
from		censo
group by	provincia, ciudad;
            
            
            







