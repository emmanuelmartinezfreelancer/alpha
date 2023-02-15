import { useAuth } from "../../context/authContext";
import ESATLogo from "../../public/esatonlinelogo.svg"
import Image from 'next/image'
import { useState } from "react";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  

    const { loginWithGoogle, user, logout} = useAuth();

    const handleGoogleSignin = async () => {
        try {
          await loginWithGoogle();
          console.log("Logged")
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleLogout = async() =>{
        try{
        await logout()
    
      }catch(error){
    
        console.error(error);
    
      }
    
    }

    return(
        <div className="flex flex-row fixed bg-white h-[75px] w-full px-12 py-3 justify-items-stretch z-[99]">
         
                <Image
                  alt="ESAT logo"
                  src={ESATLogo}
                  style={{
                    width: "70px",
                  }}
                 />

{/*                 <div className="flex flex-row ml-auto">
                <button 
                className="w-36 mb-2 my-auto py-2 px-6 border border-black text-black hover:text-white hover:bg-black text-base rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                onClick={handleGoogleSignin}
                type="button">
                Sign Up
                </button>
                <button className="ml-4" onClick={ handleLogout }>
                Logout
                </button> 
                </div>
 */}

                <nav className="ml-auto my-auto">
                       <section className="MOBILE-MENU flex">
                         <div
                           className="HAMBURGER-ICON space-y-1 cursor-pointer"
                           onClick={() => setIsNavOpen((prev) => !prev)}
                         >
                           <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
                           <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
                           <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>

                         </div>

                         {/* {isNavOpen ? "showMenuNav" : "hideMenuNav"} */}

                         <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                           <div
                             className="absolute top-0 right-0 px-8 py-8"
                             onClick={() => setIsNavOpen(false)}
                           >
                             <svg
                               className="h-8 w-8 text-gray-600 cursor-pointer"
                               viewBox="0 0 24 24"
                               fill="none"
                               stroke="currentColor"
                               strokeWidth="2"
                               strokeLinecap="round"
                               strokeLinejoin="round"
                             >
                               <line x1="18" y1="6" x2="6" y2="18" />
                               <line x1="6" y1="6" x2="18" y2="18" />
                             </svg>
                           </div>
                           <ul className="flex flex-col items-center justify-between min-h-[250px]">
                             <li className="border-b border-gray-400 my-8 uppercase">
                               <a href="/about">Link 1</a>
                             </li>
                             <li className="border-b border-gray-400 my-8 uppercase">
                               <a href="/portfolio">Link 2</a>
                             </li>
                             <li className="border-b border-gray-400 my-8 uppercase">
                               <a href="/contact">Link 3</a>
                             </li>
                           </ul>
                         </div>
                       </section>

                       <ul className="DESKTOP-MENU hidden space-x-8 flex">
                         <li>
                           <a href="/about">Link 1</a>
                         </li>
                         <li>
                           <a href="/portfolio">Link 2</a>
                         </li>
                         <li>
                           <a href="/contact">Link 3</a>
                         </li>
                       </ul>
                     </nav>


      </div>
          )

}

export default Navbar