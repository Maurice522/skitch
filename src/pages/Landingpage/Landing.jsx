import React from "react";
// import Animation from "../../components/Animation/Animation";
import Navbar from "../../components/Navbar/Navbar";
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
    <div className="">
      <Navbar />
      <div className="flex ml-[135px] max-md:flex-col flex-row mt-[98px] max-md:mt-[42px] max-md:ml-4 gap-2">
        <div className="flex flex-col gap-14 max-md:gap-4 basis-0.5">
          <span className="font-bold text-6xl max-md:text-2xl max-md:leading-[31px] leading-[72px] tracking-lan drop-shadow-stock">
            THE FOOD STOCK EXCHANGE
          </span>
          <span className="font-nav font-normal max-md:font-medium max-md:text-xs max-md:leading-[17px] text-2xl text-[#3E3E3E] leading-[34px]">
            To experience this wonderful journey be the first one to know when we are live
          </span>
          <div className="max-md:w-[120px] w-[236px] h-[58px] max-md:h-[33.48px] bg-black text-white tracking-comm rounded-xl font-nav font-semibold text-xl max-md:text-[10px] max-md:leading-[14px] max-md:text-left text-right shadow-lan p-2 leading-[28px]">
            Join the Community
          </div>
          <span className="drop-shadow-lan max-md:text-left max-md:ml-2 font-bold text-2xl max-md:text-sm max-md:leading-[18px] leading-[31px] text-center text-black w-[158px] h-[31px]">
            #SKITCHERS
          </span>
        </div>
        <div className="">
          <img alt="" src="/Layer_1.jpg" className="w-[742px] h-[750px]"/>
          {/* <img alt="" src="/Phone.jpg" className="w-[742px] h-[750px]"/> */}
        </div>
      </div>
      <div className="font-normal text-[64px] max-md:text-[24px] max-md:leading-[55px] max-md:ml-[5%] max-md:text-left drop-shadow-lan1 text-center mt-14 max-md:mt-4 leading-[147px]">
        Who are we doing this for?
      </div>
      <div className="max-sm:ml-4 ml-4 text-center font-nav font-normal text-2xl max-md:text-sm max-md:leading-[24px] leading-[42px]">Skitch is Innovative, Engaging Solution to the problems of all the food stakeholders be it the</div>
      <div className="flex flex-row max-md:justify-start max-md:ml-4 items-center justify-center max-md:mt-3 mt-20 gap-2">
        <div className="text-center shadow-card max-md:rounded-2xl rounded-card">
          <img src="/image 49.jpg" alt="" className="w-[314px] max-md:w-[130px] max-md:h-[100px] p-3"/><br></br>
          <span className="font-nav font-normal max-md:text-[10px] max-md:leading-[10px] text-2xl leading-[36px]">
            ‘Always So Hungry’<br></br> 
            <span className="font-bold">Foodies</span>
          </span>
        </div>        
        <img src="/image 50.png" className="max-md:w-[50px] max-md:h-[45px]" alt=""/>
        <div className="text-center shadow-card rounded-card">
          <img src="/image 48.jpg" alt="" className="max-md:w-[130px] max-md:h-[100px] w-[314px] p-3"/><br></br>
          <span className="font-nav font-normal max-md:leading-[10px] max-md:text-[10px] text-2xl leading-[36px]">
            ‘Hardworking and Ethical’ <br></br>
            <span className="font-bold">Restaurant Owners</span>
          </span>
        </div>
      </div>
      <div className="max-md:ml-4 max-md:p-0 max-md:w-[343px] max-sm:w-[90%] max-md:h-[174px] flex flex-row mt-20 max-md:gap-4 gap-14 rounded-3xl shadow-card2 m-[5%] p-2">
        <img src="/image 47.jpg" className="max-md:w-[111px] max-md:h-[144px] p-4 h-[300px]" alt=""/>
        <div className="relative">
          <span className="text-[#F59428] font-bold leading-[59px] max-md:text-xl max-md:leading-[33px] text-4xl">PHIS PHIS!!!</span><br></br>
          <span className="font-nav font-semibold max-md:text-xs max-md:leading-[20px] text-3xl leading-[49px] text-[#4A4A4A]"> Do you consider yourself a big time foodie or a quirky restaurant owner?</span>
          <div className="absolute bottom-0 max-md:top-[131px] right-0 flex flex-row gap-4 max-md:gap-2">
            <span className="font-bold text-2xl max-md:text-sm leading-[34px] max-md:leading-[20px]">IF YES then,</span>
            <button className="font-nav font-semibold max-md:text-[10px] max-md:leading-[14px] text-base leading-[22px] bg-black text-white rounded-xl shadow-tap text-center max-md:h-[32px] max-md:w-[77px] w-[150px] p-2">TAP HERE</button>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col text-center gap-10">
        <span className="font-bold text-eff leading-[90px] drop-shadow-eff">THE TRIFECTA EFFECT</span>
        <div className="relative">
          <img alt="" src="/Vector 47.png" className="absolute left-[20%]"/>
          <div className="absolute left-[44%] bg-[#747786] rounded-card shadow-grpcard p-2">
            <span className="font-nav font-bold text-3xl leading-[56px] text-white">TRADING</span><br></br>
            <span className="font-nav font-medium text-sm leading-[18px] text-white">We offer new food trading</span>
            <img alt="" src="/image 44.jpg" className="p-4 w-[250px] h-[200px]"/>
          </div>         
          <div className="absolute left-[20%] top-[470px] bg-[#FCB8CD] rounded-card shadow-grpcard p-2">
            <span className="font-nav font-bold text-3xl leading-[56px] text-white">LOYALTY</span><br></br>
            <span className="font-nav font-medium text-sm leading-[18px] text-white">Super easy loyalty software</span>
            <img alt="" src="/image 44(1).jpg" className="p-4 w-[250px] h-[200px]"/>
          </div>
          <div className="absolute top-[470px] left-[70%] bg-[#AFAFAF] rounded-card shadow-grpcard p-2">
            <span className="font-nav font-bold text-3xl leading-[56px] text-white">TRANSPARENCY</span><br></br>
            <span className="font-nav font-medium text-sm leading-[18px] text-white">We Offer Transparency in Rating</span>
            <img alt="" src="/image 44(2).jpg" className="p-4 w-[250px] h-[200px]"/>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
