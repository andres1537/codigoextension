var data = 'https://docs.google.com/spreadsheets/d/1FP9WUxjOEljzcL4-Uhvwk2U20bJ4ObPnmJfiSS2aotc/edit#gid=0';

function search() {
	var extension = $('#extension').val();
	
	if (extension == '') {
		alert('Ingrese un número de extensión');
		$('#result').text('');
		return true;
	} else if (isNaN(extension)) {
		alert('Ingrese un número de extensión válido');
		$('#result').text('');
		return true;
	}
	  
	$('#contrasena-ul').sheetrock({
		reset: true,
		url: data,
		sql: "select A, B where A = " + extension,
		callback: function (error, options, response) {
			if (response.rows.length <= 1) {
				alert('No se encontró ninguna contraseña');
				$('#result').text('');
			} else {
				$('#result').text(response.rows[1].cellsArray[1]);
			}
		}
	});
	return true;
}