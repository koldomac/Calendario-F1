function toSpanishChina() {
	var chinaText = {
		info: "El circuito de Shangai es un trazado joven de 5.451 metros diseñado por Hermann Tilke, conocido como el señor de los circuitos al haber participado en el diseño de todos los circuitos para el campeonato de Fórmula 1 de reciente construcción y en la remodelación de la mayoría de los antiguos. Su forma, evoca la figura del carácter chino shang (上), que significa “por encima”, o “ascendente”. Es un circuito moderno equipado con los últimos adelantos tecnológicos, muy seguro para los pilotos y en el que la naturaleza también tiene un hueco reservado, ya que el circuito (que abarca unos 5,3 kilómetros cuadrados) está construido sobre un pantano y tiene integrado el paddock dentro de un bonito lago y un majestuoso jardín. Entre sus adelantos está el de su grada principal, que, preparada para 29.000 personas, permite ver a sus ocupantes el 80% del circuito, toda una maravilla del diseño.",
		info1: "Fue inaugurado en el 2004 con un gran premio de Fórmula 1 en el que Rubens Barrichello terminó llevándose la victoria por delante de Button y de Raikkonen. Alonso fue cuarto. Un año después, en 2005, el español tomó nota de lo aprendido en el año anterior en que rozó el podio y consiguió posicionarse por delante de Fisichella y Raikkonen, proclamándose vencedor. En el 2006, el alemán Michael Schumacher consiguió en este circuito su última victoria en la Fórmula 1, por delante de Fernando Alonso que, dos carreras después, terminó proclamándose Campeón del Mundo 2006. En el 2007, Raikkonen venció por delante de Alonso y Massa, mientras que en el 2008 fue Hamilton el que ganó por delante de Massa y Raikkonen. En 2009 se produjo el primer doblete de Red Bull, con victoria de Vettel, por delante de Webber.",
		info2: "El circuito de Shanghai cuenta con 16 curvas y dos grandes rectas. La recta de atrás, situada entre las curvas 13 y 14, es la más larga con casi un kilómetro de largo, y en la que los coches sobrepasan, fácilmente, los 320 km/h para terminar haciendo la curva por algo más de 50. Éste es sólo un ejemplo de los muchos cambios de velocidad en este trazado en el que abundan las partes lentas y técnicas que facilitan los adelantamientos, cada vez menos frecuentes en la F1.",
		info3: "Vencedores en el Gran Premio:",
		li1: "2012: Rosberg",
		li2: "2011: Hamilton",
        li3: "2010: Button",
        li4: "2009: Vettel",
        li5: "2008: Hamilton",
        li6: "2007: Raikkonen",
        li7: "2006: M.Schumacher",
        li8: "2005: Alonso",
        li9: "2005: Barrichello"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, chinaText);
    Lungo.dom('section#secChina div#gpChinaText').html(html);
}

function toEnglishChina() {
	var chinaText = {
        info: "Shangai Circuit is a young plot with 5451 metres, and it was designed by Hermann Tilke, know as “Circuits’ Man”, as he has been involved in the design of all circuits built recently for the F1 Championship, as well as in remodelling most of the old ones. Its shape remembers the figure of the Chinese character “shang” (上), which means “above” or “ascending”. It´s a modern circuit equipped with the last technological advances and very safety for drivers. There is also a place for nature, because the circuit (it has 5.3 square miles approximately) is built over a marsh and the paddock is integrated inside a beautiful lake and a large garden.",
        info1: "It was opened in 2004 with a F1 Grand Prix in which Barrichello got the victory ahead of Button and Raikkonen. Alonso achieved the fourth position. One year later, in 2005, the Spanish driver took into account all things learnt the previous year when he grazed the podium and got to remain ahead of Fisichella y Raikkonen, winning the race. In 2006, the German Michael Schumacher achieved his last F1 victory in this circuit, ahead of Fernando Alonso, but two races later, finally he was the winner in 2006 World Championship. In 2007, Raikkonen won ahead of Alonso and Massa, while Hamilton won ahead of Massa and Raikkonen in 2008. In 2009 Red Bull´s first double victory took place, with Vettle’s victory ahead of Webber.",
        info2: "Shangai circuit has 16 curves and two large straight lines. The straight line at the back, located between the curves 13 and 14, is the largest one and it has almost a mile long and there cars easily exceed 320 km/h to finish making the curve by more than 50 km/h. This is only an example of the several speed changes in this track where there are a lot of slow stretches and techniques which make easy overtaking, more and more frequent in F1.",
        info3: "Grand Prix Winners:",
        li1: "2012: Rosberg",
        li2: "2011: Hamilton",
        li3: "2010: Button",
        li4: "2009: Vettel",
        li5: "2008: Hamilton",
        li6: "2007: Raikkonen",
        li7: "2006: M.Schumacher",
        li8: "2005: Alonso",
        li9: "2005: Barrichello"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, chinaText);
    Lungo.dom('section#secChina div#gpChinaText').html(html);
};