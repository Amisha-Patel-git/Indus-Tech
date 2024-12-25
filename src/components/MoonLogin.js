import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoMdEye } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaWallet, FaTable} from 'react-icons/fa';
import './MoonLogin.css';

export default function MoonLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [change, setChange] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const find = async () => {
        setChange(true); // This assumes it's to show loading or status change
    
        if (email.length === 0 || password.length === 0) {
            setError('Please enter your credentials');
            return;
        }
    
        let data = {
            email,
            password,
        };
    
        let url = 'http://localhost:3001/login';  // Backend URL
    
        try {
            // Send the POST request to the backend
            let fdata = await fetch(url, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            });
    
            // Get the JSON response from the server
            let result = await fdata.json();
    
            // Log the response to check if it's in the expected format
            console.log("Server response:", result);
    
            // Check if the server returned "Not Valid User"
            if (result.result=== "Not Valid User") {
                
                
                console.log("Invalid login credentials, showing error");
                setError('Invalid username or password');  // Display error message
            } else {
                console.log("Valid user credentials, navigating to dashboard");
                navigate('/Dashboard/Transaction');  // Navigate to dashboard
                
            }
        } catch (error) {
            // Handle unexpected errors
            console.error("An error occurred:", error);
            setError('An unexpected error occurred. Please try again.');
        }
    };
    
    
    return (
        <>
            <div className="h-screen w-full  flex justify-center items-center">
                {/* <div className='top-0 absolute right-0'>
                    <LiaFlagUsaSolid className='text-red-400 w-1/2 text-4xl absolute left-[-30%] top-[23%]' />
                    <select name="" id="" className='px-3 py-2 rounded-md outline-none cursor-pointer m-3'>
                        <option value="English" className='cursor-pointer'>English</option>
                        <option value="Spanish" className='cursor-pointer'>Spanish</option>
                    </select>
                </div> */}

                <div className="bg-slate-100 bg-opacity-80 lg:w-[380px] md:w-[350px] rounded-md p-6 relative my-10 box-border">
                    <div className='flex justify-between items-center mt-10'>
                        <img src="https://moonhub.moonpreneur.com/mh/assets/images/login/cloud.png" className='animate-move-left-right top-[12%] right-[-10%] w-[22%] absolute' alt="" />
                        <img src="https://moonhub.moonpreneur.com/mh/assets/images/login/cloud.png" className='animate-move-left-right top-[22%] left-[-5%] absolute w-[22%]' alt="" />
                    </div>
                    <img src="https://indus-tech.co.in/INDUSTECH.png" className='mx-auto w-1/2' alt="" />
                    <FaWallet className='absolute top-[-10%] left-[-10%] w-[35%] w-20 h-20 text-yellow-400  animate-move-top-bottom' alt="" />

                    <div className={`mt-6 w-full relative ${change ? 'my-4' : 'my-6'}`}>
                        <input type="text" placeholder="Username" className='rounded-full h-10 p-2 placeholder:text-gray-300 text-black w-full outline-none' onChange={(e) => { setEmail(e.target.value); setError(''); }} />
                        <CgProfile className={`text-blue-500 absolute right-[15px] cursor-pointer ${change ? 'top-[20%]' : 'top-[30%]'}`} />
                        <div className='ml-4 mb-1'>
                            {email.length === 0 && change ? <span className='text-xs text-red-500'>Please Enter your username</span> : null}
                        </div>
                    </div>

                    <div className={`w-full relative ${change ? 'my-0' : 'my-4'}`}>
                        <input type="password" placeholder="Password" className='rounded-full h-10 p-2 placeholder:text-gray-300 text-black w-full outline-none' onChange={(e) => { setPassword(e.target.value); setError(''); }} />
                        <IoMdEye className={`text-blue-500 absolute right-[15px] cursor-pointer ${change ? 'top-[20%]' : 'top-[30%]'}`} />
                        <div className='ml-4'>
                            {password.length === 0 && change ? <span className='text-xs text-red-500'>Please Enter your password</span> : null}
                        </div>
                    </div>

                    {error && <div className="text-sm text-red-500 text-center mt-2">{error}</div>}

                    <div className="my-2 flex justify-between mt-8">
                        <div className='flex'>
                            <input type="radio" className='flex cursor-pointer' value="true" />
                            <p className='ml-1 text-xs'>Remember me?</p>
                        </div>
                        <Link to="/PasswordForget"><p className='text-blue-400 text-xs cursor-pointer'>Forget your Password?</p></Link>
                    </div>

                    <div className="my-6 text-center mt-8">
                        <button onClick={find} type="button" className="h-8 rounded-full w-1/2 text-white bg-blue-500">Log in</button>
                    </div>

                    <FaTable className='absolute bottom-[-3%] right-[-10%] w-[35%] w-20 h-20 text-green-800 animate-move-top-bottom' alt="" />
                </div>
            </div>
        </>
    );
}