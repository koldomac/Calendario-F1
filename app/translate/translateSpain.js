function toSpanishSpain() {
	var spainText = {
		info: "Los equipos y pilotos de Fórmula 1 conocen el circuito de Montmeló como la palma de su mano. No sólo han competido aquí todos los años desde su inauguración en 1991, sino que también es un circuito muy empleado para realizar tests. Aún así, no les resulta nada fácil encontrar los mejores reglajes por sus tramos de alta velocidad combinados con un último sector muy lento. Su trazado hace difíciles los adelantamientos, lo que no evita que haya un gran ambiente durante el fin de semana del Gran Premio.",
		info1: "Con un asfalto bastante liso, en el circuit es clave la aerodinámica de los monoplazas para tomar las curvas rápidas, mientras que la tracción a baja velocidad y la estabilidad en frenada son importantes por la gran degradación que su asfalto produce en los neumáticos, sobretodo si hace calor.",
		info2: "Tras la recta de más de un kilómetro, los pilotos llegan a la curva Elf, que se pasa a 140 km/h, y ganan velocidad a la salida hacia la curva 3 (Renault), curva muy importante para lograr un buen crono. Con los coches actuales es una curva que está en el límite entre poderse dar con el gas a fondo o no. Otra curva importante es la 9 (Campsa); hay que salir rápido de ella para encarar con más velocidad la recta de atrás, pero es bastante delicada porque está sobre un rasante, los pilotos no ven la salida, y se toma en quinta a 230km/h. Uno de los pocos puntos donde se puede adelantar es la fuerte frenada para la curva 10 (La Caixa), donde los coches suelen tener problemas de estabilidad porque hay unos pequeños baches. En la salida, los coches se ven limitados en tracción en primera o segunda.",
		info3: "Para favorecer los adelantamientos y permitir que los coches puedan entrar en la recta principal más pegados unos de otros, a principios de 2007 se introdujo una chicane (curvas 14 y 15) en la zona del estadio.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Maldonado",
		li2: "2011: Vettel",
		li3: "2010: Webber",
		li4: "2009: Button",
		li5: "2007: Massa",
		li6: "2006: Alonso",
		li7: "2005, 2008: Raikkonen",
		li8: "1998, 1999, 2000: Hakkinen",
		li9: "1995, 1996, 2001, 2002, 2003, 2004: M.Schumacher",
		li10: "1997: Villeneuve (Williams-Renault)",
		li11: "1994: Hill",
		li12: "1993: Prost",
		li13: "1991, 1992: Mansell"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li><li>{{li13}}</li></ul>';
    var html = Mustache.to_html(template, spainText);
    Lungo.dom('section#secSpain div#gpSpainInfo').html(html);
};

function toEnglishSpain() {
	var spainText = {
        info: "F1 teams and drivers know Montmeló perfectly. Not only have they competed here since its inauguration in 1991, but also it is a very used circuit to make tests. However, finding best adjustments is very difficult because of its high speed routes joined to a highly slow last sector. Its plot makes difficult overtaking, but this doesn´t avoid a good environment during the Grand Prix weekend.",
        info1: "The circuit is provided with a very soft pavement, and there cars downforce is essential to take fast curves, while low speed traction and braking stability are important since pavement causes deterioration in the tyres, especially if it is hot.",
        info2: "After the straight line with more than a kilometre, drivers take Elf curve, which is passed at 140 km/h and they win speed at the exit towards the curve 3 (Renault), an important curve to achieve a good time. The curve 9 (Campsa) is also important since it is necessary to go out quickly to face with more speed the back straight line, but it´s very complicated because it´s on a slop, so drivers don’t see the exit and it is taken in fifth gear at 230 km/h. One of the few points where it is possible to overtake is the strong brake for the curve 10 (La Caixa), where cars often have stability problems because of the small potholes. At the exit, cars are limited in traction in the first or second gear.",
        info3: "In order to encourage overtaking and to allow cars to get in the main straight line more joined ones to others, in the beginning of 2007 a chicane was introduced (curves 14 and 15) in the stadium area.",
        info4: "Grand Prix Winners:",
        li1: "2012: Maldonado",
		li2: "2011: Vettel",
		li3: "2010: Webber",
		li4: "2009: Button",
		li5: "2007: Massa",
		li6: "2006: Alonso",
		li7: "2005, 2008: Raikkonen",
		li8: "1998, 1999, 2000: Hakkinen",
		li9: "1995, 1996, 2001, 2002, 2003, 2004: M.Schumacher",
		li10: "1997: Villeneuve (Williams-Renault)",
		li11: "1994: Hill",
		li12: "1993: Prost",
		li13: "1991, 1992: Mansell"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li><li>{{li13}}</li></ul>';
    var html = Mustache.to_html(template, spainText);
    Lungo.dom('section#secSpain div#gpSpainInfo').html(html);
};