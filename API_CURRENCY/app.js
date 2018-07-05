$.ajax({
	url: 'http://www.mindicador.cl/api',
	method: 'GET'
}).then(function(data){

	var dolar = data.dolar.valor;
	var euro = data.euro.valor;
	var uf = data.uf.valor;
	var utm = data.utm.valor;

	$("#dolar").text('$' + ' ' + dolar);
	$("#euro").text('' + ' ' + euro);
	$("#uf").text('UF' + ' ' + uf);
	$("#utm").text('UTM' + ' ' + utm);
	//console.log('$' + data.dolar.valor);
	$("input.envio_dolar").on("click", function(e){
		e.preventDefault();
		var operacion = $("input.input_dolar").val() / dolar;
		//console.log(operacion);
		$("#resultado_dolar").text(operacion);

	});
	
	$("input.envio_euro").on("click", function(e){
		e.preventDefault();
		var operacion = $("input.input_euro").val() / euro;
		//console.log(operacion);
		$("#resultado_euro").text(operacion);
	});


});
//Faltaba la palabra function D: 




//$("button.envio_pesos").on("click", function(){});