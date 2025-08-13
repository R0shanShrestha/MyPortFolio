import Showcase from "./Showcase";

const Blogs = () => {
  return (
    <div
      id="Blogs"
      className="flex w-full pt-20 my-20 flex-col gap-10 md:px-10 overflow-hidden"
    >
      <div className="flex text-sm h-10 gap-5">
        <Showcase text={"My Blogs"} color={"bg-zinc-900"} />
      </div>
      <div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">
            My Written Journey - Design Decode
          </h1>
          <p className="secondary text-sm">
            Sharing insights, tips, and stories about design, creativity, and
            growth.
          </p>
        </div>
        <div className="text-center mt-4 font-bold text-2xl animate-pulse text-gray-500">
          <h1 className="secondary">Coming Soon!</h1>
        </div>
        {/* <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Notify Me
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
