"use client"

import Image from "next/image";
import Dropdown from "@/components/Dropdown"


export default function Payment() {

  return (
    <div className='container-fluid bg-black pb-24'>
      {/* First row */}
      <div className='flex flex-col'>
          <div className="w-1/2">
            <div className='btn-container flex justify-start m-4'>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-[12px] shadow actor-font"> Back </button>
            </div>
          </div>
          <div className="w-1/2 ml-4">
            <h6 className='text-white text-3xl row-title'> Staking </h6>
          </div>
      </div>

      <div className="flex justify-between items-center mx-8 mt-8 py-2 px-4 bg-white rounded-xl">
        <div className="flex items-center">
          <Image src={"/eth.png"} alt="Birdlypay" 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '50px', margin: '5px'}}
          />
          <h6 className='font-bold align-middle	'> ETH </h6>
        </div>
        <Dropdown />
      </div>

      <p className='text-white ml-8 mt-8'> Amount </p>

      <div className="flex justify-between items-center mx-8 mt-4 p-4 bg-white rounded-xl">
        <h6 className='font-bold'> 0 USD </h6>
        <button className="bg-[#24F129] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
          Max
        </button>
      </div>

      <div className="w-full flex justify-center my-8">
        <button className="bg-[#24F129] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
          Stake
        </button>
      </div>

  </div>


  );
}