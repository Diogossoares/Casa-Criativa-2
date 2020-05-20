//usei o express para criar e confugurarmeu servidor
const express = require("express")
const server = express()
//configurar arquivos estśticos (css,scripsts,imagens)
server.use(express.static("public"))
//criei uma rotina/
//e capturo o pedido do cliente para responder
server.get("/",function(req, res) {
    return res.sendFile(__dirname + "/index.html")
    server.get("/ideias",function(req, res){
    })
})
server.get("/ideias",function(req, res) {
    return res.sendFile(__dirname + "/ideias.html")
    server.get("/ideias",function(req, res){
    })
})
//liguei meu servidor na porta 3000
server.listen(3000)http://127.0.0.1:3000/index.html