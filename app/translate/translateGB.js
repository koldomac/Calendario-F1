function toSpanishGB() {
	var gbText = {
		info: "Como muchos otros circuitos de Inglaterra, Silverstone comenzó siendo un aeródromo. Cuando terminó la Segunda Guerra Mundial en 1945, los otros dos circuitos ingleses, Donington Park y Brooklands, quedaron en muy mal estado, por lo que el antiguo aeródromo se convirtió en la sede del Gran Premio de Gran Bretaña en 1948. Rápido y desafiante, en 1949 tomó la forma que sigue siendo la base del actual trazado, y aquí se disputó la primera carrera de la historia de la Fórmula 1, en 1950, Gran Premio que ganó Giuseppe Farina con un Alfa Romeo.",
		info1: "A partir de 1955, el Gran Premio de Gran Bretaña comenzó a rotar entre Aintree y Silverstone, para pasar en 1963 a hacerlo entre Silverstone y Brands Hatch. El circuito fue objeto de varias remodelaciones a lo largo de su historia, y en 1987 pasó a ser el único circuito en el que se ha celebrado el Gran Premio hasta ahora, después de que se añadiera una nueva curva antes de Woodcote para reducir las terribles velocidades que se alcanzaban, y de que en 1992 se creara un nuevo complejo de curvas entre Farm y Woodcote. A partir del 2010 el Gran Premio de Gran Bretaña iba a ser acogido por el circuito de Donington Park, pero debido a problemas económicos de los organizadores, el GP permanecerá en Silverstone por 16 años más.",
		info2: "Para inciar esta nueva época, en 2010, el circuito estrena una nueva configuración destinada a mejorar el disfrute de los espectadores y hacer de Silverstone un reto aún mayor para los pilotos. Y es que el nuevo complejo de curvas denominado “Arena”, que comienza en la remodelada Abbey (curva 1) para volver al antiguo trazado en Brooklands (curva 6), hace que al contrario de lo que suele suceder, el circuito sea más rápido aún que antes.",
		info3: "En 2011 se completa el proyecto de renovación del circuito con el cambio de la posición de la recta de meta, ahora entre la curva Club (18) y Abbey (1), inaugurándose un nuevo paddock y edificio de boxes.",
		info4: "Con una gran cantidad de curvas rápidas que exigen una elevada carga aerodinámica, el circuito pone los pelos de punta, sobretodo cuando los pilotos se lanzan en séptima velocidad a la curva 9, Copse, para llegar a 300km/h a Becketts, una secuencia de curvas muy fluída en la que los pilotos casi (o sin casi) no tocan los frenos y en la que la alta velocidad genera un apoyo en el coche que hace que los pilotos sufran tremendas fuerzas G.",
		info5: "Vencedores en el Gran Premio:",
		li1: "2012: Webber",
		li2: "2011: Alonso",
		li3: "2010: Webber",
		li4: "2009: Vettel",
		li5: "2008: Hamilton",
		li6: "2007: Raikkonen",
		li7: "2006: Alonso",
		li8: "2005: Montoya"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, gbText);
    Lungo.dom('section#secUK div#gpUKInfo').html(html);
};

function toEnglishGB() {
	var gbText = {
		info: "As many other circuits in England, Silverstone started being an airfield. When Second World War finished in 1945, the other two English circuits Donington Park and Brooklands were destroyed, so the old airfield became the venue of Great Britain Grand Prix in 1948. Fast and challenging, in 1949, adopted the form which is currently the base of the current plot, and in this circuit took place the first race in the history of F1, in 1950, where Giuseppe Farina won with an Alfa Romeo.",
		info1: "As of 1955, Great Britain Grand Prix started rotating between Aintree and Silverstone first, and later in 1963, between Silverstone and Brands Hatch. The circuit has been renovated many times and in 1987 it became the only circuit where the Grand Prix has taken place up to now, after a new curve was added previous to Woodcote to reduce the high speed reached, and after in 1992 a new complex of curves was settled up between Farm and Woodcote. As of 2010, this Grand Prix was going to be held by the circuit of Donington, but due to organizers’ economical problems, this Grand Prix will stay in Silverstone for 16 years.",
		info2: "To begin this new period of time, in 2010, the circuit showed for the first time a new configuration to improve spectators’ pleasure and to make Silverstone be a higher challenge for drivers. The new complex, called “Sand”, which starts in the renovated Abbey (curve 1) to go back to the old plot in Brooklands (curve 6) becomes this circuit faster than it was.",
		info3: "In 2011 the circuit renovation was finished changing the situation of the end of race, currently located between the curve Club (18) and Abbey (1). Furthermore, a new paddock and boxes building were inaugurated.",
		info4: "There are several fast curves which require strong downforce, so this circuit gives the creeps, especially when drivers go in the seventh gear along the curve 9, Copse, to reach Becket at 300 km/h, this a sequence of very fluent curves where drivers hardly push brakes and where high speed causes support in the car, so drivers suffer strong G forces.",
		info5: "Grand Prix Winners:",
		li1: "2012: Webber",
		li2: "2011: Alonso",
		li3: "2010: Webber",
		li4: "2009: Vettel",
		li5: "2008: Hamilton",
		li6: "2007: Raikkonen",
		li7: "2006: Alonso",
		li8: "2005: Montoya"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, gbText);
    Lungo.dom('section#secUK div#gpUKInfo').html(html);
};