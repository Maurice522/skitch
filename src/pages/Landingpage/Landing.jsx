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
    <div className="mb-4">
      <Navbar />
      <div className="flex ml-[135px] items-center justify-center max-sm:items-start max-sm:flex-col flex-row mt-[98px] max-sm:mt-[42px] max-sm:ml-4 gap-2">
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
          <img alt="" src="/Layer_1.jpg" className="w-[742px] h-[750px] sm:max-md:w-[350px] md:max-lg:w-[500px] md:max-lg:h-[600px] max-sm:w-[343px] max-sm:h-[267px]" />
          <img alt="" src="/Phone.jpg" className="w-[247px] h-[507px] md:max-lg:w-[170px] md:max-lg:h-[400px] max-sm:left-[31%] top-[2%] right-[37%] absolute max-sm:w-[100px] max-sm:h-[166px]" />
        </div>
      </div>
      <div className="font-normal text-[64px] max-sm:text-[24px] max-sm:leading-[55px] max-sm:ml-[5%] max-sm:text-left drop-shadow-lan1 text-center mt-14 max-sm:mt-4 leading-[147px]">
        Who are we doing this for?
      </div>
      <div className="max-sm:ml-4 ml-4 text-center font-nav font-normal text-2xl max-sm:text-sm max-sm:leading-[24px] leading-[42px] max-sm:max-w-[251px]">Skitch is Innovative, Engaging Solution to the problems of all the food stakeholders be it the</div>
      <div className="flex flex-row items-center justify-center gap-2 mt-20 max-sm:justify-start max-sm:ml-4 max-sm:mt-3">
        <div className="text-center shadow-card max-sm:rounded-2xl rounded-card">
          <img src="/image 49.jpg" alt="" className="w-[314px] max-sm:w-[130px] max-sm:h-[100px] p-3" /><br></br>
          <span className="font-nav font-normal max-sm:text-[10px] max-sm:leading-[10px] text-2xl leading-[36px]">
            ‘Always So Hungry’<br></br>
            <span className="font-bold">Foodies</span>
          </span>
        </div>
        <img src="/image 50.png" className="max-sm:w-[50px] max-sm:h-[45px]" alt="" />
        <div className="text-center shadow-card rounded-card">
          <img src="/image 48.jpg" alt="" className="max-sm:w-[130px] max-sm:h-[100px] w-[314px] p-3" /><br></br>
          <span className="font-nav font-normal max-sm:leading-[10px] max-sm:text-[10px] text-2xl leading-[36px]">
            ‘Hardworking and Ethical’ <br></br>
            <span className="font-bold">Restaurant Owners</span>
          </span>
        </div>
      </div>
      <div className="max-sm:ml-4 max-sm:p-0 max-md:w-[343px] max-sm:w-[85%] max-sm:h-[174px] flex flex-row mt-20 max-sm:gap-4 gap-14 rounded-3xl shadow-card2 m-[5%] p-2">
        <img src="/image 47.jpg" className="max-sm:w-[111px] max-sm:h-[144px] p-4 h-[300px]" alt="" />
        <div className="relative">
          <span className="text-[#F59428] font-bold leading-[59px] max-sm:text-xl max-sm:leading-[33px] text-4xl">PHIS PHIS!!!</span><br></br>
          <span className="font-nav font-semibold max-sm:text-xs max-sm:leading-[20px] text-3xl leading-[49px] text-[#4A4A4A]"> Do you consider yourself a big time foodie or a quirky restaurant owner?</span>
          <div className="absolute bottom-0 max-sm:top-[131px] right-0 flex flex-row gap-4 max-sm:gap-2">
            <span className="font-bold text-2xl max-sm:text-sm leading-[34px] max-sm:leading-[20px]">IF YES then,</span>
            <button className="font-nav font-semibold max-sm:text-[10px] max-sm:leading-[14px] text-base leading-[22px] bg-black text-white rounded-xl shadow-tap text-center max-sm:h-[32px] max-sm:w-[77px] w-[150px] p-2">TAP HERE</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 text-center max-sm:w-[341px] max-sm:text-left max-sm:ml-4">
          <div className="font-bold text-eff max-sm:text-[20px] max-sm:leading-[28px] leading-[90px] drop-shadow-eff">THE TRIFECTA EFFECT</div>
            <div className="relative bg-tri max-sm:bg-cover bg-no-repeat bg-center max-sm:w-[250px] max-sm:h-[210px] w-[834px] h-[623px] absolute top-[200%] left-[15%] sm:max-md:left-0">
              <span className="absolute max-sm:w-[278px] max-sm:h-[32px] max-sm:text-5xl max-sm:leading-[22px] top-[55%] h-[32px] left-0 italic font-bold font-nav text-[200px] leading-[22px] text-center text-[#EFEFEF] text-opacity-[0.85] drop-shadow-skitch border-solid border-[#DEDEDE]">SKITCH</span>
              <span className="absolute w-[448px] max-sm:w-[145px] max-sm:h-[28px] top-[50%] left-[25%] text-3xl font-bold max-sm:text-[10px] max-sm:leading-[14px] font-nav max-sm:font-semibold leading-[42px] text-center text-[#525252]">Revolutionizing the Food-Tech space in style</span>
              <div className="absolute max-sm:rounded-lg left-[38%] max-sm:left-[30%] max-sm:top-[-18%] top-[-5%] bg-[#747786] rounded-card shadow-grpcard p-2 max-sm:w-[116px] max-sm:h-[120px] max-sm:p-0">
                <span className="font-nav font-bold max-sm:text-[10px] text-3xl max-sm:leading-[24px] leading-[56px] text-white">TRADING</span><br></br>
                <span className="font-nav font-medium text-sm leading-[18px] text-white max-sm:text-[7px] max-sm:leading-[10px]">We offer new food trading</span>
                <img alt="" src="/image 44.jpg" className="p-4 w-[250px] h-[200px] max-sm:w-[120px] max-sm:h-[50px] max-sm:p-0" />
              </div>
              <div className="absolute max-sm:rounded-lg max-sm:w-[116px] max-sm:h-[120px] max-sm:left-[-10%] left-[-5%] bottom-[-23%] bg-[#FCB8CD] rounded-card shadow-grpcard p-2 max-sm:p-0">
                <span className="font-nav font-bold max-sm:text-sm text-3xl max-sm:leading-[24px] leading-[56px] text-white">LOYALTY</span><br></br>
                <span className="font-nav font-medium text-sm leading-[18px] text-white max-sm:text-[7px] max-sm:leading-[10px]">Super easy loyalty software</span>
                <img alt="" src="/image 44(1).jpg" className="p-4 w-[250px] h-[200px] max-sm:w-[120px] max-sm:h-[50px] max-sm:p-0" />
              </div>
              <div className="absolute max-sm:w-[116px] max-sm:rounded-lg max-sm:h[240px] bottom-[-23%] max-sm:bottom-[-20%] max-sm:left-[70%] left-[72%] bg-[#AFAFAF] rounded-card shadow-grpcard max-sm:p-0 p-2">
                <span className="font-nav font-bold text-3xl leading-[56px] text-white max-sm:text-sm max-sm:leading-[24px]">TRANSPARENCY</span><br></br>
                <span className="font-nav font-medium text-sm leading-[18px] text-white max-sm:text-[7px] max-sm:leading-[10px]">We Offer Transparency in Rating</span>
                <img alt="" src="/image 44(2).jpg" className="p-4 w-[250px] h-[200px] max-sm:w-[120px] max-sm:h-[50px] max-sm:p-0" />
              </div>
            </div>
            <div className="clear-both"></div>
            <div className="clear-both"></div>
        </div>
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
        <div className="font-bold max-sm:w-[91px] text-center drop-shadow-lan max-sm:leading-[18px] max-sm:text-sm leading-[31px] text-2xl mt-4 max-sm:ml-[25%] max-sm:text-left">#SKITCHERS</div>
      </div>
  );
};

export default Landing;
