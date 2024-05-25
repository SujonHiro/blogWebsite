import categoriesList from "../utility/categories"
const Categories = () => {

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold  text-center my-5">
          Popular Categories
        </h1>
        <div className="flex justify-center gap-4">
          {categoriesList.map((category) =>
            <span key={category.name} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {category.name}
          </span>
          )}
          </div>
      </div>
    </>
  );
};

export default Categories;
