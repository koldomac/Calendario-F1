App.View = (function(lng, app, undefined) {

	var celdaPiloto = '<li id="{{idPiloto}}" style="height:85px;">\
            <div class="onright bubble colorRedF1">{{puntos}}</div>\
            <div class="onleft"><img style="height:80px;width:80px" src="{{foto}}"/><strong>{{name}}</strong><br/><small>{{escuderia}}</small><small>{{nacionalidad}}<img id="imgBandera" src="{{bandera}}" style="height:11px;width:16px"/></small><small>Debut: {{debut}}</small></div>\
        </li>';


    /*
    var celdaPiloto = '<li id="{{idPiloto}}" style="height:80px;">\
            <div class="onright bubble colorRedF1">{{puntos}}</div>\
            <div class="onleft"><img style="height:80px;width:80px" src="{{foto}}"/></div>\
            <strong>{{name}}</strong>\
            <small>{{nacimiento}}</small>\
            <div><small>{{nacionalidad}}<img id="imgBandera" src="{{bandera}}" style="height:11px;width:16px" /> </small> </div>\
            <small>Debut: {{debut}}</small>\
            <div class="onright">{{escuderia}}</div>\
        </li>';
    */

    var celdaPalmares = '<li id="{{idPalmares}}" >\
            <div class="onright bubble colorRedF1">{{year}}</div>\
            <strong>{{name}}</strong>\
            <small>{{escuderia}}</small>\
            </li>';

	var celdaRegla = '<li id="{{idRegla}}" >\
            <div id="artReglamento">{{texto}}</div>\
            </li>';

    
	lng.View.Template.create('list-piloto', celdaPiloto);
	lng.View.Template.create('list-regla', celdaRegla);
	lng.View.Template.create('list-palmares', celdaPalmares);

    return{

    }

})(LUNGO, App);