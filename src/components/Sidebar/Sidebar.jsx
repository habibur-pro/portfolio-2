import { Link } from 'react-scroll';
import photo from '../../assets/photo.jpg'
import { BiHomeAlt2 } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiSolidUserDetail, BiSolidContact } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import * as Scroll from 'react-scroll';
const Sidebar = ({ open, setOpen }) => {


    return (
        <>
            <div className={`${open ? "left-0 " : "-left-[100%]"}  bg-base-100 w-3/4 md:w-auto  duration-200 md:pt-10 absolute top-0 md:fixed  md:left-0 h-full md:min-h-screen  md:block `}>
                <div className='flex justify-center items-center flex-col'>
                    <img className='w-28 h-28 rounded-full border-4 border-primary' src={photo} alt="" />
                    <h3 className='text-xl text-white mt-3'>Habibur Rahman</h3>
                </div>
                <nav className='my-20 pl-8'>
                    <ul
                        className='flex flex-col text-md '>
                        <li className='cursor-pointer hover:text-primary mb-5'>

                            <Link
                                onClick={() => setOpen(false)}
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-primary"
                                className='hover:tracking-[5px]  duration-300 inline-flex items-center '
                            >
                                <span className='mr-2 text-xl'>  <BiHomeAlt2 /></span>
                                Home
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary mb-5'>

                            <Link
                                onClick={() => setOpen(false)}
                                to="about me"
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-primary"
                                className='hover:tracking-[5px]  duration-300 inline-flex items-center '
                            >
                                <span className='mr-2 text-xl'>  <BiSolidUserDetail /></span>
                                About Me
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary mb-5'>

                            <Link
                                onClick={() => setOpen(false)}
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-primary"
                                className='hover:tracking-[5px]  duration-300 inline-flex items-center '
                            >
                                <span className='mr-2 text-xl'>  <GiSkills /></span>
                                My Skills
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary mb-5'>

                            <Link
                                onClick={() => setOpen(false)}
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-primary"
                                className='hover:tracking-[5px]  duration-300 inline-flex items-center '
                            >
                                <span className='mr-2 text-xl'>  <GoProjectSymlink /></span>
                                Projects
                            </Link>
                        </li>
                        <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>

                            <Link
                                onClick={() => setOpen(false)}
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-primary"
                                className='hover:tracking-[5px]  duration-300 inline-flex items-center'
                            >
                                <span className='mr-2 text-xl'>  <BiSolidContact /></span>
                                Contact Me
                            </Link>
                        </li>
                        <li className='inline-flex items-center cursor-pointer hover:text-primary mb-5'>
                            <button className='btn btn-primary btn-sm text-white font-normal rounded-sm'>Download Resume</button>
                        </li>

                    </ul>
                </nav>
                <div className='pl-8 text-lg absolute md:bottom-10'>
                    <ul className='text-md flex  gap-x-4  '>
                        <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaFacebookF /></li>
                        <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaLinkedinIn /></li>
                        <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'><FaGithub /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;