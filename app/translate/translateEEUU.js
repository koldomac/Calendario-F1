function toSpanishEEUU() {
	var eeuuText = {
		info: "El circuito de las Américas se empezó a construir en 2010 y las obras concluyeron pocos meses antes de su estreno en el Mundial. Sus promotores afirmaron que este trazado es el más espectacular del mundo, ya que se inspiraron en tramos famosos de otros circuitos como Silverstone (primer sector de curvas rápidas), Hockenheim (horquilla 11 y recta principal), Istanbul Park (gran curva enlazada 16, 17 y 18) o Mónaco (curvas lentas 13, 14 y 15). Se corre en sentido inverso a las agujas del reloj y cuenta con fuertes pendientes, como Spa o Interlagos.",
		info1: "Vencedor en el Gran Premio:",
		li1: "2012 : Hamilton"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p>\
    <ul><li>{{li1}}</li></ul>';
    var html = Mustache.to_html(template, eeuuText);
    Lungo.dom('section#secUSA div#gpUSAInfo').html(html);
};

function toEnglishEEUU() {
	var eeuuText = {
		info: "American circuit started to be built in 2010 and jobs were finished a few months before its first race in the Worldwide Championship. Their promoters affirmed this is the most amazing track in the world, because it was inspired by famous tracks corresponding to other circuits, like Silverstone (first sector with fast curves), Hockenheim (fork 11 and main straight line), Istanbul Park (big connected curve 16, 17 and 18) or Monaco (slow curves (13, 14 and 15). It is driven against clockwise and it has strong slopes, like Spa or Interlagos.",
		info1: "Grand Prix Winner:",
		li1: "2012 : Hamilton"
	};
	var template = '<p>{{info}}</p><br/><p>{{info1}}</p>\
    <ul><li>{{li1}}</li></ul>';
    var html = Mustache.to_html(template, eeuuText);
    Lungo.dom('section#secUSA div#gpUSAInfo').html(html);
};