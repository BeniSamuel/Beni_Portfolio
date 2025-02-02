import React from "react";
import DashMain from "../../components/Dashboard/DashMain";
import DynamicText from "../../components/Home/DynamicText";
import myImage from "../../assets/Dashboard/Myimage.svg";
import settings from "../../assets/Dashboard/settings.svg";
import whiteMode from "../../assets/Dashboard/whiteMode.svg"
import menu from "../../assets/Dashboard/menu.svg"

const Home: React.FC = () => {
    return (
        <div>
            <DashMain>
                <div className=" flex flex-col md:flex-row py-28 pl-10 items-center gap-16 relative">
                    <div className=" absolute top-9 left-10 cursor-pointer md:hidden">
                        <img src={menu}/>
                    </div>
                    <div className=" absolute top-9 right-10 flex flex-col gap-4">
                        <div>
                            <img src={settings} className=" h-4 w-4 cursor-pointer"/>
                        </div>
                        <div>
                            <img src={whiteMode} className=" h-4 w-4 cursor-pointer"/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className=" flex flex-col gap-3">
                            <p className=" font-poppins text-white text-sm ">Hi, I am <span className=" font-bold text-[#ED2929]">Beni Samuel</span></p>
                            <p className=" font-poppins text-white text-sm flex flex-row gap-3">I'm a <span className=" font-bold text-[#ED2929]"> <DynamicText /> </span></p>
                        </div>
                        <div>
                            <p className=" font-poppins text-white text-sm leading-7">
                                I am a passionate young software engineer driven by the mission <br />
                                to craft innovative solutions that address real-world challenges, <br />
                                simplifying lives and transforming everyday experiences.
                            </p>
                        </div>
                        <div>
                            <button className=" bg-[#ED2929] font-poppins text-white text-sm py-2 px-5 rounded-3xl">Download CV</button>
                        </div>
                    </div>

                    <div className=" flex flex-row items-center justify-center ">
                        <img src={myImage} className=" h-[20rem] w-[20rem]" />
                    </div>
                </div>
            </DashMain>
        </div>
    );
};

export default Home;
