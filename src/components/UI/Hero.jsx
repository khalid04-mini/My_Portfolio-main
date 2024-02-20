import React from 'react'
import heroImg from "../../assets/images/IMG_9245.JPG"
import CountUp from 'react-countup'
const Hero = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* hero left content */}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[16px]'>
                            Hello World
                        </h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                            I'm Lamhal Khalid <br /> Web Developer
                        </h1>

                        <div
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className="flex items-center gap-6 mt-7">
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor 
                                ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                    <i class="ri-mail-line"></i>Hire me
                                </button>
                            </a>
                            <a href="#portfolio" className='text-smallTextColor font-[500] text-[16px] border-b 
                            border-solid border-x-smallTextColor'>
                                See Portfolio
                            </a>

                        </div>
                            <p  data-aos='fade-up'
                                data-aos-duration='1800'
                                className='flex mt-14 gap-2 text-headingColor
                                font-[500] text-[16px] leading-7 sm:pl-14 sm:marker:pr-10'
                            >
                                <span><i class="ri-apps-line"></i></span>
                                A talented 21-year-old full stack web developer proficient in front-end and back-end technologies, crafting dynamic web solutions.</p>
                    
                        <div className='flex items-center gap-9 mt-14'>
                            <span className="text-smallTextColor text-[15px] font-[600]">
                                Follow me :
                            </span>

                            <span>
                                <a href="https://github.com/khalid04-mini" target='_blank' rel="noreferrer" className='"text-smallTextColor text-[18px] font-[600]'
                                ><i class="ri-github-fill"></i></a>
                            </span>

                            <span>
                                <a href="https://www.linkedin.com/in/khalid-lamhal-b75464221/" target='_blank' rel="noreferrer" className='"text-smallTextColor text-[18px] font-[600]'
                                ><i class="ri-linkedin-fill"></i></a>
                            </span>

                            <span>
                                <a href="https://www.instagram.com/lamhal_khalid/" target='_blank' rel="noreferrer" className='"text-smallTextColor text-[18px] font-[600]'
                                ><i class="ri-instagram-line"></i></a>
                            </span>

                            <span>
                                <a href="https://www.facebook.com/khalid.lamhal.9/" target='_blank' rel="noreferrer" className='"text-smallTextColor text-[18px] font-[600]'
                                ><i class="ri-facebook-line"></i></a>
                            </span>
                        </div>
                    
                    
                    
                    </div>
                    {/* hero left content end */}
                    {/* hero img start */}

                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items center justify-center ">
                        <div className="">
                            <img className='rounded-full' src={heroImg} alt="" />
                        </div>
                        </figure>
                    </div>
                    {/* hero img end */}
                    {/* hero content right */}

                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end ">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                 <CountUp start={0} end={3} duration={2} suffix='+'/>
                            </h2>
                            <h2 className="text-headingColor font-[600] text-[18px]">
                                 Years on the field 
                            </h2>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                 <CountUp start={0} end={100} duration={2} suffix='%'/>
                            </h2>
                            <h2 className="text-headingColor font-[600] text-[18px]">
                                 Success Rate
                            </h2>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                 <CountUp start={0} end={120} duration={2} suffix='+'/>
                            </h2>
                            <h2 className="text-headingColor font-[600] text-[18px]">
                                Happy Clients
                            </h2>
                        </div>

                    </div>





                    {/* hero content right end */}
                </div>
            </div>
        </section>
    )
}

export default Hero