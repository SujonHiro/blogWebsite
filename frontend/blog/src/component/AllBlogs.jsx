import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom"
import{truncateText,formatDateString} from '../utility/blogHelper'
import Skeleton from "./layout/Skeleton";


const AllBlogs = () => {
    const [data, seData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchBlogs() {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:7070/api/v1/blogs/');
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
        return <Skeleton/>
    }

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
                                <div className="md:p-5">
                                    <div className="my-4 flex gap-2">
                                        {blog.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex}
                                                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                {tag}</span>

                                        ))}
                                    </div>
                                    <Link to={`details/${blog._id}`} className="text-xl font-bold text-gray-800  hover:underline hover:decoration-blue-500 my-4">{blog.title}</Link>
                                    <p className="my-4 text-gray-800">
                                        {truncateText(blog.content, 100)}
                                    </p>
                                    <div className="mt-auto flex items-center gap-x-3">
                                        <img
                                            className="size-8 rounded-full"
                                            src={blog.author.profileImg}
                                            alt="Image Description"
                                        />
                                        <div>

                                            <h5 className="text-sm text-gray-800 -mb-2">

                                                {blog.author.name}
                                            </h5>
                                            <span className="text-xs text-gray-800">{formatDateString(blog.createdAt)}</span>
                                        </div>
                                    </div>
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
                <Skeleton/>
            </div>
        </>
    );

};

export default AllBlogs;
