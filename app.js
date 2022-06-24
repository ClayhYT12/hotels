import express from 'express';
import axios  from 'axios';
const app = new express();


app.post('/regiao',(req, res) =>{
  GetHotels(req.body.nome,req,res);
});

app.post('/hotel',(req, res) =>{
  GetProprietes(req.body.idHotel,req.body.checkIn,req.body.checkOut,req.body.adults1,req.body.currency,req.body.locale,req,res);
});

function GetHotels(region,req,res){

  const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {
        query: region, // 'Fortaleza'
        locale: 'pt-BR',
        currency: 'BRL'},
      headers: {
        'X-RapidAPI-Key': '8713b78d67msh3a22109f3e72f7ap1a8900jsnbbd5cb8a35fe',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        res.json(response.data); // aqui no response vem os hoteis, faça o filtro como quiser um exemplo de filtro é suggestions, ficaria data.response.suggestions
    }).catch(function (error) {
        console.error(error);
    });
}

function GetProprietes(idHotel, checkIn, checkOut, adults1, currency, locale,req,res){
const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/get-details',
  params: {
    id: idHotel, // '424023'
    checkIn: checkIn, // 'AAAA-MM-DD'
    checkOut: checkOut, // 'AAAA-MM-DD'
    adults1: adults1, // '1'
    currency: currency, // 'USD'
    locale: locale // 'pt-BR'
  },
  headers: {
    'X-RapidAPI-Key': '8713b78d67msh3a22109f3e72f7ap1a8900jsnbbd5cb8a35fe',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	res.json(response.data);

}).catch(function (error) {
	console.error(error);
});
}

//GetHotels('Fortaleza'); // COM ESTE COMANDO EU PROCURO A REGIAO DO HOTEL
//GetProprietes('385023','2022-07-03','2022-07-10','1','BRL','pt-br') // COM ESTE COMANDO EU PROCURO O VALOR DO PREÇO DEPENDENDO AS OPÇÕES QUE COLOCAR
app.listen(5000);