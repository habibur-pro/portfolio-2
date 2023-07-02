import photo from '../../assets/photo.jpg'

const Home = () => {
    return (
        <div id='home' className='md:flex  justify-between md:gap-10 min-h-screen items-center  w-full'>
            <div className='md:w-1/2'>
                <h3 className="text-2xl font-bold text-white">Hello I am</h3>
                <h1 className="text-5xl font-bold text-white my-7">Habibur Rahman</h1>
                <h4 className="font-bold text-xl">I am Professional Web Developer</h4>
                <p className="mt-5 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni, fugiat tempora dignissimos iure minima assumenda animi reprehenderit repellendus commodi!</p>
                <button className='btn btn-primary rounded-sm text-white mt-8'>Download Resume</button>
            </div>
            <div className='md:w-1/2'>
                <img className=' rounded-full' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Home;