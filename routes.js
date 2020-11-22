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

    app.get('/logoUnb',(req,res) => {
        res.sendFile(__dirname + '/content/logoUnb.png')
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