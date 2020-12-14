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

    app.get('/music',(req,res) => {
        res.sendFile(__dirname + '/content/music.mp4')
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

    app.get('/questao/',(req,res) => {
        res.sendFile(__dirname + '/content/questoes/.png')
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

    app.get('/questao1', (req,res) => {
        res.sendFile(__dirname + '/views/modals/questao1.html')
    })

}