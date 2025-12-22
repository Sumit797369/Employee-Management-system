import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div className="mt-8">
        <form className="flex flex-wrap w-full gap-8 bg-[#000000e9] p-8 rounded-xl shadow-lg">
          
          {/* LEFT SIDE */}
          <div className="w-full md:w-[48%] space-y-5">
            <div>
              <h3 className="text-sm text-white font-semibold  mb-1">
                Task Title
              </h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full rounded-lg border  border-black  bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Date
              </h3>
              <input
                type="date"
               className="w-full rounded-lg border border-black  bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Assign to
              </h3>
              <input
                type="text"
                placeholder="Employee Name"
               className="w-full rounded-lg border border-black  bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Category
              </h3>
              <input
                type="text"
                placeholder="Design, Dev, etc."
               className="w-full rounded-lg border border-black  bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[48%]">
            <h3 className="text-sm font-semibold text-white mb-1">
              Description
            </h3>
            <textarea
              rows="10"
              placeholder="Write task details here..."
              className="w-full rounded-lg border border-black  bg-white px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* BUTTON */}
          <div className="w-full flex justify-end mt-4">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
