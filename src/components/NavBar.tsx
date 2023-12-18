"use client";

import Image from "next/image";
import React, { use, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BurgerMenu } from "@/components/BurgerMenu";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActivePortfolio, setIsActivePortfolio] = useState(false);
  const [isActivePackages, setIsActivePackages] = useState(false);
  const [isActiveSocialmedia, setIsActiveSocialmedia] = useState(false);
  const [isActiveRequestService, setIsActiveRequestService] = useState(false);

  const handleClickHome = () => {
    setIsActiveHome(true);
    setIsActivePortfolio(false);
    setIsActiveSocialmedia(false);
    setIsActivePackages(false);
    setIsActiveRequestService(false);
  };

  const handleClickPortfolio = () => {
    setIsActiveHome(false);
    setIsActivePortfolio(true);
    setIsActiveSocialmedia(false);
    setIsActivePackages(false);
    setIsActiveRequestService(false);
  };

  const handleClickSocialmedia = () => {
    setIsActiveHome(false);
    setIsActivePortfolio(false);
    setIsActiveSocialmedia(true);
    setIsActivePackages(false);
    setIsActiveRequestService(false);
  };

  const handleClickPackages = () => {
    setIsActiveHome(false);
    setIsActivePortfolio(false);
    setIsActiveSocialmedia(false);
    setIsActivePackages(true);
    setIsActiveRequestService(false);
  };

  const handleClickRequestService = () => {
    setIsActiveHome(false);
    setIsActivePortfolio(false);
    setIsActiveSocialmedia(false);
    setIsActivePackages(false);
    setIsActiveRequestService(true);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed flex flex-col w-screen bg-white h-screen z-10 text-center pt-20 gap-8 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-3xl" href="/">
          Home
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/portfolio">
          Portfolio
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/packages">
          Packages
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/socialmedia">
          Social Media
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/requestservice">
          Request Service
        </Link>
      </div>
      <header className="flex flex-wrap gap-4 py-4 justify-center items-center w-screen lg:flex-row lg:justify-between lg:px-[100px] lg:h-24">
        {/* <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="lg:hidden"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
        </a> */}
        <Link href={"/"} className="text-xl z-0 px-3">
          Insight Web Design
        </Link>
        <div className="hidden lg:flex gap-6">
          <Link
            className={`text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActiveHome
                ? "border-b-[3px] border-black"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
            onClick={handleClickHome}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActivePortfolio
                ? "border-b-[3px] border-black"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
            onClick={handleClickPortfolio}            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={`text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActivePackages
                ? "border-b-[3px] border-black"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
            onClick={handleClickPackages}            href="/packages"
          >
            Packages
          </Link>
          <Link
            className={`text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActiveSocialmedia
                ? "border-b-[3px] border-black"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
            onClick={handleClickSocialmedia}            href="/socialmedia"
          >
            Social Media
          </Link>
          <Link
            className={`text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isActiveRequestService
                ? "border-b-[3px] border-black"
                : "transition ease-in-out border-b-[3px] border-transparent duration-500"
            }`}
            onClick={handleClickRequestService}            href="/requestservice"
          >
            Request Service
          </Link>
        </div>
        {/* <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden lg:inline lg:flex"
        >
          <Image src={PhoneSvg} alt="pfp" width={23} />
          <span className="pl-1">Call or Text</span>
        </a>
        <a
          href="mailto:darekradke2@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden lg:inline lg:flex"
        >
          <Image src={MailIcon} alt="pfp" width={25} />
          <span className="pl-1">E-mail</span>
        </a> */}
        <button
          onClick={handleClick}
          className="inline flex flex-col justify-center items-center z-20 lg:hidden"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>

        {/* <div className="flex gap-8 px-2 z-0">
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a>

          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a>
        </div> */}
      </header>
    </>
  );
}
