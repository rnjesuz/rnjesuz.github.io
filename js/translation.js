$(function() {

  //Translations
  var t = {
    /* Nav-bar */
    "About Me": {
      pt: "Sobre mim"
    },
    "Thesis": {
      pt: "Tese"
    },
    "Contacts": {
      pt: "Contactos"
    },

    /* Home */
    "Hello...  World!": {
      pt: "Olá...  Mundo!"
    },
    "My name is Ricardo and I'm a young developer enthusiastic to write awesome, efficient and clever code!": {
      pt: "O meu nome é Ricardo e sou um jovem programador entusiasmado para criar código limpo, eficiente e inteligente!"
    },
    "I'm currently finishing my Master's degree in <i><b>Information Systems and Computer Engineering</b></i> at Instituto Superior Técnico. My areas of Specialization are <i><b>Distributed Systems</b></i> and <i><b>Software Engineering.</b></i>": {
      pt: "Estou a terminar o meu Mestrado em <i><b>Engenharia Informática e de Computadores</i></b> no Instituto Superior Técnico. As minhas áreas de especialização são <i><b>Sistemas Distribuídos</i></b> e <i><b>Engenharia de Software.</i></b>"
    },
    "To finish it, I'm working on my thesis entitled <i><b>Go-Together: A novel trajectory-based journey sharing platform for collective events</b></i>. A platform for joint travelling where friends plan road trips. The platform focuses on providing ride-sharing options between participants with an efficient and encompassing algorithm.": {
      pt: "Para terminá-lo, estou a realizar a minha tese intitulada <i><b>Go-Together: A novel trajectory-based journey sharing platform for collective events</b></i>. Uma plataforma para amigos partilharem viaturas numa viagem conjunta. A plataforma foca-se em providenciar opções de partilha de viaturas com um algoritmo abrangente e eficiente."
    },

    /* About Me */
    "Biography": {
      pt: "Biografia"
    },
    "My name is Ricardo Nuno Macedo de Jesus, I'm 23 and from Lisbon, Portugal. Native in Portuguese, fluent in English and can at least understand Spanish and French.": {
      pt: "O meu nome é Ricardo Nuno Macedo de Jesus, tenho 23 anos e sou de Lisboa, Portugal. Português é a minha lingua mãe, sou fluente em Inglês e tenho conhecimento básico de Espanhol e Francês."
    },
    "I consider myself hard-working, perfectionist, responsible, out-going and positive. Always open-minded to try new ideas. I constantly try to better myself and surpass my limits. I aspire to never stop learning new tools and techniques, to remain knowledgeable of innovations and state of the art possibilities.": {
      pt: "Considero-me uma pessoa trabalhadora, perfeccionista, responsável, amigável e positiva. Sempre de mente aberta a novas ideias, estou constantemente a tentar melhorar-me e ultrapassar os meus limites. Pretendo manter-me ocorrente de todas as novas tecnologias e possibilidades, nunca parando de aprender novas técnicas e ferramentas."
    },
    "I want to provide a thriving and friendly working environment, with a prosperous team building and team betterment ideology.": {
      pt: "Esforço-me para manter um ambiente de trabalho amigável e dedicado, com uma ideologia de trabalho de equipa e melhoramento conjunto."
    },
    "Currently I have no previous professional experience, but am eager to start and prove my worth.": {
      pt: "Não possuo nenhuma experiência profisional prévia, mas estou desejoso de começar e mostrar o meu valor."
    },
    "Volunteer work": {
      pt: "Voluntariado"
    },
    "Student Groups: ": {
      pt: "Grupos Estudantis: "
    },
    "I was, and currently am, part of several activities and student groups of Instituto Superior Técnico. I led and participated in several initiatives design to improve student life and communication within the school, and help them hon and master their skills. All the experiences and challenges faced proved invaluable.": {
      pt: "Participei, e ainda participo, em diversas actividades e grupos estudantis do Instituto Superior Técnico. Liderei e participei em diversas iniciativas designadas a melhorar o percurso e tempo de outros estudantes na instituição, e ajudá-los a practicar e desenvolver as suas valências. Todos os desafios e experiências adquiridas provam-se inestimáveis."
    },
    "Hobbies": {
      pt: "Hobbies"
    },
    "Long time computer and technology aficionado, my interests started with an old machine I played games in. To this day I continue to be an avid gamer. I also consider myself an enthusiastic reader and tourist. I'm a music lover and even dabbled a bit playing an electric guitar.": {
      pt: "Há muito tempo aficcionado por computadores e tecnologia, o meu fascínio começou com uma velha máquina onde jogava videojogos. Até hoje continuo a ser um jogador ávido. Também me conidero um leitor e turista entusiasta. Amante de música, cheguei até a practicar guitarra eléctrica."
    },

    /* Curriculum Vitae */
    "Education": {
      pt: "Educação"
    },
    "I'm currently working on my thesis for an MSc in Information Systems and Computer Engineering. My thesis' theme is <i><b>Go-together: A novel trajectory-based journey sharing platform for collective events</b></i> and my advisor is professor João Pedro Barreto.": {
      pt: "De momento encontro-me a trabalhar na minha tese de mestrado em Engenharia Informática e de Computadores. A minha tese é <i><b>Go-together: A novel trajectory-based journey sharing platform for collective events</b></i> e o meu orientador é o professor Jão Pedro Barreto."
    },
    "Finished my MSc": {
      pt: "Terminei o mestrado"
    },
    "Finished my Thesis": {
      pt: "Terminei a tese"
    },
    "Delivered Solution's Documentation  ": {
      pt: "Entreguei a implementação  "
    },
    "Started Implementing Solution":{
      pt: "Comecei a implementar a solução"
    },
    "Delivered Research Documentation  ": {
      pt: "Entreguei a pesquisa  "
    },
    "Started Collecting Research": {
      pt: "Iniciei pesquisa para a solução"
    },
    "Started my Thesis": {
      pt: "Comecei a minha tese"
    },
    "Finished my BSc": {
      pt: "Concluí a licenciatura"
    },
    "Enrolled at College: IST": {
      pt: "Iniciei estudos no IST"
    },
    "Graduated Highschool": {
      pt: "Concluí o secundário"
    },
    "Skills": {
      pt: "Competências"
    },
    "<b>Knowledge:</b> OOP, Distributed Systems, Software Testing, Project Management, Mobile Computing, Secure Communications, Artificial intelligence, Databases, Agile Development.": {
      pt: "<b>Conhecimentos:</b> POO, Sistemas Distribuídos, Teste de Software, Gestão de Projectos, Computação Móvel, Comunicações Seguras, Inteligência Artificial, Bases de Dados, Desenvolvimento Ágil de Software."
    },
    "Programming:": {
      pt: "Programação:"
    },
    "Version Control:": {
      pt: "Controlo de Versões:"
    },
    "Download CV": {
      pt: "Descarregar CV"
    },

    /* Thesis */
    "My thesis is a pursuit in Distributed Systems.": {
      pt: "A minha tese é um empreendimento na área de Sistemas Distribuidos."
    },
    "I intended on delving into an inovative, ambitious and trying topic. As such, by talking with professor João Pedro Barreto, I engaged myself in developing Go-Together.": {
      pt: "Pretendia envolver-me numa proposta inovadora, ambiciosa e desafiante. Para tal, falei com o professor João Barreto e comprometi-me a desenvolver a Go-Together."
    },
    "From monetary cost to environmental awareness, the world is shying away from diesel vehicles and exlploring other mobility options. Ride-sharing is one of the possibilities and areas of research and inovation. To partake in that advancement, in collaboration with professor João Barreto, I started idealizing a ride-sharing solution for a never explored, niche market: matchmaking calculations for a pre-formed group going on a joint travel (to minimize vehicles).": {
      pt: "Desde custos monetários a consciencialização ecológica, o mundo afasta-se de veículos fosseís à procura de outras soluções de mobilidade. A partilha de carro é uma das várias`´areas de inovação e pesquisa. Para participar nessa área de progresso comecei, em colaboração com o professor João Barreto, a idealizar uma solução para um mercado niche, nunca explorado: Emparelhar um grupo pré-formado que vai numa viagem conjunta (numa tentativa de reduzir os veículos utilizados)."
    },
     "My thesis was redacted in English (Research and Dissertation).": {
      pt: "A minha tese, desde a pesquisa à dissertação, foi realizada em Inglês."
    },
    "<u>Dissertation</u>": {
      pt: "<u>Dissertação</u>"
    },
    "<u>Research</u>": {
      pt: "<u>Pesquisa</u>"
    },
    "Abstract": {
      pt: "Resumo"
    },
    "Keywords": {
      pt: "Palavras Chave"
    },
    "Read Research": {
      pt: "Ler pesquisa"
    },
    "Title": {
      pt: "Título"
    },
    "Author": {
      pt: "Autor"
    },
    "Advisor": {
      pt: "Orientador"
    },
    "Examination Committee": {
      pt: "Comité de Avaliação"
    },
    "Implementation": {
      pt: "Implementação"
    },
    "Read Implementation": {
      pt: "Ler Implementação"
    },

    /* Contacts */
    "Contact me!": {
      pt: "Entrem em contacto!"
    },
    "Personal e-mail: ": {
      pt: "E-mail pessoal:  "
    },
    "Institutional e-mail: ": {
      pt: "E-mail institucional:  "
    },

    /*General */
    "(To be determined)": {
      pt: "(A ser determinado)"
    },
    "(To be announced)": {
      pt: "(A ser anunciado)"
    },
  };
  //starter language
  var _t = $('body').translate({lang: "en", t: t});

  //Onclick() based on language selected (html lang_selector class)
  $(".lang_selector").click(function() {
    var lang = $(this).attr("data-value"); //language selected
    _t.lang(lang); //translate

    //remove other languages as active
    $("#lang-list li").each(function (){ //from desktop/landscape menu
      $(this).removeClass("active");
    });
    $("#lang-list_mobile li").each(function (){ //from portrait menu
      $(this).removeClass("active");
    });

    //add new language as active
    var name = $(this).attr("name");
  	var page = name.split("-");
    $("#" + page[0] + "-link").addClass("active"); //on desktop/landscape menu
  	$("#" + page[0] + "-link_mobile").addClass("active"); //on portrait menu
  });

});
