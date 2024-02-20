import React from "react";
import Avatar from "../../components/Avatar";
import Logo from "../../components/Logo";
import Tabs from "../../components/Tabs";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <div className=" top-0 flex flex-col w-full items-center">
        <section className=" flex w-full items-center px-4 py-5 gap-16 ">
          <Avatar />
          <Logo />
        </section>
      </div>
      <Tabs />
      <Footer page="home" />
    </div>
  );
}

export default Home;
