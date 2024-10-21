import {Pencil} from "lucide-react";

function BlogCard() {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src='https://placehold.co/600x400' alt='image'/>
                <div className="p-4">
                    <h2 className="text-xl text-gray-800 font-semibold mb-2">Blog Post title here</h2>
                    <p className="text-gray-700 mb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A accusamus accusantium at
                        consectetur consequuntur debitis, dicta excepturi, fuga fugiat inventore ipsam magni
                        maxime molestias placeat quas sed sunt velit?</p>
                    <div className="flex items-center justify-between text-gray-700">
                        <a href=''>Read More</a>
                        <a href=''><Pencil size={18}/></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;