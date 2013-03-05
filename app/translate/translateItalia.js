function toSpanishItalia() {
	var italiaText = {
		info: "El de Monza es un circuito clave en la historia de la Fórmula 1. Ejemplo fantástico de circuito de alta velocidad, los viejos árboles del histórico parque de las afueras de Milán han sido testigos de algunas de las mejores carreras de todos los tiempos, pero también de algunos de los peores accidentes de este deporte. La lista de inolvidables victorias y terribles accidentes es muy larga, y se combinan para hacer del Autodromo Nazionale di Monza uno de los lugares más mágicos del calendario de la Fórmula 1.",
		info1: "Se comenzó a construír en 1922, y con un óvalo peraltado incorporado en su diseño su longitud era de nada menos que 10 kilómetros. El trazado sufrió múltiples variaciones, casi siempre en respuesta a trágicos accidentes que sucedieron, hasta que la Segunda Guerra Mundial provocó que se suspendieran los Grandes Premios hasta el año 48. Sin embargo no sería hasta cinco años después de la creación de la Fórmula 1, en 1955, cuando tras una reconstrucción que dejó su longitud en los actuales 5,7 kilómetros, comenzó a acoger la F1. Desde entonces, las modificaciones han sido múltiples, siempre para mejorar la seguridad. Ni falta hace decir que los tifosi italianos apoyando a su Scuderia Ferrari crean un ambiente impresionante.",
		info2: "En su configuración actual Monza sigue siendo un circuito rapidísimo, el más rápido del Mundial, y un desafío singular para pilotos y equipos. La velocidad media en una vuelta supera los 250 y en cuatro puntos diferentes se superan los 330km/h. Precisamente por la longitud de sus rectas, los monoplazas ruedan en el Autodromo con una configuración aerodinámica específica para este circuito, con tan poca carga aerodinámica como sea posible sin comprometer la estabilidad en las frenadas. El agarre se sacrifica para lograr una mayor velocidad en recta, y con tan poca carga, incluso los pilotos notan que el monoplaza acelera más que de costumbre.",
		info3: "Las largas rectas hacen que los motores estén sometidos a grandes esfuerzos debido a que más del 75% de la vuelta se recorre con el acelerador a fondo, y los frenos también tienen un enorme trabajo para detener el coche en las fortísimas frenadas. Otro punto importante son las suspensiones, ya que pasar por encima de los pianos en las chicanes y acelerar lo antes posible es importante a la hora de marcar un buen crono.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Hamilton",
		li2: "2011: Vettel",
		li3: "2010: Alonso",
		li4: "2009: Barrichelo",
		li5: "2008: Vettel",
		li6: "2007: Alonso",
		li7: "2006: M.Schumacher",
		li8: "2005: Montoya",
		li9: "2004: Barrichelo",
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, italiaText);
    Lungo.dom('section#secItalia div#gpItaliaInfo').html(html);
};

function toEnglishItalia() {
	var italiaText = {
		info: "In F1 history Monza is a key circuit. This is a high speed circuit, and the old trees of the historic park on the outskirts of Milan have been witnesses of some of the worst accidents in this sport. The list of unforgettable victories and terrible accidents is very long, and both of them make Nazionale di Monza racing circuit one of the most magic places in F1 calendar.",
		info1: "This circuit started to be built in 1922, and with a cambered roundabout added in its design it was 10 kilometres long. The track had several changes, as consequence of tragic accidents, until the Second World War made Grand Prix be stopped until 1948. However, it was not until five years after F1 creation, in 1955, that it started hold F1, after a reconstruction which let its length in the current 5,7 kilometres. Since then, several modifications have been made to improve safety. Italian tifosi who support their Ferrari team always create an amazing environment.",
		info2: "In its current configuration, Monza is a very fast circuit, the fastest of the Championship, so it is a challenge for drivers and teams. On average the speed in one lap exceeds 250 km/h, and it four different points 330 km /h are exceeded. Due to the length of its straights, cars go along the car racing with specific aerodynamic configuration for this circuit, with the minimum downforce without putting stability at risk when braking. Grip is sacrificed to get more speed along the straight, and with so little load, drivers even feel that cars accelerate more than usual.",
		info3: "Long straight lines make motors be forced to strong efforts because more than 75% of the lap is driven with accelerator pressed in depth, and brakes also have hard work to the stop car against strong brakes. Suspensions also become another important point, since passing over pianos in the chicanes and accelerate as soon as possible is important to make good time.",
		info4: "Grand Prix Winners:",
		li1: "2012: Hamilton",
		li2: "2011: Vettel",
		li3: "2010: Alonso",
		li4: "2009: Barrichelo",
		li5: "2008: Vettel",
		li6: "2007: Alonso",
		li7: "2006: M.Schumacher",
		li8: "2005: Montoya",
		li9: "2004: Barrichelo",
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, italiaText);
    Lungo.dom('section#secItalia div#gpItaliaInfo').html(html);
};