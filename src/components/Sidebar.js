import React from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ListIcon from "@mui/icons-material/List";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DashNavi from "./DashNavi";
import { LoginOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className=" bg-overallBg w-[5%] h-[100vh] border-r-2 border-solid border-border-color">
      <DashNavi navigatorName="menu" navigatorIcon={ListIcon} type='menuBar' />
      <main className="border-b-[1px] border-b-gray-400 py-10 w-full flex flex-col  items-center justify-center">
        <DashNavi
          navigatorName="dashboard"
          navigatorIcon={DashboardCustomizeOutlinedIcon}
        />
        <DashNavi navigatorName="history" navigatorIcon={HistoryOutlinedIcon} />
        <DashNavi navigatorName="deposit" navigatorIcon={SavingsOutlinedIcon} />
        <DashNavi navigatorName="witdraw" navigatorIcon={PaymentOutlinedIcon} />
      </main>
      <aside className="flex flex-col items-end justify-center  mt-[100px]">
        <DashNavi navigatorName="support" navigatorIcon={ContactSupportIcon} />
        <DashNavi navigatorName="log out" navigatorIcon={LoginOutlined} />
      </aside>
    </div>
  );
};

export default Sidebar;
