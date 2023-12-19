"use client";

import Link from "next/link";
import Image from "next/image";

export default function Packages() {
  return (
    <>
      <p className="text-center py-4 lg:pt-6">Request Service</p>
      <div className="flex max-w-[600px] m-auto text-center py-4 lg:mb-[100px] lg:pb-9">
        <form className="m-auto">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              className="w-[300px] lg:w-[400px] m-auto border-2 border-black"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="w-[300px] lg:w-[400px] m-auto border-2 border-black"
              placeholder="E-mail"
            />
          </div>
          <div className="flex w-[300px] lg:flex-row lg:w-[380px] m-auto justify-between my-3">
            <div>
              <label>
                <input type="checkbox" name="event" id="event" />
                Portfolio
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="family" id="family" />
                Small Business
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="headshots" id="headshots" />
                E-commerce
              </label>
            </div>
          </div>
          <input
            type="text"
            name="summary"
            className="w-[300px] lg:w-[400px] h-[100px] border-2 border-black"
            placeholder="Request Summary"
          />
          <button className="w-[300px] h-[50px] mt-3 bg-black text-white">
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
}
