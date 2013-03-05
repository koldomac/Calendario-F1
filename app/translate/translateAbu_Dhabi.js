function toSpanishAbu_Dhabi() {
	var abu_dhabiText = {
		info: "Gracias a tener una de las mayores reservas de petróleo del mundo, Abu Dhabi está inmerso en un ambicioso programa de desarrollo en el que el circuito de Yas Marina es una de las joyas de la corona. El 1 de noviembre del 2009 este país acogió su primer Gran Premio, que fue también el primero en comenzar de día y acabar de noche, garantizando la seguridad un potente sistema de iluminación.",
		info1: "Ubicado en la espectacular isla de Yas y diseñado, cómo no, por Hermann Tilke sin escatimar en recursos y con toda clase de lujo oriental, supone un nuevo concepto integrado en un entorno turístico de tintes futuristas. El paseo marítimo, el glamuroso puerto deportivo repleto de espectaculares yates, el hotel de cinco estrellas y 500 habitaciones que atraviesa el circuito, no dejan lugar a dudas de que dinero hay a mansalva. El Ferrari World, el mayor parque de atracciones bajo techo del mundo, situado junto al circuito y dedicado a la exclusiva marca del Cavallino, es una buena muestra de ello.",
		info2: "El circuito gira en sentido contrario a las agujas del reloj, y fue diseñado con pocas escapatorias en algunas zonas, sustituyéndolas por protecciones de gran absorción de energía en caso de impacto. Tiene la recta más larga del mundial de F1, con 1,2 km, y el final de la recta tiene la peculiaridad de tener una escapatoria que se extiende por debajo de la tribuna Oeste, por lo que los coches que se salen de la pista ahí pasan por debajo de los espectadores.",
		info3: "Otros elementos diferenciadores son los asientos de tribuna, todos ellos cubiertos para proteger del sol del desierto, o la salida del pit-lane, la única que es subterránea, por lo que los coches al salir de boxes descienden por un túnel y pasan por debajo de la pista incorporándose después de la curva 1.",
		info4: "El circuito, en el que se alcanza una velocidad máxima de 320 km/h, y una media de 195 km/h, es largo y exigente, y en él predominan las largas rectas, fuertes frenadas y curvas por lo general lentas. En cuanto a la distancia a recorrer en carrera, no tendrá perdón quien no la recuerde: 55 vueltas al trazado de 5,55 kilómetros.",
		info5: "Vencedores en el Gran Premio:",
		li1: "2012: Raikkonen",
		li2: "2011: Hamilton",
		li3: "2010: Vettel",
		li4: "2009: Vettel"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul>';
    var html = Mustache.to_html(template, abu_dhabiText);
    Lungo.dom('section#secAbu_Dhabi div#gpAbu_DhabiInfo').html(html);
};

function toEnglishAbu_Dhabi() {
	var abu_dhabiText = {
		info: "Because of its highest petroleum reserves in the world, Abu Dhabi is currently taking an ambitious development programme in which Yas Marina circuit is one of the crown jewel. 1st November 2009 this country held its first Grand Prix, which was also the first one starting during the day and finishing at night, ensuring powerful lighting system.",
		info1: "This circuit is located in the amazing island of Yas and was designed by Hermann Tilke without saving in resources and with all kind of oriental luxury. This circuit is a new concept integrated inside a touristic environment with futurist hints. The promenade, the glamorous sport port full of amazing yachts, the luxury hotel and the 500 rooms across the circuit show the enormous wealth. Ferrari World, the biggest theme park sheltered in the world, located near the circuit and focused exclusively on Cavallino branch is a good sample.",
		info2: "The circuit turns against clockwise and it was designed with few exits in some areas, being replaced with high energy protections in case of impact. Furthermore, it has the longest straight line in F1 Worldwide championship, with 1,2 km, and the end of the straight line has the peculiarity of having one exit which is extended under the western stand, so cars which leave the track pass under spectators.",
		info3: "The seats located in the stand are other special elements, all of them covered to protect from the sun of the dessert or the pit-lane exit, the only one which is subterranean, so cars when leaving boxes go down through a tunnel and pass under the track joining up after the curve 1.",
		info4: "The circuit, where maximum speed of 320 km/h is got, and an average of 195 km/h, is long and tough, and long straight lines, strong brakes, as well as slow curves predominate in this circuit. Regarding to the distance to be covered is 55 laps through the track with 5,55 km.",
		info5: "Grand Prix Winners:",
		li1: "2012: Raikkonen",
		li2: "2011: Hamilton",
		li3: "2010: Vettel",
		li4: "2009: Vettel"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul>';
    var html = Mustache.to_html(template, abu_dhabiText);
    Lungo.dom('section#secAbu_Dhabi div#gpAbu_DhabiInfo').html(html);
};