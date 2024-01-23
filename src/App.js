import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //한번만 작동하도록 
  //api를 받아옴
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => setCoins(json));
    //setting이 끝나면 상태를 false로 하여 loading을 끝냄
    setLoading(false);
  }, [])
  return ( 
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

    {loading ? (
      <strong>Loading...</strong>
      ): ( 
      //api와 mapping function을 이용하여 coin의 정보를 가져옴
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </option>
          ))}
      </select>
    )}

    

  </div>
  );
}

export default App;
