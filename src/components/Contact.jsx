import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {Avatar} from "@nextui-org/react";

function Contact() {
    return (
        <div>Contact
            <Link to={'/'}><Button variant={'outline'}>Home</Button></Link>



                <div className="flex gap-4 items-center">
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                </div>

        </div>
    );
}

export default Contact;