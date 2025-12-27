import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 h-full w-full left-0 p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id + 1}</h2>
            <div>
                <p className='text-m mb-8 text-white leading-relaxed text-shadow-2xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, totam debitis obcaecati sapiente quis tempore.</p>
                <div className='flex justify-between'>
                    <button style={{background:props.color}} className='text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                    <button style={{background:props.color}} className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
