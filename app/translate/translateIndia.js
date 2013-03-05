function toSpanishIndia() {
	var indiaText = {
		info: "Como casi todos los circuitos de nueva construcción, el Buddh International cuenta con dos secciones muy diferenciadas. La primera es muy rápida con dos rectas larguísimas, sobre todo la segunda de más de 1 km de longitud (entre las curvas 3 y 4), y dos frenadas muy bruscas antes de los giros 1 y 4. Sin embargo, los monoplazas deben apostar por una carga aerodinámica alta para afrontar la segunda parte del trazado formada por curvas rápidas. La más exigente es la triple dibujada por los giros 10, 11 y 12. La pista es una de las más anchas del Mundial y ofrece dos puntos de adelantamiento al final de las rectas.",
		info1: "Vencedores en el Gran Premio:",
		li1: "2012: Vettel",
		li2: "2011: Vettel"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li></ul>';
    var html = Mustache.to_html(template, indiaText);
    Lungo.dom('section#secIndia div#gpIndiaInfo').html(html);
};

function toEnglishIndia() {
	var indiaText = {
		info: "Buddh International has two clearly differenced sections, like almost all circuits recently built. First section is very fast with two long straight lines, especially the second one which is more than 1 km long (between the curves 3 and 4) and two highly sharp brakes before the turns 1 and 4. However, cars must have high downforce to face the second part of the plot composed of fast curves. The toughest curve is the triple on drawn by the turns 11, 12 and 13. This track is one of the widest in the Championship and it has two overtaking points at the end of the straight lines.",
		info1: "Grand Prix Winners:",
		li1: "2012: Vettel",
		li2: "2011: Vettel"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li></ul>';
    var html = Mustache.to_html(template, indiaText);
    Lungo.dom('section#secIndia div#gpIndiaInfo').html(html);
};