const http = require('http');
const fs = require('fs');
const queryString=require("querystring")
function sayfa(deger) {
  const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  return html.replace('DEGER', deger);
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.method === 'POST' && req.url==="/") {
    var bufferHolder=[];
    //okunabilecek her buffer bize ulaştığında 
    req.on('data', (chunksFromBuffer) => {
        console.log(chunksFromBuffer);//veriler chunklar halinde gönderilir ve buffer üzerinde tutulur
        bufferHolder.push(chunksFromBuffer);
    });

    req.on('end', () => {
      const parsedBody=Buffer.concat(bufferHolder).toString();
      var currentMessage=parsedBody.split("=")[1];
      fs.appendFileSync(__dirname + '/deneme.txt', `${currentMessage}\n`);
      //query string vasıtasıyla düz string değilde obje de dönebiliriz.
      console.log(queryString.parse(parsedBody));
      console.log(currentMessage);
      res.end(sayfa(currentMessage));
    });
  } else {
    res.end(sayfa(''));
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));