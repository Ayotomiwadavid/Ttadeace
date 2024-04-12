import React from "react";
import { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const TradingView = document.createElement('script');
    TradingView.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    TradingView.async = true;
    TradingView.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "enable_publishing": true,
      "backgroundColor": "rgba(226, 242, 237, 1)",
      "gridColor": "rgba(226, 242, 237, 0)",
      "withdateranges": true,
      "range": "YTD",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "hotlist": true,
      "calendar": false,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "support_host": "https://www.tradingview.com",
      "isTransparent": true
    });

    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(TradingView);
  }, []);

  return (
    <div className="tradingview-widget-container__widget h-[80vh] w-full"></div>
  );
};

export default TradingViewChart;
