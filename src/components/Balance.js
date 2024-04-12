import React, { useEffect, useState } from 'react'
import Balancecard from './Balancecard'
import cardImage from '../images/bg-card-front.png'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'

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
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchQuote()
  }, [])

  return (
    <div className='w-full rounded-lg bg-neon-blue mb-5 md:flex-row flex gap-5 items-center justify-center md:justify-between px-3 overflow-auto h-fit md:gap-10'>
      <div className='ml-[340px] py-5 w-full flex-shrink-0 md:w-1/2 relative'>
        <img src={cardImage} alt='card img' className='h-[200px] w-full' />
        <div className='h-[200px] w-full rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center'>
          <div className='w-full items-center justify-between flex px-5'>
            <h1 className='text-white text-lg capitalize w-[80%] font-bold p-5 md:w-[50%] px-0'>Your Balance From Your Last Deposit</h1>
            <div className='rounded-full border-2 border-white w-[40px] h-[40px] flex items-center justify-center mb-5'>
              <Link to='/deposit'>
                <Add
                  style={{
                    fontSize: '35px',
                    fontWeight: 'bolder',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                />
              </Link>
            </div>
          </div>
          <p className='text-white font-bold p-10 px-5 w-full text-left text-2xl uppercase'>{balance} usd</p>
        </div>
      </div>

      <div className=' py-5 w-full flex-shrink-0 md:w-1/2 relative'>
        <img src={cardImage} alt='card img' className='h-[200px] w-full' />
        <div className='h-[200px] w-full rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center'>
          <div className='w-full items-center justify-between flex px-5'>
            <h1 className='text-white text-lg capitalize font-bold p-5 w-[80%] md:w-[50%] px-0'>Your earned BTC Balance</h1>
            <div className='rounded-full border-2 border-white w-[40px] h-[40px] flex items-center justify-center m-5'>
              <Link to='/deposit'>
                <Add
                  style={{
                    fontSize: '35px',
                    fontWeight: 'bolder',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                />
              </Link>
            </div>
          </div>
          <p className='text-white font-bold p-10 px-5 w-full text-left text-2xl uppercase'>{btcExchangeRate.toString().substring(0, 5)} btc</p>
        </div>
      </div>
      {/* <Balancecard
        balance= {balance}
        cardDescription='Your Balance From Your Last Deposit'
        currencySymbol='usd'
      /> */}
      {/* <Balancecard
        balance=
        cardDescription=''
        currencySymbol='btc'
      /> */}
    </div>
  )
}

export default Balance
