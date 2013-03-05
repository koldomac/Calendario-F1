function toSpanishMalasia() {
	var malasiaText = {
		info: "Si una cosa resalta por encima de las demás en el Circuito de Sepang, son las condiciones extremas que los pilotos tienen que vivir dentro del cockpit de los monoplazas durante la carrera. Temperaturas altas unidas a una gran humedad, siempre reinante en Kuala Lumpur, hacen que los pilotos tengan que sufrir para terminar la carrera. Los errores de conducción derivados de esto están al orden del día en Malasia. La carrera se pone aún más difícil cuando se mira al cielo y se proyectan lluvias intensas, como sucede frecuentemente.",
		info1: "En cuanto al trazado, diseñado por el ‘Señor de los Circuitos’, el ingeniero alemán Hermann Tilke, podemos hablar, en primer lugar, de las dos enormes rectas. Se trata de puntos en los que los monoplazas deben emplearse al máximo y conseguir una velocidad punta importante (en torno a los 320 km/h) si no quieren perder la partida contra los más rápidos. Será además importante la fiabilidad de los motores, que tendrán que ir a fondo mucho tiempo.",
		info2: "Pero no todo son rectas. Los 15 giros, milimétricamente estudiados, van acompañados con fuertes frenadas en las que los menos rápidos pero más habilidosos pueden intentar frenar los últimos y ganar una posibilidad de adelantamiento.",
		info3: "Sepang es severo con los meumáticos por sus fuertes frenadas y amplia gama de tipos de curvas. Bridgestone lleva para este circuito gomas duras y blandas conocedora de las condiciones del trazado malayo, por lo que no parece que vayamos a presenciar problemas en este aspecto, aunque habrá que vigilarlo. La lluvia amenaza hacer difícil la ya de por sí complicada labor de los pilotos. El domingo por la mañana veremos quién aguanta más.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Alonso",
		li2: "2011: Vettel",
        li3: "2010: Button",
        li4: "2009: Button",
        li5: "2008: Raikkonen",
        li6: "2007: Alonso",
        li7: "2006: Fisichella",
        li8: "2005: Alonso",
        li9: "2004: M.Schumacher",
        li10: "2003: Raikkonen"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li></ul>';
    var html = Mustache.to_html(template, malasiaText);
    Lungo.dom('section#secMalasia div#gpMalasiaText').html(html);
};

function toEnglishMalasia() {
	var malasiaText = {
        info: "The most outstanding facts in Sepang Circuit are the extreme temperatures drivers suffer inside the cockpit of the cars during de race. High temperatures joined to high wetness, frequent in Kuala Lumpur, make driver suffer a lot to finish the race. Several driving errors are caused by these environmental issues. The race becomes even more complicated when heavy rain is expected, as frequently occurs.",
        info1: "In relation to the plot, which was designed by Hemann Tilke, the engineer known as “Circuits’ Man”, we can talk about the two huge straight lines. These are two points where cars must make the maximum effort and achieve significant top speed (around 320 km / h) not to lose against the fastest drivers. Furthermore, it will be very important the reliability of the engines, which will have to go back a long time.",
        info2: "Apart from the straight lines, the 15 turns, studied in detail, are accompanied with heavy braking in which less fast drivers, but more skilful ones can try to be the last drivers to stop and win a chance to overtake.",
        info3: "Sepang results very hard for tyres because of its strong braking and wide kind of curves. For this circuit, Bridgestone takes hard and soft tyres as the company knows this plot features, so it seems not to exist problems concerning to this aspect, although we´ll have to keep watch over it. Rain threatens drivers’ difficult task, so on Sunday morning we will check who driver stands longer.",
        info4: "Grand Prix Winners:",
        li1: "2012: Alonso",
        li2: "2011: Vettel",
        li3: "2010: Button",
        li4: "2009: Button",
        li5: "2008: Raikkonen",
        li6: "2007: Alonso",
        li7: "2006: Fisichella",
        li8: "2005: Alonso",
        li9: "2004: M.Schumacher",
        li10: "2003: Raikkonen"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li></ul>';
    var html = Mustache.to_html(template, malasiaText);
    Lungo.dom('section#secMalasia div#gpMalasiaText').html(html);
};