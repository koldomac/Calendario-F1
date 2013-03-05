function toSpanishSingapur() {
	var singapurText = {
		info: "En 2008 Singapur tuvo el honor de acoger el primer Gran Premio nocturno de la historia de la Fórmula 1. Esta particularidad, junto con su trazado urbano con el horizonte de la ciudad como telón de fondo han creado un GP espectacular y de gran ambiente, que además por su horario puede ser retransmitido a una hora apropiada para las audiencias de las televisiones europeas. Utilizando vías públicas alrededor de la zona de Marina Bay, el circuito utiliza potentes sistemas de iluminación para garantizar la seguridad.",
		info1: "El GP en este trazado que gira en sentido contrario a las agujas del reloj es uno de los más duros por su duración (casi agota el límite de dos horas), calor, humedad y una constante sucesión de curvas lentas de segunda o tercera velocidad, lo que también hace que el motor esté entregando toda su potencia durante menos de la mitad de la vuelta. Si para el motor es el circuito menos duro, no lo es así para los frenos, que no tienen apenas descanso entre curva y curva.",
		info2: "Los reglajes para este circuito urbano son parecidos a los de Mónaco, con mucha carga aerodinámica, y el agarre mecánico tiene gran importancia para traccionar en la salida de las curvas, por lo que las suspensiones tienden a ser más blandas.",
		info3: "La meteorología también juega un importante papel en la zona, porque el calor se combina con frecuentes tormentas al anochecer.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Vettel",
		li2: "2011: Vettel",
		li3: "2010: Alonso",
		li4: "2009: Hamilton",
		li5: "2008: Alonso"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li></ul>';
    var html = Mustache.to_html(template, singapurText);
    Lungo.dom('section#secSingapur div#gpSingapurInfo').html(html);
};

function toEnglishSingapur() {
	var singapurText = {
		info: "In 2008 Singapore held the first night Grand Prix in F1 history. This peculiarity joined to its urban plot and the city horizon as a backdrop have made an amazing Grand Prix with very good environment. Furthermore, because of its schedule it can be broadcasted at suitable time for European televisions audience. Using public motorways around the area of Marina Bay, the circuit employs powerful lighting systems to ensure safety.",
		info1: "The plot in Singapore, which turns against clockwise, is one of the hardest ones because of its length (almost 2 hours), hot, humidity and constant sequence of low curves which need the second or third gear. This fact makes motors run at maximum powerful for less than half a lap. Although for motors is the less hard circuit, brakes suffer a lot since they hardly rest during the race.",
		info2: "Adjustments for this urban circuit are similar the ones in Monaco, with much downfoce and mechanical grip has high importance to drive at the exit of curves, so suspensions tend to be softer.",
		info3: "Weather also plays an important role in the area, because hot is combined with frequent storms at nightfall.",
		info4: "Grand Prix Winners:",
		li1: "2012: Vettel",
		li2: "2011: Vettel",
		li3: "2010: Alonso",
		li4: "2009: Hamilton",
		li5: "2008: Alonso"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li></ul>';
    var html = Mustache.to_html(template, singapurText);
    Lungo.dom('section#secSingapur div#gpSingapurInfo').html(html);
};