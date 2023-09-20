const express = require("express")
const mysql2 = require("mysql2")
const port = process.env.PORT || 3001

const app = express();
app.use(express.json());


app.get("/",(rep,res) =>{

const connection =mysql2.createConnection({

    host:'localhost',
    user : 'root',
    password: "Azerty+123",
    database: "touristique",

});







connection.connect((err) =>{
    if(err){
        console.error("Erreur de connexion : "+err.stack)
        return;
    }
    console.log('Connection reussi a la bdd !')
});

connection.query("select*from produits",(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows)
})



connection.end()
    
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const connection = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
         password: "Azerty+123",
        database: 'touristique',
      });
      connection.query("DELETE FROM favoris WHERE id = ?", id, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });  

    app.delete("/delet/:id", (req, res) => {
      const id = req.params.id;
      const connection = mysql2.createConnection({
          host: 'localhost',
          user: 'root',
          password: "Azerty+123",
          database: 'touristique',
        });
        connection.query("DELETE FROM trip WHERE id = ?", id, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      });  
    

app.post("/create", (req, res) => {
    const connection = mysql2.createConnection({
      host: 'localhost',
      user: 'root',
       password: "Azerty+123",
      database: 'touristique',
    });
  
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const categorie = req.body.categorie;
    const ville = req.body.ville;
    const adresse = req.body.adresse;
  
    connection.query(
      "INSERT INTO favoris (name, description, price, image, categorie, ville, adresse) VALUES (?,?,?,?,?,?,?)",
      [name, description, price, image, categorie, ville, adresse],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Une erreur s\'est produite.' });
        } else {
          res.send("Values Inserted");
        }
        // Une fois la requête terminée et la réponse renvoyée, fermez la connexion
        connection.end();
      }
    );
  });
  app.post("/creat", (req, res) => {
    const connection = mysql2.createConnection({
      host: 'localhost',
      user: 'root',
       password: "Azerty+123",
      database: 'touristique',
    });
  
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const categorie = req.body.categorie;
    const ville = req.body.ville;
    const adresse = req.body.adresse;
  
    connection.query(
      "INSERT INTO trip (name, description, price, image, categorie, ville, adresse) VALUES (?,?,?,?,?,?,?)",
      [name, description, price, image, categorie, ville, adresse],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Une erreur s\'est produite.' });
        } else {
          res.send("Values Inserted");
        }
        // Une fois la requête terminée et la réponse renvoyée, fermez la connexion
        connection.end();
      }
    );
  });

  app.get("/favoris",(rep,res) =>{

    const connection =mysql2.createConnection({
    
        host:'localhost',
        user : 'root',
         password: "Azerty+123",
        database: "touristique",
    
    });
    
    
    
    
    
    connection.connect((err) =>{
        if(err){
            console.error("Erreur de connexion : "+err.stack)
            return;
        }
        console.log('Connection reussi a la bdd !')
    });
    
    connection.query("select*from favoris",(err,rows,fields)=>{
        if(err) throw err;
        res.json(rows)
    })
    
    
    
    connection.end()
        
    })

    app.get("/favori",(rep,res) =>{

      const connection =mysql2.createConnection({
      
          host:'localhost',
          user : 'root',
           password: "Azerty+123",
          database: "touristique",
      
      });
      
      
      
      
      
      connection.connect((err) =>{
          if(err){
              console.error("Erreur de connexion : "+err.stack)
              return;
          }
          console.log('Connection reussi a la bdd !')
      });
      
      connection.query("select*from trip",(err,rows,fields)=>{
          if(err) throw err;
          res.json(rows)
      })
      
      
      
      connection.end()
          
      })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.listen(port, () => {
    console.log("serveur est en ligne !");
})