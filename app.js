import express from 'express';
import axios  from 'axios';
const app = new express();


function GetHotels(region){

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
        console.log(response.data.suggestions[1]); // aqui no response vem os hoteis, faça o filtro como quiser um exemplo de filtro é suggestions, ficaria data.response.suggestions
    }).catch(function (error) {
        console.error(error);
    });
}

function GetProprietes(idHotel, checkIn, checkOut, adults1, currency, locale){
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
	console.log(response.data.data.body.pageInfo.pageType);

}).catch(function (error) {
	console.error(error);
});
}

GetHotels('Fortaleza'); // COM ESTE COMANDO EU PROCURO A REGIAO DO HOTEL
GetProprietes('385023','2022-07-03','2022-07-10','1','BRL','pt-br') // COM ESTE COMANDO EU PROCURO O VALOR DO PREÇO DEPENDENDO AS OPÇÕES QUE COLOCAR
app.listen(8080);