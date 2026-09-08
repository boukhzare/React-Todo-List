// import React from "react";


function TodoForm()
{
    return(
        <div className="min-h-screen  bg-linear-to-r from-blue-600 to-emerald-300  flex items-center justify-center ">
            <div className="bg-white  shadow-lg rounded-3xl p-16">
                 <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">REACT TO DO LIST ✅</h1>

                 <div className="mb-4 flex">
                        <input type="text" placeholder="Add a new todo" className="flex-1  px-3 py-2 border-[0.5px] rounded-l-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-300 focus:border-none"/>
                        <button className=" bg-blue-400  text-white px-4 py-2 rounded-r-lg hover:bg-blue-500">Add</button>
                 </div>
                
            </div>
           
            
        </div>
      
    )
}


export default TodoForm;