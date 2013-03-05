function toSpanishMonaco() {
	var monacoText = {
		info: "Si hay un circuito reconocible a primera vista, ese es el de Mónaco. Un circuito urbano con una amplia trayectoria en el gran circo de la Fórmula 1 y que contiene míticos giros como la Rascasse o Loews. Puntos de extrema dificultad por los que los pilotos pasarán 78 veces hasta completar los 260 kilómetros de los que cuenta esta prueba. La Fórmula 1 corre en Mónaco desde hace 58 años, aunque desde 1928 hay carreras de otras categorías en las calles de esta ciudad.",
		info1: "El circuito de Mónaco es un trazado atípico, con pocas curvas rápidas y en el que las barreras están pegadas a la pista, algo que hace que varios pilotos no terminen la carrera tras irse directamente contra los muros, sin posibilidad de maniobrar en unas inexistentes escapatorias. Una carrera en la que lo que prima es el funcionamiento del coche y su estabilidad más que la potencia y la velocidad; un factor clave será la búsqueda de la adherencia mecánica.",
		info2: "El trazado urbano utilizado a diario y las líneas blancas hace que sea muy resbaladizo al comienzo del fin de semana, mejorando según los monoplazas van depositando goma sobre él. Los coches necesitan una configuración especial, con máximo apoyo aerodinámico por lo revirado del circuito, y suspensiones más blandas y unos 5 mm más altas por los baches y los desniveles. La dirección también se modifica, ampliando el ángulo de giro de las ruedas para poder negociar la curva más lenta del Mundial, Loews.",
		info3: "Un circuito en el que, además, es prácticamente imposible adelantar en pista. Esto hace que sea decisiva la posición con la que se parte y la estrategia a seguir, pues encontrar tráfico en Mónaco es firmar tu sentencia de muerte.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Webber",
		li2: "2011: Vettel",
        li3: "2010 Webber",
        li4: "2009: Button",
        li5: "2008: Hamilton",
        li6: "2007: Alonso",
        li7: "2006: Alonso",
        li8: "2005: Raikkonen",
        li9: "2004: Trulli",
        li10: "2003: Montoya",
        li11: "2002: Coulthard"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li></ul>';
    var html = Mustache.to_html(template, monacoText);
    Lungo.dom('section#secMonaco div#gpMonacoInfo').html(html);
};

function toEnglishMonaco() {
	var monacoText = {
        info: "If there is a known circuit at first glance, this is Monaco one. An urban circuit with a long history in F1 provided with mythical curves as Rascasse or Loews. High difficulty points where drivers will have to pass through 78 times to complete the 260 kilometres in the circuit. F1 has taken place in Monaco for 58 years, although since 1928 there are races corresponding to other categories along the streets of this city.",
        info1: "Monaco circuit is an uncommon plot, with few fast curves and where barriers are joined to the track. This fact causes that several drivers don´t finish the race as they crash against walls, not being able to maneuver in these non-existent exits. It is one race where the most important elements are the car´s running and stability rather than speed and power. A key factor will be the search of mechanical grip.",
        info2: "The urban plot used daily, as well as the white lines make it be very slippery at the beginning of the weekend, improving when cars are putting tyres on it. Cars need special configuration, with maximum downforce support because of the several curves in the circuit, as well as softer and over 5MM taller suspensions because of potholes and gradients.",
        info3: "Moreover, this is a circuits where it´s almost impossible to overtake in the road. This fact implies that both the position where drivers start the race and the strategy to follow are essential, since finding jam in Monaco means signing your death sentence.",
        info4: "Grand Prix Winners:",
        li1: "2012: Webber",
        li2: "2011: Vettel",
        li3: "2010 Webber",
        li4: "2009: Button",
        li5: "2008: Hamilton",
        li6: "2007: Alonso",
        li7: "2006: Alonso",
        li8: "2005: Raikkonen",
        li9: "2004: Trulli",
        li10: "2003: Montoya",
        li11: "2002: Coulthard"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li></ul>';
    var html = Mustache.to_html(template, monacoText);
    Lungo.dom('section#secMonaco div#gpMonacoInfo').html(html);
};