function muteUnmute() { 
    var video = document.getElementById('videoIntroducao')
    var a = document.getElementsByClassName('btn-trans')
    if(video.muted) {
        video.muted = false;
        a[0].innerText = 'Mute'
        video.play()
    } else {
        video.muted = true;
        a[0].innerText = 'Play'
        video.pause()
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
        }
    ];
return questions;
}