import React from "react";
import { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      "isTransparent": true
    });

    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

    return () => {
      document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container__widget h-[80vh] w-full"></div>
  );
};

export default TradingViewChart;
