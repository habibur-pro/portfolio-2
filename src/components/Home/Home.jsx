import { TypeAnimation } from 'react-type-animation';
import photo from '../../assets/photo.jpg'
import Resume from '../../assets/Resume.pdf'
import { Link } from 'react-scroll';
const Home = () => {
    return (
        <div id='home' className='md:flex   my-10 justify-between md:gap-10 min-h-screen items-center  w-full'>
            <div className='md:w-1/2 '>
                <h3 className="text-2xl font-bold text-white">Hello I am</h3>
                <h1 className="text-5xl font-bold text-white my-7">Habibur Rahman</h1>
                <h4 className=" text-lg">
                    <TypeAnimation className='text-primary'
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'I am Professional Front-End Developer',
                            1000,
                            'I am Professional Mearn Stack Developer',
                            1000,
                            'I am Professional React Developer',
                            1000,

                        ]}
                        speed={50}
                        style={{ fontSize: '1.2em' }}
                        repeat={Infinity}
                    />
                </h4>



                <p className="mt-5 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni, fugiat tempora dignissimos iure minima assumenda animi reprehenderit repellendus commodi!</p>
                <button className='btn btn-primary mr-5 rounded-sm text-white mt-8'>
                    <a href={Resume} download="Resume" >Download Resume</a>
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
            <div className='md:w-1/2 mt-5 md:my-auto'>
                <img className=' rounded-full' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Home;