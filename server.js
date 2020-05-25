//usei o express para criar e confugurarmeu servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title:"Curso de programação",
        category:"Estudo",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid rem, facilis asperiores dolorum reiciendis voluptates illum totam,",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title:"Exercícios",
        category:"Saúde",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid rem, facilis asperiores dolorum reiciendis voluptates illum totam,",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid rem, facilis asperiores dolorum reiciendis voluptates illum totam,",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title:"Karaokê",
        category:"Diversão em Família",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid rem, facilis asperiores dolorum reiciendis voluptates illum totam,",
        url:"https://rocketseat.com.br"
    }
]





//configurar arquivos estśticos (css,scripsts,imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express:server,
    noCache:true,// boolean
})


//criei uma rotina/
//e capturo o pedido do cliente para responder
server.get("/",function(req, res) {
    return res.render("index.html", {ideas})
})
server.get("/ideias",function(req, res) {
    return res.render( "ideias.html")
})
//liguei meu servidor na porta 3000
server.listen(3003)