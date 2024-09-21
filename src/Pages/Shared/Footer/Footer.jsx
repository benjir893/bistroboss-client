
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.webp';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-700 ">
                <div className='bg-gray-600 h-full w-full p-6 '>
                    <img className='w-24 h-24 mx-auto rounded-full' src={logo} alt="" />
                    <p className='mx-auto text-center  text-white font-robotocondence'>
                        <span className=' text-2xl'>Bistro Boss Restaurent Ltd.</span>
                        <br />
                        Providing Testy Food since 1992
                        <br />
                        <address className='text-center'>
                            123 ABC road, shahbag, Dhaka <br />
                            0088321654987 <br />
                            Mon-Fri: 9:00am-7:00pm <br />
                            Sat-sun: 10:00am-5:00pm
                        </address>
                    </p>
                </div>
                <div className='bg-gray-700 w-full h-full '>
                    <h6 className="footer-title text-center mx-auto text-white pt-5">Social</h6>
                    <div className="grid grid-flow-col gap-4 items-center content-center md:ml-56 pl-14 ">
                        <Link><button className=' text-4xl text-white'><FaFacebookF /></button></Link>
                        <Link><button className='text-4xl text-white'><FaInstagram /></button></Link>
                        <Link><button className='text-4xl text-white'><FaTwitter /></button></Link>

                    </div>
                </div>
            </footer>
            <div className='bg-gray-950 text-center font-semibold text-white'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;