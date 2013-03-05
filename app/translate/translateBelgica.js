function toSpanishBelgica() {
	var belgicaText = {
		info: "Spa-Francorchamps es uno de los circuitos más históricos del calendario de la Fórmula 1. En 1924 ya acogió un Gran Premio, y casi 90 años después sigue siendo el circuito favorito de gran parte de los pilotos y aficionados.",
		info1: "El trazado original de Spa consistía en 14,9 kilómetros de estrechas y peligrosas vías públicas, y aunque a través de los años se fue acortando ligeramente su distancia con algunos cambios, cuando en 1970 albergó el último Gran Premio en su vieja configuración, todavía medía más de 14 kilómetros y seguía siendo increíblemente rápido, logrando Chris Amon la vuelta rápida aquel año a una media de 245 km/h.",
		info2: "Spa no volvió al calendario de la Fórmula 1 hasta 1983, con una configuración drásticamente revisada al ser su longitud recortada a 7 kilómetros, pero afortunadamente la magia del circuito permaneció intacta. Dos tercios de la vuelta siguen utilizando el trazado antiguo, y la legendaria curva de Eau Rouge, con su brutal desnivel, sigue siendo parte fundamental del mismo.",
		info3: "Más de 20 años después, Spa sigue siendo el circuito más largo del calendario. El trazado sigue las ondulaciones naturales de la región de las Ardenas, combinando largas rectas con difíciles curvas rápidas en un bonito entorno forestal. No es de extrañar por tanto que siga siendo uno de los circuitos favoritos de los pilotos.",
		info4: "Circuito de baja carga aerodinámica debido a la importancia de tener una buena velocidad en sus largas rectas, tiene en la climatología otra de sus peculiares características. El tiempo es notoriamente variable y dada su longitud, a menudo llueve en unas zonas del circuito mientras que otras están secas.",
		info5: "Vencedores en el Gran Premio:",
		li1: "2012: Button",
		li2: "2011: Vettel",
		li3: "2010: Hamilton",
		li4: "2009: Raikkonen",
		li5: "2008: Massa",
		li6: "2007: Raikkonen",		
		li7: "2005: Raikkonen",
		li8: "2004: Raikkonen"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, belgicaText);
    Lungo.dom('section#secBelgica div#gpBelgicaInfo').html(html);
};

function toEnglishBelgica() {
	var belgicaText = {
		info: "Spa-Francorchamps is one of the most historical circuits in F1 calendar. In 1924 it held a Grand Prix, and almost 90 years later, it is the favourite circuit for most drivers and spectators.",
		info1: "The original plot in Spa consisted of 14.9 kilometres of dangerous and narrow public roads. Although some years later the distance was shortened  with some changes, when in 1970 it held the last F1 Grand Prix with the old configuration, is still had 14 kilometres and it was high fast, achieving Chris Amon the fastest lap at 245 km/h on average.",
		info2: "Spa did not go back to F1 calendar until 1983, and its configuration had been drastically reviewed as its length has been shortened to 7 kilometres, but fortunately the magic of the circuit remained intact. Two thirds of the lap still uses the old plot and the legendary curve of Eau Rouge, with its strong slope, is still an essential element in this circuit.",
		info3: "After more than 20 years, Spa is still the longest circuit in the calendar. The plot has the natural undulations of Ardenas Region, combining long straight lines with difficult fast curves along a wonderful forest environment. Spa is one of the favourite circuits for drivers.",
		info4: "This is a low downforce circuit due to the importance of having good speed along its long straight lines. Furthermore, one of the special features of this circuit is weather. Weather is highly changeable and because of its length, in some areas of the circuit frequently rains, while other areas are dry.",
		info5: "Grand Prix Winners:",
		li1: "2012: Button",
		li2: "2011: Vettel",
		li3: "2010: Hamilton",
		li4: "2009: Raikkonen",
		li5: "2008: Massa",
		li6: "2007: Raikkonen",		
		li7: "2005: Raikkonen",
		li8: "2004: Raikkonen"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, belgicaText);
    Lungo.dom('section#secBelgica div#gpBelgicaInfo').html(html);
};