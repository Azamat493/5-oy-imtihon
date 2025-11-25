import React from "react";
import Frame26086938 from "../../assets/images/Frame26086938.png";

const TechHeimSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1224px] w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
          <div className="max-w-md flex flex-col h-[370px] md:items-start items-center justify-center gap-5 md:justify-between w-full md:w-auto">
            <h1 className="font-semibold md:text-start text-center text-[54px] sm:text-[64px] text-[color:var(--primary-primary-700)] font-family">
              Tech Heim
            </h1>
            <p className="font-medium  md:text-start text-center text-[32px] text-[color:var(--primary-primary-700)] font-family">
              "Join the{" "}
              <span className="text-[var(--secondary)]">
                digital revolution
              </span>
              "
            </p>
            <button
              className="w-72 h-14 px-4 py-2 rounded-lg bg-[var(--secondary)] font-normal text-base text-center cursor-pointer text-[color:var(--white)] font-family
  transition-all duration-300 hover:brightness-90 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore More
            </button>
          </div>

          <div className="relative w-full md:w-auto flex justify-center">
            <img src={Frame26086938} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechHeimSection;