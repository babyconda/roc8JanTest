import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useHook } from '../../context';

export default function RegisterPage() {
    const navigate = useNavigate();
    const { registerUserWithEmail, 
            user, 
            loginWithGoogle,
            name, 
            setName, 
            email, 
            setEmail,
            password, 
            setPassword} = useContext(useHook);

    useEffect(() => {
        if (user) {
        navigate("/");
        }
    }, [user, navigate]);

    const loginUserWithGoogle = async () => {
        try {
        await loginWithGoogle();
        } catch (error) {
        console.log(error);
        }
    };

    const handleSignUp = async () => {
        try {
        await registerUserWithEmail(name, email, password);
        } catch (error) {
        console.log(error);
        }
    };

  return (
       <div className="h-screen bg-mobal bg-no-repeat bg-center bg-cover flex flex-col items-center ">
      <header className='py-10 px-4 md:px-10 w-full'>
          <Header/>
        </header>

        <main>
            <div className='bg-gradient-to-br from-white-10 via-white to-transparent backdrop-blur-md border border-white-50 rounded-lg shadow-2xl text-white w-96 mt-12'>

                <div className='flex flex-col justify-center items-center py-8'>

                    <h1 className='font-roboto font-semibold text-3xl p-3'>
                        Register
                    </h1>

                    <input
                     type="text"
                     className='w-[90%] bg-transparent border-b-2 border-white outline-none font-roboto text-2xl my-4'
                     placeholder='Your Name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                      />
                    <input
                     type="email"
                     className='w-[90%] bg-transparent border-b-2 border-white outline-none font-roboto text-2xl my-4' 
                     placeholder='Email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                    <input
                     type="password"
                     className='w-[90%] bg-transparent border-b-2 border-white outline-none font-roboto text-2xl my-4'
                     placeholder='Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} 
                     />

                    <button
                    className='w-[90%] border py-1 my-2 rounded-xl text-2xl' 
                    onClick={handleSignUp}
                    >
                        Register
                    </button>
                    <button
                    className='w-[90%] border py-1 my-2 rounded-xl text-2xl flex items-center justify-center gap-4'
                    onClick={loginUserWithGoogle} 
                    >
                        
                       <FcGoogle /> Login with Google
                    </button>

                    <p className='font-roboto text-lg'>
                        Already User ?{" "} 
                        <span 
                            className='font-roboto text-lg font-semibold underline cursor-pointer hover:text-gray-400'
                            onClick={() => navigate('/login')}

                        > 
                            LogIn
                        </span>
                    </p>
                </div>
            </div>
        </main>
    </div>
  )
}
