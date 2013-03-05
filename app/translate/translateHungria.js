function toSpanishHungria() {
	var hungriaText = {
		info: "A pesar de que en 1936 se organizó en Hungría un Gran Premio, no fue hasta 50 años después, en 1986, cuando las  autoridades deportivas del país lograron volver a poner a Hungría en el mapa del automovilismo mundial al organizar su primer Gran Premio de Fórmula 1. En un principio se pensó en celebrar el GP por las calles de Budapest, pero finalmente se optó por construir un nuevo circuito en un valle a 20 km de la preciosa ciudad. Hungaroring se comenzó a construir en 1985 y el valle permitía a los espectadores tener unas excelentes vistas del circuito, que vio llegar a la F1 en agosto de 1986. Desde entonces, siempre ha estado en el calendario de la F1, y en varias ocasiones ha ofrecido espectaculares carreras.",
		info1: "Lento y revirado, para los pilotos es un circuito divertido para pilotar, pero el asfalto provoca bastantes quebraderos de cabeza a pilotos y equipos por dos motivos: Uno, el polvo, debido a que la pista no se usa mucho el resto del año, haciendo que el agarre vaya mejorando según se va limpiando y se acumula la goma tras el paso de los monoplazas. El segundo, es su temperatura, ya que normalmante hace mucho calor, superando habitualmente el asfalto los 50ºC. El calor también lo hace duro físicamente para los pilotos porque la carrera suele ser muy larga, casi en el límite de las dos horas. Al margen de la recta de 700 metros, el resto es una sucesión de curvas de media y baja velocidad, por lo que la configuración de los coches es de máxima carga aerodinámica, similar a la de Mónaco, lo que permite a los pilotos ser agresivos con el coche.",
		info2: "El agarre mecánico es muy importante, y los reglajes de la suspensión se ablandan un poco para mejorarlo y para disponer de buena tracción a la salida de las curvas, que obligan al piloto a dosificar continuamente el acelerador. La ausencia de largas rectas, y por lo tanto también de fuertes frenadas, hace que los adelantamientos sean muy complicados. La frenada para la primera curva es la mejor oportunidad, pero el piloto de delante tiene que cometer un error saliendo de la última curva para poder cogerle el rebufo en la recta.",
		info3: "Vencedores en el Gran Premio:",
		li1: "2012: Hamilton",
		li2: "2011: Button",
		li3: "2010: Webber",
		li4: "2009: Hamilton",
		li5: "2008: Kovalainen",
		li6: "2007: Hamilton",
		li7: "2006: Button",
		li8: "2005: Raikkonen"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, hungriaText);
    Lungo.dom('section#secHungria div#gpHungriaInfo').html(html);
};

function toEnglishHungria() {
	var hungriaText = {
		info: "Although a Grand Prix took place in Hungary in 1936, it was not until 1986 that sports authorities of  this country got to put Hungary again on the map of  worldwide motor racing as they organized its first F1 Grand Prix. Firstly, it was thought to hold the Grand Prix through the streets of Budapest, but finally a new circuit was built in a valley 20 kilometres away from this city. Hungaroring started to be built in 1985 and the valley allowed spectators to have excellent views of the circuit which held the first Grand Prix in August of 1986. Since then, this circuit has been always in F1 calendar, and many times amazing races have took place here.",
		info1: "Slow and veered, drivers consider it as a funny circuit to drive, but pavement causes several problems to drivers and teams for two reasons. One of them is dust, as the plot is not frequently used during the rest of the year, grip is improving when it is cleaned and after cars pass along the plot rubber is accumulated. The other reason is its temperature, as it is often hot, plot exceeds 50ºC frequently. Hot makes also plot very strong physically for drivers because race is usually very long, almost it takes 2 hours. With the exception of the 700 meters straight, the rest of the circuit is formed with a sequence of medium and low speed curves, so cars are composed of maximum downforce, similar to the configuration in Monaco, which allows drivers to be aggressive with cars.",
		info2: "Mechanical grip is very important, and suspension adjustments are softened a bit to improve grip and to have good traction at the exit of curves, which force drivers to continuously control accelerator. The lack of long straight lines, and consequently of strong braking, make overtaking very complicated. Brake for the first curve is the best opportunity, but driver who goes ahead must make a mistake going out the last curve to get closer in the straight lines.",
		info3: "Grand Prix Winners:",
		li1: "2012: Hamilton",
		li2: "2011: Button",
		li3: "2010: Webber",
		li4: "2009: Hamilton",
		li5: "2008: Kovalainen",
		li6: "2007: Hamilton",
		li7: "2006: Button",
		li8: "2005: Raikkonen"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, hungriaText);
    Lungo.dom('section#secHungria div#gpHungriaInfo').html(html);
};