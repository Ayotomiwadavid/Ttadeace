import React, { useState } from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ListIcon from "@mui/icons-material/List";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DashNavi from "./DashNavi";
import { LoginOutlined } from "@mui/icons-material";

const Sidebar = () => {
  let [showdashMenu, setShowDashMenu] = useState(false);

  let handleMenuVisibility = () => {
    setShowDashMenu((prevValue) => {
      if (prevValue === true) {
        return false
      } else {
        return true
      }
    })
  }
  return (
    <div className={showdashMenu ? "hidden md:flex items-center justify-center flex-col bg-overallBg w-[15%] h-[100vh] border-r-2 border-solid border-border-color transition-all duration-300 py-10" : "hidden md:flex items-center justify-center flex-col py-10 bg-overallBg w-[5%] h-[100vh] border-r-2 border-solid border-border-color transition-all duration-300"}>
        <DashNavi navigatorName="menu" navigatorIcon={ListIcon} type='menuBar' onClick={handleMenuVisibility} status={showdashMenu} />
      <main className="border-b-[1px] border-b-gray-400 py-10 w-full flex flex-col  items-center justify-center">
        <DashNavi navigatorName="dashboard" navigatorIcon={DashboardCustomizeOutlinedIcon} status={showdashMenu}/>
        <DashNavi navigatorName="history" navigatorIcon={HistoryOutlinedIcon} status={showdashMenu} />
        <DashNavi navigatorName="deposit" navigatorIcon={SavingsOutlinedIcon} status={showdashMenu} />
        <DashNavi navigatorName="witdraw" navigatorIcon={PaymentOutlinedIcon} status={showdashMenu} />
      </main>
      <aside className="flex flex-col items-end justify-center  mt-[100px]">
        <DashNavi navigatorName="support" navigatorIcon={ContactSupportIcon} status={showdashMenu} />
        <DashNavi navigatorName="log out" navigatorIcon={LoginOutlined} status={showdashMenu} />
      </aside>
    </div>
  );
};

export default Sidebar;
