"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MockupImg1 from "../../public/images/deviceMockups.png";
import MockupImg2 from "../../public/images/deviceMockups2.png";
import MockupImg3 from "../../public/images/deviceMockups3.png";

export default function Home() {
  const [isActiveImgOne, setIsActiveImgOne] = useState(true);
  const [isActiveImgTwo, setIsActiveImgTwo] = useState(false);
  const [isActiveImgThree, setIsActiveImgThree] = useState(false);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (isActiveImgOne) {
        setIsActiveImgOne(false);
        setIsActiveImgTwo(true);
        setIsActiveImgThree(false);
      } else if (isActiveImgTwo) {
        setIsActiveImgOne(false);
        setIsActiveImgTwo(false);
        setIsActiveImgThree(true);
      } else if (isActiveImgThree) {
        setIsActiveImgOne(true);
        setIsActiveImgTwo(false);
        setIsActiveImgThree(false);
      }
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [isActiveImgOne, isActiveImgTwo, isActiveImgThree]);

  return (
    <>
      <div className="max-w-[1200px] flex flex-col lg:flex-row m-auto lg:pt-6">
        <div className="w-screen h-[240px] lg:h-[414px] lg:max-w-600px">
          <Link href={"/portfolio"}>
            <Image
              src={MockupImg1}
              alt="mockup1"
              className={`absolute ${
                isActiveImgOne
                  ? "transition-all ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }`}
            />
            <Image
              src={MockupImg2}
              alt="mockup2"
              className={`absolute ${
                isActiveImgTwo
                  ? "transition-all ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }`}
            />
            <Image
              src={MockupImg3}
              alt="mockup3"
              className={`absolute ${
                isActiveImgThree
                  ? "transition-all ease-in-out opacity-100 duration-700"
                  : "transition-all ease-in-out opacity-0 duration-700"
              }`}
            />
          </Link>
        </div>
        <div className="w-screen text-center px-3 lg:text-left lg:max-w-600px flex flex-col lg:pt-6">
          <p className="text-3xl lg:text-5xl">Web Design for the modern world</p>
          <p className="text-xl">Technology and security you can count on.</p>
        </div>
      </div>
      <div className="w-screen flex flex-col lg:max-w-[1200px] lg:flex-row ">
        <div>
          
        </div>
        <div>
          
        </div>
        <div>

        </div>
      </div>
    </>
  );
}
