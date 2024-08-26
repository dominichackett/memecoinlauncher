'use client'
//Changed header to header
import { useState ,useEffect,useRef,useContext} from 'react'

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from "@rainbow-me/rainbowkit";

  import { useRouter } from 'next/navigation'
  import {
    useAccount
  } from 'wagmi'
import Link from 'next/link';

  export default function Header(){
    const [navbarOpen,setNavbarOpen] = useState(false)
    const [submenuOpen,setSubmenuOpen] = useState(false)
    const [scrolledFromTop,setScrolledFromTop] = useState(true)
    const [isClient, setIsClient] = useState(false)
    const { address, connector, isConnected } = useAccount()

    const session = true
   const status = false    
    const router  = useRouter()
    const aCode = useRef()
    
      const [selectedChain, setSelectedChain] = useState(-1);
   
   
    
   
      useEffect(() => {
        setIsClient(true)
      }, [])
  
    return( (<header
        className={`${scrolledFromTop ? 'z-10 bg-dark bg-opacity-70 shadow-sticky backdrop-blur-sm' : ' z-10'} header top-0 left-0 flex w-full items-center bg-transparent transition fixed`}
      
      
          >
             <div className="container">
              <div
                className="relative mx-[-16px] flex items-center justify-between"
              >
               <div className=" max-w-full px-4">
               <div className="flex items-center">

            {/*<Logo/>*/}
              </div>
                </div>
                <div>
                    <button
                    
                      onClick={()=> setNavbarOpen(!navbarOpen)}
                      id="navbarToggler"
                      name="navbarToggler"
                      aria-label="navbarToggler"
                      className={` ${navbarOpen ? "navbarTogglerActive" : ""} absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                    >
                      <span
                        className={`${navbarOpen ?   "transform rotate-45 top-[7px]": ""} relative my-[6px] block h-[2px] w-[30px] bg-white`}
                        
                      ></span>
                      <span
                        className={` ${navbarOpen ? 'opacity-0' : ""} relative my-[6px] block h-[2px] w-[30px] bg-white`}
                        
                      ></span>
                      <span
                        className={` ${navbarOpen ? 'top-[-8px] rotate-[135deg]' : ""} relative my-[6px] block h-[2px] w-[30px] bg-white`}
                        
                      ></span>
                    </button>
                    <nav
                      className={` ${!navbarOpen ? 'hidden' :""} absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-bg-color shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent py-3 lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
                      id="navbarCollapse"
                      
                    >
                      <ul className="blcok lg:flex">
                        <li className="group relative">
                          <Link
                            href="/"
                            className="mx-8 flex py-2 text-base font-semibold text-black group-hover:text-black lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                          >
                            Home
                          </Link>
                          
                        </li>
                        { isConnected  && <li className="group relative">
                          <Link
                            href="/dashboard"
                            className="mx-8 flex py-2 text-base font-semibold text-[#bababa] group-hover:text-black lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:px-0 xl:ml-12"
                          >
                           Dashboard
                          </Link>
                        </li>}

                      
                        <li className="group relative">
                          <Link
                            href="/coins"
                            className="mx-8 flex py-2 text-base font-semibold text-[#bababa] group-hover:text-black lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:px-0 xl:ml-12"
                          >
                            Coins
                          </Link>
                        </li>
                      
                       
                           
                    
                      
                      </ul>
                    </nav>

                  </div>
                  

                  <div
                    className="hidden justify-end pr-16 sm:flex lg:pr-0"
                  >
                    <div className="group relative hidden md:flex">
                    
                      <div
                        className="invisible absolute top-[110%] right-0 w-[250px] rounded-md bg-dark p-3 opacity-0 transition-all group-hover:visible group-hover:top-full group-hover:opacity-100"
                      >
                        <form className="flex">
                          <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full bg-transparent py-2 px-4 text-black outline-none"
                          />
                          <button
                            className="text-black"
                            name="search-button"
                            aria-label="search-button"
                          >
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                   {/* Sign In Button*/}
                   
                  </div>       
                  <div       className="mr-16 flex py-2 
                       text-base font-semibold text-[#bababa] group-hover:text-black 
                    lg:mr-0 lg:ml-6 lg:inline-flex lg:py-6 lg:px-0 xl:ml-6"
                      > 
                     {/*   <ConnectButton  />*/} 
                     
                   
                     </div>
                     <div       className="mr-16 flex py-2 
                       text-base font-semibold text-[#bababa] group-hover:text-black 
                    lg:mr-0 lg:ml-6 lg:inline-flex lg:py-6 lg:px-0 xl:ml-6"
                      > 
                     {/*   <ConnectButton  />*/} 
                     
                     <div className="flex justify-between items-center">
                     <ConnectButton />

                
              </div>
                     </div>
           </div></div>  </header>))
}
