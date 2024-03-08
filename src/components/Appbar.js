import React, { useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import logo from "../images/acetradeLogo.png";
import { app, auth } from "../config/firebase.config";
import { getDatabase, ref, get } from "firebase/database";

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
    <div className="border-2 border-solid border-border-color w-full p-9">
      <div>
        <ListIcon />
        <div className="flex items-center md:p-5 justify-start w-1/2">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] rounded-full"
          />
          <span className="font-bold text-sm font-sans text-logo-color md:text-2xl">
            wecome, {user}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
