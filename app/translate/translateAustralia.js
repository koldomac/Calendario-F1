function toSpanishAustralia() {
	var australiaText = {
        info: "En 1985, el Campeonato del Mundo de F1 llegó a Australia, concretamente al circuito de Adelaida. A pesar de convertirse en la popular carrera que cerraba el campeonato, la comunidad de deportes del motor de Melbourne presionó para trasladar la carrera australiana. Finalmente llegaron a un acuerdo en 1993, pero el contrato con Adelaida no expiraba hasta 1995, por lo que tuvieron tiempo de sobra para prepararla.",
        info2: "La pista se diseñó alrededor del hermoso lago Albert Park utilizando mayormente vías públicas, y en 1996 Melbourne acogió la primera carrera de Fórmula 1. Desde entonces, la carrera se ha vuelto muy popular entre pilotos y aficionados gracias al gran ambiente que se vive en ella.",
        info3: "El trazado es difícil por estar bastante bacheado, especialmente en las frenadas, es duro con los frenos y requiere de una alta carga aerodinámica por sus curvas de media velocidad y chicanes rápidas. Al ser un trazado semi-urbano, la pista desliza bastante al comienzo del fin de semana, aunque según se va depositando la goma sobre él gana mucha adherencia (se mejoran de 2 a 3 segundos los tiempos por vuelta durante el fin de semana), lo que complica la puesta a punto.",
        info4: "Hay varias curvas y frenadas bastante delicadas, y para marcar un buen crono hay que ir por el “sitio”. Es fácil entrar pasado en curvas como la penúltima, lo que penaliza en la última curva y afecta a la velocidad por la recta de meta.",
        info5: "Vencedores en el Gran Premio:",
        li1: "2012: Button",
        li2: "2011: Vettel",
        li3: "2010 - 2009: Button",
        li4: "2008: Hamilton",
        li5: "2007: Raikkonen",
        li6: "2006: Alonso",
        li7: "2005: Fisichella",
        li8: "2004, 2002, 2001, 2000: M. Mchumacher",
        li9: "1999: Irvine",
        li10: "1998: Hakkinen",
        li11: "2003, 1997: Coulthard",
        li12: "1996: Hill"
    };
    var template = '<p>{{info}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li>\
    <li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li></ul>';
    var html = Mustache.to_html(template, australiaText);
    Lungo.dom('section#secAustralia div#gpAustraliaText').html(html);
};

function toEnglishAustralia() {
	var australiaText = {
        info: "In 1985, F1 World Championship arrived to Australia, specifically to the Adelaide circuit. Although it became the famous race which closed the championship, Melbourne ´s motorsport community pressed to move the Australian race. Finally an agreement was reached in 1993, but the contract with the Adelaide circuit did not expire until 1995, so they had enough time  to prepare it.",
        info2: "The track was designed around the lake in Albert Park, using mainly public roads, and it was in 1996 when the first F1 championship took place in Melbourne. Since then, this road has become very famous among drivers and fans due to the pleasant atmosphere existing there.",
        info3: "The plot results complicated because of its bumps, especially under braking, it is hard on brakes and requires a high down force because of its medium speed curves and fast chicanes. As it is a semi urban plot, at the beginning of the weekend the track is high slippery, although when the rubber is deposited on it, much grip is achieved (lap times are improved from 2 to 3 seconds during the weekend), which makes setup difficult.",
        info4: "There are several hard curves and brakes, and to achieve a good lap it is essential to go for the “site”. It is easy to get in passed in curves, like the penultimate one, which penalizes in the last curve and affects in the speed to get the end of race.",
        info5: "Grand Prix Winners:",
        li1: "2012: Button",
        li2: "2011: Vettel",
        li3: "2010 - 2009: Button",
        li4: "2008: Hamilton",
        li5: "2007: Raikkonen",
        li6: "2006: Alonso",
        li7: "2005: Fisichella",
        li8: "2004, 2002, 2001, 2000: M. Mchumacher",
        li9: "1999: Irvine",
        li10: "1998: Hakkinen",
        li11: "2003, 1997: Coulthard",
        li12: "1996: Hill"
    };
    var template = '<p>{{info}}</p><br/><p>{{info2}}</p><br/><p>{{info3}}</p><br/><p>{{info4}}</p><br/><p>{{info5}}</p>\
    <ul><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li>\
    <li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li></ul>';
    var html = Mustache.to_html(template, australiaText);
    Lungo.dom('section#secAustralia div#gpAustraliaText').html(html);
};