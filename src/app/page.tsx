"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState<{ title: string; desc: string }[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    // page ko relod krnai sai rokta
    e.preventDefault();  
    if (title && desc) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (index: number) => {
    const updatedTasks = mainTask.filter((_, i) => i !== index);
    setMainTask(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6bb6d3] via-[#394d4a] to-[#6fb2ff] flex flex-col items-center p-6">
      {/* Header Section */}
      <h1 className="text-center bg-white/10 text-[#1a0f2c] text-5xl p-5 font-extrabold font-serif "> TODOLIST </h1>

      {/* Form Section */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center bg-white/30 p-14 rounded-2xl max-w-lg mx-auto mt-10 ">
        <input type="text"
          className="text-2xl rounded-lg m-8 px-8 py-3 b-4 border-[#09111f] "
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-[#09111f] rounded-lg m-5 px-4 py-8"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)} />
        <button
          type="submit"
          className="bg-[#356e88] text-white font-bold text-2xl rounded-lg px-6 py-2 mt-4 hover:bg-[#203d68]" > Add New
        </button>
      </form>
      {/* Task Section */}
      <div className="text-center text-white font-bold text-4xl mt-10 w-full">
        <ul className="flex flex-wrap justify-center gap-6">
          {mainTask.length > 0 ? (
            mainTask.map((task, index) => (
           <li
           key={index}
           className="bg-cyan-700 rounded-lg p-10 w-80 text-white">
       <div> 
        <h5 className="text-2xl font-extrabold">{task.title}</h5>
         <h6 className="text-lg mt-2">{task.desc}</h6>
     </div>
       <button
     onClick={() => deleteHandler(index)}
     className="mt-4 bg-[#37595f] text-white px-8 py-1 rounded hover:bg-[#192b4d] "> Delete
     </button>
     </li>
      ))) : (
            <h2 className="text-slate-950">No Todos found</h2>
          )}
        </ul>
      </div>
    </div>
  )}

export default Page;
