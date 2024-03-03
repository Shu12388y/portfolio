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
              src="https://private-user-images.githubusercontent.com/91714143/302040087-e65a8e87-c48f-48a6-b73b-2b886f3679b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk0NjE3NTQsIm5iZiI6MTcwOTQ2MTQ1NCwicGF0aCI6Ii85MTcxNDE0My8zMDIwNDAwODctZTY1YThlODctYzQ4Zi00OGE2LWI3M2ItMmI4ODZmMzY3OWI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzAzVDEwMjQxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIyZjY5MjE3YzNmOGNmNTI0NmI5NGI2OTIyMWQ4MzFkM2VlNGZhMjAxNGZhM2RkZTBhZDVkNDM2YmRlODY0N2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.x1EbpV1tz_hXJII0QlBVjqQ7SaRc1018HU9MfYrB06A"
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
              src="https://private-user-images.githubusercontent.com/91714143/251490110-8b29450e-cc96-4619-b11b-c1b5114f9d36.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk0NjIxNjQsIm5iZiI6MTcwOTQ2MTg2NCwicGF0aCI6Ii85MTcxNDE0My8yNTE0OTAxMTAtOGIyOTQ1MGUtY2M5Ni00NjE5LWIxMWItYzFiNTExNGY5ZDM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzAzVDEwMzEwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRlZjM4OTgyODVhOTQxNjNlNjg1YTBjNmFjZmIyYTg1Y2Y3M2VkMjgwMjdmZWJmMmU4NTFiYjMwZjcyNmU3MGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.U7QYQ-Iyd1V_hvAUPQ5yJZPPMgeOhmqztOa2j1z7kL0"
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
