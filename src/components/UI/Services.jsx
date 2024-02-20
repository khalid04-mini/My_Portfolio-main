import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appImg from '../../assets/images/apps.png'
const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>what do I help !</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px]
                leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, blanditiis earum facilis dicta quisquam et a esse quaerat ipsa neque.</p>
                </div>



                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">

                            {/*  vertical line running throw*/}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2">
                            </div>
                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">

                                <div className="flex items-center flex-col sm:flex-row">


                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos='fade-right'
                                                data-aos-delay='100'
                                                data-aos-duration='1200'
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3
                                                    className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'
                                                >Front-end Development
                                                </h3>
                                                <p
                                                    className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    I am a skilled front-end developer passionate about crafting beautiful, intuitive, and engaging user experiences. Leveraging HTML, CSS, JavaScript and React JS I build interactive and responsive web interfaces that drive user engagement and achieve project goals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>

                                    </div>

                                </div>
                            </div>

                            {/* right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">

                                <div className="flex items-center flex-col sm:flex-row">


                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos='fade-left'
                                                data-aos-delay='50'
                                                data-aos-duration='1300'
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3
                                                    className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'
                                                >Back-end Development
                                                </h3>
                                                <p
                                                    className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    While the front-end shines, I operate from the shadows, composing the symphony behind the scenes. Skilled in languages like PHP, Laravel and Node JS, I craft robust back-end architecture for secure, scalable, and performant applications. From databases to APIs, I ensure seamless data flow and user interaction. Problem-solving and collaboration fuel my passion, making me a valuable asset for your next project. Let's build something remarkable!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>

                                    </div>

                                </div>
                            </div>


                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">

                                <div className="flex items-center flex-col sm:flex-row">


                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos='fade-right'
                                                data-aos-delay='100'
                                                data-aos-duration='1200'
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3
                                                    className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'
                                                >UI/UX Design
                                                </h3>
                                                <p
                                                    className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
I wear many hats: designer, developer, user advocate. I don't just create beautiful interfaces, I craft intuitive experiences that resonate deeply. Using UI/UX principles and tools like Figma, I transform concepts into pixel-perfect, accessible interfaces across all devices. But it's not just about looks – I obsess over user journeys, ensuring every interaction is smooth and meaningful. Let's collaborate to build interfaces that not only impress, but truly connect.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={uiImg} alt="" />
                                        </figure>

                                    </div>

                                </div>
                            </div>

                            {/* right card */}
                            {/* <div className="mt-6 sm:mt-0 sm:mb-12">

                                <div className="flex items-center flex-col sm:flex-row">


                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                 data-aos='fade-left'
                                                 data-aos-delay='50'
                                                 data-aos-duration='1500'
                                                className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3
                                                    className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'
                                                >Apps Development
                                                </h3>
                                                <p
                                                    className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Faceruo corporis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={appImg} alt="" />
                                        </figure>

                                    </div>

                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services