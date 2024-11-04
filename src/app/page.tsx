"use client"

import Todos from "@/app/components/Todos/todo";
// import {useReducer} from "react";

export default function Home() {


  // const [state, dispatch] = useReducer((prevState, action) => {
  //
  // }, { name: "DK" })
  //


  return (
    <div className="p-20">
      <div> Next Version: 14.2.16</div>



      <Todos></Todos>
    </div>
  );
}
