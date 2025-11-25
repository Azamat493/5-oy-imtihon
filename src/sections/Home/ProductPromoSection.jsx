import React from "react";
import Frame26086873 from "../../assets/images/Frame26086873.png";
import Ellipse448 from "../../assets/images/Ellipse448.png";
import image187 from "../../assets/images/image187.png";
import Banner from "../../assets/images/Banner.png";
import ps53 from "../../assets/images/ps53.png";

const ProductPromoSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1224px] w-full mx-auto px-4">
        <div className="flex relative flex-col items-center xl:flex-row gap-6">
          <div
            className="w-full xl:max-w-[756px] bg-[linear-gradient(315deg,#b0e9c9_0%,#1fb6cf_48%,#1975b9_100%)] h-auto md:h-[420px] p-10 flex flex-col md:flex-row gap-5 rounded-lg overflow-hidden relative bg-no-repeat"

          >
            <div className="absolute left-[40%] z-5 top-[-14%] md:left-[40%] md:top-[-14%]">
              <img src={Ellipse448} alt="" />
            </div>
            <div className="absolute left-[-10%] z-5 top-3 md:left-[-10%] md:top-3">
              <img src={Ellipse448} alt="" />
            </div>
            <div className="absolute right-[-4%] z-5 bottom-[-6%] md:right-[-4%] md:bottom-[-6%]">
              <img src={Ellipse448} alt="" />
            </div>

            <div className="flex flex-col relative z-15 justify-between md:w-1/2">
              <h3 className="font-medium ml-4 text-2xl text-[color:var(--black)] font-family mb-4">
                Iphone <span className="text-[var(--white)]">15 Series</span>
              </h3>
              <img src={image187} alt="" className="" />
            </div>

            <div className="mt-5 md:mt-0 md:w-1/2 flex flex-col justify-center">
              <div className="flex w-full justify-center xl:max-w-[244px] h-[50px] gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col  border text-center border-[color:var(--black)] px-2 py-1 rounded-lg border-solid">
                    <span className="font-medium text-base text-center text-[color:var(--black)] font-family">8</span>
                    <span className="font-light text-sm text-center text-[color:var(--black)] font-family">Days</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col relative z-15 mt-5">
                <h1 className="font-medium text-xl text-center text-[color:var(--black)] font-family">
                  It feels good to be the first
                </h1>
                <p className="font-light xl:text-start text-center w-full xl:max-w-[244px] text-base leading-[150%] text-[color:var(--neutral-gray-2d2d2d)] font-family mt-2">
                  Get ready for the future of smartphones. Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.
                </p>
                <button className="w-[134px] block mx-auto mt-5 bg-[var(--primary)] hover:bg-opacity-90 hover:scale-105 cursor-pointer h-12 font-normal text-base text-center text-[color:var(--white)] px-4 py-2 rounded-lg font-family transition">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div
            className="max-w-[444px] h-[420px] p-5 bg-no-repeat flex flex-col justify-between"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div>
              <h1 className="font-medium mt-3 text-end smm:text-center text-2xl text-[#fcc870] font-family">
                Play Station 5
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className="font-medium text-xl text-[#005690] font-family">
                  Digital Edition + 2TB
                </h1>
                <img src={ps53} alt="" />
              </div>
              <button className="w-[134px] ml-20 mt-5 md:ml-20 md:mt-5 bg-[var(--primary)] hover:bg-opacity-90 hover:scale-105 cursor-pointer h-12 font-normal text-base text-center text-[color:var(--white)] px-4 py-2 rounded-lg font-family transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPromoSection;