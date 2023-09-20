import { BiMessageAltDetail } from "react-icons/bi"; 
import { BsPeopleFill } from "react-icons/bs"; 
import { IoMdInformationCircleOutline } from "react-icons/io"; 
//import React from "react";
import { MdCallEnd } from "react-icons/md"; 
import { CiMenuKebab } from "react-icons/ci"; 
import { FaRegHandPaper } from "react-icons/fa"; 
import { BiUpArrowCircle } from "react-icons/bi"; 
import { BsCameraVideo } from "react-icons/bs"; 
import { BsFillMicFill } from "react-icons/bs"; 


const currentDate = new Date();
var time = currentDate.getHours() + ":" + currentDate.getMinutes();

function Bottom(){
    return(
        <>
        <div className="flex bg-slate-700 px-10 md:pl-5 justify-center">
            <p className="pt-5 text-white">{time}</p>
            <div className="w-full flex justify-center p-3 bg-slate-700 md:pl-[34%] sm:pl-[20%]" >
                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white ">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Mic</div>
                    <BsFillMicFill />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Camera</div>
                <BsCameraVideo />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Present Now</div>
                <BiUpArrowCircle  />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Raise Hand</div>
                <FaRegHandPaper />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">More Options</div>
                <CiMenuKebab />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white bg-red-500">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Leave Call</div>
                <MdCallEnd />
                </div>
            </div>

            <div className="w-full lg:flex justify-center p-3 bg-slate-700 pl-[20%] hidden">
                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white ">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Info</div>
                    <IoMdInformationCircleOutline />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white ">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Show everyone</div>
                    <BsPeopleFill />
                </div>

                <div className="p-2 flex bg-slate-500 m-2 rounded-full text-white ">
                <div className="opacity-0 hover:opacity-100 absolute pt-5 text-[0.8rem]">Chat with everyone</div>
                    <BiMessageAltDetail />
                </div>
            </div>
        </div>
        </>
    );
}

export default Bottom;