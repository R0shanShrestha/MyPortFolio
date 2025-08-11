import React from "react";

const Contact = () => {
  return (
    <div className="w-full justify-center flex my-50">
      <div className="min-w-[400px]  p-5 text-center  flex flex-col items-center gap-5">
        <h1 className="lg:text-3xl font-bold">
          Have a vision? Let's make it happen!
        </h1>
        <p className="w-[400px] text-center font-medium text-sm">
          I love teaming up on fresh, creative projects - whether you're just
          getting started or looking to improve something you already have.
        </p>
        <button className="bg-slate-700 p-3 rounded-xl text-white px-10 cursor-pointer hover:bg-slate-600">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Contact;
