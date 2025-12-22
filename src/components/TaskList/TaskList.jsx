import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center text-white justify-start gap-5 w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">
            High
          </h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl text-white font-semibold">
          Make Youtube Video
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa veniam
          iure repellendus libero officia blanditiis!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
