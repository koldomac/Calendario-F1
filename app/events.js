App.Events = (function(lng, growl, app, undefined) {

	lng.dom('#cellMapa').tap(function(event)
    {
        lng.Router.section('secMapa');
    });

	lng.dom('#cellPilotos').tap(function(event)
    {   
    	growl.show('Obteniendo clasificación', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_pilotos.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_pilotos.php

        lng.Service.get ('http://www.koaltechs.com/CalendarioF1/CalendarioF1_pilotos.php', {},
            function(response) 
            {
                lng.View.Template.List.create(
                {
                    container_id: 'artPilotos',
                    template_id: 'list-piloto',
                    data: response.pilotos
                });

                growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                {
                    growl.hide();
                    lng.Router.section('#secPilotos');
                });
            }
        );

        growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 4, function(response)
        {
            growl.hide();        
        });        
    });

	lng.dom('#cellPalmares').tap(function(event)
    {   
    	growl.show('Obteniendo palmarés', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_palmares.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_palmares.php

        lng.Service.get ('http://www.koaltechs.com/CalendarioF1/CalendarioF1_palmares.php', {},
            function(response) 
            {
                lng.View.Template.List.create(
                {
                    container_id: 'artPalmares',
                    template_id: 'list-palmares',
                    data: response.palmares
                });

                growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                {
                    growl.hide();
                    lng.Router.section('#secPalmares');
                });
            }
        );

        growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 4, function(response)
        {
            growl.hide();
        });
    });

	lng.dom('#cellReglamento').tap(function(event)
	{
		growl.show('Obteniendo reglamento', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_reglamento.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_reglamento.php

        lng.Service.get ('http://www.koaltechs.com/CalendarioF1/CalendarioF1_reglamento.php', {},
            function(response) 
            {
                lng.View.Template.List.create(
                {
                    container_id: 'artReglamento',
                    template_id: 'list-regla',
                    data: response.reglas
                });

                growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                {
                    growl.hide();
                    lng.Router.section('#secReglamento');
                });
            }
        );

        growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 4, function(response)
        {
            growl.hide();        
        });
	});

    return {

    }

})(LUNGO, LUNGO.Sugar.Growl, App);