import React from 'react'
import logo from '../../src/assets/logo.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
const Navlinks = () => {
    const handleLogout = async()=>{
        try{
            await signOut(auth);
            alert("Logout success")
        } catch(error){
            console.log(error);
        }
    }
    return (
        <section className='sticky lg:static top-0  flex items-center lg:items-start lg:justify-start bg-[#01aa85] h-[7vh] lg:h-[100vh] w-[100%] lg:w-[150px] py-8 lg:py-0'>
            <main className='flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-[100%]'>
                <div className='flex items-start justify-center lg:border-b border-b-1 border-[#ffffffb9] lg:w-[100%] p-4'>
                    <span className='flex  items-center justify-center bg-white rounded-lg p-2'>
                        <img src={logo} alt="" className='w-[56px] h-[52px] object-contain bg-white  rounded-lg p-2' />
                    </span>
                </div>
                <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-10 px-2 md:px-0">
                    <li className="">
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-plus-icon lucide-message-circle-plus"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        </button>
                    </li>
                    <li className="">
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-plus-icon lucide-message-circle-plus"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        </button>
                    </li>
                    <li className="">
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-dot-icon lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" /><circle cx="18" cy="8" r="3" /></svg>
                        </button>
                    </li>
                    <li className="">
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                        </button>
                    </li>
                    <li className="">
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
                        </button>
                    </li>
                    <li className="">
                        <button onClick={handleLogout} className="lg:text-[28px] text-[22px] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-power-off-icon lucide-power-off"><path d="M18.36 6.64A9 9 0 0 1 20.77 15" /><path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" /><path d="M12 2v4" /><path d="m2 2 20 20" /></svg>
                        </button>
                    </li>
                </ul>
                <button className="block lg:hidden lg:text-[28px] text-[22px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </button>

            </main>
        </section>
    )
}

export default Navlinks