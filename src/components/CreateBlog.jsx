import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Editor from 'react-simple-wysiwyg';
import { useState} from "react";



function CreateBlog() {
    const [value, setValue] = useState('simple text');

    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mt-5">
                <h4>Create Blogs</h4>
                <Link to="/"> <Button>Back</Button> </Link>
            </div>
            <div className="flex-row mt-5">
                <Card className="w-full mb-5">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <form>
                        <CardContent>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" placeholder="Title of your project"/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Editor
                                        value={value}
                                        onChange={onChange}
                                        containerProps={{ style: { resize: 'vertical',height: '200px' } }}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="image">Image</Label>
                                    <Input id="image" type="file"/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="author">Author</Label>
                                    <Input id="author" placeholder="Author of your project"/>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                             <Button variant="outline">Create</Button>
                            <Button>Deploy</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>

        </div>
    );
}

export default CreateBlog;