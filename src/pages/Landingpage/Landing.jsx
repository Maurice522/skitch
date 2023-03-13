import React from "react";
// import Animation from "../../components/Animation/Animation";
import Navbar from "../../components/Navbar/Navbar";
import Reason from "../../components/Reason";
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
    <div className="mb-4">
      <Navbar />
      <div className="flex ml-[135px] items-center justify-center max-sm:items-start max-md:flex-col flex-row mt-[98px] max-sm:mt-[42px] max-sm:ml-4 gap-2">
        <div className="flex flex-col gap-14 max-sm:gap-4 basis-0.5">
          <span className="font-bold text-6xl max-sm:text-2xl max-sm:leading-[31px] leading-[72px] tracking-lan drop-shadow-stock">
            THE FOOD STOCK EXCHANGE
          </span>
          <div className="font-nav font-normal max-sm:font-medium max-sm:max-w-[251px] max-sm:max-h-[34px] max-sm:text-xs max-sm:leading-[17px] text-2xl text-[#3E3E3E] leading-[34px]">
            To experience this wonderful journey be the first one to know when we are live
          </div>
          <div className="max-sm:w-[120px] w-[236px] h-[58px] max-sm:h-[33.48px] bg-black text-white tracking-comm rounded-xl font-nav font-semibold text-xl max-sm:text-[10px] max-sm:leading-[14px] max-sm:text-left text-right shadow-lan p-2 leading-[28px]">
            Join the Community
          </div>
          <span className="drop-shadow-lan max-sm:text-left max-sm:ml-2 font-bold text-2xl max-sm:text-sm max-sm:leading-[18px] leading-[31px] text-center text-black w-[158px] h-[31px]">
            #SKITCHERS
          </span>
        </div>
        <div className="relative">
          <img alt="" src="/Layer_1.jpg" className="w-[742px] h-[750px] md:max-lg:w-[500px] md:max-lg:h-[600px] max-sm:w-[343px] max-sm:h-[267px]" />
          <img alt="" src="/Phone.jpg" className="w-[247px] h-[507px] md:max-lg:w-[170px] md:max-lg:h-[400px] max-sm:left-[31%] top-[2%] right-[37%] absolute max-sm:w-[100px] max-sm:h-[166px]" />
        </div>
      </div>
      <Reason />
      <Trifecta />
      <div className="flex flex-col max-sm:w-[343px] items-center max-sm:justify-start justify-center gap-4 mt-20 text-center max-sm:items-start max-sm:ml-4 max-sm:mt-0">
        <div className="font-medium max-sm:text-[10px] max-sm:leading-3 font-nav text-[32px] leading-[42px] text-center">In Mathematical terms here is how we would summaries SKITCH</div>
        <div className="bg-black max-sm:ml-8 rounded-card max-sm:rounded-lg h-[226px] max-sm:w-[300px] max-sm:h-[63px]">
          <span className="font-semibold font-nav text-[26px] leading-[34px] text-white max-sm:text-[10px] max-sm:leading-3">Food Ordering + Stock Market + Customer Retention =</span>
          <span className="italic font-bold max-sm:leading-[22px] max-sm:text-[14px] font-nav text-[40px] leading-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#DC3535] to-[#F59428]">SKITCH</span>
        </div>
      </div>
      <div className="flex flex-row max-sm:w-[343px] max-sm:h-[63px] justify-center gap-4 mt-6 max-sm:justify-start max-sm:ml-4">
        <span className="font-bold text-[32px] leading-[42px] max-sm:text-sm max-sm:leading-[18px]">Join the Community Now</span>
        <button className="w-[155px] h-[44px] max-sm:w-[90px] max-sm:h-[30px] font-nav font-semibold text-base max-sm:rounded-md max-sm:text-[10px] max-sm:leading-[14px] leading-[22px] bg-black text-white rounded-xl">Click Here</button>
      </div>
      <div className="font-bold max-sm:w-[91px] text-center drop-shadow-lan max-sm:leading-[18px] max-sm:text-sm max-sm:mt-0 leading-[31px] text-2xl mt-4 max-sm:ml-[25%] max-sm:text-left">#SKITCHERS</div>
    </div>
  );
};

export default Landing;
