import PropTypes from "prop-types";
const Card = ({
  categoriesListName,
  Cartitle,
  cardDescription,
  imgageURL,
  categoriesListStyle,
  authoName,postTime,
}) => {
  return (
    <>
      <div className="flex flex-col group bg-dark  rounded-xl  shadow-sm border">
        <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
          <img
            className="w-full absolute top-0 start-0 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={imgageURL}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5">
          <button
            className={`bg-${categoriesListStyle}-100 px-4 py-0.5 border border-${categoriesListStyle}-600 rounded-full hover:bg-${categoriesListStyle}-400 block my-4`}
            style={{ categoriesListStyle }}
          >
            {categoriesListName}
          </button>
          <a
            href="#"
            className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4"
          >
            {Cartitle}
          </a>
          <p className="my-4 text-gray-800">{cardDescription}</p>
          <div className="flex items-center gap-2">
          <img
            className="size-[38px] rounded-full"
            src={authoName}
            alt="Image Description"
          />
          <p class="text-sm sm:text-base text-gray-800">
            {postTime}
          </p>
          </div>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  categoriesListName: PropTypes.string.isRequired,
  authoName: PropTypes.string,
  categoriesListStyle: PropTypes.string, // Validate categoriesListName prop as a required string
  Cartitle: PropTypes.string.isRequired,
  Gosomewhere: PropTypes.string,
  cardDescription: PropTypes.string,
  imgageURL: PropTypes.string.isRequired,
};
export default Card;
