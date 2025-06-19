import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col gap-4 h-[95%] w-full bg-[#F7F8F9] border-b-2 border-dashed  border-gray-200 '>
        <h1 className='bg-white h-[10%] flex items-end px-4 py-5 font-semibold text-xl shadow-sm'>Account Settings</h1>
        <div className='border-b-2 border-dashed  border-gray-200 pb-5'>

        <div className='flex  gap-4  px-4 py-5  rounded-lg'>
            <img className='h-20 w-20 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div>
                <h1 className='font-bold'>Mary Doe</h1>
                <p className='font-medium'>marry@gmail.com</p>
            </div>
        </div>
            <p className='text-sm font-medium px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum inventore adipisci a? Dolores accusamus cupiditate dolore! Blanditiis at consectetur vitae quas!</p>
        </div>
    </div>
  )
}

export default Profile