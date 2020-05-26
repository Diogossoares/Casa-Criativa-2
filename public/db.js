const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')
db.serialize(function(){
 //driar a tabela
  db.run(`
      CREATE TABLE IF NOT EXISTS ideas(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          image TEXT,
          title TEXT,
          category TEXT,
          description TEXT,
          link TEXT
      );
  `)

 //inserir dado na tabela
 const query =`
 INSERT INTO ideas(
     image,
     title,
     category,
     descripton,
     links
 ) VALUES(?,?,?,?,?);
`
const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Curso de programação",
    "Estudo",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid rem, facilis asperiores dolorum reiciendis voluptates illum totam,",
    "https://rocketseat.com.br"
 ]
 db.run(query, values, function(err){
      if (err) return console.log(err)
      console.log(this)
 })
 //consultar dados na tabela
 //deletar um dado da tabela


})
