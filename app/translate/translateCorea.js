function toSpanishCorea() {
	var coreaText = {
		info:"Después del éxito en los últimos años de la organización de Grandes Premios en Singapur y China, Corea es el último país asiático que se prepara para acoger su primer Gran Premio en 2010.",
		info1:"La nueva pista se encuentra en la rural región de Jeolla del Sur, al suroeste de la península coreana, a370 km de la capital, Seúl. La región es un creciente centro para el turismo y la cultura en el noreste de Asia, y los organizadores desarrollarán los alrededores del circuito con un parque de negocios de alta tecnología e instalaciones residenciales y de ocio.",
		info2:"La pista de Yeongam, de 5.615 metros y con capacidad para 130.000 espectadores, ha sido diseñada por Hermann Tilke y tendrá dos configuraciones. La mayoría de los eventos se llevarán a cabo en la versión corta de la pista (3.045 metros) que no incluye la recta de meta que se utilizará en los fines de semana de Gran Premio, lo que requiere la construcción de dos paddocks y complejos de boxes.",
		info3:"Dispone de una enorme recta de 1,2 kilómetros, la más larga de todos los circuitos asiáticos de F1, y será de las pocas pistas en las que se gira en sentido anti-horario. Cuenta con una mezcla de largas rectas y horquillas destinadas a favorecer los adelantamientos, con tres buenos lugares para intentarlo en el primer sector, y suficientes curvas como para requerir una cantidad significativa de carga aerodinámica en el resto del circuito.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Vettel",
		li2: "2011: Vettel",
		li3: "2010: Alonso"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul>';
    var html = Mustache.to_html(template, coreaText);
    Lungo.dom('section#secKorea div#gpkoreaInfo').html(html);
};

function toEnglishCorea() {
	var coreaText = {
		info:"After the success obtained in the last years derived from the organisation of Grand Prix in Singapur and China, Korea has been the last Asian country to hold a Grand Prix in 2010.",
		info1:"This track is located in the rural region on South Jeolla, in the south-east of the Korean peninsula, 370 kilometres away from Seoul, the capital. This region is a growing centre for tourism, as well as for culture from northeast of Asia and organizers will develop the circuit surroundings with a business park equipped with high technology, as well as residential and leisure installations.",
		info2:"Yeongam track, which has 5.615 kilometres and capacity for 130.000 spectators, has been designed by Hermann Tilke and it has two configurations. Most of the events will take place in the short version of the track (3.045 metres), which doesn’t include the end of race and it will be employed during the weekends of Grand Prix, which requires the construction of two paddocks and boxes complexes.",
		info3:"The circuit has a large straight line with 1,2 kilometres, the longest straight line in all Asian F1 circuits and it is one of the few tracks where it is turned against clockwise. It has a mix of long straight lines and forks destined to assist overtaking, with three good places to try it in the first sector and enough curves which require significant amount of downforce in the rest of the circuit.",
		info4: "Grand Prix Winners:",
		li1: "2012: Vettel",
		li2: "2011: Vettel",
		li3: "2010: Alonso"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul>';
    var html = Mustache.to_html(template, coreaText);
    Lungo.dom('section#secKorea div#gpkoreaInfo').html(html);
};