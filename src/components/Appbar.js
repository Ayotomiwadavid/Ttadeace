import React, { useEffect, useState } from "react";
import logo from "../images/acetradeLogo.png";
import { app, auth } from "../config/firebase.config";
import { getDatabase, ref, get } from "firebase/database";
import { CalendarMonth } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Appbar = () => {
  let [user, setUser] = useState("");

  let readUserData = async (email) => {
    var atIndex = email.indexOf("@");
    var newUserEmail = email.substring(0, atIndex);
    const database = getDatabase(app);
    const databaseRef = ref(database, `users/${newUserEmail}`);
    const snapshot = await get(databaseRef);
    if (snapshot.exists()) {
      let firstuserName = Object.values(snapshot.val());
      let realName = firstuserName[0].userName;
      var atRealNameSpaceIndex = realName.indexOf(' ');
      var userName = realName.substring(0, atRealNameSpaceIndex);
      setUser(userName)
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      let acountUser = userCred.email;
      readUserData(acountUser);
    });
  }, []);

  return (
    <div className="border-b-[1px] bg-overallBg border-solid border-border-color w-full md:p-2 flex items-center justify-between absolute top-0 right-0">
      <div className="flex w-full md:w-1/2 items-center justify-start px-3">
        <div className="flex items-center md:p-2 justify-start w-full">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] rounded-full"
          />
          <span className="font-bold text-sm font-sans text-logo-color md:text-2xl w-full">
            welcome, {user}
          </span>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex items-center justify-end gap-5">
        <div className="hidden md:flex p-2 items-center justify-center border-[1px] border-logo-color rounded-3xl w-[170px] m-4">
          <CalendarMonth 
            style={{
              color:"#252c47",
              marginRight: "10px",
              fontSize:"30px"
            }}
          />
          <p className="text-logo-color capitalize">mar, 09 2024</p>
        </div>
        <div className="flex p-2 cursor-pointer items-center justify-center border-[1px] border-logo-color rounded-3xl w-[170px] m-4">
          <AccountCircleIcon
            style={{
              color:"#252c47",
              marginRight: "10px",
              fontSize: '35px'
            }}
          />
          <p className="text-logo-color capitalize">{user}</p>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
