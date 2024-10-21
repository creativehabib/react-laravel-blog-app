import BlogCard from "./BlogCard.jsx";

function Blogs() {
    return (
        <>
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between mt-5">
                    <h4>Blogs</h4>
                    <a href="/">Create</a>
                </div>
                <div className="flex-row mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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