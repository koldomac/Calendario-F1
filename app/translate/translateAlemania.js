function toSpanishAlemania() {
	var alemaniaText = {
		info: "La construcción del circuito, diseñado por Otto Creutz, se inició en septiembre de 1925. En 1927, Nürburgring comenzó a albergar el Gran Premio de Alemania y el Gran Premio de Alemania de Motociclismo.",
		info1: "En esta época existía un trazado completo de 28,3 km (17,5 millas) de 6,7 m de ancho y estaba formado por dos secciones, la sección sur, Südschleife, de 7,5 km, y la sección norte, Nordschleife, de 22,8 km. Considerado como el circuito más difícil y agotador del mundo, el Nordschleife se conoce como Grüne Hölle o 'infierno verde', apelativo inventado por el piloto de Fórmula 1 Jackie Stewart.",
		info2: "En 1929 se utilizó por última vez el circuito completo en Grandes Premios, y se pasó a utilizar el Nordschleife. Los pilotos que consiguieron recordar cada curva y ganar en la década de 1930 fueron llamados Ringmeister ('maestro del circuito'), como Rudolf Caracciola, Tazio Nuvolari y Bernd Rosemeyer.",
		info3: "Después de la Segunda Guerra Mundial, el Gran Premio de Alemania se incorporó al Campeonato Mundial de Fórmula 1 en 1951. Surgieron nuevos Ringmeister, tales como Alberto Ascari, Juan Manuel Fangio, Stirling Moss, John Surtees, Jackie Stewart y Jacky Ickx.",
		info4: "A finales de los años 1960, la pista era cada vez más peligrosa debido al aumento constante de velocidad de los monoplazas, por lo que en 1970 el Gran Premio de Alemania se mudó temporalmente al Hockenheimring mientras se reconstruía la sección norte. Se eliminaron obstáculos y se instalaron barreras de seguridad, pero esto fue suficiente por pocos años. En 1976, la pista ya no cumplía con las nuevas regulaciones de seguridad y, por sus dimensiones, tampoco se adaptaba el espectáculo en televisión - era imposible cubrir el recorrido entero mediante cámaras de televisión. Un accidente casi fatal de Niki Lauda, uno de los mayores oponentes al circuito, precipitó la salida del Nürburgring de las competencias de Fórmula 1.",
		info5: "Entre 1981 y 1984, se reconstruyó el circuito, en parte sobre el antiguo trazado, con una longitud reducida a 4,5 km. Éste fue completado en 1984 con lo que la Fórmula 1 regresó al Nürburgring en 1985, pero la carrera en ese año fue un completo fracaso en audiencias, por lo que fue excluido del calendario reemplazándolo por el Gran Premio de México.",
		info6: "A partir de 1995, Nürburgring ha recibido frecuentemente a la Fórmula 1. Las temporadas 1995, 1996 y de 1999 a 2007, se ha llamado Gran Premio de Europa, mientras que en 1997 y 1998 se disputaron bajo el nombre de Gran Premio de Luxemburgo.",
		info7: "En 1999 las lluvias intermitentes hicieron que la carrera fuese totalmente alocada, llego hasta el punto que un Minardi estuvo a punto de doblar al Ferrari de Irvine. Durante unos minutos una zona de la pista estaba absolutamente mojada, y la otra totalmente seca, algo parecido al comienzo de la carrera disputada en 2007.",
		info8: "En 2009 se disputó bajo el nombre de Gran Premio de Alemania, después de 24 años de que en Nürburgring no se disputara dicho GP. La carrera fue ganada por Mark Webber, quien consiguió su primera victoria.",
		info9: "El Gran Premio de Alemania de 2012 se disputó en el circuito de Nürburgring. Este año 2013, la historia de este circuito vuelve a estar presente en el calendario.",
		info10: "Vencedores en el Gran Premio:",
		li1: "2012: Alonso (Hockemheim)",
		li2: "2011: Hamilton (Nurburgring)",
		li3: "2010: Alonso (Hockemheim)",
		li4: "2009: Webber (Nurburgring)",
		li5: "2008: Hamilton (Hockemheim)",
		li6: "2006: M.Schumacher (Hockemheim)",
		li7: "2005: Alonso (Hockemheim)",
		li8: "2004: M.Schumacher (Hockemheim)"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p><br/><p>{{info6}}</p><br/><p>{{info7}}</p><br/><p>{{info8}}</p><br/><p>{{info9}}</p><br/><p>{{info10}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, alemaniaText);
    Lungo.dom('section#secAlemania div#gpAlemaniaInfo').html(html);
};

function toEnglishAlemania() {
	var alemaniaText = {
		info: "The circuit construction, designed by Otto Creutz, was started in september in 1925. In 1927, Nürburgring began hold the Grand Prix in German, as well as the motorcycling Grand Prix.",
		info1: "During this period there was a full track with 28,3 km (17,5 milles) and 6,7 km wide, and it was composed of two sections, southern section, Südschleife, with 7,5 km and northern section, Nordschleife, with 22,8 km. This circuit was regarde as being the most difficult and exhausting one in the world. Nordschleife is known as Grüne Hölle or 'green hell', name created by the F1 driver Jackie Stewart.",
		info2: "In 1929, the full circuit was used for the last time in Grand Prixes, and Nordschleife was started being used. drivers who got to remember each curve and to win in the 1930s were called Ringmeister ('circuit´s master'), like Rudolf Caracciola, Tazio Nuvolari and Bernd Rosemeyer.",
		info3: "After the Second World War, the Grand Prix in German was included in F1 Worldwide Championship, in 1951. New Ringmeister appeared, like Alberto Ascari, Juan Manuel Fangio, Stirling Moss, John Surtees, Jackie Stewart and Jacky Ickx.",
		info4: "At the end of the 1960s, the track was more an more dangerous due to the continuous increase of cars´ speed, so the Grand Prix in German was moved temporally to Hockenheimring while northern section was being rebuilt. Obstacles were eliminated and safety barriers were settled, but these solutions were enough only for few years. In 1976, the track didn´t comply with the new safety rules and, because of its size, it was not adapted to the show in TV. It was impossible to cover the whole circuit with TV cameras. One dangerous acceditent caused to Nike Landa, one of the greatest circuit´s opponent, precipitated the exit of Nürburgring from F1 competitions.",
		info5: "Between 1981 and 1984, the circuit was rebuilt, partly over the old track, with a length reduced to 4,5km. This circuit was completed in 1984, so F1 returned to Nürburgring in 1985, but that year the race was a great failure in audience, so it was excluded from the calendar and it was replaced by the Grand Prix in Mexico.",
		info6: "As of 1995 Nürburgring has held frequently F1 races. In 1995, 1996 and from 1999 to 2007 this Grand Prix has been called European Grand Prix, while in 1997 and 1998 they took place under the name of Luxembourg Grand Prix.",
		info7: "In 1999, intermittent rain make race be totally rash, even one Minardi car was about to double aIrvine´s Ferrari. During a few minutes one zone of the track was completely wet and the other one totally dry, something similar to the beginning of the race celebrated in 2007.",
		info8: "In 2009 the race took place under the name of German Grand Prix, 24 years later than in Nürburgring this Grand Prix didn´t take place. Mark Webber won the race, who got his first victory.",
		info9: "In 2012, the German Grand Prix took place in Nürburgring circuit. This year, in 2013, this circuit history is again present in the calendar.",
		info10: "Grand Prix Winners:",
		li1: "2012: Alonso (Hockemheim)",
		li2: "2011: Hamilton (Nurburgring)",
		li3: "2010: Alonso (Hockemheim)",
		li4: "2009: Webber (Nurburgring)",
		li5: "2008: Hamilton (Hockemheim)",
		li6: "2006: M.Schumacher (Hockemheim)",
		li7: "2005: Alonso (Hockemheim)",
		li8: "2004: M.Schumacher (Hockemheim)"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p><br/><p>{{info6}}</p><br/><p>{{info7}}</p><br/><p>{{info8}}</p><br/><p>{{info9}}</p><br/><p>{{info10}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul>';
    var html = Mustache.to_html(template, alemaniaText);
    Lungo.dom('section#secAlemania div#gpAlemaniaInfo').html(html);
};