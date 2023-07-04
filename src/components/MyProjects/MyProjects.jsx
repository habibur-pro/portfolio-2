import Underline from "../Underline";
import artZone from '../../assets/images/artzone.png'
import tinyCar from '../../assets/images/tinyCar.png'
import SuperChefs from '../../assets/images/SuperChefs.png'
import adminPanel from '../../assets/images/adminPanel.png'
import { Link } from "react-router-dom";

const MyProjects = () => {
    return (
        <div className="h-screen" id="projects">
            <h1 className="text-3xl text-center">My Projects</h1>
            <Underline />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* project 1  */}
                <div>
                    <div className=" h-[300px] bg-cover ease-linear border bg-top hover:bg-bottom duration-[1.5s] rounded-t-lg" style={{ backgroundImage: `url(${artZone})` }}>
                    </div>
                    <div className="p-3 bg-secondary">
                        <h3 className="text-primary text-xl font-bold">ArtZone</h3>
                        <p className="text-md mb-3">A full stack art learning website. It has secure login system, payment system, role based dashboard etc. </p>
                        <div className="flex flex-wrap gap-2">
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Html</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Css</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Javascript</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">TailwindCss</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">React</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Node Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Express Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">MongoDB</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Firebase</p>
                        </div>
                        <hr className="my-2" />
                        <div className="my-3 flex justify-between">
                            <button className="btn btn-accent  text-white btn-sm">
                                < Link to='https://artzone-be3a9.web.app/' target="_blank">Live site</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-client' target="_blank">Client</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-server' target="_blank">Server</Link>
                            </button>

                        </div>
                    </div>

                </div>
                {/* project 2  */}
                <div>
                    <div className=" h-[300px] bg-cover ease-linear border bg-top hover:bg-bottom duration-[1.5s] rounded-t-lg" style={{ backgroundImage: `url(${tinyCar})` }}>
                    </div>
                    <div className="p-3 bg-secondary">
                        <h3 className="text-primary text-xl font-bold">TinyCar</h3>
                        <p className="text-md mb-3">A full stack art learning website. It has secure login system, payment system, role based dashboard etc. </p>
                        <div className="flex flex-wrap gap-2">
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Html</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Css</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Javascript</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">TailwindCss</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">React</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Node Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Express Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">MongoDB</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Firebase</p>
                        </div>
                        <hr className="my-2" />
                        <div className="my-3 flex justify-between">
                            <button className="btn btn-accent  text-white btn-sm">
                                < Link to='https://artzone-be3a9.web.app/' target="_blank">Live site</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-client' target="_blank">Client</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-server' target="_blank">Server</Link>
                            </button>

                        </div>
                    </div>

                </div>

                {/* project 3  */}
                <div>
                    <div className=" h-[300px] bg-cover ease-linear border bg-top hover:bg-bottom duration-[1.5s] rounded-t-lg" style={{ backgroundImage: `url(${SuperChefs})` }}>
                    </div>
                    <div className="p-3 bg-secondary">
                        <h3 className="text-primary text-xl font-bold">Super Chefs</h3>
                        <p className="text-md mb-3">A full stack art learning website. It has secure login system, payment system, role based dashboard etc. </p>
                        <div className="flex flex-wrap gap-2">
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Html</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Css</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Javascript</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">TailwindCss</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">React</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Node Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Express Js</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">MongoDB</p>
                            <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">Firebase</p>
                        </div>
                        <hr className="my-2" />
                        <div className="my-3 flex justify-between">
                            <button className="btn btn-accent  text-white btn-sm">
                                < Link to='https://artzone-be3a9.web.app/' target="_blank">Live site</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-client' target="_blank">Client</Link>
                            </button>
                            <button className="btn btn-accent text-white btn-sm">
                                < Link to='https://github.com/habibur-pro/artZone-server' target="_blank">Server</Link>
                            </button>

                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default MyProjects;