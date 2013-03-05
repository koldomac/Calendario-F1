function toSpanishCanada() {
	var canadaText = {
		info: "El circuito en el que se disputa este Gran Premio de Canadá está en Montreal y lleva el nombre del mítico piloto local Gilles Villeneuve. Las instalaciones están situadas en una isla repleta de zonas verdes y que tiene parte del trazado transitable el resto del año. Un circuito técnico, complicado y en el que los accidentes, los safety cars y las banderas amarillas suelen poner emoción a la carrera.",
		info1: "Junto a las largas rectas, en Montreal encontramos fuertes frenadas y giros muy técnicos. Las frenadas son de las más duras de todo el año, con seis frenadas superiores a los 250 km/h (cuatro de ellas por encima incluso de los 300), lo que castiga mucho los frenos de los monoplazas, que se desgastan muchísimo. Ante este panorama, la estabilidad y el agarre serán puntos clave, especialmente en la salida de las curvas. Los motores sufren un gran castigo por el tiempo que hay que ir a fondo de manera continua en la recta más larga (14 segundos). En el cómputo global, el uso del motor al máximo no es excesivamente alto (se marcha a fondo el 60% del tiempo).",
		info2: "Los neumáticos que se llevan a Canadá son los super-blandos y medios, que no corren demasiado peligro ante la baja carga aerodinámica que tienen los coches allí, aunque pueden sufrir los de los pilotos que no los cuiden en las frenadas y piquen de manera brusca el pedal para detener los monoplazas en los pasos por curva.",
		info3: "El muro de los campeones. Emplazado en la entrada a la recta de meta, este muro es uno de esos puntos míticos del Mundial de Fórmula 1 que es, a partes iguales, odiado y amado. El único muro con nombre propio y con el que se la han visto tantos campeones de esta especialidad. Es el final de la chicane con la que se llega a meta y que sirve para pasar de más de 300 km/h a unos 150 con el que los coches salen escupidos hacia un muro por el que los pilotos tienen que pasar a pocos centímetros para apurar hasta el último segundo en cada uno de los giros a este circuito.",
		info4: "El accidente de Kúbica. Se trata normalmente de carreras accidentadas las que se disputan en Montreal y la del 2007 es uno de los ejemplos más claros. En uno de los grandes premios más movidos de los que se recuerdan sólo acabaron 12 pilotos, el coche de seguridad tuvo que salir tres veces, la diferencia entre el primero y el último clasificado fue de sólo 30 segundos y Robert Kubica sufrió el accidente más grave de todos los que ha tenido en su carrera. En 2008 volvió para lograr su primera victoria en F1.",
		info5: "Vencedores en el Gran Premio:",
		li1: "2012: Hamilton",
		li2: "2011: Button",
        li3: "2010: Hamilton",
        li4: "2008: Kubica",
        li5: "2007: Hamilton",
        li6: "2006: Alonso",
        li7: "2005: Raikkonen",
        li8: "2004: M.Schumacher",
        li9: "2003: M.Schumacher",
        li10: "2002: M.Schumacher",
        li11: "2001: R.Schumacher"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li></ul>';
    var html = Mustache.to_html(template, canadaText);
    Lungo.dom('section#secCanada div#gpCanadaInfo').html(html);
};

function toEnglishCanada() {
	var canadaText = {
        info: "This is the circuit where this Grand Prix in Canada takes place, it is located in Montreal and has adopted the local and well-known driver´s name Gilles Villeneuve. The facilities are placed in an island plenty of green zones and part of its plot is passable the rest of the year. A technical and complicated circuit, where accidents, safety cars and yellow flags make race be very exciting.",
        info1: "Joined to the long straight lines, in Montreal there are heavy brakes and highly technical turns. Brakes are ones of the strongest during the year, with six brakes higher than 250 km/h (four of them over 300 km/h), which damage seriously cars’ brakes. For these reasons, stability and grip will be key points, especially at the exit of curves. Motors are damaged because cars are running fully for a long period of time along the longer straight line (14 seconds). However, drivers only run fully 60% of the time.",
        info2: "In Canada drivers use the high-soft tyres or medium ones, as they don´t run too much risk against the low downforce that cars have there. However, tyres may be damaged when drivers are not careful about braking and push pedal hardly to stop cars when passing curves.",
        info3: "Champions’ wall is located in the beginning of the end of race, and it is regarded as one of the mythical points in F1 Worldwide Championship, and it´s both hated and loved. Furthermore, this is the only wall with its own name. In this point is place the end of the chicane previous to achieve the end of race and it is used to pass through from over 300 km/h to 150 km/h. drivers have to take advantage of each second in all the curves of this circuit.",
        info4: "Kubica´s accident. In Montreal usually takes place one of the most turbulent races during the Championship and the one held in 2007 was one of the clearest examples. In this race, only 12 drivers finished the race, safety car had to go out three times, the difference between the first and second classified drivers was only 30 seconds and Robert Kubica suffered the most serious accident in his career. In 2008 he returned to get his first victory in F1.",
        info5: "Grand Prix Winners:",
        li1: "2012: Hamilton",
        li2: "2011: Button",
        li3: "2010: Hamilton",
        li4: "2008: Kubica",
        li5: "2007: Hamilton",
        li6: "2006: Alonso",
        li7: "2005: Raikkonen",
        li8: "2004: M.Schumacher",
        li9: "2003: M.Schumacher",
        li10: "2002: M.Schumacher",
        li11: "2001: R.Schumacher"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li></ul>';
    var html = Mustache.to_html(template, canadaText);
    Lungo.dom('section#secCanada div#gpCanadaInfo').html(html);
};