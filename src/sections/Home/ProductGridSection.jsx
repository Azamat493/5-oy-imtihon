import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";

const ProductGridSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1224px] w-full mx-auto px-4">
        <div className="bg-[var(--primary-primary-500)] h-[325px] flex items-center justify-center rounded-[8px] p-6">
          <div className="flex gap-6 overflow-x-auto py-2 md:py-0 custom-scroll">
            <div className="bg-[var(--white)] w-[184px] h-[237px] rounded-lg shadow-sm border p-[8px] border-[var(--neutral-gray-ededed)] flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1 left-[-5%] flex items-center justify-center bg-[var(--primary-secondary-secondary-100)] font-light text-xs text-[color:var(--secondary)] font-family w-[42px] h-[23px] px-1.5 py-1 rounded-[0_8px_8px_0]">
                  -50%
                </div>
                <img src={image1} alt="" className="w-full h-auto" />
              </div>
              <div className="mt-4">
                <h3 className="font-light text-xs text-[color:var(--black)] font-family mb-2">
                  Logitech G502 Gaming Mouse
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-normal text-xs line-through text-[color:var(--neutral-gray-717171)] font-family">
                    $38.00
                  </span>
                  <span className="font-light text-sm text-right text-[color:var(--black)] font-family">
                    $19.00
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--white)] w-[184px] h-[237px] rounded-lg shadow-sm border p-[8px] border-[var(--neutral-gray-ededed)] flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1 left-[-5%] flex items-center justify-center bg-[var(--primary-secondary-secondary-100)] font-light text-xs text-[color:var(--secondary)] font-family w-[42px] h-[23px] px-1.5 py-1 rounded-[0_8px_8px_0]">
                  -30%
                </div>
                <img src={image2} alt="" className="w-full h-auto" />
              </div>
              <div className="mt-1">
                <h3 className="font-light text-xs text-[color:var(--black)] font-family mb-2">
                  NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant
                  Design
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-normal text-xs line-through text-[color:var(--neutral-gray-717171)] font-family">
                    $49.00
                  </span>
                  <span className="font-light text-sm text-right text-[color:var(--black)] font-family">
                    $34.30
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--white)] w-[184px] h-[237px] rounded-lg shadow-sm border p-[8px] border-[var(--neutral-gray-ededed)] flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1 left-[-5%] flex items-center justify-center bg-[var(--primary-secondary-secondary-100)] font-light text-xs text-[color:var(--secondary)] font-family w-[42px] h-[23px] px-1.5 py-1 rounded-[0_8px_8px_0]">
                  -20%
                </div>
                <img src={image3} alt="" className="w-full h-auto" />
              </div>
              <div className="mt-4">
                <h3 className="font-light text-xs text-[color:var(--black)] font-family mb-2">
                  Apple Watch Series 7 (GPS, 41MM)
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-normal text-xs line-through text-[color:var(--neutral-gray-717171)] font-family">
                    $289.00
                  </span>
                  <span className="font-light text-sm text-right text-[color:var(--black)] font-family">
                    $231.20
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--white)] w-[184px] h-[237px] rounded-lg shadow-sm border p-[8px] border-[var(--neutral-gray-ededed)] flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1 left-[-5%] flex items-center justify-center bg-[var(--primary-secondary-secondary-100)] font-light text-xs text-[color:var(--secondary)] font-family w-[42px] h-[23px] px-1.5 py-1 rounded-[0_8px_8px_0]">
                  -25%
                </div>
                <img src={image4} alt="" className="w-full h-auto" />
              </div>
              <div className="mt-4">
                <h3 className="font-light text-xs text-[color:var(--black)] font-family mb-2">
                  Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-normal text-xs line-through text-[color:var(--neutral-gray-717171)] font-family">
                    $950.22
                  </span>
                  <span className="font-light text-sm text-right text-[color:var(--black)] font-family">
                    $712.66
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--white)] w-[184px] h-[237px] rounded-lg shadow-sm border p-[8px] border-[var(--neutral-gray-ededed)] flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1 left-[-5%] flex items-center justify-center bg-[var(--primary-secondary-secondary-100)] font-light text-xs text-[color:var(--secondary)] font-family w-[42px] h-[23px] px-1.5 py-1 rounded-[0_8px_8px_0]">
                  -17%
                </div>
                <img src={image5} alt="" className="w-full h-auto" />
              </div>
              <div className="mt-4">
                <h3 className="font-light text-xs text-[color:var(--black)] font-family mb-2">
                  Samsung Titan smart watch
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-normal text-xs line-through text-[color:var(--neutral-gray-717171)] font-family">
                    $120.00
                  </span>
                  <span className="font-light text-sm text-right text-[color:var(--black)] font-family">
                    $99.60
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
