import React from 'react'
import { useEffect } from 'react';

const Tradingwidget = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "BTC",
        "colorTheme": "light",
        "locale": "en",
        "isTransparent": true
      });
    
      document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
    
      return () => {
        document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(script);
      };
    }, []);
  return (
    <div className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  )
}

export default Tradingwidget

