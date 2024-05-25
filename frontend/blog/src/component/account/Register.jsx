

const Register = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8">

                <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    {/* Card */}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7">
                        <div>
                            <div className="hidden md:block absolute -top-28 -left-56 bg-blue-600  rounded-full w-72 h-80  filter blur-3xl opacity-20 mix-blend-multiply"></div>
                            <div className="hidden md:block absolute top-28 -right-28 bg-purple-500  rounded-full w-72 h-80 filter blur-3xl opacity-20 mix-blend-multiply"></div>
                        </div>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Payment
                            </h2>
                            <p className="text-sm text-gray-600">Manage your payment methods.</p>
                        </div>
                        <form>
                            {/* Section */}
                            <div className="pt-6 first:pt-0 last:pb-0">
                                <label
                                    className="inline-block text-sm font-medium"
                                >
                                    Full Name
                                </label>
                                <input className="py-2 px-3 pe-11  w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="Enter Your Full Name" />
                            </div>
                            <div className="pt-3 first:pt-0 last:pb-0">
                                <label
                                    className="inline-block text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input className="py-2 px-3 pe-11  w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" type="email" placeholder="Enter Your Email Address" />
                            </div>
                            <div className="pt-3 first:pt-0 last:pb-0">
                                <label
                                    className="inline-block text-sm font-medium"
                                >
                                    Phone
                                </label>
                                <input className="py-2 px-3 pe-11  w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="pt-3 first:pt-0 last:pb-0">
                                <label
                                    className="inline-block text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input className="py-2 px-3 pe-11  w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" type="password" placeholder="Password" />
                            </div>


                        </form>
                        <div className="mt-5 flex place-content-center">

                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Register Now
                            </button>
                        </div>
                        <div className="text-center">

                            <p className="mt-2 text-sm text-gray-600 ">
                                Already have an account ?
                                <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                                    Sign in here
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* End Card */}
                </div>
            </div>

        </>
    );
};

export default Register;