import React from 'react';

const Feature = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold  text-center my-5'>Feature Post</h1>
                <div className='grid grid-cols-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
                    <div className="md:row-span-3 col-span-1">
                        <div className='w-full border border-slate-200 rounded-lg p-5'>
                                <img className='w-full h-full aspect-[3/2] block rounded-lg' src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                <button className='mt-4 bg-blue-100 px-4 py-0.5 border border-blue-600 rounded-full hover:bg-blue-400'>fashion</button>
                                <a href='/'><h1 className='text-2xl my-5 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h1></a>
                            
                                <p className='my-2'>You can Write here anything like you story,book,article.Please give your feedback also me.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cum. 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, consequatur!...</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='w-full border border-slate-200 rounded-lg p-4'>
                            <div className='flex flex-row justify-center'>
                                <img className='w-44 h-100 rounded-lg' src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                    <div>
                                        <button className='ml-3 bg-blue-100 px-4 py-0.5 border border-blue-600 rounded-full hover:bg-blue-400'>fashion</button>
                                        <a href='/'><h3 className='pt-3 text-2xl ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                    </div>
                            </div>
                        </div>
                        <div className='w-full my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='flex flex-row justify-center'>
                                <img className='w-44 h-100 rounded-lg' src="https://images.unsplash.com/photo-1522000243595-42c412404679?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjBzZWElMjB0ZWNofGVufDB8fHx8MTY5MjQ0NTg4NHww&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                    <div>
                                        <button className='ml-3 bg-orange-100 px-4 py-0.5 border border-orange-600 rounded-full hover:bg-orange-400'>technology</button>
                                        <a href='/'><h3 className='pt-3 text-2xl ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                    </div>
                            </div>
                        </div>
                        <div className='w-full my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='flex flex-row justify-center'>
                                <img className='w-44 h-100 rounded-lg' src="https://images.unsplash.com/photo-1670349148055-e11a0b3be242?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8c2VhcmNofDI5fHxoYXBweXxlbnwwfHx8fDE2NzE0MzI2NjY&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                    <div>
                                        <button className='ml-3 bg-green-100 px-4 py-0.5 border border-green-600 rounded-full hover:bg-green-400'>health</button>
                                        <a href='/'><h3 className='pt-3 text-2xl ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                    </div>
                            </div>
                        </div>
                        <div className='w-full my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='flex flex-row justify-center'>
                                <img className='w-44 h-100 rounded-lg' src="https://images.unsplash.com/photo-1664574652984-5b5f769bef07?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MTQzMDcxMQ&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                    <div>
                                        <button className='ml-3 bg-green-100 px-4 py-0.5 border border-green-600 rounded-full hover:bg-green-400'>health</button>
                                        <a href='/'><h3 className='pt-3 text-2xl ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
};

export default Feature;