"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MockupImg1 from "../../public/images/deviceMockups.png";
import MockupImg2 from "../../public/images/deviceMockups2.png";
import MockupImg3 from "../../public/images/deviceMockups3.png";
import LaptopImg1 from "../../public/images/image (6).png";
import LaptopImg2 from "../../public/images/image (7).png";
import LaptopImg3 from "../../public/images/image (8).png";
import TableImg from "../../public/images/image (3).png";

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
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [isActiveImgOne, isActiveImgTwo, isActiveImgThree]);

  return (
    <>
      <div className="max-w-[1200px] flex flex-col lg:flex-row m-auto lg:pt-6">
        <div className="w-screen h-[320px] lg:h-[414px] lg:max-w-600px">
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
          <p className="text-3xl lg:text-5xl">
            Web Design for the modern world
          </p>
          <p className="text-xl">Technology and security you can count on.</p>
        </div>
      </div>
      <div>
        <p className="text-6xl text-center py-4 lg:py-8">What We Do</p>
        <div className="max-w-[1200px] flex flex-col-reverse lg:flex-row m-auto">
          <div className="w-screen px-4 lg:px-6 lg:max-w-[600px]">
            <p>
              Having a website can be a game changer in the digital world. At
              Insight Web Design our highly skilled team produces the best
              websites. Whether you own a small business, or just want to
              procure digital ad space, we have your back.
            </p>
            <p className="text-2xl">Website Design and Programming</p>
            <p>Get the Website of your dreams.</p>
            <p className="text-2xl">Website Care and Maintenance</p>
            <p>
              Our low-cost maintenance programs are the best in the industry.
            </p>
            <p className="text-2xl">Social Media</p>
            <p>
              The most popular social media apps see ten&#39;s of million&#39;s
              of users daily. Our experts will help you take advantage of that
              traffic.
            </p>
          </div>
          <div className="w-screen h-[150px] overflow-hidden lg:max-w-[600px] lg:h-[501px]">
            <Image src={TableImg} alt="table" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-6xl text-center py-4 lg:py-8">Packages</p>
        <div className="w-screen flex flex-col lg:max-w-[1200px] lg:flex-row m-auto lg:justify-between">
          <div className="lg:max-w-[375px]">
            <Image src={LaptopImg1} alt="laptop 1"></Image>
            <div className="px-4">
              <p>Basic Website</p>
              <p>Great for portfolios.</p>
              <p>Starting at $200.00</p>
              <p>Features:</p>
              <ul>
                <li>3 page max</li>
                <li>Mobile Responsive</li>
                <li>SEO Website Copy Editing</li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[375px]">
            <Image src={LaptopImg2} alt="laptop 1"></Image>
            <div className="px-4">
              <p>Professional Website</p>
              <p>Perfect for your small business</p>
              <p>Starting at $500.00</p>
              <p>Features:</p>
              <ul>
                <li>5 page max</li>
                <li>Mobile Responsive</li>
                <li>SEO Website Copy Editing</li>
                <li>Service/Appointment Request Page</li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[375px]">
            <Image src={LaptopImg3} alt="laptop 1"></Image>
            <div className="px-4">
              <p>Premium Website</p>
              <p>E-commerce and customer/membership management</p>
              <p>Starting at $2500.00</p>
              <p>Features:</p>
              <ul>
                <li>Customer Logins and Profiles</li>
                <li>Website Analytics</li>
                <li>Mobile Responsive</li>
                <li>SEO Website Copy Editing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
