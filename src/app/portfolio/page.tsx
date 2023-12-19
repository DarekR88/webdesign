"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import WebImg from "../../../public/images/websiteImg.png";
import LongImg from "../../../public/images/image (5).png";
import MockupImg from "../../../public/images/deviceMockups.png";
import MockupImg2 from "../../../public/images/deviceMockups2.png";

export default function Portfolio() {
  const [isActiveProfessional, setIsActiveProfessional] = useState(false);
  const [isActivePremium, setIsActivePremium] = useState(false);
  const [isActiveBasic, setIsActiveBasic] = useState(true);
  const [isActiveDemoOne, setIsActiveDemoOne] = useState(true);
  const [isActiveDemoTwo, setIsActiveDemoTwo] = useState(false);
  const [isActiveDemoThree, setIsActiveDemoThree] = useState(false);

  const handleClickBasic = () => {
    setIsActiveBasic(true);
    setIsActiveProfessional(false);
    setIsActivePremium(false);
    setIsActiveDemoOne(true);
    setIsActiveDemoTwo(false);
    setIsActiveDemoThree(false);
  };

  const handleClickProfessional = () => {
    setIsActiveProfessional(true);
    setIsActiveBasic(false);
    setIsActivePremium(false);
    setIsActiveDemoOne(true);
    setIsActiveDemoTwo(false);
    setIsActiveDemoThree(false);
  };

  const handleClickPremium = () => {
    setIsActiveProfessional(false);
    setIsActiveBasic(false);
    setIsActivePremium(true);
    setIsActiveDemoOne(true);
    setIsActiveDemoTwo(false);
    setIsActiveDemoThree(false);
  };

  const handleClickDemoOne = () => {
    setIsActiveDemoOne(true);
    setIsActiveDemoTwo(false);
    setIsActiveDemoThree(false);
  };
  const handleClickDemoTwo = () => {
    setIsActiveDemoOne(false);
    setIsActiveDemoTwo(true);
    setIsActiveDemoThree(false);
  };
  const handleClickDemoThree = () => {
    setIsActiveDemoOne(false);
    setIsActiveDemoTwo(false);
    setIsActiveDemoThree(true);
  };

  return (
    <>
      <div>
        <p className="text-6xl py-3 lg:py-10 text-center">Portfolio</p>
        <div className="flex flex-row w-screen justify-center items-center py-4 gap-4">
          <button
            onClick={handleClickBasic}
            className={`h-[26.8px] text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActiveBasic
                ? "transition ease-in-out border-b-[3px] border-black border-opacity-100 duration-500"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
          >
            Basic
          </button>
          <div className="relative h-[40px] w-[3px] bg-black"></div>
          <button
            onClick={handleClickProfessional}
            className={`h-[26.8px] text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActiveProfessional
                ? "transition ease-in-out border-b-[3px] border-black border-opacity-100 duration-500"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
          >
            Professional
          </button>
          <div className="relative h-[40px] w-[3px] bg-black"></div>
          <button
            onClick={handleClickPremium}
            className={`h-[26.8px] text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActivePremium
                ? "transition ease-in-out border-b-[3px] border-black border-opacity-100 duration-500"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
          >
            Premium
          </button>
        </div>
        <div className="flex w-screen lg:max-w-[1200px] m-auto justify-center min-h-screen">
          <div
            className={`absolute py-6 ${
              isActiveBasic
                ? "transition-all ease-in-out opacity-100 duration-700"
                : "transition-all ease-in-out opacity-0 duration-700"
            }`}
          >
            <div className="flex flex-col gap-6 w-screen lg:max-w-[1000px] lg:flex-row lg:justify-between">
              <div
                onClick={handleClickDemoOne}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoOne
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoTwo}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoTwo
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoThree}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoThree
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
            </div>
            <div
              className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                isActiveDemoOne
                  ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }
            
            `}
            >
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div
              className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                isActiveDemoTwo
                  ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }
            
            `}
            >
              <div className="flex w-screen lg:max-w-[600px]">
                <Image
                  src={MockupImg2}
                  alt="mockup"
                  className="max-w-[600px]"
                />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div
              className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                isActiveDemoThree
                  ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }
            
            `}
            >
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
          </div>
          <div
            className={`absolute py-6 ${
              isActiveProfessional
                ? "transition-all ease-in-out opacity-100 duration-700"
                : "transition-all ease-in-out opacity-0 duration-700"
            }`}
          >
            <div className="flex flex-col gap-6 w-screen lg:max-w-[1000px] lg:flex-row lg:justify-between">
              <div
                onClick={handleClickDemoOne}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoOne
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={LongImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoTwo}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoTwo
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={LongImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoThree}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoThree
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={LongImg} alt="web image" />
                </div>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoOne
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg2} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoTwo
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoThree
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg2} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
          </div>
          <div
            className={`absolute py-6 ${
              isActivePremium
                ? "transition-all ease-in-out opacity-100 duration-700"
                : "transition-all ease-in-out opacity-0 duration-700"
            }`}
          >
            <div className="flex flex-col gap-6 w-screen lg:max-w-[1000px] lg:flex-row lg:justify-between">
              <div
                onClick={handleClickDemoOne}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoOne
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoTwo}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoTwo
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
              <div
                onClick={handleClickDemoThree}
                className={`w-[320px] p-2 rounded-md ${
                  isActiveDemoThree
                    ? "transition-all ease-in-out border-2 border-black border-opacity-100 duration-700"
                    : "transition-all ease-in-out border-2 border-transparent border-opacity-0 duration-700"
                }`}
              >
                <div className="w-[300px] h-[100px] overflow-hidden rounded-md">
                  <Image src={WebImg} alt="web image" />
                </div>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoOne
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoTwo
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg2} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
            <div className={`absolute max-w-[1200px] flex flex-col lg:flex-row mt-8 ${
                  isActiveDemoThree
                    ? "transition-all delay-300 ease-in-out opacity-100 duration-700"
                    : "transition-all ease-in-out opacity-0 duration-700"
                }
            
            `}>
              <div className="flex w-screen lg:max-w-[600px]">
                <Image src={MockupImg} alt="mockup" className="max-w-[600px]" />
              </div>
              <div className="flex flex-col w-screen lg:max-w-[600px]">
                <p className="text-3xl">Website Title</p>
                <p>Website description</p>
                <p>features list</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
