//Importing neccessary firebase dependencies
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from '../config/firebase.config';
import { toast } from 'react-toastify';
import { getDoc, doc, setDoc } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';


let transactionHistory = []

//SAVING USER AFTER SIGNUP
export const saveUser = async (userData) => {
    const { email, password, name } = userData;
    let mail = email
    console.log(email)
    var atIndex = mail.indexOf('@');
    var newUserEmail = email.substring(0, atIndex);
    try {
        await setDoc(doc(db, "users", newUserEmail), {
            userId: newUserEmail,
            userName: name,
            userEmail: email,
            userPassword: password,
            userHistory: JSON.stringify(transactionHistory),
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
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

//READING USER DATA FOR UPDATES
export let readUserData = async (accountuser, setUser) => {
    var atIndex = accountuser.indexOf('@');
    var newUserEmail = accountuser.substring(0, atIndex);
    const docRef = doc(db, "users", newUserEmail);
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        let userInitial = userData.userName;
        setUser(userInitial)
        console.log(userData)
      } else {
        console.log("User document does not exist.");
      }
};

//SAVING TRANSACTION HISTORY
export let setNewUserDoc = async (user, history) => {
    let {transactionId, dateTimeStamp, amountDeposited, state} = history
    transactionHistory.push(
        {
            userTransactionId: transactionId,
            transanctionDate: dateTimeStamp,
            userDeposit: amountDeposited,
            transactionStatus: state
        }
    )

    console.log(transactionHistory)

    var atIndex = user.indexOf('@');
    var newUserEmail = user.substring(0, atIndex);
    const docRef = doc(db, "users", newUserEmail);
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        let userInitial = userData.userName;
        let Password = userData.userPassword;
        if (transactionHistory && transactionHistory.length > 0) {
            try {
                await setDoc(doc(db, "users", newUserEmail), {
                    userId: newUserEmail,
                    userName: userInitial,
                    userEmail: user,
                    userPassword: Password,
                    userHistory: transactionHistory,
                });
            } catch (error) {
                console.log('An error occured:' + error)
            }
        }else {
            console.log("Transaction history is empty or undefined.");
        }
        console.log(userData)
      } else {
        console.log("User document does not exist.");
      }
}