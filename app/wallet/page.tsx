import React from "react";
import { FaCog, FaPlus } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";

const Wallet = () => {
  const wallets = [
    { title: "Emergency fund", amount: 300, total: 1000, percent: 30, lastPaid: "August 28, 2022" },
    { title: "Travel Plan", amount: 10000, total: 20000, percent: 50, lastPaid: "June 01, 2022" },
    { title: "Education", amount: 7000, total: 10000, percent: 70, lastPaid: "May 14, 2022" },
    { title: "Foods and Groceries", amount: 300, total: 1000, percent: 30, lastPaid: "August 28, 2022" },
    { title: "Repair Vehicle", amount: 900, total: 1000, percent: 90, lastPaid: "August 01, 2022" },
    { title: "Donation", amount: 200, total: 1000, percent: 20, lastPaid: "August 20, 2022" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tracker</h1>
          <nav className="mt-6">
            <a className="flex items-center p-3 bg-gray-800 rounded-lg" href="#">
              <BiWallet className="mr-3" /> My Wallet
            </a>
            <a className="flex items-center p-3 mt-3" href="#">
              💳 My Card
            </a>
            <a className="flex items-center p-3 mt-3" href="#">
              📊 Finance Chart
            </a>
            <a className="flex items-center p-3 mt-3 relative" href="#">
              <IoChatbubbleEllipsesOutline className="mr-3" /> Recent Transactions
              <span className="absolute right-2 bg-red-500 text-xs text-white px-2 py-1 rounded-full">12</span>
            </a>
          </nav>
        </div>
        <div>
          <a className="flex items-center p-3" href="#">
            <FaCog className="mr-3" /> Settings
          </a>
          <div className="flex items-center mt-6">
            <img className="w-10 h-10 rounded-full" src="/avatar.png" alt="User" />
            <span className="ml-3">Adrian Tra</span>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold">My Wallet</h2>
        <p className="text-gray-600">Keep track of your financial plan</p>
        
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="text-2xl font-bold">👋 Hi Adrian!</h3>
          <p className="text-4xl font-semibold">$124,543</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-6">
          {wallets.map((wallet, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold">{wallet.title}</h4>
              <p className="text-sm text-gray-500">Last Paid on {wallet.lastPaid}</p>
              <div className="mt-3">
                <p className="text-lg font-semibold text-blue-600">${wallet.amount} / ${wallet.total}</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${wallet.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full">
            <FaPlus className="mr-2" /> Create New Wallet
          </button>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
