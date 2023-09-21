import React from "react";

function LoginWithImage(){
    return(
        <div className="md:py-[5rem] px-7 md:h-[40rem] items-center">
        <div className="md:py-8 flex border shadow-xl bg-[#eff0ff] rounded-lg w-[70%] absolute ml-[12rem] ">
            <div className="justify-center w-[60%] block inline-block inline-flex">
                <img className="w-[100%] h-[full] ml-10 rounded-lg" src="https://wallpaperaccess.com/full/1506528.jpg" alt="Login-image" />
            </div>
            <div>
            <div className="ml-10">
                {/* Heading */}
               <div className="py-4 ">
                    <h1 className="pb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    LOGIN
                    </h1>
                    <hr className="h-1 w-12 bg-[#1F357F]" />
                </div>

                {/* Username */}
                <div className="py-3">
                      <label  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Username</label>
                      <input type="email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200%] p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""/>
                </div>

                {/* Password */}
                <div className="py-3">
                      <label  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
                      <input type="password" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200%] p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required=""/>
                </div>

                {/* Remember Me */}
                <div className="flex items-start py-5">
                    <div className="flex items-center h-5">
                        <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label  className="text-gray-500 dark:text-gray-300 font-semibold">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="w-[200%]  text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700">Login</button>

            </div>
            </div>
        </div>
        </div>
    );
}
export default LoginWithImage;
