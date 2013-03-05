Lungo.dom('#liPalmares').tap(function(event) {
    
    if (Lungo.Data.Storage.persistent("idioma") == "EN") {
        Lungo.Notification.show("Getting list of winners", "", "cloud", true, 0, null);
    }
    else {
        Lungo.Notification.show("Obteniendo palmarés", "", "cloud", true, 0, null);
    }
    var url = "http://localhost/MAMP/CalendarioF1_palmares.php";

    Lungo.Service.cache(url, {}, "6 days", function(response) {
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
            var template = '{{#palmares}}<li><div class="right bubble colorRedF1">{{year}}</div><strong>{{name}}</strong><small>{{escuderia}}</small></li>{{/palmares}}';
            var html = Mustache.to_html(template, response);
            $$('section#secPalmares article#artPalmares ul').html(html);
            url = response.refresh_url;
            Lungo.Notification.hide();
        }
    }, "json");
});