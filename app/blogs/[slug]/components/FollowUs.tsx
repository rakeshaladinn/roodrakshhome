


import MainHeading from "@/Components/Common/MainHeading";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FollowUs = () => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-center mb-6">
                <MainHeading
                    Title={"Follow Us"}
                    Lines={true}
                    BlackColor={true}
                    ClassNameTitle={"text-center justify-center capitalize lg:text-xl"}
                />
            </div>

            <div className="flex items-center gap-6">
                <Link
                    href="https://www.facebook.com/roodrakshgroup/"
                    target="__blank"
                    className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 transition-all p-2 rounded-full "
                    aria-label="Facebook"
                >
                    <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                    href="https://www.instagram.com/roodraksh_builders/"
                    target="__blank"
                    className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 p-2 rounded-full transition-all"
                    aria-label="Instagram"
                >
                    <FaInstagram className="w-5 h-5" />
                </Link>
                {/* <Link
                    href="#"
                    className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 transition-all p-2 rounded-full "
                >
                    <FaTwitter className="w-4 h-4" />
                </Link>
                <Link
                    href="#"
                    className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 transition-all p-2 rounded-full "
                >
                    <FaLinkedinIn className="w-4 h-4" />
                </Link> */}

            </div>
        </div>
    )
}

export default FollowUs