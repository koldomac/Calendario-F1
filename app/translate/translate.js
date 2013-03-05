Lungo.ready (function() {

    if (Lungo.Data.Storage.persistent("idioma") == "EN") {
        toEnglish();
    }
    else {
        toSpanish();
    }
});

Lungo.dom('#liSpanish').tap(function(event) {
    toSpanish();
});

Lungo.dom('#liEnglish').tap(function(event) {
    toEnglish();
});

function toSpanish() {
    Lungo.Data.Storage.persistent("idioma", "ES");
    /*============================= HOME ============================= */
    Lungo.dom('#txtCabecera').text('Calendario de Fórmula 1');
    Lungo.dom('#pIntro').text('La temporada 2013 comienza, como ya viene siendo habitual, en la pista semiurbana de Albert Park, Australia. La primera de las grandes citas de este año es el 17 de marzo.');
    Lungo.dom('#pIntro2').text('Esperemos que sea un año igual de vibrante que el año pasado y que hasta la última carrera, en el circuito de Interlagos de Brasil el 24 de noviembre, no sepamos quien es el vencedor de esta temporada y puedan llegar los máximos candidatos con todas las opciones posibles.');
    Lungo.dom('#txtSelectLanguage').text('Cambio de idioma');
    Lungo.dom('#smallSpanish').text('Español');
    Lungo.dom('#smallEnglish').text('Inglés');
    /*============================= VISTA CIRCUITO ============================= */
    Lungo.dom('#lblLongitud').text('Longitud');
    Lungo.dom('#lblVueltas').text('Vueltas');
    Lungo.dom('#lblDistancia').text('Distancia');
    Lungo.dom('#lblCurvas').text('Curvas');
    Lungo.dom('#lblCarga').text('Carga aerodinámica');
    Lungo.dom('#lblDesgaste').text('Desgaste de neumáticos');
    Lungo.dom('#lblVueltaRapida').text('Vuelta Rápida');
    Lungo.dom('#lastPodium').text('Último Podio');
    /*============================= ASIDE FEATURES ======================= */
    Lungo.dom('#home').text('Inicio');
    Lungo.dom('#cal_2013').text('Calendario 2013');
    Lungo.dom('#listCir').text('Datos de los circuitos');
    Lungo.dom('#requiereInternet').text('Requiere conexión a Internet');
    Lungo.dom('#claPil').text('Clasificación de pilotos');
    Lungo.dom('#claPilSmall').text('Así van los pilotos en la tabla');
    Lungo.dom('#claEq').text('Clasificación de equipos');
    Lungo.dom('#claEqSmall').text('Escuderías');
    Lungo.dom('#Pal').text('Palmarés');
    Lungo.dom('#PalSmall').text('Campeones del mundo de cada año');
    Lungo.dom('#map').text('Mapa');
    Lungo.dom('#mapSmall').text('Vista mapa de los grandes premios');
    Lungo.dom('#caj').text('¿Sabes de F1?');
    Lungo.dom('#cajSmall').text('Conceptos que has de saber');
    Lungo.dom('#masInfo').text('Información adicional');
    Lungo.dom('#aboutApp').text('Sobre mí');
    Lungo.dom('#aboutMe').text('Información del autor');
    /*============================= CIRCUITOS - FECHAS ============================= */
    Lungo.dom('#AusDate').text('17 de Marzo');
    Lungo.dom('#AusCountry').text('Australia | Melbourne');
    Lungo.dom('#MalDate').text('24 de Marzo');
    Lungo.dom('#MalCountry').text('Malasia | Sepang');
    Lungo.dom('#ChiDate').text('14 de Abril');
    Lungo.dom('#ChiCountry').text('China | Shangai');
    Lungo.dom('#BahDate').text('21 de Abril');
    Lungo.dom('#BahCountry').text('Bahréin | Sakhir');
    Lungo.dom('#SpaDate').text('12 de Mayo');
    Lungo.dom('#SpaCountry').text('España | Montmeló');
    Lungo.dom('#MonDate').text('26 de Mayo');
    Lungo.dom('#MonCountry').text('Mónaco | Monte Carlo');
    Lungo.dom('#CanDate').text('09 de Junio');
    Lungo.dom('#CanCountry').text('Canadá | Montreal');
    Lungo.dom('#UKDate').text('30 de Junio');
    Lungo.dom('#UKCountry').text('GB | Silverstone');
    Lungo.dom('#AleDate').text('07 de Julio');
    Lungo.dom('#AleCountry').text('Alemania | Nürburgring');
    Lungo.dom('#xxxDate').text('21 de Julio');
    Lungo.dom('#xxxCountry').text('Pendiente de confirmar');
    Lungo.dom('#HunDate').text('28 de Julio');
    Lungo.dom('#HunCountry').text('Hungría | Hungaroring');
    Lungo.dom('#BelDate').text('25 de Agosto');
    Lungo.dom('#BelCountry').text('Bélgica | Spa');
    Lungo.dom('#ItaDate').text('08 de Septiembre');
    Lungo.dom('#ItaCountry').text('Italia | Monza');
    Lungo.dom('#SinDate').text('22 de Sept.');
    Lungo.dom('#SinCountry').text('Singapur | Marina Bay');
    Lungo.dom('#CorDate').text('06 de Octubre');
    Lungo.dom('#CorCountry').text('Corea | Yeongam');
    Lungo.dom('#JapDate').text('13 de Octubre');
    Lungo.dom('#JapCountry').text('Japón | Suzuka');
    Lungo.dom('#IndDate').text('27 de Octubre');
    Lungo.dom('#IndCountry').text('India | Buddh');
    Lungo.dom('#AbuDate').text('03 de Nov.');
    Lungo.dom('#AbuCountry').text('Abu Dhabi | Yas Marina');
    Lungo.dom('#USADate').text('17 de Noviembre');
    Lungo.dom('#USACountry').text('EEUU | Austin');
    Lungo.dom('#BraDate').text('24 de Noviembre');
    Lungo.dom('#BraCountry').text('Brasil | Interlagos');    
    /*============================= LAST ROW CIRCUITVIEW ============================= */
    Lungo.dom('#MoreInfoStrong').text('Más información');
    Lungo.dom('#MoreInfoSmall').text('Texto informativo y algo de historia');
    /*============================= GPs INFO ============================= */
    toSpanishAustralia();
    toSpanishMalasia();
    toSpanishChina();
    toSpanishBahrein();
    toSpanishSpain();
    toSpanishMonaco();
    toSpanishCanada();
    toSpanishGB();
    toSpanishAlemania();
    toSpanishHungria();
    toSpanishBelgica();
    toSpanishItalia();
    toSpanishSingapur();
    toSpanishCorea();
    toSpanishJapon();
    toSpanishIndia();
    toSpanishAbu_Dhabi();
    toSpanishEEUU();
    toSpanishBrasil();
    /*============================= CAJON ============================= */
    Lungo.dom('#BanStrong').text('Banderas');
    Lungo.dom('#BanSmall').text('Cada color tiene su significado');
    Lungo.dom('#DicStrong').text('Diccionario');
    Lungo.dom('#DicSmall').text('Palabras que se usan durante la carrera');
    Lungo.dom('#NeuStrong').text('Neumáticos');
    Lungo.dom('#NeuSmall').text('¿Sabes qué significado tiene su color?');
    Lungo.dom('#PunStrong').text('Puntuación');
    Lungo.dom('#PunSmall').text('Así se reparten los puntos');
    /*============================= DICCIONARIO ============================= */
    Lungo.dom('#pBli').text('Deterioro del neumático provocado por la aparición de ampollas en su superficie');
    Lungo.dom('#pBoxes').text('Los garajes donde los equipos montan sus talleres. Los pilotos realizan aquí los cambios de neumáticos durante la carrera');
    Lungo.dom('#pChicane').text('Doble curva formada por un giro hacia la izquierda y otro a la derecha o viceversa');
    Lungo.dom('#pDRS').text('Alerón trasero móvil. El piloto puede modificar su posición con un botón para ganar velocidad en las rectas. Solo debe ser activado en las zonas habilitadas del circuito');
    Lungo.dom('#pDrive').text('Sanción que obliga al piloto a pasar por el carril de boxes sin detenerse');
    Lungo.dom('#pFIA').text('Federación Internacional de Automovilismo. Regula la Fórmula 1. Su presidente es Jean Todt');
    Lungo.dom('#pGrai').text('Deterioro del neumático provocado por la acumulación de goma o suciedad de la pista en su superficie. Se forman granos y pierde adherencia');
    Lungo.dom('#pGrip').text('Agarre, adherencia del coche a la pista');
    Lungo.dom('#pKERS').text('Dispositivo que almacena energía en las frenadas y la transforma en potencia para el motor. Proporciona unos 80 CV extras durante medio segundo cuando es accionado por el piloto');
    Lungo.dom('#pMotor').text('La sede de un equipo en un gran premio. Tiene restaurante, cocina, sala de prensa...');
    Lungo.dom('#pPaddock').text('La zona del circuito situada detrás de los boxes donde los equipos aparcan sus camiones e instalan los motor-homes');
    Lungo.dom('#pLane').text('El carril que lleva hasta los boxes. La velocidad en esta zona está limitada a 60 km/h');
    Lungo.dom('#pStop').text('Parada del piloto en boxes para cambiar neumáticos o realizar alguna reparación');
    Lungo.dom('#pWall').text('Muro de separación entre la pista y el carril de boxes. Aquí se instalan los ingenieros de los equipos para seguir la evolución de sus pilotos durante la carrera');
    Lungo.dom('#pPole').text('La primera posición en la parrilla de salida de una carrera. La consigue el piloto más rápido en la sesión de calificación de los sábados');
    Lungo.dom('#pUp').text('Puesta a punto del monoplaza');
    Lungo.dom('#pS_Go').text('Sanción que obliga al piloto a detenerse 10 segundos en boxes sin que sus mecánicos puedan actuar sobre el coche');
    Lungo.dom('#sobreStrong').text('Sobreviraje');
    Lungo.dom('#pSobreV').text('Las ruedas traseras pierden adherencia en la curva. El coche derrapa y puede acabar realizando un trompo');
    Lungo.dom('#subStrong').text('Subviraje');
    Lungo.dom('#pSubV').text('Las ruedas delanteras pierden adherencia al entrar en una curva y obligan al piloto a realizar un giro más abierto');
    Lungo.dom('#sesionStrong').text('Sesión de calificación');
    Lungo.dom('#pSesion').text('Se disputa los sábados y decide las posiciones de salida de los pilotos en la carrera. Se divide en tres tandas eliminatorias de 20, 15 y 10 minutos (Q1, Q2 y Q3). En la última, la Q3, los diez mejores pilotos se juegan la pole y luego deben empezar la carrera con los mismos neumáticos utilizados en su vuelta rápida');
    Lungo.dom('#cocheStrong').text('Coche de seguridad');
    Lungo.dom('#pCoche').text('El safety car entra en la pista cuando se ha producido algún incidente peligroso. Desde el 2012, que se modificó la normativa, los pilotos doblados deberán adelantarlo para situarse en la cola de la carrera. El objetivo es que cuando se relance el gran premio no entorpezcan la lucha por las primeras posiciones');
    Lungo.dom('#cajaStrong').text('Motores y caja de cambios');
    Lungo.dom('#pCaja').text('Los pilotos disponen de ocho motores para todo el Mundial. Si se ven obligados a utilizar un noveno serán penalizados con diez posiciones en la parrilla de salida. Las cajas de cambio solo pueden ser sustituidas una vez cada cinco carreras, bajo sanción de cinco puestos en la parrilla');
    Lungo.dom('#GasStrong').text('Gasolina');
    Lungo.dom('#pGas').text('Los repostajes en carrera siguen prohibidos esta temporada');
    Lungo.dom('#escaStrong').text('Escapes');
    Lungo.dom('#pEsca').text('Desde el 2012 se prohibieron que los escapes dirijan los gases hacia el difusor trasero del coche (difusores soplados) para evitar que incrementen su carga aerodinámica');
    /*============================= PUNTOS ============================= */
    Lungo.dom('#pPuntuacion').text('Actualmente puntúan los diez primeros clasificados según la tabla adjunta, un sistema en vigor desde 2010. Si no se completa el 75% de la carrera, los pilotos sólo reciben la mitad de los puntos.');
    Lungo.dom('#divPosicion').text('Posición');
    Lungo.dom('#divPuntos').text('Puntos');
    /*============================= RUEDAS ============================= */
    Lungo.dom('#pRuedasGen').text('Pirelli va a ser por tercer año consecutivo el único proveedor de neumáticos en la Fórmula 1, y cómo no, los nuevos compuestos de la gama P Zero están llamados a ser unos de los grandes protagonistas de este año.');
    Lungo.dom('#liSignificado').text('Significado de colores');
    Lungo.dom('#rojoStrong').text('Rojo | Superblando');
    Lungo.dom('#pRojo').text('El P Zero superblando es totalmente nuevo, un compuesto más blando diseñado para aumentar el rendimiento y la degradación. Este año el calentamiento del neumático es incluso más rápido, ofrece el máximo rendimiento y un agarre óptimo de forma inmediato. Indicado para circuitos lentos y revirados, como Mónaco y Hungría.');
    Lungo.dom('#amaStrong').text('Amarillo | Blando');
    Lungo.dom('#pAma').text('El P Zero blando sólo es poco más de medio segundo por vuelta más lento que su predecesor, el superblando. Pero aun así, es más blando que el compuesto equivalente del año pasado. Seguramente sea uno de los compuestos más utilizados durante este año.');
    Lungo.dom('#blancoStrong').text('Blanco | Medio');
    Lungo.dom('#pBlanco').text('El P Zero medio hace que sea la elección ideal para circuitos que sean un poco menos exigentes o que tengan temperaturas ambientales más bajas. Este neumático no es muy distinto del blando del año pasado, lo que hace que sea alrededor de 0,8 segundos por vuelta más rápido que el duro.');
    Lungo.dom('#naranStrong').text('Naranja | Duro');
    Lungo.dom('#pNaran').text('El P Zero duro es mucho más blando que el del año pasado, más próximo al medio del 2012. Este compuesto será el idóneo para los circuitos más duros y calurosos.');
    Lungo.dom('#verdeStrong').text('Verde | Intermedio');
    Lungo.dom('#pVerde').text('El P Zero intermedio tiene una nueva construcción trasera, un aspecto que han mejorado respecto al año pasado, lo que los convierte en uno de los productos más eficaces y manejables de Pirelli.');
    Lungo.dom('#azulStrong').text('Azul | Lluvia extrema');
    Lungo.dom('#pAzul').text('El P Zero de lluvia extrema también se beneficia de una nueva construcción. También se han rediseñado los neumáticos traseros para ofrecer una tracción más progresiva y reducir el sobreviraje repentino. Mantienen la capacidad de evacuar 60 litros de agua por segundo a máxima velocidad.');
    /*============================= FLAGS ============================= */
    Lungo.dom('#flagCuadroStrong').text('Bandera de cuadros');
    Lungo.dom('#pFlagCuadros').text('Indica el final de la sesión. En carrera se muestra cuando el ganador del gran premio cruza la meta.');
    Lungo.dom('#flagAmarillo').text('Amarilla');
    Lungo.dom('#pFlagAmarillo').text('Peligro en la pista. El piloto debe reducir su velocidad y está prohibido adelantar. Con dos banderas amarillas, mayor peligro.');
    Lungo.dom('#flagVerde').text('Verde');
    Lungo.dom('#pFlagVerde').text('Se muestra cuando el peligro ya ha pasado y permite que los pilotos puedan volver a realizar adelantamientos.');
    Lungo.dom('#flagRojo').text('Roja');
    Lungo.dom('#pFlagRojo').text('Suspende la carrera por un accidente o condiciones meteorológicas muy adversas. Los pilotos deben regresar a boxes. Prohibido adelantar.');
    Lungo.dom('#flagAzul').text('Azul');
    Lungo.dom('#pFlagAzul').text('Avisa a un piloto de que está a punto de ser doblado. Tiene la obligación de facilitar el adelantamiento. A la salida del pit-lane indica peligro.');
    Lungo.dom('#flagRayas').text('A rayas');
    Lungo.dom('#pFlagRayas').text('Esta bandera alerta de que el asfalto es deslizante, casi siempre por aceite en la pista o porque empieza a llover.');
    Lungo.dom('#flagNegro').text('Negra');
    Lungo.dom('#pFlagNegro').text('Obliga al piloto a regresar inmediatamente a boxes, normalmente porque ha sido excluido de la carrera por una conducta antideportiva.');
    Lungo.dom('#flagBlanco').text('Blanca');
    Lungo.dom('#pFlagBlanco').text('Existencia de un vehículo mucho más lento en la pista. Suele ser un monoplaza averiado o un coche de emergencia.');
    /*============================= ABOUT ============================= */
    Lungo.dom('#aboutMail').text('Mail');
    Lungo.dom('#aboutTwitter').text('... si quieres: Sígueme!');
};

function toEnglish() {
    Lungo.Data.Storage.persistent("idioma", "EN");
    /*============================= HOME ============================= */
    Lungo.dom('#txtCabecera').text('Formula One Calendar');
    Lungo.dom('#pIntro').text('2013 season starts as usually in Albert Park (Australia), a semiurban track. The first of the important appointments of this year takes place on March 17th.');
    Lungo.dom('#pIntro2').text('We hope it will be an amazing year like 2012 and until the last race, in Interlagos circuit in Brazil on November 24th, we don´t know who driver will get the victory of this season and as many drivers as possible can arrive with all the possible options.');
    Lungo.dom('#txtSelectLanguage').text('Select language');
    Lungo.dom('#smallSpanish').text('Spanish');
    Lungo.dom('#smallEnglish').text('English');
    /*============================= VISTA CIRCUITO ============================= */
    Lungo.dom('#lblLongitud').text('Length');
    Lungo.dom('#lblVueltas').text('Laps');
    Lungo.dom('#lblDistancia').text('Distance');
    Lungo.dom('#lblCurvas').text('Corners');
    Lungo.dom('#lblCarga').text('Downforce');
    Lungo.dom('#lblDesgaste').text('Tyre wear');
    Lungo.dom('#lblVueltaRapida').text('Lap Record');
    Lungo.dom('#lastPodium').text('Last Podium');
    /*============================= ASIDE FEATURES ======================= */
    Lungo.dom('#home').text('Home');
    Lungo.dom('#cal_2013').text('2013 Calendar');
    Lungo.dom('#listCir').text('Information about the circuits');
    Lungo.dom('#requiereInternet').text('Internet connection required');
    Lungo.dom('#claPil').text('Drivers classification');
    Lungo.dom('#claPilSmall').text('Drivers ranking');
    Lungo.dom('#claEq').text('Teams classification');
    Lungo.dom('#claEqSmall').text('F1 teams');
    Lungo.dom('#Pal').text('Hall Of Fame');
    Lungo.dom('#PalSmall').text('Worldwide champions per year');
    Lungo.dom('#map').text('Map');
    Lungo.dom('#mapSmall').text('Grand Prixes map view');
    Lungo.dom('#caj').text('Do you know about F1?');
    Lungo.dom('#cajSmall').text('Concepts you should know');
    Lungo.dom('#masInfo').text('Additional information');
    Lungo.dom('#aboutApp').text('About me');
    Lungo.dom('#aboutMe').text('Author´s information');
    /*============================= CIRCUITOS - FECHAS ============================= */
    Lungo.dom('#AusDate').text('March 17th');    
    Lungo.dom('#AusCountry').text('Australia | Melbourne');
    Lungo.dom('#MalDate').text('March 24th');
    Lungo.dom('#MalCountry').text('Malaysia | Sepang');
    Lungo.dom('#ChiDate').text('April 14th');
    Lungo.dom('#ChiCountry').text('China | Shangai');
    Lungo.dom('#BahDate').text('April 21st');
    Lungo.dom('#BahCountry').text('Bahrain | Sakhir');
    Lungo.dom('#SpaDate').text('May 12th');
    Lungo.dom('#SpaCountry').text('Spain | Montmeló');
    Lungo.dom('#MonDate').text('May 26th');
    Lungo.dom('#MonCountry').text('Monaco | Monte Carlo');
    Lungo.dom('#CanDate').text('June 09th');
    Lungo.dom('#CanCountry').text('Canada | Montreal');
    Lungo.dom('#UKDate').text('June 30th');
    Lungo.dom('#UKCountry').text('GB | Silverstone');
    Lungo.dom('#AleDate').text('July 07th');
    Lungo.dom('#AleCountry').text('Germany | Nürburgring');
    Lungo.dom('#xxxDate').text('July 21st');
    Lungo.dom('#xxxCountry').text('To be confirmed');
    Lungo.dom('#HunDate').text('July 28th');
    Lungo.dom('#HunCountry').text('Hungary | Hungaroring');
    Lungo.dom('#BelDate').text('August 25th');
    Lungo.dom('#BelCountry').text('Belgium | Spa');
    Lungo.dom('#ItaDate').text('September 8th');
    Lungo.dom('#ItaCountry').text('Italy | Monza');
    Lungo.dom('#SinDate').text('Sept. 22nd');
    Lungo.dom('#SinCountry').text('Singapore | Marina Bay');
    Lungo.dom('#CorDate').text('October 06th');
    Lungo.dom('#CorCountry').text('Korea | Yeongam');
    Lungo.dom('#JapDate').text('October 13th');
    Lungo.dom('#JapCountry').text('Japan | Suzuka');
    Lungo.dom('#IndDate').text('October 27th');
    Lungo.dom('#IndCountry').text('India | Buddh');
    Lungo.dom('#AbuDate').text('Nov. 03rd');
    Lungo.dom('#AbuCountry').text('Abu Dhabi | Yas Marina');
    Lungo.dom('#USADate').text('November 17th');
    Lungo.dom('#USACountry').text('United States | Austin');
    Lungo.dom('#BraDate').text('November 24th');
    Lungo.dom('#BraCountry').text('Brazil | Interlagos');    
    /*============================= LAST ROW CIRCUITVIEW ============================= */
    Lungo.dom('#MoreInfoStrong').text('More information');
    Lungo.dom('#MoreInfoSmall').text('Informative text and something about history');
    /*============================= GPs INFO ============================= */
    toEnglishAustralia();
    toEnglishMalasia();
    toEnglishChina();
    toEnglishBahrein();
    toEnglishSpain();
    toEnglishMonaco();
    toEnglishCanada();    
    toEnglishGB();
    toEnglishAlemania();
    toEnglishHungria();
    toEnglishBelgica();
    toEnglishItalia();
    toEnglishSingapur();
    toEnglishCorea();
    toEnglishJapon();
    toEnglishIndia();
    toEnglishAbu_Dhabi();
    toEnglishEEUU();
    toEnglishBrasil();
    /*============================= CAJON ============================= */
    Lungo.dom('#BanStrong').text('Flags');
    Lungo.dom('#BanSmall').text('Each colour has its own meaning');
    Lungo.dom('#DicStrong').text('Dictionary');
    Lungo.dom('#DicSmall').text('Words used during the race');
    Lungo.dom('#NeuStrong').text('Tires');
    Lungo.dom('#NeuSmall').text('Do you know what meaning their colour has?');
    Lungo.dom('#PunStrong').text('Score');
    Lungo.dom('#PunSmall').text('Points are assigned like that');
    /*============================= DICCIONARIO ============================= */
    Lungo.dom('#pBli').text('Damage of the tire caused by ampoules appearance on its surface');
    Lungo.dom('#pBoxes').text('Places where teams set up their workshop. Drivers change their tires during the race here');
    Lungo.dom('#pChicane').text('Double curve formed by both a clockwise rotation and a right turn or vice versa');
    Lungo.dom('#pDRS').text('Rear mobile spoiler. Driver can modify his position with a bottom to win speed along the straight lines. It only must be activated in the permitted areas of the circuit');
    Lungo.dom('#pDrive').text('Penalty which obliges driver to pass through boxes line without stopping');
    Lungo.dom('#pFIA').text('Motor-racing International Federation. It regulates F1. Jean Todt is its president');
    Lungo.dom('#pGrai').text('Damage of the tire caused by tire accumulation or track dirt on its surface. Grains are formed and adhesion is lost');
    Lungo.dom('#pGrip').text('Car adhesion with the track');
    Lungo.dom('#pKERS').text('Device which stores energy in braking and converts it into power for the motor. It provides around 80hp extra during half a second when it is pressed by the driver');
    Lungo.dom('#pMotor').text('A team´s office during a Grand Prix. It is provided with a restaurant, kitchen, press room...');
    Lungo.dom('#pPaddock').text('The circuit area located behind boxes, where teams park their lorries and set-up the motor-homes');
    Lungo.dom('#pLane').text('The lane which goes to boxes. Speed in this area is limited in 60km/h.');
    Lungo.dom('#pStop').text('Driver´s stop in boxes to change his tires or make some repair');
    Lungo.dom('#pWall').text('Separation wall between track and boxes lane. Teams’ engineers are located here to follow their drivers’ evolution during the race');
    Lungo.dom('#pPole').text('First position in the starting line of a race. This position is got by the fastest driver in the classification session celebrated on saturday');
    Lungo.dom('#pUp').text('Car preparation to be ready for the race.');
    Lungo.dom('#pS_Go').text('Penalty which obliges driver to stop for 10 seconds in boxes, but his mechanics cannot make any repair on the car');
    Lungo.dom('#sobreStrong').text('Overturn');
    Lungo.dom('#pSobreV').text('Rear wheels lose adhesion in the curve. The car skids and may finish doing a spin');
    Lungo.dom('#subStrong').text('Downturn');
    Lungo.dom('#pSubV').text('Front wheels lose adhesion when entering in a curve and obliges driver to make a more open turn');
    Lungo.dom('#sesionStrong').text('Qualifying');
    Lungo.dom('#pSesion').text('It took place on saturday and drivers’ exit positions for the race are decided. It is divided in three eliminatory sittings of 20, 15 and 10 minutes (Q1, Q2 and Q3). In the last one, Q3, the ten best drivers compete for the pole and then they must start the race with the same tires used in the fast lap');
    Lungo.dom('#cocheStrong').text('Safety car');
    Lungo.dom('#pCoche').text('The safety car goes into the track when some dangerous accident has occurred. Since 2012, when the rule was modified, bended drivers must overtake him to be placed at the end of the race. The main is that fight for first positions isn´t impeded when Grand Prix is relaunched');
    Lungo.dom('#cajaStrong').text('Motors and gear box');
    Lungo.dom('#pCaja').text('Drivers have eight motors for the Championship. If they need to use a ninth one, they will be punished with ten positions in the starting line. Gear boxes only can be replaced once each five races, under penalty of five positions in the starting line');
    Lungo.dom('#GasStrong').text('Petrol');
    Lungo.dom('#pGas').text('During the race is still forbidden to fill up cars with petrol');
    Lungo.dom('#escaStrong').text('Exhausts');
    Lungo.dom('#pEsca').text('Since 2012 it is forbidden that exhausts drive gas to the car rear diffuser to avoid increasing their downforce');
    /*============================= PUNTOS ============================= */
    Lungo.dom('#pPuntuacion').text('Currently, the ten first classificated drivers get points according to the attached table, an existing system since 2010. If the 75% of the race is not completed, drivers only receive half of the points.');
    Lungo.dom('#divPosicion').text('Position');
    Lungo.dom('#divPuntos').text('Points');
    /*============================= RUEDAS ============================= */
    Lungo.dom('#pRuedasGen').text('Pirelli is going to be for three consecutive years the only provider of tires in F1, and the new ones composed of the range of P Zero are expected to be one of the main focus this year.');
    Lungo.dom('#liSignificado').text('Meaning of colours');
    Lungo.dom('#rojoStrong').text('Red | Highly soft');
    Lungo.dom('#pRojo').text('Highly soft P Zero is totally new, a softer compound designed to increase performance and wear. This year, tire warm-up is even faster, it shows the maximum performance and optimal grip inmediatly. This compound is recommended for slow and turned circuits, such as Monaco and Hungary.');
    Lungo.dom('#amaStrong').text('Yellow | Soft');
    Lungo.dom('#pAma').text('Soft P Zero is only a bit more than half a second slower per lap than its predecessor, the highly soft one. However, this is softer than the equivalent compound from last year. Surely, it will be one of the most used compounds during this year.');
    Lungo.dom('#blancoStrong').text('White | Medium');
    Lungo.dom('#pBlanco').text('Medium P Zero compound makes it be the ideal choice for less tough circuits or circuits with lower environmental temperatures. This tire is not very different from the soft tyre existing last year, so it is around 0.8 seconds per lap faster than the hard tire.');
    Lungo.dom('#naranStrong').text('Orange | Hard');
    Lungo.dom('#pNaran').text('Hard P Zero is much softer than the one existing last year, being closer to the medium one. This compound will be suittable for harder and warm circuits.');
    Lungo.dom('#verdeStrong').text('Green | Intermediate');
    Lungo.dom('#pVerde').text('Intermediate P Zero has a new back construction, an improved aspect with respect last year, so they become one of the most efficient and malleable products.');
    Lungo.dom('#azulStrong').text('Blue | Extreme rain');
    Lungo.dom('#pAzul').text('P Zero compound for extreme rain is also benefited by a new construction. Back tires have been also redesigned to provide more progressing traction and reduce sudden overturn. They mantain the capacity to evacuate 60 litres of water per second at maximum speed.');
    /*============================= FLAGS ============================= */
    Lungo.dom('#flagCuadroStrong').text('Checkered flag');
    Lungo.dom('#pFlagCuadros').text('It means the end of the session. During the race it is shown when the winner of the Grand Prix goes through the finishing line.');
    Lungo.dom('#flagAmarillo').text('Yellow');
    Lungo.dom('#pFlagAmarillo').text('Danger in the track. Driver must reduce his speed and overtaking is forbidden. Two yellow flags mean more danger.');
    Lungo.dom('#flagVerde').text('Green');
    Lungo.dom('#pFlagVerde').text('It is shown when danger has already passed and it allows drivers to overtake again.');
    Lungo.dom('#flagRojo').text('Red');
    Lungo.dom('#pFlagRojo').text('It stops the race because of an accident or very adverse weather conditions. Drivers must return boxes. Overtaking is forbidden.');
    Lungo.dom('#flagAzul').text('Blue');
    Lungo.dom('#pFlagAzul').text('It advises a driver that he is about to be backmarked. Driver is obliged to faciltitate overtaking. At the pit-lane exit, it means danger.');
    Lungo.dom('#flagRayas').text('Striped flag');
    Lungo.dom('#pFlagRayas').text('This flag alerts that pavement is slippery because of oil on the track or because it is starting rain.');
    Lungo.dom('#flagNegro').text('Black');
    Lungo.dom('#pFlagNegro').text('It obliges driver to return boxes inmediately, usually because he has been excluded from the race due to an unsporting behaviour.');
    Lungo.dom('#flagBlanco').text('White');
    Lungo.dom('#pFlagBlanco').text('There is a car much slower in the track. It is normally a broken down car or a safety car.');
    /*============================= ABOUT ============================= */
    Lungo.dom('#aboutMail').text('Contact me');
    Lungo.dom('#aboutTwitter').text('... if you want: Follow me!');
};