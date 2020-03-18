var data = 'https://docs.google.com/spreadsheets/d/1FP9WUxjOEljzcL4-Uhvwk2U20bJ4ObPnmJfiSS2aotc/edit#gid=0';

function search() {
	var extension = $('#extension').val();
	if (extension == '') {
		alert('Ingrese un número de extensión');
		return true;
	} else if (isNaN(extension)) {
		alert('Ingrese un número de extensión válido');
		return true;
	}
	
	// Compile Handlebars template for team RBI leaders.
	var RBITemplate = Handlebars.compile($('#team-rbi-template').html());
	  
	$('#team-rbi').sheetrock({
		reset: true,
		url: data,
		sql: "select A, B where A = " + extension,
		labels: ['extension', 'codigo'],
		rowHandler: RBITemplate,
		callback: function (error, options, response) {
			if (response.rows.length <= 1) {
				alert('No se encontró ningún código');	
			}
			
			$('#extension').val('');
		}
	});
	return true;
}