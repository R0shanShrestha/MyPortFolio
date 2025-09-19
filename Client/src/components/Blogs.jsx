import Showcase from "./Showcase";

const Blogs = () => {
  return (
    <section
      id="Blogs"
      className="w-fit mx-auto   flex flex-col items-center py-20 px-4 sm:px-10 md:px-20 gap-12"
    >
      <div className="flex  items-center gap-4">
        <div className=" flex">
          <Showcase text="My Blogs" color="bg-emerald-600" />
        </div>
        <span className="hidden sm:inline text-gray-200">
          / Sharing ideas & stories
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
          My Written Journey - Design Decode
        </h2>
        <p className="text-gray-300 text-base sm:text-lg">
          Sharing insights, tips, and stories about design, creativity, and
          growth.
        </p>

        <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-lg border-dashed border-2 border-gray-300 animate-pulse">
          <h3 className="text-2xl font-bold text-gray-600">Coming Soon!</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Stay tuned for articles, tutorials, and tips from my journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
