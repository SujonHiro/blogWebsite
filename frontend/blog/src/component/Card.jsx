

import PropTypes from 'prop-types';
const Card = ({ categoriesListName, Cartitle, Gosomewhere, cardDescription,imgageURL,categoriesListStyle }) => {
    return (
        <>
            <div className="flex flex-col group bg-dark  rounded-xl  shadow-sm border">
                <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                    <img className="w-full absolute top-0 start-0 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={imgageURL} alt="Image Description"/>
                </div>
                <div className="p-4 md:p-5">
                    <button className={`bg-${categoriesListStyle}-100 px-4 py-0.5 border border-${categoriesListStyle}-600 rounded-full hover:bg-${categoriesListStyle}-400 block my-4`}  style={{categoriesListStyle}}>{categoriesListName}</button>
                    <a href="#" className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4">{Cartitle}</a>
                    <p className="my-4 text-gray-800">
                    {cardDescription}
                    </p>
                    <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        {Gosomewhere}
                    </a>
                </div>
            </div>

        </>

    );
};
Card.propTypes = {
    categoriesListName: PropTypes.string.isRequired, 
    categoriesListStyle:PropTypes.string,// Validate categoriesListName prop as a required string
    Cartitle: PropTypes.string.isRequired,
    Gosomewhere: PropTypes.string,
    cardDescription: PropTypes.string,
    imgageURL:PropTypes.string.isRequired
};
export default Card;