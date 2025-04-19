import React from "react";

const Companies = () => {
  return (
    <div className="h-40 py-10  bg-secondary">
      <div className="flex flex-col sm:flex-row sm:gap-7 sm:mt-6 sm:justify-center items-center px-4">
        <div className="flex gap-5">
          <img className="w-32" src="src/assets/one.png" alt="" />
          <img className="h-7" src="src/assets/zara-logo.png" alt="" />
          <img className="h-7" src="src/assets/gucci-logo.png" alt="" />
        </div>
        <div className="flex gap-4 mt-6 sm:mt-0">
          <img className="w-32" src="src/assets/prada-logo.png" alt="" />
          <img className="h-7" src="src/assets/Group.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
