import React from "react";

function Works() {
  return (
    <div>
      {/* <h1 className='text-4xl font-bold text-center '>My Recent Work</h1> */}
      <div className="">
        <h1 className="text-center font-bold pt-20 text-2xl">My Recent Work</h1>
        <div className="flex flex-col gap-10 items-center justify-center mt-10 w-screen md:flex-row">
          <div className="w-[300px] rounded-md border">
            <img
              src="./public/302040087-e65a8e87-c48f-48a6-b73b-2b886f3679b4.png"
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Buy My Coffee Clone</h1>
              <p className="mt-3 text-sm text-gray-600">
                Buy Me a Coffee" is a platform that allows creators, such as
                artists, writers, musicians, and other content creators, to
                receive support and donations from their fans and followers.
              </p>
              <a href="https://shu12388y.github.io/Buy-Me-A-Coffee/">
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Visit the site
                </button>
              </a>
            </div>
          </div>

          <div className="w-[300px] rounded-md border">
            <img
              src="https://github.com/Shu12388y/Future.WebNet/raw/main/Frontend-Projects/Music_Shop/public/Screenshot%20from%202023-07-04%2020-42-46.png"
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Music Shop</h1>
              <p className="mt-3 text-sm text-gray-600">
                The Music Shop Landing Page is a web application designed to
                showcase and sell various musical instruments and related
                products. It provides a user-friendly interface for customers to
                browse the available items, view product details, and make
                purchases.
              </p>
              <a href="https://github.com/Shu12388y/Future.WebNet/tree/main/Frontend-Projects/Music_Shop">
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Visit the Site
                </button>
              </a>
            </div>
          </div>

          <div className="w-[300px] rounded-md border">
            <img
              src="./public/251490110-8b29450e-cc96-4619-b11b-c1b5114f9d36.png"
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Super Burger Website</h1>
              <p className="mt-3 text-sm text-gray-600">
                Welcome to SuperBurger Landpage! This repository contains the
                source code and assets for the land page of a fictional burger
                restaurant called SuperBurger
              </p>

              <a href="https://github.com/Shu12388y/Future.WebNet/tree/main/Frontend-Projects/superburger">
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Visit the site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
