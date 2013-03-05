Lungo.dom('#liSingapur').tap(function(event) {
    
    if (Lungo.Data.Storage.persistent("idioma") == "EN") {
        Lungo.Notification.alert("Getting", "Your time zone and calculating the time", "clock", 0, null);
    }
    else {
        Lungo.Notification.alert("Obteniendo", "Su zona horaria y calculando la hora", "clock", 0, null);
    }
    
    var timezone = jstz.determine();
    var url = "http://json-dsttime.appspot.com/?to_tz=" + timezone.name() + "&from_tz=Asia/Singapore&dt=2013-09-22T20:00";

    Lungo.Service.cache(url, {}, "6 hours", function(response) {
        if (response == "") {

            var afterNotification = function() {
                Lungo.dom('#raceSingapur').text('20:00');
            };
            if (Lungo.Data.Storage.persistent("idioma") == "EN") {
                Lungo.Notification.alert("Connection error", "Showing local time of race", "close", 3, afterNotification);
            }
            else {
                Lungo.Notification.alert("Error de conexión", "Mostrando hora local de la carrera", "close", 3, afterNotification);
            }
        }
        else {
            var dateTime = '{{awaydt}}';
            var html = Mustache.to_html(dateTime, response);
            Lungo.dom('#raceSingapur').html(html.substring(11,16));
            url = response.refresh_url;
            Lungo.Notification.hide();
        }
    }, "json");
});