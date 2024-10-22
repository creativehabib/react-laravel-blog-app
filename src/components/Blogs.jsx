import BlogCard from "./BlogCard.jsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {useEffect, useState} from "react";

function Blogs() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://laravelapi.test/api/blogs'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            console.log(data.data);
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return (
        <>
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between mt-5">
                    <h4>Blogs</h4>
                    <Link to="/create"><Button>Create</Button></Link>
                </div>
                <div className="flex-row mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <ul>
                                {data.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        )}
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;