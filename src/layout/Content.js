import React, { useEffect } from "react";
import db from "../firebase";
import { PopulerIcon } from "../icons/icon";
import TweetBox from '../components/TweetBox';
import Divider from "../components/Divider";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10  flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base"></PopulerIcon>
      </header>

      <div className = "flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1301307553960407045/J7tCf0ax_400x400.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        ></img>
        <div>
         <TweetBox></TweetBox>
        </div>
      </div>
      <Divider></Divider>
    </main>
  );
};

export default Content;
