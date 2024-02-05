import React from 'react';

const HeroSection = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 text-center '>
                    <div className='mt-32'>
                        <h1 className='text-[60px] linep-height-[1.2] font-black '>Hello 👋, we are <span className='text-blue-700'>Blogger</span>, exploring <span className='text-blue-700'>fashion</span>, <span className='text-blue-700'>lifestyle</span> and <span className='text-blue-700'>health</span> </h1>
                        <div className='max-w-3xl mx-auto'>
                            <p className='mt-4 text-lg text-center'>Introducing a modern and sleek theme for Ghost. Perfect for magazine, newsletter, 
                            professional, and personal blog publishing.</p>
                        </div>
                            {/*rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-semibold px-3 py-2 text-white hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800*/}
                        <button className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white px-3 py-2 hover:opacity-85 my-4'>Join Now - it's free</button>
                    </div>
            </div>
        </>
    );
};

export default HeroSection;