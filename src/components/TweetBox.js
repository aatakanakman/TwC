
import React, { useState } from "react";

import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/icon";
import db from '../firebase';
import firebase from 'firebase'

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = () => {

    if(content !== ''){

      db.collection('feed').add({
        displayName : "Ali Atakan AKMAN",
        username : "@akmanaatakan",
        content,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        image : "https://images.unsplash.com/photo-1620451955631-9a2ba4736e56?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        avatar : "https://pbs.twimg.com/profile_images/1301307553960407045/J7tCf0ax_400x400.jpg"
      })

      setContent("");

    }



  }
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base"></ImageIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base"></GIFIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base"></PollIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base"></EmojiIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base"></ScheduleIcon>
          </div>
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
        onClick = {sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
