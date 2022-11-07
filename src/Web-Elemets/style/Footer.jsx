import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"; 

function Footer () {

    return (
        <footer className=" grid grid-rows-2 bg-[rgb(35,38,41)]
        pt-5
        ">
            <div className="">
                <SocialMedia></SocialMedia>
            </div>
            <div className="text-center text-gray-300 text-lg">
                
            </div>
            <div className="text-center mt-auto text-[rgb(159,166,173)] text-xl">
                Project by {<a href="#" className=" hover:text-blue-700">@NoNamedDev</a>}
            </div>
            
        </footer>
    ); 
}

const SocialMedia = () => {
    return ( 
        <div>
            <div className="flex
            justify-center
            space-x-5
             text-3xl text-gray-300">
                <a href="https://www.facebook.com/" className="hover:text-white"><BsFacebook ></BsFacebook></a>
                <a href="https://www.instagram.com/" className="hover:text-white"><BsInstagram ></BsInstagram></a>
                <a href="https://www.twitter.com/" className="hover:text-white"><BsTwitter ></BsTwitter></a>
            </div>
        </div>
    )
}



export default Footer;