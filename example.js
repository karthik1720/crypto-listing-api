import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    limit: "50",
    offset: "0",
    orderBy: "24hVolume",
    orderDirection: "desc",
  },
  headers: {
    "X-RapidAPI-Key": "1d06973f55msh349d3c43b0dd987p1ccd86jsn141c59eab24f",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
