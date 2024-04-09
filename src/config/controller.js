//Importing neccessary firebase dependencies
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from '../config/firebase.config';
import { toast } from 'react-toastify';
import { collection, addDoc, getDocs} from "firebase/firestore";
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
        const docRef = await addDoc(collection(db, "users"), {
            userId: newUserEmail,
            userName: name,
            userEmail: email,
            userPassword: password,
            userHistory: JSON.stringify(transactionHistory),
        });
        console.log("save successfully Document written with ID: ", docRef.id);
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
export let readUserData = async (email, setUser) => {
    // var atIndex = email.indexOf("@");
    // var newUserEmail = email.substring(0, atIndex);
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        setUser(doc.id)
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };