import categoriesList from "../utility/categories";
import Card from "./Card";


const Feature = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8'>

                <h1 className='text-3xl font-bold  text-center my-20'>Feature Post</h1>
                <div className='grid grid-cols-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
                    <div className="md:row-span-3 col-span-1">
                        <Card>
                            <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                                <img className="w-full absolute top-0 start-0 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000" alt="Image Description" />
                            </div>
                            <div className="md:p-5">
                                <div className="my-4 flex gap-2">

                                    <button className="px-4 py-0.5 border rounded-full my-2"
                                    > Nature</button>
                                    <button className="px-4 py-0.5 border rounded-full my-2"
                                    > Health</button>
                                </div>
                                <a href="#" className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4">You cannot too assiduously attend to Madame Duval herself</a>
                                <p className="my-4 text-gray-800">
                                    but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would. who are not likely to be among those whose acquaintance would. who are not likely to be among those whose acquaintance would
                                </p>
                                <div className="mt-auto flex items-center gap-x-3">
                                    <img
                                        className="size-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                        alt="Image Description"
                                    />
                                    <div>
                                        <h5 className="text-sm text-gray-800">
                                            Nehu
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* <Card
                            imgageURL="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000"
                            categoriesListName={categoriesList[0].name}
                            categoriesListStyle={categoriesList[0].bgcolor}
                            Cartitle="It is during our darkest moments that we must focus to see the light"
                            cardBtn="Submit"
                            cardDescription="You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would. who are not likely to be among those whose acquaintance would. who are not likely to be among those whose acquaintance would"
                        /> */}


                    </div>
                    <div className="col-span-1">
                        <div className='w-full bg-white border border-slate-200 rounded-lg p-4'>
                            <div className='md:flex md:flex-row md:justify-center'>
                                <img className='md:w-44 md:h-100 sm:w-full sm:h-full rounded-lg' src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                <div>
                                    <button className={`ml-3 mt-4 bg-${categoriesList[2].bgcolor}-100 px-4 py-0.5 border border-${categoriesList[2].bgcolor}-600 rounded-full hover:bg-${categoriesList[2].bgcolor}-400`}>{categoriesList[1].name}</button>
                                    <a href='/'><h3 className='text-2xl sm:pt-4 md:pt-0 lg:pt-0 ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full bg-white my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='md:flex md:flex-row md:justify-center'>
                                <img className='md:w-44 md:h-100 sm:w-full sm:h-full rounded-lg' src="https://images.unsplash.com/photo-1522000243595-42c412404679?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjBzZWElMjB0ZWNofGVufDB8fHx8MTY5MjQ0NTg4NHww&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                <div>
                                    <button className='ml-3 mt-4 bg-orange-100 px-4 py-0.5 border border-orange-600 rounded-full hover:bg-orange-400'>{categoriesList[2].name}</button>
                                    <a href='/'><h3 className='text-2xl sm:pt-4 md:pt-0 lg:pt-0 ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full bg-white my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='md:flex md:flex-row md:justify-center'>
                                <img className='md:w-44 md:h-100 sm:w-full sm:h-full rounded-lg' src="https://images.unsplash.com/photo-1670349148055-e11a0b3be242?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8c2VhcmNofDI5fHxoYXBweXxlbnwwfHx8fDE2NzE0MzI2NjY&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                <div>
                                    <button className='ml-3 mt-4 bg-purple-100 px-4 py-0.5 border border-purple-600 rounded-full hover:bg-purple-400'>{categoriesList[1].name}</button>
                                    <a href='/'><h3 className=' text-2xl sm:pt-4 md:pt-0 lg:pt-0 ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full my-2 border border-slate-200 rounded-lg p-4'>
                            <div className='md:flex md:flex-row md:justify-center'>
                                <img className='md:w-44 md:h-100 sm:w-full  sm:h-full rounded-lg' src="https://images.unsplash.com/photo-1664574652984-5b5f769bef07?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MTQzMDcxMQ&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                                <div>
                                    <button className='ml-3 mt-4 bg-green-100 px-4 py-0.5 border border-green-600 rounded-full hover:bg-green-400'>{categoriesList[0].name}</button>
                                    <a href='/'><h3 className='text-2xl sm:pt-4 md:pt-0 lg:pt-0 ml-3 hover:underline hover:decoration-blue-500'>Never let your memories be greater than your dreams</h3></a>
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