import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Author = () => {
    const [loading, setLoading] = useState(false);
    const [writers, setWriters] = useState([]);

    const fetchWriters = async () => {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/v1/user');
            if (res.data.status === "success") {
                setWriters(res.data.data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchWriters();
    }, []);

    if (loading) {
        return <div className="my-[100px] text-center">Loading Data! Please Wait...</div>;
    }
    return (
        <div className="mx-auto max-w-7xl px-4 my-24 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-3">
                {writers && writers.length > 0 ? (
                    writers.map((writer, index) => (
                        <Card key={index}>
                            <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                                <img className="w-full absolute top-0 start-0 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={writer.profileImg} alt="Image Description" />
                            </div>
                            <div className="p-4 md:p-5">
                                <a href="#" className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4">{writer.name}</a>
                                <p className="my-4 text-gray-800">
                                    TEst
                                </p>
                                <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Test
                                </a>
                            </div>
                        </Card>
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default Author;
