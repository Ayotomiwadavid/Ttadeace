import React, { useState } from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ListIcon from "@mui/icons-material/List";
import DashNavi from "./DashNavi";
import { LoginOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOutFunc } from "../config/controller";

const Sidebar = () => {
  let [showdashMenu, setShowDashMenu] = useState(false);
    //DECLARING USENAVIGATE
    const navigate = useNavigate()

  let handleMenuVisibility = () => {
    setShowDashMenu((prevValue) => {
      if (prevValue === true) {
        return false
      } else {
        return true
      }
    })
  }
  let handleLogout = () => {
    toast.loading("We're logging you out");
    setTimeout(()=>{
      toast.success('logout success');
    }, 3000)
    setInterval(()=>{
      navigate(`/sign/in`, { replace: true })
      signOutFunc();
    }, 5000);
  }

  let handleClick = () =>{
      handleLogout();
  }

  return (
    <div className={showdashMenu ? "hidden md:flex items-center justify-center flex-col bg-overallBg w-[15%] h-[100vh] border-r-2 border-solid border-border-color transition-all duration-300 py-10" : "hidden md:flex items-center justify-center flex-col py-10 bg-overallBg w-[5%] h-[100vh] border-r-2 border-solid border-border-color transition-all duration-300"}>
      <DashNavi navigatorName="menu" navigatorIcon={ListIcon} type='menuBar' onClick={handleMenuVisibility} status={showdashMenu} />
      <main className="border-b-[1px] border-b-gray-400 py-10 w-full flex flex-col  items-center justify-center">
        <Link to='/dashboard' className="w-full flex items-center justify-between">
          <DashNavi navigatorName="dashboard" navigatorIcon={DashboardCustomizeOutlinedIcon} status={showdashMenu} />
        </Link>
        <Link to='/user-history' className="w-full flex items-center justify-between">
          <DashNavi navigatorName="history" navigatorIcon={HistoryOutlinedIcon} status={showdashMenu} />
        </Link>
        <Link to='/deposit/' className="w-full flex items-center justify-between">
          <DashNavi navigatorName="deposit"  navigatorIcon={SavingsOutlinedIcon} status={showdashMenu} />
        </Link>
        <Link to='/withdraw' className="w-full flex items-center justify-between">
          <DashNavi navigatorName="witdraw" navigatorIcon={PaymentOutlinedIcon} status={showdashMenu} />
        </Link>
      </main>
      <aside className="flex flex-col w-full items-center justify-between  mt-[200px]" onClick={handleClick}>
        <DashNavi navigatorName="log out" navigatorIcon={LoginOutlined} status={showdashMenu} />
      </aside>
    </div>
  );
};

export default Sidebar;
