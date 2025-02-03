import React from 'react'
import DashMain from '../../components/Dashboard/DashMain'
import settings from "../../assets/Dashboard/settings.svg";
import whiteMode from "../../assets/Dashboard/whiteMode.svg"
import menu from "../../assets/Dashboard/menu.svg"

const About: React.FC = () => {
    return (
        <div >
            <DashMain>
                <div className=' py-16 pl-10 relative'>
                    <div className=" absolute top-9 left-10 cursor-pointer md:hidden">
                        <img src={menu} />
                    </div>
                    <div className=" absolute top-9 right-10 flex flex-col gap-4">
                        <div>
                            <img src={settings} className=" h-4 w-4 cursor-pointer" />
                        </div>
                        <div>
                            <img src={whiteMode} className=" h-4 w-4 cursor-pointer" />
                        </div>
                    </div>
                    <div className=' flex flex-col gap-2 py-12 '>
                        <p className=' font-poppins text-sm text-white font-semibold selection:bg-[#ED2929] '>About Me</p>
                        <div className=' flex flex-col gap-1'>
                            <div className=' bg-[#ED2929] w-16 h-1 rounded-lg' />
                            <div className=' bg-[#ED2929] w-10 h-1 rounded-lg' />
                        </div>
                    </div>

                    <div className=' py-6'>
                        <p className=' font-poppins text-white text-sm selection:bg-[#ED2929] '>I am Beni Samuel <span className=' text-[#ED2929] font-semibold selection:bg-white'> Designer & Developer </span></p>
                    </div>

                    <div>
                        <p className=' font-poppins text-white text-sm leading-7 selection:bg-[#ED2929]'>
                            I am a passionate young software engineer driven by the mission to craft innovative solutions that address real-world <br/>
                            challenges, simplifying lives and transforming everyday experiences. <br /><br /><br />

                            My journey began at Utunyenyeri in Kigarama, where I laid the foundation for my academic growth, and continued at <br />
                            Groupe Scolaire Officiel de Butare in Huye District, where I honed my discipline and problem-solving skills. Currently, I am <br />
                            pursuing my studies at Rwanda Coding Academy, immersing myself in advanced technologies like networking, <br />
                            databases, DSA in C++, and embedded systems.<br /><br /><br />

                            With an eye for detail and a flair for creativity, I combine code with vibrant designs, weaving a blend of functionality and <br />
                            aesthetic appeal to create software that is not only effective but also visually engaging. Whether it's developing a music <br />
                            video platform like B4MUSIC, an e-commerce app like Beshopy, or a community-centric solution like CacheNet, I approach <br />
                            every project with innovation and dedication, striving to make a meaningful impact.<br />
                            Through my work, I aim to inspire, create, and contribute to a world where technology makes life smarter, easier, and more <br />
                            beautiful.<br />
                        </p>
                    </div>
                </div>
            </DashMain>
        </div>
    )
}

export default About