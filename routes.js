module.exports = function(app){
    
    app.get('/css/style.css', (req,res) =>{
        res.sendFile(__dirname + '/css/style.css')
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

    app.get('/',(req,res) => {
        res.render('./home')
    })
    // TrabalhoPIC
    app.get('/home', (req,res) => {
        res.render('./home')
    })
    app.get('/intrucoes', (req,res) => {
        res.render('./intrucoes')
    })
    app.get('/atividades', (req,res) => {
        res.render('./atividades')
    })
    app.get('/sobre', (req,res) => {
        res.render('./sobre')
    })
}