"use client"
import Image from "next/image";
import birdlyLogo from '../../public/logo1.png';
import './page.css';
import whiteLogo from './logo.png';
import celphone from './cel.png';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/home")
    }
    return(
        <>
        <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <Image src={whiteLogo} alt="The best logo of the world" className="w-24"/>
                
                
               
                <div className="flex flex-col p-2 md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <button onClick={handleLogin}>  Launch app  </button>   
                </div >
           
            </div>
        </nav>


        <div className="container-fluid bg-gif min-h-screen pt-16">
          {/** Page 1 */}

        </div>

        

       
  
    </>
    );
}