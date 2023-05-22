import React from "react";

export const NewsletterRegister = () => {
  return (
    <div className="bg-themeyellow flex justify-center items-center h-[500px]">
      <div className="flex-col flex justify-center items-center">
        <div className="text-white my-5 text-5xl">Join Out newsletter</div>
        <div className="my-5 text-4xl">
          Sign up to our newsletter and get our latest news and updates.
        </div>
        <div className="rounded-3xl bg-white w-8/12 p-2">
          <input
            type="email"
            className="h-[50px] w-10/12 px-3"
            placeholder="Enter your email"
          ></input>
          <button className="rounded-3xl p-5 w-2/12 text-white bg-themedarkblue">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
