import BlogCard from "./components/BlogCard.jsx";

function App() {

  return (
    <>
        <div className="w-full mx-auto">
            <nav className="bg-gray-800 dark:bg-gray-900 px-8 py-2 shadow-md">
                <h1 className="text-white text-center text-2xl">React & Laravel Blog App</h1>
            </nav>
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
        </div>

    </>
  )
}

export default App
