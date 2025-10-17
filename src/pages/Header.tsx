import Logo from '/trans_bg.png'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    // <div>
    //     <img className= "h-[10em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"src={Logo}  alt="PostsApp Logo" />
    // </div>
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            className= "h-[10em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
                            src={Logo}      
                            alt="PostsApp Logo" 
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                       <Link 
                            to="#">
                                 <img className="w-15 h-15 rounded-full mx-auto" 
                                    src="/IMG_0329.JPG" 
                                    alt="">
                                </img>
                       </Link>
                        {/* <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link> */}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 
                                        ${isActive ? "text-blue-950" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent lg:border-0 
                                        hover:text-blue-950 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/posts"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 
                                        ${isActive ? "text-blue-950" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent lg:border-0 
                                        hover:text-blue-950 lg:p-0`
                                    }
                                >
                                    Posts
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/contact"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 
                                        ${isActive ? "text-blue-950" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent lg:border-0 
                                        hover:text-blue-950 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header