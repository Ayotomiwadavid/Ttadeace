import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import like from '../images/like.png'
import { auth, app } from '../config/firebase.config';
import { getDatabase, ref, set } from 'firebase/database'


const Confirmdeposit = () => {
    let TransactionDate = new Date();
    let transactionDay = TransactionDate.getDay();
    let transactionMonth = TransactionDate.getMonth();
    let transactionyear = TransactionDate.getFullYear();
    let transactionHour = TransactionDate.getHours();
    let transactionMinute = TransactionDate.getMinutes();

    //DECLARING NEEDED USESTATES
    const [useremail, setuseremail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    //STATE FOR AMOUNT CONTROLLED COMPONENT
    const [amountValue, setamountValue] = useState('');

    console.log(transactionDay, transactionMonth, transactionyear);
    console.log(`${transactionDay}\\${transactionMonth}\\${transactionyear} ${transactionHour}:${transactionMinute}`);

//HANDLING AMOUNT
let handleAmount = (event) =>{
    let value = event.target.value;
    setamountValue(value);
}

//SAVING TRANSACTION HISTORY
    let handlePaymentsubmit = async (event) => {
        event.preventDefault();
        var atIndex = useremail.indexOf("@");
        var newUserEmail = useremail.substring(0, atIndex);
        const database = getDatabase(app);
        const databaseRef = ref(database, `users/${newUserEmail}`);
        set(databaseRef, {
            transactionHistory: [
                {
                    userName: userName,
                    userEmail: useremail,
                    userPassword: userPassword,
                    transactionHistory: [
                        {
                            transactionId: useremail + transactionDay + transactionMonth + transactionyear,
                            dateTimeStamp: `${transactionDay} \\ ${transactionMonth} \\ ${transactionyear} ${transactionHour}:${transactionMinute}`,
                            amountDeposited: amountValue,
                            state: true
                        }
                    ]
                }
            ]
        }).then(() =>{
            alert('okay, done!!!!');
        }).catch((err) =>{
            alert(err);
        })
    }
    useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
            let acountUser = userCred.email;
            let name = userCred.userName
            let password = userCred.userPassword
            setuseremail(acountUser);
            setUserName(name);
            setUserPassword(password);
        });
    }, [])
    return (
        <main className='flex flex-col items-center justify-center'>
            <Appbar />
            <section className='w-full h-[100vh] flex flex-col gap-3 items-center justify-center mt-14'>
                <form className='w-3/6 flex flex-col rounded-md items-center justify-center p-4 bg-blue-text-color gap-3'>
                    <div className='flex flex-col items-center justify-center p-5'>
                        <h1 className='font-bold font-sans text-2xl text-logo-color capitalize'>Confirm your deposit</h1>
                        <p className='font-light font-sans text-center text-white text-lg capitalize'>After Making Deposit to the given Wallet Address, Use this form to track your deposit</p>
                    </div>
                    <input className='w-[80%] h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='fullName' placeholder='full name' />
                    <input className='w-[80%] h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='amount' placeholder='Amount Deposited ($)' value={amountValue} onChange={handleAmount}/>
                    <input className='w-[80%] h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='transactiondescription' placeholder='give narration' />
                    <input className='w-[80%] h-[55px] bg-logo-color text-xl text-white font-sans font-bold capitalize p-3 rounded-lg cursor-pointer hover:scale-95 transition-all duration-700' type='submit' name='submit' value='submit' onClick={handlePaymentsubmit} />
                </form>
            </section>
            <aside className='w-[50%] h-[50%] hidden flex-col items-center justify-center bg-blue-text-color rounded-md p-5 gap-3'>
                <img src={like} alt='thumb img' className='w-[150px] h-[150px] rounded-full' />
                <h3 className='text-white font-bold font-sans text-center text-xl'>Thank you for confirming your payment</h3>
                <button className='w-fit h-fit p-3 text-center text-white text-lg capitalize bg-logo-color rounded-md m-3 hover:scale-95 transition-all duration-700'>Back to dashboard</button>
            </aside>
        </main>
    )
}

export default Confirmdeposit
