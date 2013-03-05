Lungo.dom('#liEscuderias').tap(function(event) {
    
    if (Lungo.Data.Storage.persistent("idioma") == "EN") {
        Lungo.Notification.show("Getting teams classification", "", "cloud", true, 0, null);
    }
    else {
        Lungo.Notification.show("Obteniendo clasificación de escuderías", "", "cloud", true, 0, null);
    }
    var url = "http://localhost/MAMP/CalendarioF1_escuderias.php";
        
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
                var template = '{{#escuderias}}<li style="height:85px;">\
                    <div class="right bubble colorRedF1">{{puntos}}</div>\
                    <div><img style="height:90px;width:135px" src="{{foto}}"/>\
                    <strong>{{name}}</strong><br/>\
                    Motor: {{motor}}<br/>\
                    Chassis: {{chasis}}<br/>\
                    Titles: {{titulos}}</div>\
                    Debut: {{debut}}<br/>\
                    </li>{{/escuderias}}';
        
                var html = Mustache.to_html(template, response);
                Lungo.dom('section#secEscuderias article#artEscuderias ul').html(html);
                url = response.refresh_url;
                Lungo.Notification.hide();
            }
            else {
                var template = '{{#escuderias}}<li style="height:85px;">\
                    <div class="right bubble colorRedF1">{{puntos}}</div>\
                    <div><img style="height:90px;width:135px" src="{{foto}}"/>\
                    <strong>{{name}}</strong><br/>\
                    Motor: {{motor}}<br/>\
                    Chasis: {{chasis}}<br/>\
                    Títulos: {{titulos}}</div>\
                    Debut: {{debut}}<br/>\
                    </li>{{/escuderias}}';
        
                var html = Mustache.to_html(template, response);
                Lungo.dom('section#secEscuderias article#artEscuderias ul').html(html);
                url = response.refresh_url;
                Lungo.Notification.hide();
            }
        }
    }, "json");
});