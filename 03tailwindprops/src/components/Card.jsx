import React from 'react'

function Card({username, btnText="Visit Me"}) {
    console.log(username);
    
    
  return (
    
    <div className="relative h-100 w-75 rounded-md">
      <img src="https://images.unsplash.com/photo-1766086892325-74a61d0465f6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" className="z-0 h-full w-full rounded-md object-cover"/>

    <div className="absolute inset-0 bg-linear-to-t from-gray-400 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, accusamus.
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">{btnText}
      </button>
    </div>
    </div>
  )
}

export default Card
