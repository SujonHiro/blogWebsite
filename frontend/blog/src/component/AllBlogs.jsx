import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

const AllBlogs = () => {

    const [data, seData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchBlogs() {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/v1/blogs/');
            if (res.data.status === "true") {
                seData(res.data.data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchBlogs()
    }, [])

    if (loading) {
        return <p className="my-[100px] text-center">Loading Data! Please Wait...</p>
    }
    console.log(data);
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-3">
                    {data && data.length > 0 ?
                        data.map((blog, index) => (
                            <Card key={index}>
                                <div className="relative pt-[50%] rounded-t-xl overflow-hidden">
                                    <img className="w-full absolute top-0 start-0 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={blog.image} alt="Image Description" />
                                </div>
                                <div className="p-4 md:p-5">
                                    <div className="my-4 flex gap-2">
                                        {blog.tags.map((tag, tagIndex) => (
                                            <button
                                                key={tagIndex}
                                                className="px-4 py-0.5 border rounded-full my-2"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>

                                    <a href="#" className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4">{blog.title}</a>
                                    <p className="my-4 text-gray-800">
                                        {truncateText(blog.content, 100)}
                                    </p>
                                    <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Test
                                    </a>
                                </div>
                            </Card>
                        ))
                        : null}
                </div>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg text-white px-4 py-2 hover:opacity-85 my-5 flex justify-center">
                        Load More
                    </button>
                </div>
            </div>
        </>
    );
};

export default AllBlogs;