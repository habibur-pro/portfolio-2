import { Link } from 'react-scroll';
import photo from '../../assets/photo.jpg'
import { BiHomeAlt2 } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiSolidUserDetail, BiSolidContact } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
const Sidebar = () => {
    return (
        <div className="pt-10  h-screen relative">
            <div className='flex justify-center items-center flex-col'>
                <img className='w-28 h-28 rounded-full border-4 border-primary' src={photo} alt="" />
                <h3 className='text-xl text-white mt-3'>Habibur Rahman</h3>
            </div>
            <nav className='my-20 pl-8'>
                <ul className='flex flex-col text-md '>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <span className='mr-2 text-xl'>  <BiHomeAlt2 /></span>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className='hover:tracking-[5px]  duration-300'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <span className='mr-2 text-xl'>  <BiSolidUserDetail /></span>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className='hover:tracking-[5px]  duration-300'
                        >
                            About Me
                        </Link>
                    </li>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <span className='mr-2 text-xl'>  <GiSkills /></span>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className='hover:tracking-[5px]  duration-300'
                        >
                            My Skills
                        </Link>
                    </li>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <span className='mr-2 text-xl'>  <GoProjectSymlink /></span>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className='hover:tracking-[5px]  duration-300'
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <span className='mr-2 text-xl'>  <BiSolidContact /></span>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            className='hover:tracking-[5px]  duration-300'
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                        <button className='btn btn-primary btn-sm text-white font-normal rounded-sm'>Download Resume</button>
                    </li>

                </ul>
            </nav>
            <div className='pl-8 text-lg absolute bottom-10'>
                <ul className='text-md flex  gap-x-4  '>
                    <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaFacebookF /></li>
                    <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaLinkedinIn /></li>
                    <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaGithub /></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;