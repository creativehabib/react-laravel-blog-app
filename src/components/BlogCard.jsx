import { Pencil } from "lucide-react";

function BlogCard({ item }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={item.image ? `http://laravelapi.test/${item.image}` : 'https://placehold.co/600x400'}
                alt={item.title || 'Blog post image'}
            />
            <div className="p-4">
                <h2 className="text-xl text-gray-800 font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4 text-justify">{item.description}</p>
                <div className="flex items-center justify-between text-gray-700">
                    <a href={`/blog/${item.id}`} className="text-blue-600 hover:underline">Read More</a>
                    <a href={`/blog/${item.id}/edit`} className="text-gray-600 hover:text-gray-900">
                        <Pencil size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
