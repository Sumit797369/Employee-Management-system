import React from 'react'

const TaskListsNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=" w-[45%] py-6 px-9 bg-blue-700 rounded-xl">
      <h2 className='text-3xl text-white font-semibold'>0</h2>
      <h3 className='text-xl text-white font-medium'>New Task</h3>
      </div>

      <div className=" w-[45%] py-6 px-9 bg-green-600 rounded-xl">
      <h2 className='text-3xl text-white font-semibold'>0</h2>
      <h3 className='text-xl text-white font-medium'>New Task</h3>
      </div>

      <div className=" w-[45%] py-6 px-9 bg-yellow-300 rounded-xl">
      <h2 className='text-3xl text-black font-semibold'>0</h2>
      <h3 className='text-xl text-black font-medium'>New Task</h3>
      </div>

      <div className=" w-[45%] py-6 px-9 bg-red-500 rounded-xl">
      <h2 className='text-3xl text-white font-semibold'>0</h2>
      <h3 className='text-xl text-white font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListsNumber
