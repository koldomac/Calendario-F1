App.Events = (function(lng, growl, app, undefined)
{
    lng.ready(function()
    {
        if (document.body.clientWidth > 481) //Para el iPad
            lng.View.Aside.show('#main', '#asideMain');
    });

    lng.dom('#asideMain a').tap(function(event)
    {
        var title = lng.dom(this).data('title');
        lng.dom('section#main span.title').html(title);             
    });

    lng.dom('#cellMapa').tap(function(event)
    {
        lng.Router.section('secMapa');
    });

    lng.dom('#cellPilotos').tap(function(event)
    {   
        growl.show('Obteniendo clasificación', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_pilotos.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_pilotos.php

        lng.Service.get ('http://localhost:8888/MAMP/CalendarioF1_pilotos.php', {},
            function(response) 
            {
               if (response == "")
               {
                    growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 3, function(response)
                    {
                        growl.hide();
                    });
               }
               else
               {
                    var config = {
                        el: '#artPilotos',
                        template: 'list-piloto',
                        data: response.pilotos
                    };
                    lng.View.Template.List.create(config);

                    growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                    {
                        growl.hide();
                        lng.Router.section('#secPilotos');
                    });
               }                
            }
        );
    });

    lng.dom('#cellPalmares').tap(function(event)
    {   
        growl.show('Obteniendo palmarés', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_palmares.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_palmares.php

        lng.Service.get ('http://localhost:8888/MAMP/CalendarioF1_palmares.php', {},
            function(response) 
            {
                if (response == "")
                {
                    growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 3, function(response)
                    {
                        growl.hide();
                    });
                }
                else
                {
                    var config = {
                        el: '#artPalmares',
                        template: 'list-palmares',
                        data: response.palmares
                    };

                    lng.View.Template.List.create(config);

                    growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                    {
                        growl.hide();
                        lng.Router.section('#secPalmares');
                    });
                }
            }
        );
    });

    lng.dom('#cellReglamento').tap(function(event)
    {
        growl.show('Obteniendo reglamento', '', 'download', true);

        // PRO - http://www.koaltechs.com/CalendarioF1/CalendarioF1_reglamento.php
        // PRE - http://localhost:8888/MAMP/CalendarioF1_reglamento.php

        lng.Service.get ('http://localhost:8888/MAMP/CalendarioF1_reglamento.php', {},
            function(response) 
            {
                if (response == "")
                {
                    growl.notify('Sin respuesta del servidor', 'Puede que no esté conectado a Internet, inténtelo más tarde', 'close', 'info', 3, function(response)
                    {
                        growl.hide();        
                    });
                }
                else
                {
                    var config = {
                        el: '#artReglamento',
                        template: 'list-regla',
                        data: response.reglas
                    }
                    lng.View.Template.List.create(config);

                    growl.notify('Proceso terminado', '', 'info', 'info', 1, function(response)
                    {
                        growl.hide();
                        lng.Router.section('#secReglamento');
                    });
                }                    
            }
        );
    });

    lng.dom('#enlace').tap(function(event)
    {
        lng.Router.section('secEnlace');
    });

})(LUNGO, LUNGO.Sugar.Growl, App);