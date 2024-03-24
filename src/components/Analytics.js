import React from "react";
import Tradingwidget from "./Tradingwidget";
import TradingViewChart from "./Barchart";

const Analytics = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-fit items-center justify-center">
      <TradingViewChart />
      <Tradingwidget />
    </div>
  );
};

export default Analytics;
