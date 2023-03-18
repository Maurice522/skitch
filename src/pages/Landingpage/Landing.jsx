import React from "react";
import LogInModal from "../../components/LogInModal";
// import Animation from "../../components/Animation/Animation";
import Navbar from "../../components/Navbar/Navbar";
import OtpModal from "../../components/OtpModal";
import Reason from "../../components/Reason";
import SignUpModal from "../../components/SignUpModal";
import Trifecta from "../../components/Trifecta";
import "./Landing.css";

// const Landing = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="landing__wrapper">
//         <div className="landing__content">
//           <h3>The FOOD STOCK Exchange</h3>
//           <p>To experience this wonderful journey join now</p>
//           <a className="link" href="https://forms.gle/a4pdvX6xtTVxTmNf7">
//             <button>Join Waitlist</button>
//           </a>
//         </div>
//         <Animation />
//       </div>
//     </div>
//   );
// };

// export default Landing;

const Landing = () => {
  return (
    <div className="mb-4 overflow-hidden">
      <Navbar />
      <div className="flex lg:ml-[135px] sm:max-lg:gap-4 max-lg:ml-4 max-sm:items-start max-lg:flex-col flex-row mt-[98px] max-sm:mt-[42px] max-sm:ml-4 gap-0">
        <div className="flex flex-col lg:mt-20 gap-14 max-sm:gap-4 basis-1/4">
          <div className="max-sm:max-w-[252px]">
                    <span className="font-bold text-6xl max-sm:text-2xl max-sm:leading-[31px] leading-[72px] tracking-lan drop-shadow-stock">
            THE FOOD <span className="whitespace-pre">STOCK EXCHANGE</span>
          </span>
          </div>
          <span className="font-nav font-normal max-sm:font-medium max-sm:max-w-[251px] max-sm:max-h-[34px] max-sm:text-xs max-sm:leading-[17px] text-2xl text-[#3E3E3E] leading-[34px]">
            To experience this wonderful journey be the first one to know when we are live
          </span>
          <button className="max-sm:w-[120px] w-[236px] h-[58px] max-sm:h-[33.48px] bg-black text-white tracking-comm rounded-xl font-nav font-semibold text-xl max-sm:text-[10px] max-sm:leading-[14px] max-sm:text-left text-center max-sm:shadow-none shadow-lan p-2 leading-[28px]">
            Join the Community
          </button>
          <span className="drop-shadow-lan max-sm:text-left max-sm:ml-2 font-bold text-2xl max-sm:text-sm max-sm:leading-[18px] leading-[31px] text-center text-black w-[158px] h-[31px]">
            #SKITCHERS
          </span>
        </div>
        <div className="relative max-lg:bg-[#F7F7F7] max-lg:rounded-lg max-lg:w-[100%]">
          <img alt="" src="/Phone.png" className="w-[247px] sm:max-md:left-[20%] md:max-lg:left-[18%] sm:max-lg:w-[24%] sm:max-lg:h-[65%] h-[507px] lg:max-xl:w-[38%] lg:max-xl:h-[459px] max-sm:left-[27%] top-[2%] right-[37%] absolute max-sm:w-[28%] max-sm:h-[200px]" />
          <img alt="" src="/Layer 1.png" className="lg:w-[742px] lg:h-[750px] max-sm:w-[90%] max-sm:h-[267px]" />
        </div>
      </div>
      <Reason />
      <Trifecta />
      <div className="flex flex-col items-center gap-4 mt-20 text-center max-sm:mt-0">
        <div className="font-medium max-sm:text-[10px] max-sm:leading-3 font-nav text-[32px] leading-[42px] text-center">In Mathematical terms here is how we would summaries SKITCH</div>
        <div className="bg-black xl:w-[992px] rounded-card max-sm:rounded-lg h-[226px] max-sm:w-[300px] max-sm:h-[63px]">
          <div className="max-sm:translate-y-4 sm:max-xl:translate-y-20 sm:max-xl:p-4 xl:translate-y-[250%]">
            <span className="font-semibold font-nav text-[26px] leading-[34px] text-white max-sm:text-[8px] max-sm:leading-3">Food Ordering + Stock Market + Customer Retention =</span>
            <span className="italic font-bold max-sm:leading-[22px] max-sm:text-[12px] font-nav text-[40px] leading-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#DC3535] to-[#F59428]">SKITCH</span>
          </div>
        </div>
      </div>
      <div className="max-sm:absolute max-sm:left-[13%] flex flex-row max-sm:w-[273px] max-sm:h-[30px] justify-center gap-4 mt-6">
        <span className="font-bold text-[32px] self-center leading-[42px] max-sm:text-xs max-sm:leading-[18px]">Join the Community Now</span>
        <button className="w-[155px] h-[44px] max-sm:w-[90px] max-sm:h-[30px] font-nav font-semibold text-base max-sm:rounded-md max-sm:text-[10px] max-sm:leading-[14px] leading-[22px] bg-black text-white rounded-xl">Click Here</button>
      </div>
      <div className="font-bold max-sm:mt-[67px] text-center drop-shadow-lan max-sm:leading-[18px] max-sm:text-sm leading-[31px] text-2xl mt-6 max-sm:text-center">#SKITCHERS</div>
    <SignUpModal 
      open={true}
    /> 
     <LogInModal 
      open={true}
    />
    <OtpModal 
      open={true}
    />
    </div>
  );
};

export default Landing;
