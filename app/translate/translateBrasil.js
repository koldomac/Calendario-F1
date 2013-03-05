function toSpanishBrasil() {
	var brasilText = {
		info: "En 1938, dos promotores locales compraron una enorme parcela de terreno en Sao Paulo con la intención de construir un gran complejo de viviendas. Pero como una parte del terreno no resultó ser apta para ello, decidieron construir un circuito de carreras, circuito que ante la enorme velocidad a la que creció Sao Paulo pronto se encontró atrapado entre casas. Aunque su nombre es Autódromo José Carlos Pace, se le conoce popularmente como antiguamente, Interlagos, por ser construída entre dos grandes lagos artificiales que abastecían a la ciudad con agua y electricidad.",
		info1: "Cuando en los años 70 Emerson Fittipaldi comenzó a destacar internacionalmente, los brasileños demandaban su Gran Premio. En 1971 y 1972 ya se disputaron carreras fuera del campeonato, pero fue en 1973 cuando el trazado acogió su primer Gran Premio dentro del campeonato de F1.",
		info2: "En 1978 el Gran Premio se trasladó al nuevo circuito de Jacarepaguá, en Rio de Janeiro, pero en 1979, Sao Paulo pudo recuperarlo otra vez. Sin embargo, en 1981, y debido a que la imagen de los barrios marginales de la ciudad estaba muy lejos de lo que la glamourosa Fórmula 1 quería retratar, Interlagos perdió su Gran Premio, que se volvió a ir a Rio. Fue en 1990, cuando tras una remodelación de 15 millones de dólares y en pleno apogeo del piloto de Sao Paulo, Ayrton Senna, la carrera regresó a Interlagos. Y allí continua, gracias a la enorme pasión de los aficionados brasileños hacia este deporte.",
		info3: "Algo anticuado, su trazado ha sido testigo de carreras fascinantes, grandes batallas, y en muchas ocasiones ha decidido el título mundial. Entre sus características están las de girar en sentido anti-horario, sus desniveles, que está bastante bacheado, y que el tiempo allí es bastante variable, con aguaceros torrenciales frecuentes. Con una mezcla de curvas rápidas y lentas bastante bacheadas, se necesita un coche cómodo de pilotar. Las dos primeras curvas ofrecen una buena oportunidad de adelantamiento al ser una frenada en bajada llegando tras una larga subida a fondo saliendo de la última curva. La larga recta en subida pone a prueba la potencia de los motores y la velocidad punta ayuda a adelantar, por lo que es necesario un compromiso en la puesta a punto entre apoyo aerodinámico y velocidad que permita adelantar.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Button",
		li2: "2011: Webber",
		li3: "2010: Vettel",
		li4: "2009: Webber",
		li5: "2008: Massa",
		li6: "2007: Raikkonen",
		li7: "2006: Massa",
		li8: "2005: Montoya",
		li9: "2004: Montoya"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, brasilText);
    Lungo.dom('section#secBrasil div#gpBrasilInfo').html(html);
};

function toEnglishBrasil() {
	var brasilText = {
		info: "In 1938, two local promoters bought an enormous plot of land in Sao Paolo in order to build a huge housing complex. However, part of the land was not suitable, so they decided to build a race circuit. Due to the amazing growing of Sao Paolo, this circuit was soon surrounded by housings. Although its name is Jose Carlos Pace racing circuit, it is commonly know as Interlagos, since it was built between two large artificial lakes which provided with water and electricity to the city.",
		info1: "In the seventies, Emerson Fittipaldi started to outstand internationally, so Brazilians demanded its Grand Prix. In 1971 and 1972 several races took place out of the Championship, but in 1973 this track held its first Grand Prix in F1 Championship.",
		info2: "In 1978 the Grand Prix was moved to the new circuit of Jacarepaguá, in Rio de Janeiro, but in 1979 the Grand Prix returned to Sao Paolo. However, in 1989 due to the bad appearance of the marginal suburbs in the city which did not correspond with the glamour associated to F1, Interlagos lost its Grand Prix, returned again to Rio. It was in 1990 that the race returned to Interlagos, after being remodelled with a cost of 15 million dollars and when the driver form Sao Paolo, Ayrton Senna, was at his height. And the race still tooks place there, thanks to the Brazilian spectators’ big passion about this sport.",
		info3: "Its track, which is a bit obsolete, has been witness to amazing races, big battles and many times the title of the Worldwide Championship has been decided here. The main features of this circuit are that it is turned against clockwise, its slopes, it is pot-holed enough and the weather is too variable, with frequent strong storms. There is a mix of fast and slow curves which are pot-holed enough, so a comfortable car to drive is necessary. The first two curves show a good opportunity to overtake because it is a brake while descending arriving after a long ascending in depth going out the last curve. The long straight line in ascending puts the powerful of motors to the test and the top speed helps overtaking, so it is necessary commitment in the set up between aerodynamic support and speed that allow overtaking.",
		info4: "Grand Prix Winners:",
		li1: "2012: Button",
		li2: "2011: Webber",
		li3: "2010: Vettel",
		li4: "2009: Webber",
		li5: "2008: Massa",
		li6: "2007: Raikkonen",
		li7: "2006: Massa",
		li8: "2005: Montoya",
		li9: "2004: Montoya"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, brasilText);
    Lungo.dom('section#secBrasil div#gpBrasilInfo').html(html);
};