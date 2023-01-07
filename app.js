let p = fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
  p.then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json);
        let coinsData = json;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td> <img src="${coin.image}" width="50" height="50"> </td>`;
          cryptoCoin += `<td> ${coin.name} </td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;
          cryptoCoin += `<td> $${coin.current_price} </td>`;
          cryptoCoin += `<td> $${coin.total_volume}</td>`;
          cryptoCoin += `<td> ${coin.market_cap_change_percentage_24h}%</td>`;
          cryptoCoin += `<td> Mkt Cap: $${coin.market_cap} </td>`;
          
          
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });