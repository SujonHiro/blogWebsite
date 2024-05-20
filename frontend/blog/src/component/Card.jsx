

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
    return (
        <>
            <div className="flex flex-col group bg-dark  rounded-xl  shadow-sm border">
                <div>
                    {children}
                </div>
            </div>
        </>

    );
};

export default Card;
