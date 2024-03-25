import React from 'react'
import { useEffect } from 'react';

const Tradingwidget = () => {
    useEffect(() => {
      const MarketValues = document.createElement('script');
      MarketValues.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      MarketValues.async = true;
      MarketValues.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "BTC",
        "colorTheme": "light",
        "locale": "en",
        "isTransparent": true
      });
    
      document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(MarketValues);
    
      return () => {
        document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(MarketValues);
      };
    }, []);
  return (
    <div className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container__widget w-full h-[80vh"></div>
    </div>
  )
}

export default Tradingwidget

