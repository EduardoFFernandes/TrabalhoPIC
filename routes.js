module.exports = function(app){
    
    app.get('/css/style.css', (req,res) =>{
        res.sendFile(__dirname + '/css/style.css')
    })

    app.get('/css/figuras.css', (req,res) =>{
        res.sendFile(__dirname + '/css/figuras.css')
    })

    app.get('/js/javascript.js',(req,res) =>{
        res.sendFile(__dirname + '/js/javascript.js')
    })

    app.get('/background',(req,res) => {
        res.sendFile(__dirname + '/content/background.jpg')
    })

    app.get('/introducao',(req,res) => {
        res.sendFile(__dirname + '/content/introducao.mp4')
    })

    app.get('/tutorial',(req,res) => {
        res.sendFile(__dirname + '/content/tutorial.mp4')
    })

    app.get('/logoUnb',(req,res) => {
        res.sendFile(__dirname + '/content/logoUnb.png')
    })

    app.get('/imagem1',(req,res) => {
        res.sendFile(__dirname + '/content/Imagem_1.png')
    })

    app.get('/imagem2',(req,res) => {
        res.sendFile(__dirname + '/content/Imagem_2.png')
    })

    app.get('/imagem3',(req,res) => {
        res.sendFile(__dirname + '/content/Imagem_3.png')
    })

    app.get('/imagem4',(req,res) => {
        res.sendFile(__dirname + '/content/Imagem_4.png')
    })

    app.get('/',(req,res) => {
        res.render('./home')
    })
    // TrabalhoPIC
    app.get('/home', (req,res) => {
        res.render('./home')
    })
    app.get('/atividades', (req,res) => {
        res.render('./atividades')
    })
    app.get('/sobre', (req,res) => {
        res.render('./sobre')
    })

    // Content
    app.get('/presenteA',(req,res) => {
        res.sendFile(__dirname + '/content/Presente A.png')
    })
    app.get('/presenteB',(req,res) => {
        res.sendFile(__dirname + '/content/Presente B.png')
    })
    app.get('/presenteC',(req,res) => {
        res.sendFile(__dirname + '/content/Presente C.png')
    })
    app.get('/presenteD',(req,res) => {
        res.sendFile(__dirname + '/content/Presente D.png')
    })
    app.get('/presenteE',(req,res) => {
        res.sendFile(__dirname + '/content/Presente E.png')
    })
    app.get('/presenteF',(req,res) => {
        res.sendFile(__dirname + '/content/Presente F.png')
    })
    app.get('/presenteG',(req,res) => {
        res.sendFile(__dirname + '/content/Presente G.png')
    })
    app.get('/presenteH',(req,res) => {
        res.sendFile(__dirname + '/content/Presente H.png')
    })
    app.get('/questao9',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/9.png')
    })
    app.get('/questao10',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/10.png')
    })
    app.get('/questao11',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/11.png')
    })
    app.get('/questao12',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/12.png')
    })
    app.get('/questao13',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/13.png')
    })
    app.get('/questao14',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/14.png')
    })
    app.get('/questao15',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/15.png')
    })
    app.get('/questao16',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/16.png')
    })
    app.get('/questao17',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/17.png')
    })
    app.get('/questao18',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/18.png')
    })
    app.get('/questao19',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/19.png')
    })
    app.get('/questao20',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/20.png')
    })
    app.get('/questao21',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/21.png')
    })
    app.get('/questao22',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/22.png')
    })
}