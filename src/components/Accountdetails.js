import React, { useEffect, useState } from 'react'
import QrCode from '../images/Qrcode.jpg'
import Btclogo from '../images/bitcoin.png'
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Accountdetails = () => {
  const [btcExchangeRate, setbtcExchangeRate] = useState('');
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
          const btcRate = data.rates.BTC * 1000
          setbtcExchangeRate(btcRate.toString().substring(0, 5));
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchQuote()
  }, [])

  const btcAdress = 'bc1ql38t9duyuxzwmwpnpl6gfur79mg7e4ur2zewxc';
  
  let copyToClipboard = () =>{
      navigator.clipboard.writeText(btcAdress);
      toast.success('successfully copied to clipboard')
  }

  return (
    <div className='w-full md:w-[75%] overflow-auto h-[70%] rounded-md bg-overallBg flex flex-col items-center justify-center md:justify-start p-[20px] gap-3 md:overflow-hidden'>
      <main className='flex w-full h-fit items-center md:items-start justify-center md:justify-between flex-col md:flex-row'>
        <div className='md:w-[35%] w-full md:mt-0 mt-[350px] md:h-full flex flex-col items-center md:items-start justify-center md:gap-8 gap-4'>
          <img src={QrCode} alt='qrcode img' className='w-[90%] h-[60%]' />
          <p className='w-ful text-center md:text-left text-md text-logo-color leading-6'>
          Scan the QR Code in your mobile banking app, confirm the amount, review, and confirm. Wait for the confirmation message in your app.
          </p>
        </div>
        <div className='md:w-[60%] w-full h-full flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start justify-center gap-3 w-full h-full'>
            <label className='font-sans font-bold text-xl text-logo-color capitalize'>Currency</label>
            <div className='md:w-[80%] w-full h-[45px] border-2 border-logo-color rounded-md px-5 flex items-center bg-white justify-start gap-3'>
              <img src={Btclogo} alt='btc logo' className='w-[30px] h-[30px]' />
              <h4 className='font-bold text-xl font-sans text-logo-color'>BITCOIN</h4>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col w-full h-full'>
            <h1 className='font-bold font-sans text-neon-blue text-lg py-5 gap-3 w-full capitalize flex items-center justify-start'> <InfoIcon 
            /> Send BTC to this adress only</h1>
            <p className='text-lg font-sans text-logo-color leading-7 items-center justify-start w-full'>
              <span className='font-bold'>Trade Ace accept deposit starting from {btcExchangeRate} BTC</span>, 
              which is equivalent to 1,000USD. Make sure to be careful while making the payment, otherwise you may lose your capital to unknown adress.
            </p> 
          </div>
        </div>
      </main>
      <aside className='flex w-full items-center justify-center'>
        <div className='md:px-5 px-3 py-2 w-full md:w-[80%] flex items-center justify-center md:justify-between gap-3 bg-white' onClick={copyToClipboard}>
          <p className='w-[90%] overflow-x-auto md:w-full'>{btcAdress}</p>
          <ContentCopyOutlinedIcon 
            style={{
              cursor: 'pointer'
            }}
          />
        </div>
      </aside>
    </div>
  )
}

export default Accountdetails
