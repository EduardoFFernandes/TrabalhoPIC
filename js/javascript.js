function muteUnmute() { 
    var video = document.getElementById('videoIntroducao')
    var a = document.getElementsByClassName('btn-trans')
    if(video.muted) {
        video.muted = false;
        a[0].innerText = 'Pausar'
        video.play()
    } else {
        video.muted = true;
        a[0].innerText = 'Reproduzir'
        video.pause()
    }
}
function goFullscreen(id) {
    var element = document.getElementById(id);       
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        document.getElementsByClassName('btn-trans')[0].innerText = 'Pausar'
        element.muted = false;
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
        document.getElementsByClassName('btn-trans')[0].innerText = 'Pausar'
        element.muted = false;
    }  
}

function allTrue(element, index, array) {
    return element == true;
}

function addButton(dataNum) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
    //Assign different attributes to the element. 
    element.type = "button";
    $(element).addClass('btn-trans btn');
    element.setAttribute("data-toggle","modal")
    element.setAttribute("data-target","#myModal")
    element.setAttribute("data-num", dataNum)
    element.innerText = "Questão " + (dataNum + 1);
    var buttons = $(".buttons")[0]
    //Append the element in page (in span).  
    buttons.appendChild(element);
}

function getQuestions() {

    const questions = [
        {
            title: 'Questão 1',
            pictureUrl: '/presenteA',
            description: 'Qual a massa(Em quilos) do Presente A?',
            answer: '20'
        },
        {
            title: 'Questão 2',
            pictureUrl: '/presenteB',
            description: 'Qual a massa(Em quilos) do Presente B?',
            answer: '5'
        },
        {
            title: 'Questão 3',
            pictureUrl: '/presenteC',
            description: 'Qual a massa(Em quilos) do Presente C?',
            answer: '15'
        },
        {
            title: 'Questão 4',
            pictureUrl: '/presenteD',
            description: 'Qual a massa(Em quilos) do Presente D?',
            answer: '10'
        },
        {
            title: 'Questão 5',
            pictureUrl: '/presenteE',
            description: 'Qual a massa(Em quilos) do Presente E?',
            answer: '2.5'
        },
        {
            title: 'Questão 6',
            pictureUrl: '/presenteF',
            description: 'Qual a massa(Em quilos) do Presente F?',
            answer: '50'
        },
        {
            title: 'Questão 7',
            pictureUrl: '/presenteG',
            description: 'Qual a massa(Em quilos) do Presente G?',
            answer: '25'
        },
        {
            title: 'Questão 8',
            pictureUrl: '/presenteH',
            description: 'Qual a massa(Em quilos) do Presente H?',
            answer: '7.5'
        },
        {
            title: 'Questão 9',
            pictureUrl: '/questao9',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '30'
        },
        {
            title: 'Questão 10',
            pictureUrl: '/questao10',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '60'
        },
        {
            title: 'Questão 11',
            pictureUrl: '/questao11',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '97.5'
        },
        {
            title: 'Questão 12',
            pictureUrl: '/questao12',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '22.5'
        },
        {
            title: 'Questão 13',
            pictureUrl: '/questao13',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '15'
        },
        {
            title: 'Questão 14',
            pictureUrl: '/questao14',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '10'
        },
        {
            title: 'Questão 15',
            pictureUrl: '/questao15',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '60'
        },
        {
            title: 'Questão 16',
            pictureUrl: '/questao16',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '30'
        },
        {
            title: 'Questão 17',
            pictureUrl: '/questao17',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '82.5'
        },
        {
            title: 'Questão 18',
            pictureUrl: '/questao18',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '30'
        },
        {
            title: 'Questão 19',
            pictureUrl: '/questao19',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '55'
        },
        {
            title: 'Questão 20',
            pictureUrl: '/questao20',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '37.5'
        },
        {
            title: 'Questão 21',
            pictureUrl: '/questao21',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '137.5'
        },
        {
            title: 'Questão 22',
            pictureUrl: '/questao22',
            description: 'Qual a massa(Em quilos) que deve ficar no local indicado pela seta para equilibrar a gangorra?',
            answer: '92.5'
        }
    ];
    return questions;
}

function showQuestion(event, $modal) {
    var button = $(event.relatedTarget);  // Button that triggered the modal
    var num = parseInt(button.data('num'));
    var question = questions[num];
    $modal.find('.modal-title').text(question.title);
    $modal.find('.modal-picture').attr('src',question.pictureUrl);
    if(num >= 0 && num <= 7){
        $($modal.find('.modal-picture')).css('width','10%');
    } else {
        $($modal.find('.modal-picture')).css('width','80%');
    }
    $modal.find('.modal-description').text(question.description);
    $modal.find('.modal-answer').val(question.answer); 
    $modal.find('#buttonId').val(num); 
    $modal.find('.modal-question').change((e) => {
        var input = e.target;
        if(e.target.value == $modal.find('.modal-answer').val()) {
            input.animate({backgroundColor: "#14980f94"}, 100).onfinish = () => {
                $(input).css("background", "#14980f94");
            };
        } else {
            input.animate({backgroundColor: "#ac000094"}, 100).onfinish = () => {
                $(input).css("background", "#ac000094");
            };
        }
    });
}

function responder() {
    var button = $('.buttons').children()[$('#buttonId').val()]
    var answer = $('.modal-answer').val(); 
    var question = $('.modal-question').val(); 

    if(answer == question){
        button.animate({backgroundColor: "#14980f94", color: '#000'}, 1000).onfinish = () => {
            $(button).css("background", "#14980f94");
            $(button).css("color", "#000");
        };
    } else {
        button.animate({backgroundColor: "#ac000094", color: '#000'}, 1000).onfinish = () => {
            $(button).css("background", "#ac000094");
        };
    }
}