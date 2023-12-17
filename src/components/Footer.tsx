"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Darek Radke
        </p>
        <Link href={"/"} className="font-Raleway text-2xl px-3">
          Insight Web Design
        </Link>
        <Link href={"/requestservice"} className="text-xl">
          Request Service
        </Link>
      </div>
    </>
  );
}
