function toSpanishBahrein() {
	var bahreinText = {
        info: "El Gran Premio de Bahréin del 2004 fue la primera carrera del Campeonato del Mundo de Fórmula 1 disputada en Oriente Medio, culminando un multimillonario proyecto que comenzó a construírse en el 2002, cuando el Reino de Bahrein firmó un contrato a largo plazo para acoger la carrera. Diseñado por Herman Tilke, está situado en Sakhir, en la mitad del desierto y a 30 km de la capital de la isla, Manama.",
        info1: "El circuito cuenta con tres largas rectas, curvas lentas y algún viraje de alta velocidad. Su trazado es muy ancho, lo que unido a sus amplias escapatorias asfaltadas que perdonan muchos errores y permiten arriesgar apurando las fuertes frenadas, hace que se suelan ver buenas carreras aquí. Eso sí, hay que estar atentos al viento que desestabiliza los coches y echa arena sobre la pista.",
        info2: "Para la carrera del 2010, el circuito cambió su configuración, añadiendo siete curvas más y aumentando su longitud de 5.412 metros a 6.299. El nuevo tramo, muy revirado, está situado entre las curvas 4 y 5 de la anterior configuración (en la actual, el tramo comprendido entre las curvas 5 y 13). En general, el circuito no es demasiado exigente con los neumáticos por no tener muchas curvas rápidas, aunque es de los más duros con los frenos, mientras que la carga aerodinámica ideal necesita un compromiso entre tener buen agarre en las curvas y no perder demasiada velocidad en las rectas. La capacidad de tracción para salir de los lentos virajes y los frenos, son vitales.",
        info3: "Vencedores en el Gran Premio:",
        li1: "2012: Vettel",
        li3: "2010: Alonso",
        li4: "2009: Button",
        li5: "2008: Massa",
        li6: "2007: Massa",
        li7: "2006: Alonso",
        li8: "2005: Alonso",
        li9: "2004: M.Schumacher"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, bahreinText);
    Lungo.dom('section#secBahrein div#gpBahreinInfo').html(html);
};

function toEnglishBahrein() {
	var bahreinText = {
        info: "Bahrain Grand Prix in 2004 was the first F1 World Championship career which took place in the Middle East, finishing a multimillionaire project started in 2002 when Bahrein Kingdom signed a long term contract to celebrate the race. This circuit was designed by Herman Tilke and it is located in Sakhir, in the middle of the desert and 30 kilometres away from Manama, the island capital.",
        info1: "The circuit has three long straight lines, slow curves and some high speed turn. Its plot is very wide, and joined to its large paved loopholes, which forgives several errors and allows taking risks against the strong braking, makes it possible to see good careers in this circuit. However, it is necessary to pay attention to the wind which destabilizes cars and throws sand over the plot.",
        info2: "In 2010 the circuit changed its configuration, adding seven additional curves and increasing its length from 5.412 metres to 6.299. The new route is located between the curves 4 and 5 of the previous configuration (in the current configuration, the route is between the curves 5 and 13). In general, the circuit isn´t very tough with tyres since it has not very fast curves, although this circuit is one of the hardest with brakes. However, the perfect downforce requires having good grip in curves, as well as not losing enough speed in straight lines. Moreover, it is essential traction capacity to go out from slow turns and brakes.",
        info3: "Grand Prix Winners:",
        li1: "2012: Vettel",
        li3: "2010: Alonso",
        li4: "2009: Button",
        li5: "2008: Massa",
        li6: "2007: Massa",
        li7: "2006: Alonso",
        li8: "2005: Alonso",
        li9: "2004: M.Schumacher"
    };
    var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p>\
    <ul><li>{{li1}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul>';
    var html = Mustache.to_html(template, bahreinText);
    Lungo.dom('section#secBahrein div#gpBahreinInfo').html(html);
};