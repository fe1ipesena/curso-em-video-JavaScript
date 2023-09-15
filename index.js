const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"))

app.get('/', (req, res) => {        //get pede ao root ("/") rotear aqui
    res.sendFile('index.html', {root: __dirname});      //server retorna mandando o index.html para o browser
                                                        //o .sendFile precisa do absolute caminho para o arquivo: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //servidor interpreta listening tentativas do client a conectar na porta: {port}
    console.log(`Now listening on port ${port}`); 
});