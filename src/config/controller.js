//Importing neccessary firebase dependencies
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { auth, db } from '../config/firebase.config';
import { toast } from 'react-toastify';
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';


let transactionHistory = []

//SAVING USER AFTER SIGNUP
export const saveUser = async (userData) => {
    const { email, password, name } = userData;
    let mail = email
    var atIndex = mail.indexOf('@');
    var newUserEmail = email.substring(0, atIndex);
    try {
        await setDoc(doc(db, "users", newUserEmail), {
            userId: newUserEmail,
            userName: name,
            userEmail: email,
            userPassword: password,
            userHistory: transactionHistory,
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
            toast.error('failed to create your account:' + err)
        })
}

export let signOutFunc = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('sign out successfull')
    }).catch((error) => {
        console.log('An error occured: ' + error)
    });
}

//READING USER DATA FOR UPDATES
export const readUserData = async (accountUser, setUser) => {
    // Check if accountUser is a string before proceeding
    if (typeof accountUser === 'string') {
        // Perform indexOf operation
        const atIndex = accountUser.indexOf('@');
        if (atIndex !== -1) {
            var newUserEmail = accountUser.substring(0, atIndex);
            const docRef = doc(db, "users", newUserEmail);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists) {
                const userData = docSnapshot.data();
                setUser(userData)
            } else {
                console.log("User document does not exist.");
            }
        } else {
            console.log("Email does not contain '@'");
        }
    } else {
        console.log("accountUser is not a valid string.");
    }
}


//SAVING TRANSACTION HISTORY
export let setNewUserDoc = async (user, history) => {

    //GETTING ALL TRANSACTION DATAS
    let { transactionId, dateTimeStamp, amountDeposited, state } = history

    //PUSHING THE TRANSACTION DETAILS TO IT ARRAY
    transactionHistory.push(
        {
            userTransactionId: transactionId,
            transanctionDate: dateTimeStamp,
            userDeposit: amountDeposited,
            transactionStatus: state
        }
    )

    //CUTTING THE USER EMAIL TO GET DB ID
    var atIndex = user.indexOf('@');
    var newUserEmail = user.substring(0, atIndex);
    const docRef = doc(db, "users", newUserEmail);

    //UPDATING USERHISTORY
    try {
        await updateDoc(docRef, {
            userHistory: transactionHistory
        });
    } catch (error) {
        console.log('An error occured:' + error)
    }
}