"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import BalanceComponent from "../Balance/Balance";
import myWallet from './my-wallet.png';
import ethIcon from './eth.png';
import stockIcon from './stock.png';
import goalsIcon from './goals.png';
import birdIcon from './bird.png';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import './Homepage.css';

export default function HomepageComponent() {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleStaking = () => {
    router.push('/staking');
  };

  const handlePaylink = () => {
    router.push('/payment');
  }

  return (
    <>
      <div className="container-fluid min-h-screen bg-dark">

        {/** Begining of the main icons */}
        <div className="flex justify-center gap-4 p-4">

          <div className="flex flex-col w-24 h-24 aspect-square bg-white rounded-lg shadow items-center justify-center
                          cursor-pointer hover:bg-gray-100"
            onClick={handlePaylink}>
            <Image src={birdIcon} className="w-12 h-12" alt="A bird icon" />
            <text className="italic">Paylink</text>
          </div>

          <div className="flex flex-col w-24 h-24 aspect-square bg-white rounded-lg shadow items-center justify-center
                          cursor-pointer hover:bg-gray-100" onClick={handleStaking}>

            <Image src={ethIcon} className="w-12 h-12" alt="A coin icon" />
            <text className="italic">Staking</text>
          </div>

          <div className="flex flex-col w-24 h-24 aspect-square bg-white rounded-lg shadow items-center justify-center">
            <Image src={stockIcon} className="w-12 h-12" alt="A stocks icon" />
            <text className="italic">Stocks</text>
          </div>

        </div>

        <div className="flex justify-center gap-4 p-4">
          <div className="flex flex-col w-24 h-24 aspect-square bg-white rounded-lg shadow items-center justify-center">
            <Image src={goalsIcon} className="w-12 h-12" alt="A goals icon" />
            <text className="italic">Goals</text>
          </div>
          <div className="flex flex-col w-24 h-24 aspect-square bg-white rounded-lg shadow items-center justify-center">
            <Image src={myWallet} className="w-12 h-12" alt="A wallet icon" />
            <text className="italic">Wallet</text>
          </div>
          <div className="flex flex-col w-24 h-24 aspect-square bg-gray-200 rounded-lg shadow items-center justify-center">
            <span className="text-4xl">+</span>
          </div>
        </div>
        {/** End of the main icons */}

        {/** Begining of the container below /}
        <div className="flex flex-col bg-white min-h-screen rounded-3xl shadow-lg overflow-hidden">
          {/** Balance container /}
          <div className="flex shadow-xl rounded-full m-4   flex justify-between items-center">
            <BalanceComponent />
          </div>
          {/** End of balance container /}

          <div className="p-4 flex justify-between items-center">
            <p> Movements </p>
            <hr></hr>
            <hr></hr>
          </div>
        </div>
        {/** End of the container below  */}

        <div className="relative">
          <Button className="fixed bottom-0 left-0 right-0 m-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide balance" : "Show balance"}
          </Button>
          <div
            className={`fixed bottom-0 left-0 right-0 transition-transform transform ${isOpen ? "translate-y-0" : "translate-y-full"
              }`}
          >
            <Card className="p-4 bg-white rounded-t-lg shadow-lg">
              <CardHeader className="flex justify-between items-center">

                {/** Balance container */}
                <div className="flex shadow-xl rounded-full m-4   flex justify-between items-center">
                  <BalanceComponent />
                </div>
                {/** End of balance container */}

              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Label className="text-xl font-bold text-blue-600">Movements</Label>
                  <Button variant="link" className="text-blue-600">
                    view all
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">I collected birdly coins for paying...</p>
                    <p className="text-sm text-muted-foreground">June 02, 2024 - 8:10 am - Amazon Prime</p>
                    <p className="text-sm text-green-500">+0.5 $Birdly</p>
                  </div>
                  <hr />
                  <div>
                    <p className="font-semibold">Received 0.0004 Eth of Pedrito</p>
                    <p className="text-sm text-muted-foreground">April 17, 2024 - 5:00 pm - Thank u!!</p>
                    <p className="text-sm text-green-500">+0.0004 ETH</p>
                  </div>
                  <hr />
                  <div>
                    <p className="font-semibold">I paid for a membership of X</p>
                    <p className="text-sm text-muted-foreground">April 04, 2024 - 10:20 am - X Premium</p>
                    <p className="text-sm text-pink-500">-0.0058 ETH</p>
                  </div>
                </div>
              </CardContent>
              <div className="flex justify-around mt-4">
                <Button className="bg-blue-600 text-white flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Pay link
                </Button>
                <Button variant="outline" className="text-blue-600 border-blue-600 flex items-center">
                  <QrCodeIcon className="w-5 h-5 mr-2" />
                  QR Scan
                </Button>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function QrCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

