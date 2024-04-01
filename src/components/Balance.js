import React, { useEffect, useState } from 'react'
import Balancecard from './Balancecard'

const Balance = (props) => {
  const [btcExchangeRate, setbtcExchangeRate] = useState('');
  let [balance, setBalance] = useState('')
  useEffect(() => {
    let fetchQuote = async () => {
      const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '14872a486bmshc55264aa979777fp150d9ejsn10b884389f0d',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };

      await fetch(url, options)
        .then(res => res.json())
        .then(data => {
          const btcRate = data.rates.BTC
          const btcEarned = 1000;
          setBalance(btcEarned)
          setbtcExchangeRate(btcRate * btcEarned);
          // function btcToUSD(btcAmount, exchangeRate) {
          //   return btcAmount * exchangeRate;
          // }

          // const exchangeRate = btcRate; // 1 USD to BTC exchange rate
          console.log(btcRate * 1000)
          // const usdEarned = btcToUSD(btcEarned, exchangeRate);
          // console.log(usdEarned); // Output will be the equivalent USD amount
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchQuote()
  }, [])

  return (
    <div className='w-full rounded-lg bg-neon-blue mb-5 flex-col md:flex-row flex items-center justify-center md:justify-between px-5 max-h-[300px] gap-5  overflow-auto h-fit md:gap-10'>
      <Balancecard
        balance= {balance}
        cardDescription='Your Balance From Your Last Deposit'
        currencySymbol='usd'
      />
      <Balancecard
        balance={btcExchangeRate.toString().substring(0, 5)}
        cardDescription='Your earned BTC Balance'
        currencySymbol='btc'
      />
    </div>
  )
}

export default Balance
