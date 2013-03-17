Lungo.dom('#liMapa').tap(function(event) {
        
    var arrGP = [
        ['Australia</br></br>17 de Marzo', new google.maps.LatLng(-37.814251, 144.963165),1],
        ['Malasia</br></br>24 de Marzo', new google.maps.LatLng(2.761490, 101.732452),2],
        ['China</br></br>14 de Abril', new google.maps.LatLng(31.224354, 121.475914),3],
        ['Bahréin</br></br>21 de Abril', new google.maps.LatLng(26.034727, 50.511360),4],
        ['España</br></br>12 de Mayo', new google.maps.LatLng(41.550198, 2.242218),5],
        ['Mónaco</br></br>26 de Mayo', new google.maps.LatLng(43.736652, 7.424011),6],    
        ['Canadá</br></br>09 de Junio', new google.maps.LatLng(45.503279, -73.526773),7],    
        ['Gran Bretaña</br></br>30 de Junio', new google.maps.LatLng(52.091663, -1.026139),8],    
        ['Alemania</br></br>07 de Julio', new google.maps.LatLng(50.345837, 6.965370),9],    
        ['Hungría</br></br>28 de Julio', new google.maps.LatLng(47.498405, 19.040758),10],    
        ['Bélgica</br></br>25 de Agosto', new google.maps.LatLng(50.492386, 5.863219),11],    
        ['Italia</br></br>08 de Septiembre', new google.maps.LatLng(45.620583, 9.286494),12],
        ['Singapur</br></br>22 de Septiembre', new google.maps.LatLng(1.289347, 103.849983),13],    
        ['Corea</br></br>06 de Octubre', new google.maps.LatLng(34.731667, 126.416330),14],    
        ['Japón</br></br>13 de Octubre', new google.maps.LatLng(34.849960, 136.541199),15],    
        ['India</br></br>27 de Octubre', new google.maps.LatLng(28.350732, 77.534680),16],    
        ['Abu Dhabi</br></br>03 de Noviembre', new google.maps.LatLng(24.495838, 54.604012),17],    
        ['EEUU</br></br>17 de Noviembre', new google.maps.LatLng(30.138002, -97.638888),18],
        ['Brasil</br></br>24 de Noviembre', new google.maps.LatLng(-24.914108, -53.436508),19]
    ];

    var indice = 0;

    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(44.520816, 3.610186),
        mapTypeId: google.maps.MapTypeId.TERRAIN
        
    };

    var map = new google.maps.Map($$('#artMap')[0], mapOptions);

    for (var i = 0; i < arrGP.length; i++) {
        setTimeout(function() {
            addMarker();
        }, i * 100);
    }

    var image = new google.maps.MarkerImage('app/assets/images/F1_Maps.png',
        new google.maps.Size(50, 26),
        new google.maps.Point(0,0),
        new google.maps.Point(0, 26));
    
    function addMarker() {
        var marker = new google.maps.Marker({
            position: arrGP[indice][1],
            map: map,
            icon: image,
            draggable: false,
            animation: google.maps.Animation.DROP,
            title: arrGP[indice][0],
            zIndex: arrGP[indice][2]
        });
        addEventLinstener(map, marker);
        indice++;
    }

    var infowindow;
    function addEventLinstener(map, marker) {
        google.maps.event.addListener(marker, 'click', function() {
        map.setCenter(marker.position);
        //showInfoView(map,marker);

        if (infowindow) {
            infowindow.close();
        }
        infowindow = new google.maps.InfoWindow({
            content: 'Gran Premio de ' + marker.getTitle(),
            size: new google.maps.Size(50,50),
            position: marker.getPosition()
        });        
        infowindow.open(map);
        });
    }
});