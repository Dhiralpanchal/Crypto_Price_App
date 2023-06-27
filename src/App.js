
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Coins from './components/Coins';
function App() {

  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord , setSeachWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((res) => {
        setListOfCoins(res.data.coins);
      });
  }, []);

  const handleChange = (event) => {
    setSeachWord(event.target.value);
  }
   
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1 className='brand'>
          CryptoPrice
        </h1>
        <input type="text" placeholder='Search a Coin'
        onChange = {handleChange }/>
      </div>
      <div className="cryptoDisplay">
        {
          filteredCoins.map((coin) => {
            return (
              <Coins
                
                name={coin.name}
                icon={coin.icon}
                price ={coin.price}
                symbol={coin.symbol}
              />);
          }

          )
        }
      </div>
    </div>
  );
}

export default App;
