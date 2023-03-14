import React from "react";
import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <span className="drop-shadow-nav">Skitch</span>
//         <a href="mailto:connect@skitch.in">
//           <button>Contact</button>
//         </a>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="w-screen">
        <div className="flex flex-row bg-white max-md:h-[47px] h-[103px] shadow-nav items-center text-center">
          <span className="font-nav italic text-transparent max-md:w-[80px] max-md:h-[20px] w-[156px] h-[28px] bg-clip-text font-bold max-md:leading-[22px] leading-[24px] bg-gradient-to-b from-[#DC3535] to-[#F59428] text-4xl max-md:text-xl absolute left-[135px] max-md:top-[20px] top-[52px] max-lg:left-[17px] ">
            SKITCH
          </span>
          <span className="font-nav font-normal max-md:w-[126px] max-md:h-[11px] w-[212px] h-[17px] max-md:text-[10px] max-md:leading-[14px] text-base absolute max-md:left-[107px] md:max-lg:left-[20%] left-[310px] max-md:top-[23px] top-[63px] max-md:tracking-nav1 tracking-nav leading-6 drop-shadow-nav text-black">
            FUN FOOD & FRENZ
          </span>
        </div>
    </nav>
  );
};

export default Navbar;
