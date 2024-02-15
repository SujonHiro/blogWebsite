import React from "react";
const Categories = () => {
  const categories = [
    { name: "Health",image:"https://www.ankitweblogic.com/javascript/js_img/javascript.png" },
    { name: "Science" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Backend" },
  ];

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 my-12 sm:px-6 lg:px-8'">
        <h1 className="text-3xl font-bold  text-center my-5">
          Popular Categories
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div className="flex gap-2 border rounded-full py-2 px-3 m-4 hover:border-1 hover:border-y-teal-400 hover:border-x-sky-500 transition-all cursor-pointer">
                <img className="h-10 w-10 rounded-full border p-2" src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="" />
                <h4 className="text-xl font-semibold p-2">JavaScript</h4>
            </div>
            <div className="flex gap-2 border rounded-full py-2 px-3 m-4 hover:border-1 hover:border-y-teal-400 hover:border-x-sky-500 transition-all cursor-pointer">
                <img className="h-10 w-10 rounded-full border p-2" src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="" />
                <h4 className="text-xl font-semibold p-2">React</h4>
            </div>
            <div className="flex gap-2 border rounded-full py-2 px-3 m-4 hover:border-1 hover:border-y-teal-400 hover:border-x-sky-500 transition-all cursor-pointer">
                <img className="h-10 w-10 rounded-full border p-2" src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="" />
                <h4 className="text-xl font-semibold p-2">Health</h4>
            </div>
            <div className="flex gap-2 border rounded-full py-2 px-3 m-4 hover:border-1 hover:border-y-teal-400 hover:border-x-sky-500 transition-all cursor-pointer">
                <img className="h-10 w-10 rounded-full border p-2" src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="" />
                <h4 className="text-xl font-semibold p-2">Backend</h4>
            </div>
            <div className="flex gap-2 border rounded-full py-2 px-3 m-4 hover:border-1 hover:border-y-teal-400 hover:border-x-sky-500 transition-all cursor-pointer">
                <img className="h-10 w-10 rounded-full border p-2" src="https://www.ankitweblogic.com/javascript/js_img/javascript.png" alt="" />
                <h4 className="text-xl font-semibold p-2">Science</h4>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Categories;
