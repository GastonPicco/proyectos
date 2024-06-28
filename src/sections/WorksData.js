const worksData = 
[
{
    title: "Pong 2D",
    summary: "Un clásico en los que exploro conceptos principales como transformaciones, físicas, coliciones y textos Ui.",
    text: "Primer proyecto para el curso del <a class='popLink' href='https://www.biosportal.com/'> Instituto Bios</a>. Pong es un juego ideal como iniciacion a las taslaciones y fisicas.<br> <br /> En este proyecto inclui un UI improvisado y para practicar mas sobre transformaciones decidi incluir rotaciones en las paletas para agregar un poco de complegidad extra a lo exigido",
    imagePaths:["pong2d/menu.jpg","pong2d/proyect.jpg","pong2d/start.gif","pong2d/end.gif"],
    state:true,
    gitPath:"null",
    workTypeLogo: ["UC-logo.png"]
},
{
    title: "Arkanoid",
    summary: "Este proyecto es un nuevo reto para profundizar en los conocimientos de Unity, el objetivo del de este es aprender a instanciar",
    text: "Este es mi segundo proyecto, muy similar a Pong pero con un giro de 90° en las mecanicas.<br/><br/> Arkanoid o tambien conocido como Breakout de Atari propone el reto de instanciar objetos, y el uso de prefabs como los ladrillos o los puntos que aparecen justo despues de romper un ladrillo. <br><br/> El objetivo de este proyecto era generar un mapa de arkanoid instanciandolo por medio de codigo utilizando distintos tipos de prefabs de ladrillos y hacer que los mismos sean capases de mostrar un puntaje al romperse",
    imagePaths:["arkanoid/gameplay.jpg","arkanoid/menu.jpg","arkanoid/controls.jpg","arkanoid/win.jpg","arkanoid/unity.jpg","arkanoid/play.gif","arkanoid/combo.gif"],
    state:false,
    gitPath:"null",
    workTypeLogo: ["UC-logo.png"]
},
{
    title: "Space Invaders",
    summary: 'Este es un proyecto ideal para practicar el uso de multiples prefabs en un proyecto y como instanciarlos, ademas de ser el primer proyecto que cuenta con enemigos ',
    text: "Como Tercer proyecto Space Invaders o tambien conocido como Galaxian es un juego ideal para profundizar en el uso de prefabs e instanciarlos. <br/><br/> Este proyecto tiene como objetivo crear un script muy simple haciendo de IA, dandole la capacidad al enemigo y al jefe final de moverce de un lado al otro en grupo, disparar y ganar velocidad con el tiempo",
    imagePaths:["spaceinvaders/play2.jpg","spaceinvaders/menu.jpg","spaceinvaders/unity.jpg","spaceinvaders/play1.jpg","spaceinvaders/boss.jpg","spaceinvaders/bossfight.gif","spaceinvaders/start.gif"],
    state:false,
    gitPath:"null",
    workTypeLogo: ["UC-logo.png"]
},
{
    title: "Juego de plataformas",
    summary: "Test independiente para aprender a crear fisicas simples sin utilizar el motor de fisicas ayudado con raycas y a su vez hacer una IA simple gracias a raycast",
    text: "Este proyecto personal tenia como objetivo desarrollar mas habilidades, como raycast, animator, fisicas con matematicas.<br><br>Con raycast logre hacer una ia simple de enemigos capaz de detectar el vacio, cambiar de sentido en las plataformas y detectar al jugador.<br/><br/>Los enemigos y el jugador no utilizan el motor de fisicas, en cambio hice mis propias fisicas con gravedad, flotabilidad y deteccion de suelo",
    imagePaths:["plataformas/start.jpg","plataformas/unity.jpg","plataformas/play.gif","plataformas/whater.gif","plataformas/end.gif"],
    state:false,
    gitPath:"null",
    workTypeLogo: ["UC-logo.png"]
},
{
    title:"Pac-Man 2D",
    summary:"Mi ultimo proyecto en unity 2d es Pac-Man, todo un desafio tanto con el movimiento del personaje como la inteligencia artificial de los fantasmas y su movimiento",
    text:'Este fue mi proyecto final para el 1er año de desarrollador de videojuegos en el <a class="popLink" href="https://www.biosportal.com/"> Instituto Bios</a>.<br><br> El reto principal de este proyecto fue crear una inteligencia artificial capaz de llegar hasta el jugador en un laberinto, para solucionarlo cree un mapa lleno de triggers capaces de identificar en que tipo de interseccion se encontraba el jugador, sea pasillo, interseciones en forma de "X", "L" o de "T" cada. Con condiciones fui capaz de hacer que el jugador solo pudiera cambiar su direccion solo en lugares donde el trigger se lo permitiera, y para mejorar la sensacion del movimiento se guarda el ultimo input para doblar en el momento indicado por mas de que el input haya sido muy pronto. <br><br> Los fantasmas tienen distintos comportamientos, pero todos usan el mismo script del jugador modificado para que siempre traten de asercarse lo mas posible a un punto de interes seleccionado por el codigo, sea el jugador, delante del jugador, puntos aleatorios o alejarse del jugador',
    imagePaths:["pacman/menu.jpg","pacman/play.jpg","pacman/scene.jpg","pacman/unity.jpg","pacman/EatAndLose.gif","pacman/gameplay.gif"],
    state:false,
    gitPath:"null",
    workTypeLogo: ["UC-logo.png"]
}
,
{
    title: "Pong 3D",
    summary: "Este primer proyecto 3D, nuevamente pong ideal por su simpleza para familiarisarce con el entorno 3d, ademas de que uso por primera vez mis conocimientos en modelado",
    text: "Pong en 3D es el juego elegido para este proyecto tanto por sus simples mecanicas y lo facil de representar en 3d con modelos primitivos, aun asi me tome la livertad de aprobechar mis conocimientos utilizando blender para crear unos modelos 3d que le den un buen aspecto.<br/><br/> En cuanto el codigo este juego a diferencia de la vercion 2D la hice completamente sin motor de fisicas todos los rebotes y movimientos estan scripteados y llegando a un nivel extra de detalle agregando inercia para que el juego no sea tan facil y de una sensacion nueva",
    imagePaths: ["pong3d/pong3D.jpg","pong3d/menu.jpg","pong3d/inspector.jpg","pong3d/gameplay.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
,
{
    title: "Test Personal juego Movil",
    summary: "Proyecto independiente de un para probar el desarrollo movil de unity, es un juego estilo flappy bird cambiando el aleteo por movimiento vertical",
    text: "Similar a flappy bird este es un proyecto independiente para probar el desarrollo movil en unity y sus herramients. Es un proyecto simple compiando la mecanica de falppy bird replazando saltos por un movimiento vertical muy limitado pensado para que funcione en un interfaz tactil con el objetivo de poner a prueba el desarrollo en plataformas moviles",
    imagePaths: ["testmovil/play.jpg","testmovil/inspector.jpg","testmovil/gameplay.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UC-logo.png"]
}
,
{
    title: "Fruit Ninja",
    summary: "Siguiendo con la linea de desarrollo movil este juego es util para profundizar mas en el desarrollo profundizando en, shaders, particulas y line render",
    text: "Fruit Ninja fue el proyecto elegido para aplicar conocimientos previos de desarrollo movil. <br/><br/> Ademas de tener en cuenta practicar el desarrollo  movil tambien se tuvo en cuenta componentes nuevos para los GameObjects, Los shaders capaces de generar efectos y texturas mejores en las superficies de los objetos, Partuculas para darle una sensacion mas completa a el juego y por ultimo el componente de line renderer que da un efecto de corte que suma feedback para el usuario y hace que la interaccion se vea mejor",  
    imagePaths: ["fruitninja/game.jpg","fruitninja/menu.jpg","fruitninja/inspector.jpg","fruitninja/gameplayninja.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
,
{
    title: "Juego de bobardero",
    summary: "En este proyecto se busca mejorar el entendimiento de las rotaciones en un entorno 3d",
    text: "Un proyecto inspirado en un abion bombardero destruyendo torretas fue el proximo reto, inicialmente mas sensillo pero decidi darle una dificultad extra.<br/><br/> La propuesta inicial trataba de un juego mucho mas simple en el que tenia que avanzar por un espacio lineal esquibando horizontalmente disparos de torretas que apuntaban hacia el jugador para aprender como objeto puede apuntar hacia otro, dado este ejercicio decidi expandir el espacio y darle la capacidad al abion de bolar en todas las direcciones horizontales y simular solo con rotaciones las inclinaciones mas realistas de un abion al volar, para este juego decidi hacer modelos 3d muy simples que cumplieran con una estetica simple para enfocarme mas en la parte del codigo del proyecto",  
    imagePaths: ["bombergame/menu.jpg","bombergame/inspector.jpg","bombergame/inspector2.jpg","bombergame/play.jpg","bombergame/lose.jpg","bombergame/gameplay_win.gif","bombergame/gameplay_lose.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
,
{
    title: "Survival & build",
    summary: "Proyecto completamente enfocado en el trabajo en equipo, y con una extensa fecha de entrega",
    text: "Juego realizado entre 2 personas, dicidimos dividirnos en 2 espacios de trabajo uno se iba a encargar de el UI de la esena de menu y otro del juego en si. Tome la parte de el juego y los modelos. 3d<br/><br/> Como objetivo teniamos que hacer un pequeño juego de supervivencia en el que debia haber minimo un tipo enemigo, lugares donde obtener recursos y un sistema de construccion y crafteo. Al ser mi genero de juegos favorito decidi ponerle mucho empeño al medelado 3D, hice un mapa basado en tiles completamente interconectables asi podria generar un mapa completamente a mi gusto desde el editor de unity y si quisiera en un futuro generar mapas de forma prosedural, y desarrolle un personaje simple con animaciones para darle vida a funciones como caminar, talar, picar, caer, atacar.<br/><br/> a pesar del tiempo reducido y lo grande del proyecto, salio una demo muy satisfactoria, cumpliendo con cada objetivo del juego con un sistema de movimiento y interaccion comodos basado en el uso de Raycast desde la camara",  
    imagePaths: ["buildgame/game.jpg", "buildgame/inspector.jpg", "buildgame/menu.jpg", "buildgame/options.jpg","buildgame/carrywood.jpg","buildgame/stonemine.jpg","buildgame/slime.jpg", "buildgame/building.jpg","buildgame/menugif.gif","buildgame/minegif.gif","buildgame/buildgif.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
,
{
    title: "pool table",
    summary: "el juego de pool fue un reto logico teniendo como objetivo basarse en las reglas del pool",
    text: "Concreto y simple el pool es un juego que tiene que tener en cuenta muchos estados como cuando un jugador comete una falta, veneficiar al oponente al cometer faltas, al meter la primera bola que bola se le asigna a cada jugador, en que lugar un jugador coloco la ultima bola para asignar la bola 8 y como detectar quien gana. Ademas algunos detalles visuales como que el palo sea capaz de apuntar a la bola desde cualquier angulo y que se use el componente line renderer para proyectar una trayectoria y seleccionar la potencia de tiro con la misma.<br/><br/> Modelos creados con blender",  
    imagePaths: ["poolgame/pool.jpg", "poolgame/inspector.jpg", "poolgame/gamegif.gif", "poolgame/pausegif.gif"],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
,
{
    title: "pacman 3d",
    summary: "Ultimo proyecto en BIOS pacman 3D, con 3 niveles, IA mejorada y estetica hecha en blender",
    text: "texto",  
    imagePaths: ["pacman3/game.jpg","pacman3/inspector.jpg","pacman3/menu.jpg","pacman3/menugif.gif","pacman3/bggif.gif","pacman3/level1gif.gif","pacman3/level2gif.gif","pacman3/level3gif.gif",],
    state: "false",
    gitPath: "null",
    workTypeLogo: ["UCBlender-logo.png"]
}
];

export default worksData;