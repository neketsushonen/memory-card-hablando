$(function(){
    function random(){
        var rand = (Math.floor(Math.random() * preguntas.length));
        while(used[rand] == true){ rand = (Math.floor(Math.random() * preguntas.length));  }
        used[rand] = true;
        return rand;
    }

   /*
    var used = {
        "0" : false,
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7" : false,
        "8" : false,
        "9" : false,
        "10" : false,
        "11" : false,
        "12" : false,
        "13" : false,
        "14" : false,
        "15" : false
    }*/
    
    var preguntas = [
        "¿Qué habilidades te gustaría aprender y por qué?",
        "Si tuvieras la oportunidad de hacer una sola pregunta al Cielo, ¿cuál sería?  ¿por qué?",
        "Si tienes que elegir un producto para comer todos los días. ¿Cuál sería?  ¿por qué?",
        "Si te dieran a elegir entre no criticar o no hablar palabras sin sentidos nunca más, ¿cuál elegirías? ¿por qué?",
        "Imagina que te ganas un millón de dólares, ¿qué harías primero?",
        "¿En qué otra ciudad te habría gustado crecer?",
        "¿Cuál es tu tema de conversación favorito al minuto de sentarte a la mesa con la familia y por qué??",
        "¿Cuál es el logro del que más orgulloso estás? ¿Por qué?",
        "¿Qué es más importante: justicia, igualdad o libertad? ¿Por qué?",
        "¿Qué personaje histórico te habría gustado ser y por qué?",
        "¿Cuál era el juego preferido de tu niñez?",
        "¿Qué aplicación del celular te ha cambiado la vida para peor o mejor y por qué?",
        "Si fueras un profesor, ¿qué enseñarías?",
        "Dime dos cosas de tu lista de deseos que te quedan por hacer.",
        "Si te regalaran pasar una noche en un zoológica, ¿con qué animal te gustaría compartr ese momento?",
        "¿Qué prefefieres: el auto o la bicicleta? ¿Por qué?",

        "¿Qué objetivos que te hayas propuesto se han cumplido hasta ahora?",
        "¿Es necesario internet para nuestra vida? ¿por qué?",
        "¿Qué idioma te gustaría hablar y por qué?",
        "Si tuvieras que elegir la mejor etapa de tu vida, ¿cuál sería y por qué?",
        "¿Cuál es la película o serie que más te ha hecho llorar?",
        "¿Qué te da más miedo?",
        "¿Cuál es la regla de tu casa que más te gusta",
        "¿Cuándo fue la última vez que dijiste \"perdón\", y por qué fue?",
        "¿Qué temas crees que se habla poco en las notificas y por qué?",
        "¿En qué película te gustaría tener el primer rol y por qué?",
        "¿Qué era lo que más te costaba en el colegio? ¿Cómo saliste adelante?",
        "¿Cuál crees que ha sido el mayor cambio que ha sucedido en los últimos treinta años? ¿Por qué?",
        "Termina la frase \"El mundo sería mejor si............\"",
        "¿Cómo sería una sociedad ideal?",
        "En pleno terremoto, tu familia ya se salvó, y te queda solo tiempo para sacar tres cosas de tu casa, ¿cuáles serían?",
        "¿Cuál fue la aventura más entretenida que viviste este año?",


        "Si te hacen elegir entre ir a hacer deporte o ir al cine, ¿qué prefieres y por qué?",
        "¿Puede alguien aprender a ser más feliz?",
        "¿Qué consideras que es de mala educación? ¿Por qué?",
        "¿Cuál es la tradición familiar que más te gusta?",
        "¿Qué te gustaría cambiar de ti?",
        "¿Qué te gustaría hacer cuando jubiles? ¿Por qué?",
        "Si pudieras viajar en el tiempo. ¿Qué época elegirías y por qué?",
        "Si tu vida fuera una película de Hollywood, ¿qué actor te gustaría que te interpretara?",
        "¿Qué es lo que más admiras de tu madre?",
        "¿Qué tipo de niño eras cuando estabas en el colegio?",
        "¿Qué es lo que más admiras de tu padre?",
        "¿Qué te gustaría hacer si tuvieras más tiempo libre?",
        "¿Qué crees que pasa justo después de la muerte?",
        "¿Cuál crees que es la mejor manera de aliviar el estrés?",
        "¿Qué música crees que nos une y por qué?",
        "Solo si tienes animales en la casa. ¿Qué crees que piensa tu mascota de tí?",
        "Si fueses solo al supermercado, ¿qué pondrías en tu carro?",
        "¿Qué comidas raras has probado?",
        "Con qué personaje histórico te gustaría compartir un día",
        "Describe tu mejor recuerdo de vacaciones",
        "Dime un placer muy simple",
        "¿Cómo te imaginas en diez años más?",
        "Termina la frase: \"Lo mejor de mí es ser.............\"",
        "¿Qué película aconsejarías a tu mejor amigo para que vaya a ver?",

        "Crees que las personas nacen con buena suerte o que cada uno es dueño de su propio destino",
        "¿De qué nacionalidad te gustaría tener un amigo para compartir?",
        "¿Qué es lo mejor y peor de tu cultura? ¿Por qué?",
        "¿A quién admirabas cuando eras niño/a y por qué?",
        "¿Cuál es tu lugar favorito de la casa? ¿Por qué?",
        "¿Cuál es la injusticia que más te vuelve loco en nuestro mundo?",
        "¿Cuál fue la mejor anécdota de tu infancia?",

        "Inventa una receta de postre con tus ingredientes favoritos.",
        "Te vas a vivir a una isla durante un año, ¿qué te llevarías? Solo puedes nombrar tres cosas",
        "Tienes la posibilidad de hacer un grafiti sobre una pared enorme a la vista de todos, ¿qué pintarías?",
        "Es el día de tu cumpleaños y puedas comprar un libro que quieras, ¿cuál sería y qué contenido no podría faltar?",
        "¿Cuándo sueles estar más feliz y por qué?",
        "¿Cuáles serían tus vacaciones ideales y con quién?",
        "Ahora mismo puedes recibir un regalo, ¿cuál sería?"


    ];

    var used = Array.from({length: preguntas.length}, (v, k) => false); ;


    var empty = new Object();
    var opened = {  };
    var moves = 0;
    var clicks = 0;
    function clicked(){
        ++clicks;
        ++moves;
        time = $.now();
        if($(this).hasClass("click")){
            $(this).removeClass("click");
            $(this).addClass("down");
            //opened["1"] = new Object();
            clicks = 0;
        }else{
            $(this).addClass("click");
            if(opened[$(this).text()] == null)
                opened[$(this).text()] = preguntas[random()];

            $(this).toggleClass("down");
            $("#exampleModalCenter").modal();
            $("#pregunta").text(opened[$(this).text()]);
        } 
    }
    $("td").on("click", clicked);
    function setup(retry){
    if(retry){
        $("td").on("click", clicked);
        $("td").toggleClass("down");
    }
      
        var icons = Array.from({length: preguntas.length}, (v, k) => k); ;
        let index = 0;
        for(i in icons){
            var ico = icons[i];
            //var one = $("td").eq(random());
            var one = $("td").eq(index);
            $(one).text(++index );
        }
        $("td").removeAttr("name");
        $("td").removeClass("disabled");
    }
    setup();
});