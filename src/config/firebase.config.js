import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyC5zti3r-YRdvYexvSGK5zaXlyV9zou_ns",
    authDomain: "tradeace-backend-95e84.firebaseapp.com",
    databaseURL: "https://tradeace-backend-95e84-default-rtdb.firebaseio.com",
    projectId: "tradeace-backend-95e84",
    storageBucket: "tradeace-backend-95e84.appspot.com",
    messagingSenderId: "722664596397",
    appId: "1:722664596397:web:52d69cd1f292d035147724"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LcMFKwpAAAAAGXDxkeQ56PPdRFNG1z4iML0WrBu'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

export {app, auth};