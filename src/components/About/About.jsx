import Underline from "../Underline";
import photo from '../../assets/photo.jpg'
import Resume from '../../assets/Resume.pdf'
import { Link } from "react-scroll";

const About = () => {
    return (
        <div id="about me" className=" py-20 w-full">
            {/* <h1 className="text-4xl text-center font-bold">About Me</h1>
            <Underline lineLength={"200"} /> */}

            <div className="md:flex w-full  gap-10">
                <div className="md:w-1/2">
                    <img className="w-full" src={photo} alt="" />
                </div>
                <div className="w-full mt-5 md:mt-0">
                    <h1 className="text-5xl font-bold mb-3">About Me</h1>

                    <h2 className="text-2xl font-bold mb-3 ">Front-End Developer</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste vitae impedit nesciunt temporibus perspiciatis quas consectetur veniam nulla magni saepe ex dolor repudiandae repellendus corporis corrupti, sunt esse provident vero ut modi neque nostrum possimus officiis? Similique possimus, quia nostrum quasi id earum eligendi, voluptatum consequuntur eos odio iure!</p>
                    <button className='btn btn-primary mr-5 mt-5 text-white font-normal rounded-sm'>
                        <a href={Resume} download >Download Resume</a>
                    </button>
                    <button className='btn btn-primary  text-white font-normal rounded-sm'>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="text-primary"
                            className='inline-flex items-center'
                        >
                            Hire Me
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;