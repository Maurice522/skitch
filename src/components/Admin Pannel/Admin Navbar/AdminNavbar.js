import React from 'react'
import "./AdminNavbar.css"

const AdminNavbar = () => {
  return (
    <nav style={{marginBottom:"1rem"}} className="">
    <div className="flex flex-row bg-white max-md:h-[47px] h-[83px] shadow-nav items-center text-center">
      <span className="font-nav italic text-transparent max-md:w-[80px] max-md:h-[20px] w-[156px] h-[28px] bg-clip-text font-bold max-md:leading-[22px] leading-[24px] bg-gradient-to-b from-[#DC3535] to-[#F59428] text-4xl max-md:text-xl absolute left-[35px] top-[32px] max-md:top-[13px] ">
        SKITCH
      </span>
      <span className="font-nav font-normal max-md:w-[126px] max-md:h-[11px] w-[212px] h-[17px] max-md:text-[10px] max-md:leading-[14px] text-base absolute max-md:left-[130px] md:max-lg:left-[20%] left-[217px] max-md:top-[18px] top-[32px] max-md:tracking-nav1 tracking-nav leading-6 drop-shadow-nav text-black">
        FUN FOOD & FRENZ
      </span>
      <span className='font-nav font-normal text-[26px] max-md:text-[16px] max-md:leading-[14px]' style={{position:"absolute",right:"1rem"}}>Admin Pannel</span>
    </div>
</nav>
  )
}

export default AdminNavbar