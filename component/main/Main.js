import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { set_todoes } from "../../redux/reducers/todoes";
import { set_md } from "../../redux/reducers/modal";
import Task from "../task/Task";
import Modal from "../modal/Modal";
import { Poppins } from '@next/font/google'
import { current } from "@reduxjs/toolkit";
const poppins = Poppins({ subsets: ['italic'],weight: '700' })

const Main = () => {
  // const {name}=useSelector(state=>state.profile)
  const Current = useSelector((state) => state.todoes);
  const modal = useSelector((state) => state.modal);
  console.log(Current);
  const dsipatch = useDispatch();

  return (
    <div>
     {modal.md&& <div className={` xs z-50 bg-black text-white fixed inset-0 bg-opacity-30 backdrop-blur-lg text-lg flex justify-center items-center `}  >



        <Modal />
      </div>}

      <div className="flex flex-col gap-14 items-center pb-10 relative">
        <h1 className={` w-full text-center bg-white py-5 text-Main  text-lg ${poppins.className}`}>
          Todo List
        </h1>

        {/* add task */}
        <div
          className="cursor-pointer"
          onClick={() => dsipatch(set_md(!modal))}
        >
          <div className="flex items-center align-middle justify-center gap-5 bg-[#af7eeb]  bg-Main text-white font-medium p-2 rounded-md">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>{" "}
            <h1 className="">New Task</h1>
          </div>
        </div>

        <div className=" flex flex-col gap-16 items-center bg-white p-12 rounded-md shadow-sm">
          {Current.length!=0 ? Current.map((todo) => <Task id={todo.id} todo={todo} />):<div>
            
            <h1 className={`${poppins.className} opacity-80`}>yesterday you said tomorrow</h1>
                       
           </div> }
        </div>
      </div>
    </div>
  );
};

export default Main;
