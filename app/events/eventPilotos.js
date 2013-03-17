Lungo.dom('#liPilotos').tap(function(event) {
    
    if (Lungo.Data.Storage.persistent("idioma") == "EN") {
        Lungo.Notification.show("Getting drivers classification", "", "cloud", true, 0, null);
    }
    else {
        Lungo.Notification.show("Obteniendo clasificación de pilotos", "", "cloud", true, 0, null);
    }    
    
    var url = "http://localhost/MAMP/CalendarioF1_pilotos.php";

    Lungo.Service.cache(url, {}, "6 hours", function(response) {
        if (response == "") {

            var afterNotification = function() {
                Lungo.Notification.hide();
                Lungo.Router.back();    
            };

            if (Lungo.Data.Storage.persistent("idioma") == "EN") {
                Lungo.Notification.show('Server does not respond', 'No internet connection', 'close', 'true', 3, afterNotification);
            }
            else {
                Lungo.Notification.show('Sin respuesta del servidor', 'No hay red', 'close', 'true', 3, afterNotification);
            }
        }
        else {
            if (Lungo.Data.Storage.persistent("idioma") == "EN") {
                var template = '{{#pilotos}}<li style="height:85px;">\
                    <div class="right bubble colorRedF1">{{puntos}}</div>\
                    <div><img style="height:80px;width:80px" src="{{foto}}"/>\
                    <strong>{{name}}</strong><br/>\
                    {{escuderia}}<br/>\
                    {{nacionalidad_en}}<img src="{{bandera}}" style="height:11px;width:16px"/><br/>\
                    Debut: {{debut}}<br/>\
                    Birth: {{nacimiento}}</div>\
                    </li>{{/pilotos}}';

                var html = Mustache.to_html(template, response);
                Lungo.dom('section#secPilotos article#artPilotos ul').html(html);
                url = response.refresh_url;
                Lungo.Notification.hide();
            }
            else {
                var template = '{{#pilotos}}<li style="height:85px;">\
                    <div class="right bubble colorRedF1">{{puntos}}</div>\
                    <div><img style="height:80px;width:80px" src="{{foto}}"/>\
                    <strong>{{name}}</strong><br/>\
                    {{escuderia}}<br/>\
                    {{nacionalidad}}<img src="{{bandera}}" style="height:11px;width:16px"/><br/>\
                    Debut: {{debut}}<br/>\
                    Nacimiento: {{nacimiento}}</div>\
                    </li>{{/pilotos}}';

                var html = Mustache.to_html(template, response);
                Lungo.dom('section#secPilotos article#artPilotos ul').html(html);
                url = response.refresh_url;
                Lungo.Notification.hide();
            }
        }
    }, "json");
});