import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Editor from 'react-simple-wysiwyg';
import { useState } from "react";

function CreateBlog() {
    // State for form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        author: '',
    });

    const [value, setValue] = useState(''); // Initialize with an empty string
    const [loading, setLoading] = useState(false); // State for loading button
    const [errors, setErrors] = useState({}); // State for validation errors
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0], // Store file object
        });
    };

    // Handle editor change for description
    const onChangeEditor = (e) => {
        setValue(e.target.value);
        setFormData({
            ...formData,
            description: e.target.value,
        });
    };

    // Validate form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Title is required.";
        if (!formData.description) newErrors.description = "Description is required.";
        if (!formData.author) newErrors.author = "Author is required.";
        if (!formData.image) newErrors.image = "Image is required.";

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setErrors({}); // Clear previous errors
        setSuccessMessage(''); // Clear previous success message

        // Validate form data
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set validation errors
            setLoading(false); // Stop loading
            return; // Exit if there are validation errors
        }

        // Prepare form data for submission
        const submitData = new FormData();
        submitData.append('title', formData.title);
        submitData.append('description', formData.description);
        submitData.append('author', formData.author);
        if (formData.image) {
            submitData.append('image', formData.image); // Append file if selected
        }

        // Use fetch to POST data
        try {
            const response = await fetch('http://laravelapi.test/api/blog', {
                method: 'POST',
                body: submitData,
            });

            if (response.ok) {
                // Reset form on successful submission
                setFormData({
                    title: '',
                    description: '',
                    image: null,
                    author: '',
                });
                setValue(''); // Clear editor content
                setSuccessMessage("Blog created successfully!"); // Set success message
            } else if (response.status === 422) {
                // Handle validation errors from server (if any)
                const errorData = await response.json();
                setErrors(errorData.errors); // Laravel sends validation errors in the 'errors' field
            } else {
                console.log("Error creating blog");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mt-5">
                <h4>Create Blog</h4>
                <Link to="/"> <Button>Back</Button> </Link>
            </div>
            <div className="flex-row mt-5">
                <Card className="w-full mb-5">
                    <CardHeader>
                        <CardTitle>Create Blog</CardTitle>
                        <CardDescription>Fill in the details to create a new blog.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent>
                            <div className="grid w-full items-center gap-4">
                                {/* Success Message */}
                                {successMessage && <p className="text-green-500">{successMessage}</p>}

                                {/* Title Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Title of your blog"
                                    />
                                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                                </div>

                                {/* Description Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Editor
                                        value={value}
                                        name="description"
                                        onChange={onChangeEditor}
                                        containerProps={{ style: { resize: 'vertical', height: '200px' } }}
                                    />
                                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                                </div>

                                {/* Image Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="image">Image</Label>
                                    <Input
                                        id="image"
                                        name="image"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    {errors.image && <p className="text-red-500">{errors.image}</p>}
                                </div>

                                {/* Author Input */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="author">Author</Label>
                                    <Input
                                        id="author"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        placeholder="Author of your blog"
                                    />
                                    {errors.author && <p className="text-red-500">{errors.author}</p>}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button type="submit" variant="outline" disabled={loading}>
                                {loading ? "Creating..." : "Create"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default CreateBlog;
