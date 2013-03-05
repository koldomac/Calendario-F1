function toSpanishJapon() {
	var japonText = {
		info:"Suzuka es uno de los mejores circuitos de la Fórmula 1 actual. Construido por Honda en 1962 como circuito de pruebas, tiene como característica única en la actual F1 su forma de “ocho”, y su exigente trazado es una excelente prueba para comprobar la competitividad de un F1 y la habilidad de los pilotos. La pista también tiene un enorme parque temático que incluye una famosa noria.",
		info1:"En 1976 se disputó el primer Gran Premio de Japón, pero lo hizo en el circuito de Fuji, propiedad de Toyota. Tras disputarse allí en 1976 y 1977, pasaron diez años hasta que en 1987, después de adaptarlo a las exigencias sobre seguridad, Suzuka acogiera su primer Gran Premio de F1. Desde entonces, la prueba se ha mantenido en el calendario hasta ahora, a excepción del 2007 y 2008, cuando se volvió a disputar en Fuji.",
		info2:"Tradicionalmente la de Suzuka ha sido de las últimas carreras del calendario, lo que ha hecho que aquí se hayan decidido muchos títulos, con momentos inolvidables como el accidente entre Alain Prost y Ayrton Senna en la chicane. Junto con Spa-Francorchamps, Suzuka es uno de los circuitos favoritos de los pilotos. Tremendamente técnico y difícil, en él los buenos pilotos suelen marcar diferencias. Con sus desniveles tiene cierto parecido con el de Spa, pero la gran cantidad de curvas exige más carga aerodinámica que el trazado belga. Las curvas rápidas son mayoría y muchas son enlazadas, por lo que es muy importante que el coche reaccione bien en los cambios de dirección. Los pilotos también tienen que ser muy precisos en sus trazadas ya que un error en una curva les penaliza en las siguientes.",
		info3:"Lograr un buen equilibrio en la puesta a punto del monoplaza es vital para no tener subvirajes ni sobrevirajes bruscos, algo nada aconsejable al pasar por zonas como las “eses” del primer sector, que se pasan a una velocidad en todo momento superior a los 210 km/h. También destaca la curva 130R, cuyo nombre hace referencia al radio de su curvatura, y que se pasa a fondo a más de 300 km/h.",
		info4: "Vencedores en el Gran Premio:",
		li1: "2012: Vettel",
		li2: "2011: Button",
		li3: "2010: Vettel",
		li4: "2009: Vettel",
		li5: "2006: Alonso",
		li6: "2005: Raikkonen",
		li7: "2004, 2002, 2001, 2000: M.Schumacher",
		li8: "2003: Barrichello",
		li9: "1999, 1998: Hakkinen",
		li10: "1997: M.Schumacher",
		li11: "1996: Hill",
		li12: "1995: M.Schumacher",
		li13: "1994: Hill",
		li14: "1993: Senna",
		li15: "1992: Patrese",
		li16: "1991: Berger",
		li17: "1990: Piquet",
		li18: "1989: Nannini",
		li19: "1988: Senna",
		li20: "1987: Berger"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li><li>{{li13}}</li><li>{{li14}}</li><li>{{li15}}</li><li>{{li16}}</li><li>{{li17}}</li><li>{{li18}}</li><li>{{li19}}</li><li>{{li20}}</li></ul>';
    var html = Mustache.to_html(template, japonText);
    Lungo.dom('section#secJapon div#gpJaponInfo').html(html);
};

function toEnglishJapon() {
	var japonText = {
		info:"Suzuka is one of the best circuits in the current F1 and it was built by Honda in 1962 as a circuit to do tests. Its main feature is its “eight” shape and its hard circuit becomes an excellent test to check one F1 car competitiveness, as well as drivers’ ability. The track also has a big thematic park with a famous big wheel.",
		info1:"In 1976 the first Grand Prix took place in Japan, but it was in Fuji circuit owned by Toyota. After being played there in 1976 and 1977, it took 10 years until Suzuka held its first F1 Grand Prix, after the circuit was adapted to safety requirements. Since then, the race has been maintained in the calendar, except for 2007 and 2008, that the race took place in Fuji.",
		info2:"Traditionally, the race in Suzuka has been one of the last races in the calendar, which has caused that many titles have been decided here, with unforgettable moments like the accident between Alain Prost and Ayrton Senna in the chicane. Joined to Spa-Francorchamps, Suzuka is one of the favourite circuits for drivers. It is highly technical and difficult, so there drivers often make differences. This circuit, with its slopes, is similar to Spa circuit, but the amount of curves requires more downfoce than the Belgium track. Most of the curves are fast and many of them are connected, so it is very important that cars react correctly against direction changes.",
		info3:"Getting good balance when setting up the car is essential not to have strong understeers or oversteers, something inadvisable when passing along zones like “esses” in the first sector, which are passed at speed over 210 km/h. The curve 130R also outstands, whose name refers to its curvature radius, and it is passed fully at speed higher than 300 km/h.",
		info4: "Grand Prix Winners:",
		li1: "2012: Vettel",
		li2: "2011: Button",
		li3: "2010: Vettel",
		li4: "2009: Vettel",
		li5: "2006: Alonso",
		li6: "2005: Raikkonen",
		li7: "2004, 2002, 2001, 2000: M.Schumacher",
		li8: "2003: Barrichello",
		li9: "1999, 1998: Hakkinen",
		li10: "1997: M.Schumacher",
		li11: "1996: Hill",
		li12: "1995: M.Schumacher",
		li13: "1994: Hill",
		li14: "1993: Senna",
		li15: "1992: Patrese",
		li16: "1991: Berger",
		li17: "1990: Piquet",
		li18: "1989: Nannini",
		li19: "1988: Senna",
		li20: "1987: Berger"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li><li>{{li13}}</li><li>{{li14}}</li><li>{{li15}}</li><li>{{li16}}</li><li>{{li17}}</li><li>{{li18}}</li><li>{{li19}}</li><li>{{li20}}</li></ul>';
    var html = Mustache.to_html(template, japonText);
    Lungo.dom('section#secJapon div#gpJaponInfo').html(html);
};