//Importing neccessary firebase dependencies
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { app, auth } from '../config/firebase.config';
import { getDatabase, ref, set, push, get } from 'firebase/database'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//SAVING USER AFTER SIGNUP
export const saveUser = async (userData) => {

    const { email, password, name } = userData;
    let mail = email
    var atIndex = mail.indexOf('@');
    var newUserEmail = email.substring(0, atIndex);
    const db = getDatabase(app);
    const newDocRef = push(ref(db, `users/${newUserEmail}`));
    set(newDocRef, {
        userName: name,
        userEmail: email,
        userPassword: password,
        transactionHistory: [
            {
                transactionId: '',
                dateTimeStamp: '',
                amountDeposited: '',
                state: ''
            }
        ]
    }).then(() => {
        console.log('data saved sucessfully');
    }).catch((err) => {
        console.log(err)
    })
}

//Sign in or login fuction
export let signIn = async (userData, navigate) => {
    const { email, password } = userData;
    await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("You have been signed in successfully");
            navigate(`/dashboard`, { replace: true })
        })
        .catch((err) => {
            toast.error(err.message);
        });
}

//Sign up or registration fuction
export let signUp = async (userData) => {
    const { email, password } = userData;
    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await sendEmailVerification(user)
            toast.success('Check your email for confirmation link')
            saveUser(userData)
        })
        .catch((err) => {
            toast.error('failed to create your account')
        })
}

export let readUserData = async (email, setUser) => {
    var atIndex = email.indexOf("@");
    var newUserEmail = email.substring(0, atIndex);
    const database = getDatabase(app);
    const databaseRef = ref(database, `users/${newUserEmail}`);
    const snapshot = await get(databaseRef);
    if (snapshot.exists()) {
      let firstuserName = Object.values(snapshot.val());
      console.log(firstuserName)
      let realName = firstuserName[0].userName;
      console.log(realName)
      var atRealNameSpaceIndex = realName.indexOf(' ');
      var userName = realName.substring(0, atRealNameSpaceIndex);
    }
    setUser(userName)
  };