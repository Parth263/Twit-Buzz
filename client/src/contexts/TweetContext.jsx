import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState(sampleTweets);

  return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.node,
};

const sampleTweets = [
  {
    id: "1",
    name: "Pratham",
    username: "Pratham_015",
    postedAt: 1699355379971,
    tweetText: "Hola amigos!!",
    comments: 14,
    retweets: 29,
    likes: 455,
    reach: 69,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: "2",
    name: "Pratham",
    username: "Pratham_015",
    postedAt: 1699355379971,
    tweetText: "Hola amigos again!!",
    comments: 14,
    retweets: 29,
    likes: 455,
    reach: 69,
    isLiked: false,
    isRetweeted: false,
  },
];
