import React, {useState} from "react";
import { SearchIcon } from "../icons/icon";
import {Timeline} from 'react-twitter-widgets';

const Widgets = () => {

   const [by,setby] = useState("akmanaatakan")

   const handleByTweet = (e) => {
      if(e.target.value !== ""){
         setby(e.target.value)
      }else{
         setby("reactjs")
      }
   }

  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full focus-within:ring-1 focus-within:bg-white  focus-within:ring-primary-base focus-within:text-primary-base text-gray-dark">
        <SearchIcon className="w-5 h-5"></SearchIcon>
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent  focus:outline-none w-full text-sm "
        ></input>
      </div>
      
      <div className="mt-5">
      <span className = "ml-3">Son Tweetlerde Ara?</span>
         <div className = "ml-3 mb-2 rounded-full focus-within:ring-1 focus-within:bg-white  focus-within:ring-primary-base focus-within:text-primary-base text-gray-dark">
            
            <input name = "by" placeholder = "Ara" className = "bg-gray-200 rounded-full p-2 w-full placeholder-gray-dark bg-transparent  focus:outline-none w-full text-sm" onChange = {handleByTweet}></input>
         </div>
      <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: by,
          }}
          options={{
            height: "1000",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
