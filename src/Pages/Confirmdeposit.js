import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import { auth } from '../config/firebase.config';
import { setNewUserDoc } from '../config/controller';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Mobilenavbar from '../components/Mobilenavbar'


const Confirmdeposit = () => {
    //DECLARING USENAVIGATE
    const navigate = useNavigate()

    //STATE FOR AMOUNT CONTROLLED COMPONENT
    const [amountValue, setamountValue] = useState(''); 
    const [user, setuser] = useState('')
    const [history, setHistory] = useState('')

    let TransactionDate = new Date();
    let transactionDay = TransactionDate.getDay();
    let transactionMonth = TransactionDate.getMonth();
    let transactionyear = TransactionDate.getFullYear();
    let transactionHour = TransactionDate.getHours();
    let transactionMinute = TransactionDate.getMinutes();

    //HANDLING AMOUNT
    let handleAmount = (event) => {
        let value = event.target.value;
        setamountValue(value);
    }

    //SAVING TRANSACTION HISTORY
    let handlePaymentsubmit = (event) => {
        event.preventDefault();
        setHistory(
            {
                transactionId: user+transactionDay+transactionMonth+transactionyear,
                dateTimeStamp: `${transactionDay}\\${transactionMonth}\\${transactionyear} ${transactionHour}:${transactionMinute}`,
                amountDeposited: amountValue,
                state: true
            }
        )
        if (amountValue < 1000) {
            toast.error('Sorry, Our payment starts from 1000usd');
        }else{
            toast.success('Thanks for confirming your payment');
            setNewUserDoc(user, history); 
            setInterval(() => {
              navigate(`/dashboard`, { replace: true })
            }, 3000);
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
            let acountUser = userCred.email;
            setuser(acountUser)
        });
    }, [])

    return (
        <main className='flex flex-col items-center justify-center'>
            <Appbar />
            <ToastContainer />
            <section className='w-full h-[100vh] flex flex-col gap-3 items-center justify-center md:mt-14'>
                <form className='md:w-3/6 w-[90%] flex flex-col rounded-md items-center justify-center p-4 bg-blue-text-color gap-3'>
                    <div className='flex flex-col items-center justify-center p-2  md:p-5'>
                        <h1 className='font-bold font-sans text-2xl text-logo-color capitalize'>Confirm your deposit</h1>
                        <p className='font-light font-sans text-center text-white text-lg capitalize'>After Making Deposit to the given Wallet Address, Use this form to track your deposit</p>
                    </div>
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='fullName' placeholder='full name' />
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='amount' placeholder='Amount Deposited ($)' value={amountValue} onChange={handleAmount} />
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='transactiondescription' placeholder='give narration' />
                    <input className='md:w-[80%] w-full h-[55px] bg-logo-color text-xl text-white font-sans font-bold capitalize p-3 rounded-lg cursor-pointer hover:scale-95 transition-all duration-700' type='submit' name='submit' value='submit' onClick={handlePaymentsubmit} />
                </form>
            </section>
            <Mobilenavbar />
        </main>
    )
}

export default Confirmdeposit
