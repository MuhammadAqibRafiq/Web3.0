import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";


import Loader from "../Loader/Loader"

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {

  const connectWallet = () => {

  }

  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className='flex w-full justify-center items-center'>

      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>

        <div>
          <h1 className='text-white text-3xl sm:text-5xl text-gradient py-2'>
            Send Crypto <br /> across the world
          </h1>
          <p className='text-white mt-4'>
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          <button className='w-full bg-[#2952e3] rounded-full my-5 p-2 hover:bg-[#2546bd] ' onClick={connectWallet}>
            <p className='text-white'>Connect Wallet</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>

        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 md:ml-20">

          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {/* {shortenAddress(currentAccount)} */}
                  Adress
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className='p-5 w-full blue-glassmorphism'>
            <Input placeholder='Address to' type="text" name="addressTo" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <hr />

            {false ?
              <Loader />
              :
              <button onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Submit
              </button>
            }
          </div>

        </div>


      </div>
    </div>
  )
}

export default Welcome