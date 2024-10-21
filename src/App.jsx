import {Route, Routes} from "react-router-dom";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import CreateBlog from "./components/CreateBlog.jsx";

function App() {

  return (
    <>
        <div className="w-full mx-auto">
            <nav className="bg-gray-800 dark:bg-gray-900 px-8 py-2 shadow-md">
                <h1 className="text-white text-center text-2xl">React & Laravel Blog App</h1>
            </nav>
        </div>

        <Routes>
            <Route path={'/'} element={ <Blogs/> }/>
            <Route path={'/create'} element={ <CreateBlog/> }/>
            <Route path={'/contact'} element={ <Contact/> }/>
        </Routes>

    </>
  )
}

export default App
