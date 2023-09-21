import { BsArrowUpSquare } from "react-icons/bs"; 
// import React from "react";


const StopPresenting = () =>{
    return(
        <>
        <div className="px-2">
        <div className="px-2 h-full flex bg-slate-700 rounded-lg text-white">
        <div className=" p-3 flex text-center">
            <BsArrowUpSquare />
        </div>
        <div className="p-2">
            <p className="">Name (Name, Presenting)</p>
        </div>
        <div className="end-5 absolute top-1">
            <button className="bg-red-600 p-1 rounded-lg hover:bg-red-500">Stop Presenting</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default StopPresenting;