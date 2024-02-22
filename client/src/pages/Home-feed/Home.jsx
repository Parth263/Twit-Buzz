import React from "react";
import { useContext } from "react";
import Avatar from "../../components/Avatar";
import Logo from "../../components/Logo";
import Tabs from "../../components/Tabs";
import Footer from "../../components/Footer";
import Tweet from "../../components/Tweet";
import { TweetContext } from "../../contexts/TweetContext.jsx";

function Home() {
  const tweets = useContext(TweetContext);
  const tweetsData = [...tweets.userTweets].reverse();

  return (
    <div>
      <header className=" top-0 flex flex-col w-full items-center">
        <section className=" flex w-full items-center px-4 py-5 gap-16 ">
          <Avatar />
          <Logo />
        </section>
      </header>
      <Tabs />
      <main className=" flex w-full flex-col pb-20">
        <section>
          {tweetsData.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </section>
        <Footer page="home" />
      </main>
    </div>
  );
}

export default Home;
