import BlogCard from "./BlogCard.jsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import useFetch from "react-fetch-hook";


function Blogs() {
    const { data: posts, isLoading, error } = useFetch('http://laravelapi.test/api/blog');

    // Show a loading message while data is fetching
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    // Handle error
    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    // Ensure the data structure is correct before mapping
    if (!posts || !posts.data || !posts.data.data) {
        return <div>No posts available.</div>;
    }

    return (
        <>
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between mt-5">
                    <h4>Blogs</h4>
                    <Link to="/create"><Button>Create</Button></Link>
                </div>
                <div className="flex-row mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <>
                                {posts.data.data.map((item) => (
                                    <BlogCard key={item.id} item={item} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;