function iluminar (fila) 
{
	//modifico el color de fondo
	fila.style.background = 'blue';

}

function apagar (fila) 
{
	//modifico el color de fondo
	fila.style.background = '';	
}

function pintar (celda) 
{
	if (celda.style.background == 'red') 
	{
		celda.style.background = '';
	} 
	else
	{
		celda.style.background = 'red';
	}
}